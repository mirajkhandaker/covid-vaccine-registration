
const SelectField = ({options,label, name, value,handleChange,isRequired=false,errors}) => {
    return (
        <div>
            <label htmlFor={name}
                   className={`form-label ${isRequired && 'required'}`}>
                {label}
            </label>
            <select className="form-control form-control-sm"
                   id={name}
                   name={name}
                   value={value}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                <option>Select Vaccine Center</option>
                {
                    options.length > 0 && options.map((option) => {
                        return <option value={option.id} key={option.id}>{option.name}</option>
                    })
                }
            </select>
            <div className="form-text text-danger">
                {errors?.[name]?.[0] && errors?.[name]?.[0]}
            </div>
        </div>
    )
}

export default SelectField
