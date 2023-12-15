import React, { useState, useContext } from 'react'
import UserContext from '~lib/user/UserContext'
import { supabase } from '~lib/client.supabase'

const Home = () => {
  const { signIn } = useContext(UserContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')

  const handleLogin = async (type : 'SIGNUP' | 'LOGIN', email: string, password: string) => {
    try {
      const {
        data: { user }, error
      } =
        type === 'LOGIN'
          ? await supabase.auth.signInWithPassword({email: email, password: password})
          : await supabase.auth.signUp({email: email, password: password})
          console.log(user)
      if (user) signIn(user.id, user.email)
    } catch (error: any) {
      console.log('error', error)
      alert(error.error_description || error)
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center p-4 bg-gray-300">
      <div className="w-full sm:w-1/2 xl:w-1/3">
        <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg bg-white">
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Email</label>
            <input
              type="text"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Username"
              value={email}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setEmail((evt.target as any).value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Password</label>
            <input
              type="password"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your password"
              value={password}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setPassword((evt.target as any).value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('SIGNUP', email, password)
              }}
              href={'/channels'}
              className="bg-indigo-700 hover:bg-teal text-white py-2 px-4 rounded text-center transition duration-150 hover:bg-indigo-600 hover:text-white"
            >
              Sign up
            </a>
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('LOGIN', email, password)
              }}
              href={'/channels'}
              className="border border-indigo-700 text-indigo-700 py-2 px-4 rounded w-full text-center transition duration-150 hover:bg-indigo-700 hover:text-white"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
