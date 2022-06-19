import React from "react";

function Fieldset(props) {
    const { legend, inputFields } = props;

    return (
        <fieldset>
            <legend>{legend}</legend>
            {inputFields.map(inputField => {
                const { name, type } = inputField;
                const replacedName = name.replace(/([A-Z])/g, " $1");
                const labelText = replacedName.charAt(0).toUpperCase() + replacedName.slice(1);

                const value = props.values[name];

                return (
                    <>
                        <label htmlFor={name}>{labelText}</label>
                        <input id={name} name={name} type={type} value={value} onChange={props.handleChange} />
                    </>
                );
            })}
        </fieldset>
    );
}

export default Fieldset;