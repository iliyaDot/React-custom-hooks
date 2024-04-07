import React, { useState } from 'react'
import useFormFields from './useFormFields'
export default function Form() {

    const [email , setEmail]= useState('')
const [password, setPassword] = useState('')

const [fields, setfields] = useState({
email : '',
password : ''
})

function handleChange(e){
    const {target} = e;
    setfields({
        ...fields,
 [target.name]: target.value
    })
}


    return (
        <form>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    name='email'
                    type="email"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    name='password'
                    type="password"
                    className="form-control" />
            </div>

            <button type="submit" className="btn btn-info">Submit</button>
        </form>
    )
}
