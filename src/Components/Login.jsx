import { useState } from "react"
import { auth } from "./firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [validPassword, setValidPassword] = useState(true)

    const validatePassword = () => {
        if(password !== '') {
            setValidPassword(!validPassword)
            setError('Password can not be empty!')
        }
        return validPassword
    }

    const register = e =>{
        e.preventDefault()
        setError('')
        if(validatePassword()){
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
            })
            .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
    }

    return(
        <div style={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{height:'300px', width:'300px', background:'#909090', borderRadius:'30px', display:'flex', flexDirection:'column', gap:'40px', justifyContent:'center', alignItems:'center'}}>
            <form onSubmit={register} name='registration_form'>
                <label>
                  <p>E-mail</p>
                  <input type="text" />
                </label>
                <label>
                  <p>Password</p>
                  <input type="password" />
                </label>
                <div>
                  <button type="submit" style={{marginTop:'40px'}}>Submit{console.log('alo1111alo')}</button>
                  
                </div>
                </form>
            </div>
        </div>
    )
}