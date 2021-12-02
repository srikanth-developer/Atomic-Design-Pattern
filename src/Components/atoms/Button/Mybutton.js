import React from 'react'

const Mybutton = ({children,...props}) => {
    return (
        <div>
            <button {...props}>submit</button>
        </div>
    )
}

export default Mybutton
