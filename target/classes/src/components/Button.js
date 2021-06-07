import '../index.css';
import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
  return (
    <div>
      <button className='btn' style={{backgroundColor: color}} onClick={onClick}>{text}</button>
    </div>
  )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
