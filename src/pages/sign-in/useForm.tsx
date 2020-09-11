import { useState,useEffect } from 'react';

// import interface
import { Errors } from './validateLogin';


export type Props = {
    personalAccount?: string;
    password?: string;
}


export const useForm = (callback: { (): void; (): void; }, validate: (values: Props) => Errors) => {

    const [values, setValues] = useState<Props>({
        personalAccount: '',
        password: ''
    })

    const [errors, setErrors] = useState<Props>({})

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }


    const handleOnSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setErrors(validate(values))
        setIsSubmitting(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    },[errors])

    return {
        handelChange,
        handleOnSubmit,
        setValues,
        values,
        errors
    }
}