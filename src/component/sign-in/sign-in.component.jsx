import React, { Component } from 'react';
import './sign-in.style.scss';

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
            <div className="">
                <h2>Sign Up Form</h2>
                <span>please sign in</span>
                <form onSubmit={this.handelSubmit}>
                    <input name="email" type="email" value={this.state.email} onChange={this.handelChange} />
                    <label>Email</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handelChange} />
                    <label>password</label>
                    <input type="submit" name="submit" />
                </form>
            </div>
        )
    }
}

export default SignIn;