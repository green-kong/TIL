import React from 'react'
import useForm from './hook/useForm'
import validate from './validate'

const Login_hook = () => {
    const {
        values,errors,submit,handleChange, handleSubmit
    } = useForm({
        initialValues:{ email:'', password:''},
        onSubmit: (values) => {
            alert('로그인 성공')
        },
        validate
    })

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

export default Login_hook