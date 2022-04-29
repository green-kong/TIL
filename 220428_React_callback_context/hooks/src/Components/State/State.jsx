import React,{useState} from 'react'

const State = () => {
    const [count,setCount] = useState(0)


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ ()=>{   setCount((a)=> a+1) } }>
                {/* 
                    setCount('asdf')
                    count = asdf
                    count = count + 1
                 */}
                Click me
            </button>
        </div>
    )
}



 
/*
    {
        name:'hello',
        number:0
    }
*/

export default State