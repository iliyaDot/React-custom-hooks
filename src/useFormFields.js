import React, { useState, useDebugValue } from 'react'

export default function useFormFields(init) {
    const [fields, setFileds] = useState(init)

    function handleChange(e) {
        const { target } = e;
        setFileds({
            ...fields,
            [target.name]: target.value
        })
    }

   
useDebugValue(`${Object.keys(fields).length }fields`)
    return { fields, handleChange }
}
