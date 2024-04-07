import React, { useState } from 'react'
import useFormFields from './useFormFields'
export default function Form() {

//     const [email , setEmail]= useState('')
// const [password, setPassword] = useState('')

const {fields , handleChange}=useFormFields({
    email: '',
    password: ''
})

    return (
        <form>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    value={fields.email}
                    onChange={handleChange}
                    name='email'
                    type="email"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    value={fields.password}
                    onChange={handleChange}
                    name='password'
                    type="password"
                    className="form-control" />
            </div>

            <button type="submit" className="btn btn-info">Submit</button>
        </form>
    )
}
