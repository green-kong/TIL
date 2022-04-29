import useInput from './useInput'
import validate from '../Logins/validate'

const Join = () => {
    
    const {input,handleSubmit,submit} = useInput({
        userid:'',
        userpw:'',
        username:''
    },async (obj)=>{
        const result = await new Promise((resovle,reject)=>{
            setTimeout(()=>{
                resovle(obj)
            },1000)
        })
        
        console.log(result)

    },validate)



    return (
        <form onSubmit={handleSubmit}>
            <h1>Join</h1>
            <ul>
                <li><input {...input.userid} type='text' name='userid' /></li>
                <li><input {...input.userpw} type='text' name='userpw' /></li>
                <li><input {...input.username} type='text' name='username' /></li>
                <li><input type='submit' value='전송' disabled={submit}/></li>
            </ul>
        </form>
    )
}

export default Join