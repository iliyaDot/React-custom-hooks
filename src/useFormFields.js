import React, { useState, useDebugValue } from 'react'

export default function useFormFields(init) {
    const [fileds, setFileds] = useState(init)

    function handleChange(e) {
        const { target } = e;
        setFileds({
            ...fileds,
            [target.name]: target.value
        })
    }

   

    return { fileds, handleChange }
}
