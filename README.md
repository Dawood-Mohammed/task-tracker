# IN THE NAME OF ALLAH THE MOST MERCIFUL THE MOST GRACIOUS

THIS DOCUMENT IS PERPOSED TO PROVIDE A COMPLETE DESCRIPTION OF THE PURPOSE BEHIND THE APP AND DIRECTIONS OF HOW TO RUN THE [TASK TRACKER APPLICATION]

## WHAT IT IS:-
an application called [Task Tracker] that tracks your tasks , it simply enables you to list your tasks and to be able to make changes on them [add , toggle , remove], the credit for the idea of the project goes to [Traversy Media youtube channel ] who's done a crash course on react js CHECK OUT THEIR LINK https://www.youtube.com/watch?v=w7ejDZ8SWv8
Basically i followed their front-end tutorial on react and added a java spring boot back-end  and bundled them together using maven plugins to create a full stack app in a single jar file ,then containerized it using google jib maven plugin to a docker image then deployed that image to docker daemon, to run it locally on my machine.
I recommend you guys to check these amazing technologies as they take a huge space in modern day application development
 - Spring boot
 - React js
 - Maven / Gradle
 - Google Jib
 - Containerization (docker)
 - Git / Github 

## ENVIROMENT REQUIRMENTS:-
 - JDK VERSION 8
 - Docker
 - Maven
 - COMMAND LINE INTERFACE (CMD - TERMINAL)

## PACKAGING AND RUNNING THE APP:-
 - OPEN COMMAND PROMPT OR CMD
 - BROWSE TO THE PROJECT DIRECTORY ( VIA CD COMMAND)
 - TYPE mvn compile jib:dockerBuild
 - TYPE docker run -d -p 8080:8080 task-tracker-0.0.1:latest

## WISHES AND HOPES:-
   I WISH YOU HAVE A NICE EXPERIENCE AND I HOPE IT WAS HELPFUL ... ALL THE BEST
