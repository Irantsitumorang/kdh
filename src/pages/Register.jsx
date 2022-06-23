import React from "react"
import swal from "sweetalert";
import { useNavigate } from "react-router";

class Register extends React.Component {

    state = {
        title: 'Register'
    }

    componentDidMount() {
        document.title = this.state.title
    }

    handleRegister(e) {
        // Get value dari form
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        console.log(name, email, password);
        const user = { name, email, password, cart: [] };

        // buat array yg isinya menyimpan seluruh user yg register
        let users = JSON.parse(localStorage.getItem('users'))
        if( users=== null ){
            let userArray = [];
            localStorage.setItem('users', JSON.stringify(userArray));

            // masukkan user baru ke array users
            let usersLocalStorage = JSON.parse(localStorage.getItem('users'));
            usersLocalStorage.push(user);
            // masukkan array user ke localStorage
            localStorage.setItem('users', JSON.stringify(usersLocalStorage))
            swal("Horeee!", "User baru telah terdaftar!", "success")
        } else {
            this.props.navigate('/Login')
            // masukkan user baru ke array users 
            users.push(user);
            // masukkan array user ke locastorage
            localStorage.setItem('users', JSON.stringify(users))
            swal("Horeee!", "User baru telah terdaftar!", "success")
        }
    }

    render() {
        return (
            <div className="container py-4 mt-5">
                <h2 style={{textAlign: "center"}} >Welcome to <b>Morang Web</b></h2>
                <h5 style={{textAlign: "center"}}>Create your new account </h5>
                <hr />
                <div className="row">
                    <div className="col-6 mx-auto">
                        <form onSubmit={(e) => { this.handleRegister(e); e.preventDefault() }}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function Navigate(){
    let navigate = useNavigate();
    return <Register navigate={navigate} />
}

export default Navigate
