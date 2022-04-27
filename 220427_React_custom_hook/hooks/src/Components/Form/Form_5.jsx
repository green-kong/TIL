import React,{ useState,useEffect } from 'react'

// 함수형 컴포넌트에는 상태를 만들지못했는데.
// 이제는 가능하다 ? Hook
// Hook -> useXXXXX
// useState 매서드를 사용해야한다.
// React.useXXXX


// hook의 장점. 
// 어떠한 함수든 함수안에서 상태를 만들수있다. 
// use 붙혀야하는. 규칙 
const useInput = (defaultValue) => {
    const [value,setValue] = useState(defaultValue)
    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange,
    }
}

const validate = ({userid,password}) => {
    const errors = {}

    if(!userid){
        errors.userid = "이메일이 입력되지 않았습니다."
    } else if( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userid) ){
        errors.userid = "입력된 이메일이 유효하지 않습니다."
    }

    if(!password){
        errors.password = "비밀번호가 입력되지 않았습니다."
    } else if (password.length < 8) {
        errors.password = "8자 이상의 패스워드를 사용해야 합니다."
    }

    return errors 
}

// 폼만들때, 
// 폼체크 


const Form = () => {
    const id = useInput('')
    const pw = useInput('')
    const [submit,setSubmit] = useState(false)
    const [errors,setErrors] = useState({})

    // errors = {} 객체에 내용이 비어있으면, 정상적인 
    // errors = {userid:'아이디가 글자수가 최소 8자이상해줘.'}
    // errors = {password:'패스워드가 이상해! 8자이상으로 해줘!'}
    // errors = {userid:'아이디가 글자수가 최소 8자이상해줘.',password:'패스워드가 이상해! 8자이상으로 해줘!'}


    const handleSubmit = e => {
        e.preventDefault() 
        setSubmit(true)

        // id.value
        // pw.value
        const input = {
            userid:id.value,
            password:pw.value
        }

        setErrors(validate(input))
    }

    useEffect(
        ()=>{
            if(submit){
                console.log(`나 회원가입 시켜줘~`)
                // {userid:'아이디가 글자수가 최소 8자이상해줘.',password:'패스워드가 이상해! 8자이상으로 해줘!'}
                // {}
                // ['userid','password'].length // 2 , [].length // 0
                if ( Object.keys(errors).length === 0 ) {
                    alert('너 성공적이야 회원가입이 잘되었어.')
                    // axios
                }
                setSubmit(false)
            }
        }
        ,[errors]
    ) // 

    return (
        <form onSubmit={handleSubmit}>
            <h2>회원가입</h2>
            <ul>
                <li>
                    <label htmlFor='userid'>아이디</label>
                    <input type="text" name="userid" {...id} /> 
                    { errors.userid && <span>{errors.userid}</span> }
                </li>
                <li>
                    <label htmlFor='password'>패스워드</label>
                    <input type="password" name="password" {...pw} />
                    { errors.password && <span>{errors.password}</span> }
                </li>
                <li><input type="submit" value="가입" disabled={submit}/></li>
            </ul>
        </form>
    )
}



export default Form