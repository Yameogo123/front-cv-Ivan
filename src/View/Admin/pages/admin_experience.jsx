import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { add, del, getAll, update } from "../../../back/controller";
import Admin from "../admin";

export default function AdminExperience(){

    const [current, setCurrent]= useState(null);
    const [toAdd, setAdd]= useState(false)
    const [start, setstart]= useState("")
    const [end, setend]= useState("")
    const [job, setjob]= useState("")
    const [company, setcompany]= useState("")
    const [description, setdescription]= useState("")
    const [lock, setLock]= useState(false)
    const [message, setMessage]= useState([])
    const [toupdate, setUpdate]= useState(false)
    const [experience, setExperience]= useState([])
    const [isdel, setDel]= useState(true)


    useEffect(()=>{
      getAll("experience").then((rs)=>{
        setExperience(rs)
      }).catch((err)=>{
        setExperience([])
      })
    }, [current, toAdd, isdel])

    function fillField(ad) {
        setstart(ad.start)
        setend(ad.end)
        setjob(ad.job)
        setcompany(ad.company)
        setdescription(ad.description)
    }

    function remove(id){
      del("experience", id).then(
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
      if(company!=="" && start !=="" && job!==""){
        let exp={
          "start": start,
          "end": end,
          "job": job,
          "company": company,
          "description":description
        }
        setLock(true)
        if(toupdate){
            exp= {...exp, id:current._id}
            console.log(exp);
            update("experience", exp).then((rs)=>{
                setMessage(rs.message);
                setLock(false);
                setstart("")
                setcompany("")
                setjob("")
                //setAdd(false)
                setCurrent(null)
            }).catch(err=>{
                setMessage("typing mistake")
                setLock(false)
            })
        }else{
            add("experience", exp).then((rs)=>{
                setMessage(rs.message);
                setLock(false);
                setstart("")
                setcompany("")
                setjob("")
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
                    <h4 className="card-title">Expérience</h4>
                    <p className="card-description">
                        <button className="btn btn-primary m-1" onClick={()=>{
                            setCurrent(null);
                            setAdd(false);
                            setUpdate(false);
                        }}>list</button>
                        <button className="btn btn-success m-1" onClick={()=>{
                            setAdd(true);
                            setUpdate(false);
                        }}>add</button>
                    </p>
                    {
                        !toAdd ? 
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>date</th>
                                    <th>company</th>
                                    <th>job</th>
                                    <th>description</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {experience!==[] ? experience.map(ad=>{
                                    return <tr key={ad._id}>
                                      <td>
                                        {ad.start +" "+ ad.end}
                                      </td>
                                      <td>{ad.company}</td>
                                      <td>{ad.job}</td>
                                      <td width={"20%"}>
                                        {ad.description}
                                      </td>
                                      <td>
                                          <button className="btn btn-danger m-1" onClick={()=>remove(ad._id)}>Delete</button>
                                          <button className="btn btn-warning" onClick={()=>{
                                            setCurrent(ad);
                                            setAdd(true)
                                            setUpdate(true)
                                            fillField(ad)
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
                                  <label htmlFor="exampleInputName1">start</label>
                                  <input type="date" defaultValue={current && current["start"] } onChange={(event)=>setstart(event.target.value)} className="form-control" id="exampleInputName1" placeholder="start" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEstart2">end</label>
                                  <input type="date" defaultValue={current !== null ? current["end"] : ""} onChange={(event)=>setend(event.target.value)} className="form-control" id="exampleInputEstart2" placeholder="end" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEstart3">job</label>
                                  <input type="text" defaultValue={current !== null ? current["job"] : ""} onChange={(event)=>setjob(event.target.value)} className="form-control" id="exampleInputEstart3" placeholder="job" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEstart4">company</label>
                                  <input type="text" defaultValue={current !== null ? current["company"] : ""} onChange={(event)=>setcompany(event.target.value)} className="form-control" id="exampleInputEstart4" placeholder="company" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEstart5">description</label>
                                  <input type="text" defaultValue={current !== null ? current["description"] : ""} onChange={(event)=>setdescription(event.target.value)} className="form-control" id="exampleInputEstart5" placeholder="description" />
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