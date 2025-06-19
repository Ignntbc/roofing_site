import React, { useState } from "react";
import css from "../styles/form.css";


const { Input } = css;

const InputComponent = (props) => {
    const { placeholder, action, inputValue } = props;

    const handleChange = (event) => {
        let newValue = event.target.value;
        // Проверка на числовой формат с точкой или запятой
        const regex = /^[0-9]*[.,]?[0-9]*$/;
        if (regex.test(newValue)) {
            // Замена запятой на точку
            newValue = newValue.replace(',', '.');
            action(newValue);
        }
    };

    return (
        <React.Fragment>
            <Input
                value={inputValue}
                type={"text"}
                placeholder={placeholder}
                maxLength={"50"}
                onChange={handleChange}
                style={{ width: '100%' }}
            />
        </React.Fragment>
    );
};

export default InputComponent;