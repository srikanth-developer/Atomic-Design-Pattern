import React from 'react'
import Myinput from '../../atoms/Inputfield/Myinput'
import Mylabel from '../../atoms/Label/Mylabel'

const Myfield = ({type='text',
label='',
value='',
...props}) => {
    return (
        
        <div>
            <Mylabel for={props.id}>{label}</Mylabel>
            <Myinput type={type} value={value} {...props}/>
        </div>
    )
}

export default Myfield
