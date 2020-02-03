import React, { Component } from 'react'
import axios from "axios";

export default class Create_user extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        this.setState({
            username: ""
        });

    }
    
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label> Username</label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                <br></br>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </div>
        </form> 
        )
    }
}

