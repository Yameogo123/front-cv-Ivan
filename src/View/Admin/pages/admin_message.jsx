import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { del, getAll } from "../../../back/controller";
import Admin from "../admin";

export default function AdminMessage(){

    const [message, setmessage]= useState([])
    const [isdel, setDel]= useState(true)

    useEffect(()=>{
      getAll("message").then((rs)=>{
        setmessage(rs)
      }).catch((err)=>{
        setmessage([])
      })
    }, [isdel])


    function remove(id){
        del("message", id).then(
          (rs)=>{
            setDel(!isdel)
          }
        ).catch(
          (err)=>{
              console.log(err);
          }
        )
    }

    function Vue(){

        return (
            <div className="col-lg-10 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Message</h4>
                        <p className="card-subject">
                        </p>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>contact</th>
                                        <th>subject</th>
                                        <th>message</th>
                                        <th>date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {message!==[] ? message.map(mess=>{
                                    return <tr key={mess._id}>
                                      <td>{mess.name}</td>
                                      <td>{mess.contact}</td>
                                      <td>{mess.subject}</td>
                                      <td>{mess.message}</td>
                                      <td>{mess.date}</td>
                                      <td>
                                        <button className="btn btn-danger m-1" onClick={()=>remove(mess._id)}>Delete</button>
                                      </td>
                                    </tr>
                                  }): <tr>
                                        <td colSpan={6}>
                                            liste vide
                                        </td>
                                    </tr>}
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

    return (
        Admin(Vue())
    );
}