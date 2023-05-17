import React from "react";


class Test extends React.Component{
    state={
        username:'',
        password:''
    }
    change_user=(e)=>{
        this.setState({
            username:e.target.value
        })
        // document.getElementById('u').innerHTML=this.state.username
    }
    change_password=(e)=>{
        this.setState({
            password:e.target.value
        })
        // document.getElementById('p').innerHTML=this.state.password
    }
    componentDidUpdate(){
        document.getElementById('u').innerHTML=this.state.username
        document.getElementById('p').innerHTML=this.state.password
    }

    
    render(){
        return(
            <form>
                <input type='text' placeholder="username" onChange={this.change_user}/><br/>
                <input type='text' placeholder="password" onChange={this.change_password}/><br/>
                <p id='u'></p>
                <p id='p'></p>
            </form>
        )
    }
}
export default Test