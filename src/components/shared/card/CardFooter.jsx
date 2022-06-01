import './card.css';
const CardFooter = ({ children, style }) => {
  return (
    <div className='card-footer' style={style}>
      {children}
    </div>
  );
};

export default CardFooter;
