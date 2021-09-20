import { useState, useEffect } from 'react';

export const useForm = (schema) => {
    
    const [errors, setErrors] = useState({});

    const  [values, setValues] = useState({});

    useEffect(()=>{
        const _values = Object.keys(schema).reduce((acc, key)=> {
            return { ...acc, [key]: schema[key].initialValue || '' };
        });

        setValues(_values);

    }, []);

    const register = key => value => {
        setValues(prev => ({ ...prev, [key]: value.trim()}));
    };
    

    const validate = () => {
        // run handlers and validate if the values do match or not.
        const _errors = Object.keys(schema).reduce((acc, key)=>{
            const value = values[key];
            const object = schema[key];
    
            if(object.required){
                if(!value || (typeof object.onValidate == 'function' && object.onValidate(value) == false)){
                    acc[key] = object.error;
                }
            }
            return acc;
        }, {});
        setErrors(_errors);
        return Object.keys(_errors).length == 0;
    } 

    return [values, errors, register, validate];

}