import React from "react"
import { useState } from "react"
import { add } from "../back/controller"

export default function Contact(){

    const [name, setname]= useState("")
    const [contact, setcontact]= useState("")
    const [subject, setsubject]= useState("")
    const [message, setmessage]= useState("")
    const [hide, setHidden]=useState(false)
    const [mess, setmess]= useState("")


    const send=(e)=>{
        e.preventDefault();
        if(name!=="" && contact!=="" && message!==""){
            let mes={
                "name": name,
                "contact": contact,
                "suject": subject,
                "message": message,
                "date": new Date()
           }
           setmess("is sending")
           setHidden(true)
           add("message", mes).then(
            (rs)=>{
                setmess(rs.message);
                setHidden(false)
                setTimeout(()=>setmess(""), 10000);
            }
           ).catch((err)=>{
            setmess("something went wrong")
           })
        }else{
            setmess("fill fields");
        }
    }

    return (
        <div>
            <h2 className="h1">Contact</h2>
            <p className="text-muted mb-4"></p>
                <div className="row mb-4 gy-4">
               
                    <div className="col-md-12">
                        <div className="feedback-form">
                            <h4>Get in touch</h4>

                            <form id="contactForm">
                                <div className="form-group">
                                    <div htmlFor="InputName">Name</div>
                                    <input type="text" name="name" required="" className="form-control" id="InputName"
                                        placeholder="Full Name" onChange={(e)=>setname(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <div htmlFor="Inputcontact">contact Number</div>
                                    <input type="text" name="number" className="form-control" id="Inputcontact"
                                        onChange={(e)=>setcontact(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <div htmlFor="InputSubject">Subject</div>
                                    <input type="text" name="subject" className="form-control" id="InputSubject"
                                        placeholder="Subject" onChange={(e)=>setsubject(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <div htmlFor="message-text" className="control-label">Message*</div>
                                    <textarea className="form-control" rows="4" required="" name="message" id="message-text"
                                            placeholder="Write message" onChange={(e)=>setmessage(e.target.value)}></textarea>
                                </div>
                                <span className="badge badge-primary">
                                    {mess}
                                </span><br />
                                {!hide && <button type="submit" className="btn btn-primary" onClick={(e)=>send(e)}>Send</button>} 
                                <div className="badge badge-info bg-info">{mess}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        
    )
}