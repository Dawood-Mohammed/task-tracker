package com.sssgroup.tasktracker;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class TaskTrackerApplication implements CommandLineRunner{

	private final TaskRepo taskRepo;

	@Bean
	public WebMvcConfigurer webMvcConfigurer(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:3000")
						.allowedMethods("POST", "PUT", "GET", "DELETE", "ORIGIN");
			}
		};
	}

	@Autowired
	public TaskTrackerApplication(TaskRepo taskRepo){this.taskRepo = taskRepo;}

	@GetMapping("/tasks/all")
	public List<Task> getAllTasks(){
		List<Task> tasks = (List<Task>)taskRepo.findAll();
		return tasks;
	}

	@PutMapping("/tasks/{id}")
	public Task putTask(@PathVariable("id") Long id){
		Task task = taskRepo.findById(id).get();
		task.setReminder((task.getReminder()) ? false : true);
		return taskRepo.save(task);
	}

	@DeleteMapping("/tasks/{id}")
	public void deleteTask(@PathVariable("id") Long id){
		taskRepo.deleteById(id);
	}

	@PostMapping("/tasks")
	public Task postTask(@RequestBody Task task){
		return taskRepo.save(task);
	}

	@Override
	public void run(String... strings) throws Exception {
		Arrays.<Task>asList(new Task("presentation", "sunday", true)
				,new Task("live code", "monday", true),
				new Task("football practice", "wednesday", true))
				.forEach(task -> taskRepo.save(task));
	}

	public static void main(String[] args) {
		SpringApplication.run(TaskTrackerApplication.class, args);
	}

}

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
class Task{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String text;
	private String day;
	private boolean reminder;

	public Task(String text, String day, boolean reminder){
		this.text = text;
		this.day = day;
		this.reminder = reminder;
	}
	public boolean getReminder(){return reminder;}
}

@Repository
interface TaskRepo extends CrudRepository<Task,Long>{}
