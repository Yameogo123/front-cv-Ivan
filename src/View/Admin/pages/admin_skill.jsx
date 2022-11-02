import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { add, del, getAll, update } from "../../../back/controller";
import Admin from "../admin";

export default function AdminSkill(){

    const [current, setCurrent]= useState(null);
    const [toAdd, setAdd]= useState(false)
    const [name, setname]= useState("")
    const [percentage, setpercentage]= useState("")
    const [lock, setLock]= useState(false)
    const [message, setMessage]= useState([])
    const [toupdate, setUpdate]= useState(false)
    const [skill, setskill]= useState([])
    const [isdel, setDel]= useState(true)


    useEffect(()=>{
      getAll("skill").then((rs)=>{
        setskill(rs)
      }).catch((err)=>{
        setskill([])
      })
    }, [current, toAdd, isdel])

    function fillField(ad) {
        setname(ad.name)
        setpercentage(ad.percentage)
    }

    function remove(id){
        del("skill", id).then(
          (rs)=>{
              setDel(!isdel)
          }
        ).catch(
          (err)=>{
              console.log(err);
          }
        )
    }

    const addOrUpdate= (e)=>{
      e.preventDefault()
      if(name !=="" && percentage!==""){
        let form={
          "name": name,
          "percentage": percentage,
        }
        setLock(true)
        if(toupdate){
            form= {...form, id:current._id}
            update("skill", form).then((rs)=>{
                setMessage(rs.message);
                setLock(false);
                setname("")
                setpercentage("")
                //setAdd(false)
                setCurrent(null)
            }).catch(err=>{
                setMessage("typing mistake")
                setLock(false)
            })
        }else{
            add("skill", form).then((rs)=>{
                setMessage(rs.message);
                setLock(false);
                setname("")
                setpercentage("")
                //setAdd(false)
            }).catch(err=>{
                setMessage("typing mistake")
                setLock(false)
            })
        }
      }else{
        setMessage("fill fields")
        setLock(false)
      }
    }

    function Vue(){

        return (
            <div className="col-lg-10 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Skill</h4>
                    <p className="card-subject">
                        <button className="btn btn-primary m-1" onClick={()=>{
                            setCurrent(null);
                            setAdd(false);
                            setUpdate(false);
                            setMessage("");
                        }}>list</button>
                        <button className="btn btn-success m-1" onClick={()=>{
                            setAdd(true);
                            setUpdate(false);
                            setMessage("");
                        }}>add</button>
                    </p>
                    {
                        !toAdd ? 
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>name</th>
                                    <th>percentage</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {skill!==[] ? skill.map(ad=>{
                                    return <tr key={ad._id}>
                                      <td>{ad.name}</td>
                                      <td>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: ad.percentage+"%"}} aria-valuenow={ad.percentage} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </td>
                                      <td>
                                          <button className="btn btn-danger m-1" onClick={()=>remove(ad._id)}>Delete</button>
                                          <button className="btn btn-warning" onClick={()=>{
                                            setCurrent(ad);
                                            setAdd(true);
                                            setUpdate(true);
                                            fillField(ad);
                                          }}>Update</button>
                                      </td>
                                  </tr>
                                  }): <tr>
                                    
                                    </tr>}
                                </tbody>
                            </table>
                        </div> : 
                        <div className="col-12 grid-margin stretch-card">
                          <div className="card">
                            <span className="badge badge-info bg-info">
                              {message}
                            </span>
                            <div className="card-body">
                              <h4 className="card-title">add or update</h4>
                              <form className="forms-sample">
                                <div className="form-group">
                                  <label htmlFor="exampleInputName1">name</label>
                                  <input type="text" defaultValue={current && current["name"] } onChange={(event)=>setname(event.target.value)} className="form-control" id="exampleInputName1" placeholder="name" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEname2">percentage</label>
                                  <input type="number" defaultValue={current !== null ? current["percentage"] : ""} onChange={(event)=>setpercentage(event.target.value)} className="form-control" id="exampleInputEname2" placeholder="percentage" />
                                </div>
                                {!lock && <button type="button" className="btn btn-primary me-2" onClick={(e)=>addOrUpdate(e)} > Save </button>}
                                
                              </form>
                            </div>
                          </div>
                        </div>
                    }
                    
                  </div>
                </div>
            </div>
        )
    }


    return (
        Admin(Vue())
    );
}