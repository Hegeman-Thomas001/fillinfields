import './Input.css';

const Input = ({ id, phText, inputChange }) => {
  return (
    <input id={ id } className="inp" type="search" placeholder={phText} onChange={inputChange} />
  );
}

export default Input;