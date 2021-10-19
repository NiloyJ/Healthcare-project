import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle,handleFacebookSignIn } = useAuth()
    return (
        <div>
            <h2 style={{fontSize:'5rem'}}>Please Login</h2>.

            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image"></img>
                        </div>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form1Example13" class="form-control form-control-lg" />
                                    <label class="form-label" for="form1Example13">Email address</label>
                                </div>


                                <div class="form-outline mb-4">
                                    <input type="password" id="form1Example23" class="form-control form-control-lg" />
                                    <label class="form-label" for="form1Example23">Password</label>
                                </div>

                                <div class="d-flex justify-content-around align-items-center mb-4">

                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                            checked
                                        />
                                        <label class="form-check-label" for="form1Example3"> Remember me </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>

                                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <a onClick={handleFacebookSignIn} class="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                                    <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                                </a>
                                <a onClick={signInUsingGoogle} class="btn btn-danger btn-lg btn-block" style={{backgroundColor: 'red'}} href="#!" role="button">
                                    <i class="fab fa-twitter me-2"></i>Continue with Google</a>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;