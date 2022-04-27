import React,{useEffect, useState} from 'react'

const Login = () => {
    const [values,setValues] = useState({email:'',password:''})
    const [submit,setSubmit] = useState(false)
    const [isLogin,setIsLogin] = useState(false)

    const handleChange = (e) => {
        const {name,value} = e.target
        setValues({
            ...values, // {email:'',password:''}
            [name]:value // email:'ssss'
        })
    }

    const logout = e => {
        // 요청 
        setIsLogin(false)
        // alskjdfklasdf
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)

        setTimeout(()=>{
            setSubmit(false)
            const result = true //const [result] = await axios.post('http://localhost:4000/api/user/login)
            // login 성공햇니~ 실패햇니~
            if ( result === true) {
                // 로그인 성공에대한 상태
                setIsLogin(true)
                // aslkdfjl;asdf
                alert(`
                    이메일은 : ${values.email} \n
                    패스워드 : ${values.password}
                `)
            } else {
                // 로그인 실패에대한 상태 
                setIsLogin(false)
                // alksdjflkasjdkfl
            }
        },1000)
    }

    useEffect(()=>{
        
    },[isLogin])

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>이메일</label>
                    <input type="email" name="email" onChange={handleChange} />
                    <br />
                </li>
                <li>
                    <label>패스워드</label>
                    <input type="password" name="password" onChange={handleChange} />
                    <span>님 패스워드가 8자리 이상임!</span>
                </li>
                <li>
                    <input type="submit" value="전송" disabled={submit}/>
                </li>

                {isLogin ? <button onClick={logout}>로그아웃</button> : '로그인 안되었음.'}
            </ul>
        </form>
    )
}

export default Login