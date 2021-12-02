import React from 'react'

const Mylabel = ({children,...props}) => {
    return (
        <div>
            <label {...props}>{children}</label>
        </div>
    )
}

export default Mylabel
