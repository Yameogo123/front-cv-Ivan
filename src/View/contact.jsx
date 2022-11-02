import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { add, getAll } from "../back/controller"

export default function Contact(){

    const [adresse, setadresse]= useState([])
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
           console.log(mes);
           add("message", mes).then(
            (rs)=>{
                setmess(rs.message);
                setHidden(false)
                setTimeout(window.location.reload(), 10000);
            }
           ).catch((err)=>{
            setmess("something went wrong")
           })
        }else{
            setmess("fill fields");
        }
    }

    useEffect(()=>{
        getAll("adresse").then((rs)=>{
          setadresse(rs)
        }).catch((err)=>{
          console.log(err);
          setadresse([])
        })
      }, [])

    return (
        <section className="section-contact section-wrapper gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {adresse.map((ad)=>{
                        return <div className="col-md-12" key={ad._id}>
                            <address>
                                <strong>Address</strong><br />
                                {ad.mail}<br />
                                {ad.town} - {ad.country}
                            </address>
                            
                            <address>
                                <strong>contact Number</strong><br />
                                {ad.phone}
                            </address>

                            <address>
                                <strong>Email</strong><br />
                                <a href={"mailto:"+ad.mail}>{ad.mail}</a>
                            </address>
                        </div>
                    })}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="feedback-form">
                            <h2>Get in touch</h2>

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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}