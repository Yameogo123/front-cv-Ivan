import React, {useState} from "react"
import { loginCtrl } from "../../back/controller";
import "../../style/login.css"

export default function Login(){

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [message, setMessage]= useState("");

    const login=()=>{
        if(username!=="" && password!==""){
            loginCtrl(username, password).then(
                (rs)=>{
                    setMessage("")
                    localStorage.setItem("admin", JSON.stringify(rs["user"]))
                    localStorage.setItem("token", rs["token"])
                    localStorage.setItem("date", (new Date()).getDate())
                    window.location.assign("/resume/admin/skill")
                }
            ).catch(
                err=>{
                    console.log("erreur"+err);
                    setMessage("check your info");
                }
            )
        }else{
            setMessage("Enter valid data");
        }
    }

    return (
        <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                style={{width: "185px"}} alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">back of resume app</h4>
                                        </div>

                                        <form>
                                            <p>Please login to your account</p>

                                            { message !=="" && <span className="badge badge-danger bg-danger">
                                                {message}
                                            </span>}

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example11" className="form-control"
                                                placeholder="Phone number or email address" onChange={(event)=>setUsername(event.target.value)} />
                                                <label className="form-label" htmlFor="form2Example11">Username</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control" onChange={(event)=>setPassword(event.target.value)} />
                                                <label className="form-label" htmlFor="form2Example22">Password</label>
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={login}>
                                                    Log in
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">pushed by TnT (Try and Try)</h4>
                                        <p className="small mb-0">My admin Space </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



