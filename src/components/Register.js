import React from 'react'
import Footer from './Footer'
import {useState} from 'react'
import TopBarNav from './TopBarNav';

function Register() {
 const [email, setEmail] = useState('');
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 console.log({
    e: email, u: username, p: password
 })
 const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name you entered was: ${email}`)
  }

  return (
    <>
        <TopBarNav />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                   <form onSubmit={handleSubmit}>
                   <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-100 focus:outline-none my-1"
                    >Create Account</button>
                   </form>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/login">
                        Login
                    </a>.
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Register