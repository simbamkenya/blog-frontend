import { useState } from 'react'
import Footer from './Footer'
import TopBarNav from './TopBarNav'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 const handleSubmit = e => {
    e.preventDefault();
    console.log({em:email, pas: password})
 }

  return (
    <>
    <TopBarNav />
     <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full  mb-8 text-3xl text-center">Login</span>      
        <form className="mb-4" action="/" method="post" onSubmit={handleSubmit} >
            <div className="mb-4 md:w-full">
            <input 
                className="block border border-grey-light w-full p-3 rounded mb-4" 
                type="email" 
                name="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-6 md:w-full">
            <input 
                className="block border border-grey-light w-full p-3 rounded mb-4" 
                type="password" 
                name="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-100 focus:outline-none my-1">Login</button>
        </form>
        <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Login