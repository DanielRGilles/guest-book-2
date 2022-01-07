import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useName } from '../context/NameContext';



export default function Login() {
  const history = useHistory();
  const { name, setName } = useName();
  const [ formState, setFormState ] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  
  const handleChange = (e) => {
    setFormState((prevState) => ({ ...prevState, [e.target.name]: e.target.value}))}

 

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = formState
    if (
      username === process.env.AUTH_EMAIL &&
      password === process.env.AUTH_PASSWORD
    ) {
      setName(username)
      history.push('/guest-book')
    } else {
      setError('Sign in Failed')
    }
}
if(name.auth) return <Redirect to='/'/>

    return (
        <fieldset className="w-1/4 border p-4 mt-8">
            <legend>Sign In</legend>
              <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_2fr] grid-rows-3">
                <label htmlFor="username" className="self-center text-right">
                         Username
                 </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                    className="border p-2 m-3"
                    required
                        />
            <label htmlFor="password" className="self-center text-right">
            Password
            </label>
                    <input
                    id="password"
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    className="border p-2 m-3"
                    required
                    />
                    <button
                        type="submit"
                        className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
                        >
      Sign In
    </button>
  </form>
  {error && <p className="text-center text-red-500 font-bold">{error}</p>}
        </fieldset>
        
    )
}
