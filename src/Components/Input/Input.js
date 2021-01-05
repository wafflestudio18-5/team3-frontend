const Input = ({
  label = "",
  placeholder,
  type = "text",
  name,
  maxLength = "",
  warningMsg = "",
  onChange,
  value,
  valid,
  subLabel = "",
}) => {
  const setIcon = (x) => {
    if (x === 0) return null;
    if (x >= 1) return "correct";
    if (x < 0) return "error";
  };
  return (
    <div className="text-drag-disable width-100">
      {label.length ? <label>{label}</label> : null}
      <span>{subLabel}</span>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        maxLength={maxLength}
        className={`${type} ` + setIcon(valid)}
      ></input>
      {valid < 0 ? <p>{warningMsg}</p> : <p></p>}
    </div>
  );
};

export default Input;
