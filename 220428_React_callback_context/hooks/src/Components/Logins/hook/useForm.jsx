import React, { useEffect,useState } from 'react'

const useForm = ({initialValues, onSubmit, validate}) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)

    const handleChange = e => {
        const {name,value } = e.target
        setValues({...values,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)
        setTimeout(()=>{
            setErrors(validate(values))
        },1000)
    }

    useEffect(()=>{
        if(submit) {
            if(Object.keys(errors).length === 0) {
                onSubmit(values)
            }
        }
        setSubmit(false)
    },[errors])

    return {
        values,
        errors,
        submit,
        handleChange,
        handleSubmit
    }
}

export default useForm