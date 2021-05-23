import React, { Component } from 'react';
import './sign-in.style.scss';
import InputFeild from '../input-feild/input-feild.component';
class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }
    handelSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            email : '',
            password : ''
        })
    }
    handelChange=(event)=>{
        event.preventDefault();
        const { value , name} = event.target;
        this.setState({
            [name]:value
        })

    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <InputFeild name="email" type="email" value={this.state.email} onChange={this.handelChange} lable="email" required/>
                    <InputFeild name="password" type="password" value={this.state.password} onChange={this.handelChange} lable="password" required />
                    <input type="submit" name="submit" value="submit form" />
                </form>
            </div>
        )
    }
}

export default SignIn;