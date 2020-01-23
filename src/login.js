import React from 'react'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedin: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return {isLoggedin: !prevState.isLoggedin}
        })
        //this.setState(prevState => {isLoggedin: !prevState.isLoggedin})
    }

    render(){
        let buttonText = this.state.isLoggedin?"Log out":"Log in";
        let displayText = this.state.isLoggedin?"You're in":"out";
        return <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <p>{displayText}</p>
            </div>

    }
}

export default Login;