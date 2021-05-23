import React from 'react';
import './input-feild.style.scss';

const InputFeild = ({lable, handelChange, ...inputProps}) =>(
    <div className="group">
        <input className="form-input" onChange={handelChange} {...inputProps}/>
        {
            lable
            ?
            (
                <label className={`${inputProps.value.length ? 'shrink':''} form-input-label`}>
                   {lable} 
                </label>
            )
            :
            null
        }
        
    </div>
)
export default InputFeild;