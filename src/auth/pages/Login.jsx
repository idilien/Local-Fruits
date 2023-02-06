import { Navigate, useNavigate } from "react-router-dom"


export const Login = () => {
  const navigate = useNavigate()
  const onLogin = () =>{
   navigate('/home',{
    replace:true
   })
  }

  return (
    <div className="container mt-5">
        <h1>Login</h1>

    <button className="btn btn-success"
                onClick={onLogin}
    >
        Login
    </button>
    </div>
  )
}
