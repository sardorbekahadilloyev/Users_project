import { Component } from "react";
import './AddUser.scss'

class AddUser extends Component {

    userAdd = {};

    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            age: 1,
            bio: '',
            isMarried: false
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Name" onChange={(e) => this.setState({ first_name: e.target.value })} />
                <input placeholder="Surname" onChange={(e) => this.setState({ last_name: e.target.value })} />
                <textarea placeholder="Bio" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Age" onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isMarried" >Are you married?</label>
                <input type="checkbox" id="isMarried" onChange={(e) => this.setState({ isMarried: e.target.checked })} />
                <button type="button" onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        bio: this.state.bio,
                        age: this.state.age,
                        isMarried: this.state.isMarried,
                    }
                    if(this.props.user) {
                        this.userAdd.id = this.props.user;
                    }
                    this.props.add(this.userAdd)
                }}>Add user</button>
            </form>
        )
    }
}

export default AddUser