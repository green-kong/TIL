import React,{ useState } from 'react'

// 함수형 컴포넌트에는 상태를 만들지못했는데.
// 이제는 가능하다 ? Hook
// Hook -> useXXXXX
// useState 매서드를 사용해야한다.
// React.useXXXX


// hook의 장점. 
// 어떠한 함수든 함수안에서 상태를 만들수있다. 
const useInput = () => {
    const [value,setValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}


const Form = () => {
    const [userid,setUserid] = useState('') 
    const [password, setPassword] = useState('')    

    const id = useInput()
    const pw = useInput()

    const handleSubmit = e => {
        e.preventDefault()
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
                    <input type="text" name="userid" {...id} /> 
                    {/* onChange 일어날떄마다상태를 최신화로 바꾸고싶어요 */}
                    {/* <input /> -> Object */}
                    {/* 
                        {
                            type:'input',
                            props:{
                                type:'text',
                                name:'userid',
                                value:userid,
                                onChange:changeUserid
                            }
                        }
                    */}
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input type="password" name="password" {...pw} />
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