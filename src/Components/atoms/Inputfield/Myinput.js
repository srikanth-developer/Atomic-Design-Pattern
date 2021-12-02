import React from 'react'

const Myinput = ({type='text',...props}) => {
    return (
        <div>
            <input type={type} {...props}/>
        </div>
    )
}

export default Myinput
