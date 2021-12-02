import React from 'react'
import Mybutton from '../../atoms/Button/Mybutton'
import Myfield from '../../molecules/Field/Myfield'
import fields from '../../atoms/Inputfield/Fields'
const Myform = (props) => {
   const arr= fields.map((value)=>{
        console.log(value);
        return value
    })
    return (
        <div>
            <form>
                 {
                 fields.map((fields,i)=> <Myfield label={fields.label} key={i}/ >)   
                } 
              <Mybutton />

            </form>
        </div>
    )
}

export default Myform
