
const InputField = ({label, name, type, value,handleChange,isRequired=false,errors}) => {
    return (
        <div className="">
            <label htmlFor={name}
                   className={`form-label ${isRequired && 'required'}`}>
                {label}
            </label>
            <input type={type}
                   className="form-control form-control-sm"
                   id={name}
                   name={name}
                   value={value}
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <div className="form-text text-danger">
                {errors?.[name]?.[0] && errors?.[name]?.[0]}
            </div>
        </div>
    )
}

export default InputField
