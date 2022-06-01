import './button.css';

const Button = ({ id, size, color, className, onClick, value }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      value={value}
      className={`btn btn-${size} btn-${color} ${className}`}
    >
      {value}
    </button>
  );
};
export default Button;
