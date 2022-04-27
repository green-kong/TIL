import React, {useEffect, useState} from 'react'
import validate from './validate'

const Logins = () => {
    const [values,setValues] = useState({email:'',password:''})
    const [errors,setErrors] = useState({})
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values,[name]:value})
    }

    const handleSubmit = (e) => {
        setSubmit(true)
        e.preventDefault()
        setTimeout(()=>{
            setErrors(validate(values))
        },1000)
    }

    useEffect(()=>{
        if(submit){
            if (Object.keys(errors).length === 0) {
                alert('로그인 성공!')
                // alert(JSON.stringify(values, null, 2))
            }
            setSubmit(false)
        }
    },[errors])

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor='email'>Email :</label>
                    <input 
                        type='text'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        className={errors.email && "errorInput"}
                    />
                    {errors.email && <span className='errorMessage'>{errors.email}</span>}
                </li>
                <li>
                    <label htmlFor='password'>Password :</label>
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        className={ errors.email && "errorInput" }
                    />
                    {errors.password && <span className='errorMessage'>{errors.password}</span>}
                </li>
                <li>
                    <input type='submit' value='로그인' disabled={submit} />
                </li>
            </ul>
            
        </form>
    )
}

export default Logins