import React,{useState,useEffect} from 'react'

const useInput = (defaultValue,onSubmit,validate) => {
    const [values,setValues] = useState(defaultValue)
    const [errors,setErrors] = useState({})
    const [submit,setSubmit] = useState(false)
    const onChange = e => {
        const {name,value} = e.target
        setValues({...values,[name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)
        setErrors({})
    }

    useEffect(()=>{
        const init = async () => {
            if(submit){
                if(Object.keys(errors).length === 0){
                    await onSubmit(values)
                }
                setSubmit(false)
            }
        }
        init()
        console.log('hello world')
    },[errors])

    return {
        input:Object.keys(defaultValue).reduce( (acc,v) => {
            acc[v] = {
                value:values[v],
                onChange
            }
            return acc
        },{}),
        errors,
        submit,
        handleSubmit
    }
}

export default useInput