const Form = ({ children, onChange }) => {
  return (
    <form className='form' onChange={onChange}>
      {children}
    </form>
  );
};

export default Form;
