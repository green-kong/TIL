import React,{useState, useEffect} from 'react'

const Effect = () => {
    const [count,setCount] = useState()

    // class State Props 라이프사이클 

    // useEffect  
        // class component 
        // componentDidMount
        // componentDidUpdate
        // componentWillUnmount
    
    // 인자값을 총 2개 
    /*
        1. callback 함수들어감. 필수값. 
        2. deps -> array  안넣을떄도 있음. 

        ()=>{} , []
     */
    useEffect(()=>{
        console.log('hello')

    },[]) // ComponentDidMount 
    // ComponentDidUpdate


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ ()=>{   setCount((prev) => prev+1) } }>
                Click me
            </button>
        </div>
    )
}

export default Effect