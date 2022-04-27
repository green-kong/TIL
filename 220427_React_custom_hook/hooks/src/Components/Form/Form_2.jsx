import React,{ useState } from 'react'

// 함수형 컴포넌트에는 상태를 만들지못했는데.
// 이제는 가능하다 ? Hook
// Hook -> useXXXXX
// useState 매서드를 사용해야한다.
// React.useXXXX


const Form = () => {
    // 커스텀훅 아주 간단한 커스텀훅을 만들어볼거에요.
    const [userid,setUserid] = useState('') 
    const [password, setPassword] = useState('')

    const [values,setValues] = useState({userid:'',password:''}) // 객체. 
    

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values) // {userid:'',password:''}
        console.log(values.userid) // ''
        console.log(values.password)
    }

    const handleChange = e => {
        const value = e.target.value
        const name = e.target.name // userid
        // {userid:'',password:'',userid:'asdf'}
        // {password:'',userid:'asdf'}
        setValues({...values,[name]:value})
    }

    const changeUserid = e => {
        const value = e.target.value
        setUserid(value)
    }

    const changePassword = e => {
        const value = e.target.value
        setPassword(value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {/* userid 상태와, password 상태값을 alert 띄우고싶음. */}
            <h2>회원가입</h2>
            <ul>
                <li>
                    <label htmlFor='userid'>아이디</label>
                    <input type="text" name="userid" onChange={handleChange} value={values.userid} /> 
                    {/* onChange 일어날떄마다상태를 최신화로 바꾸고싶어요 */}
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input type="password" name="password" onChange={handleChange} value={values.password} />
                    {/* onChange 일어날떄마다상태를 최신화로 바꾸고싶어요 */}
                </li>
                <li><input type="submit" value="가입" /></li>
            </ul>
        </form>
    )
}

class Form2 extends React.Component{
    state = {
        value:'asdf'
    }

    a = this.setState({value:'asdfasdf'})

    render(){
        return (
            <>
                {this.value}
            </>
        )
    }
}

const a = () => {
    const b = 123
    const c = 345

    return 1+1
}

export default Form