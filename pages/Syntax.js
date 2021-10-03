import React, { useEffect, useState } from "react"

const Syntax = () => {

    const [checkBoxValue,setCheckBoxValue] = useState(false)

    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log('in useEffect cleanUp')
        }
    },[checkBoxValue])

    return (
        <div></div>
    )
}

export default Syntax