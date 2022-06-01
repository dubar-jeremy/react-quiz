import './form.css';
const Select = ({ label, name, id, options, defaultValue }) => {
  return (
    <div className='select-group'>
      <select name={`${name}`} id={`${id}-select`} className='select'>
        <option value={defaultValue} className='option'>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id} className='option'>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
