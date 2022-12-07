import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ManagerLogin () {

    const navigate = useNavigate()

    const [loginCreds, setLoginCreds] = useState({
        email: '',
        password: ''
    })

    const {email, password} = loginCreds

    const handleChange = (e) => {
        setLoginCreds({
            ...loginCreds,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("../home")
    }

    return (
        <>
        <h1>Manager Login</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                placeholder="Email"
                value={email}
                name='email'
                type="email"
                onChange={(e) => handleChange(e)}
            />
            <input 
                placeholder="Password"
                value={password}
                name='password'
                type="password"
                onChange={(e) => handleChange(e)}
            />

            <button type="submit">Login</button>
        </form>
        </>
    )
}