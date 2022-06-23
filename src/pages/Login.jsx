// import React from 'react'
// import "../css/Login.css"
// import { Link } from 'react-router-dom'

// const Login = props => {
//   return (
//        <div className="login">
//         {/* <div class="main">
//             <div class="panel">
//                 <a href="#login_form" id="login_pop">Log In</a>
//                 <a href="#join_form" id="join_pop">Sign Up</a>
//             </div>
//         </div> */}
//         <Link to="/" class="overlay" id="login_form"></Link>
//         <div class="popup">
//             <h2>Welcome Guest!</h2>
//             <p>Please enter your login and password here</p>
//             <div>
//                 <label for="login">Login</label>
//                 <input type="text" id="login" value="" />
//             </div>
//             <div>
//                 <label for="password">Password</label>
//                 <input type="password" id="password" value="" />
//             </div>
//             <input type="button" value="Log In" />
//             <Link class="close" to="#close"></Link>
//         </div>

    
//         <Link to="#x" class="overlay" id="join_form"></Link>
//         <div class="popup">
//             <h2>Sign Up</h2>
//             <p>Please enter your details here</p>
//             <div>
//                 <label for="email">Login (Email)</label>
//                 <input type="text" id="email" value="" />
//             </div>
//             <div>
//                 <label for="pass">Password</label>
//                 <input type="password" id="pass" value="" />
//             </div>
//             <div>
//                 <label for="firstname">First name</label>
//                 <input type="text" id="firstname" value="" />
//             </div>
//             <div>
//                 <label for="lastname">Last name</label>
//                 <input type="text" id="lastname" value="" />
//             </div>
//             <input type="button" value="Sign Up" />&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;<a href="#login_form" id="login_pop">Log In</a>

//             <Link class="close" to="#close"></Link>
//         </div>
//         </div>
//   )
// }

// export default Login

import React from "react"
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

class Login extends React.Component {

    state = {
        title: 'Login'
    }

    componentDidMount() {
        document.title = this.state.title
    }

    handleLogin(e){
        console.log(e);
        const email = e.target[0].value;
        const password = e.target[1].value;

        const users = JSON.parse(localStorage.getItem('users'))

        users.forEach(user => {
            if(email === user.email){
                if(password !== user.password){
                    swal('Maaf', 'Password anda salah', 'error')
                } else {
                    localStorage.setItem('userLogin', user.email)
                    this.props.navigate('/')
                    swal('Horee', 'Password anda benar', 'success')
                }
            } else {
                e.target[0].value = "";
                swal('Oopss', 'Email belum terdaftar', 'error')
                e.target[0].focus();
            }
        });
    }

    render() {
        return (
            <div className="container py-4 mt-5">
                <h2 style={{textAlign: "center"}} >Welcome to <b>Morang Web</b></h2>
                <h5 style={{textAlign: "center"}}>Input your account </h5>
                <hr />
                <div className="row">
                    <div className="col-6 mx-auto">
                        <form onSubmit={(e) => { this.handleLogin(e); e.preventDefault() }}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary ms-5">Submit</button>
                            <Link to="/reset" className="fp ms-3">Forgot Password?</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function Navigate(){
    let navigate = useNavigate();
    return <Login navigate={navigate} />
}

export default Navigate