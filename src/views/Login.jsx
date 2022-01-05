import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth';
import { useForm } from './../hooks/useForm';

export default function Login() {
    const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const [error, setError] = useState(null);

  // The `from` property of `location.state` gives us
  // the URL to redirect to after logging in.
  const { from } = location.state || { from: { pathname: '/' } };
    return (
        <fieldset className="w-1/4 border p-4 mt-8">
                 <legend>Sign In</legend>
                    <form onSubmit={handleSubmit}className="grid grid-cols-[1fr_2fr] grid-rows-3">
                        <label htmlFor="username" className="self-center text-right">
                         Username
                        </label>
                        <input
      id="username"
      type="text"
      name="username"
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
  <p className="text-center text-red-500 font-bold">Error message goes here</p>
</fieldset>
        
    )
}
