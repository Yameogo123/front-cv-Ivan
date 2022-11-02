import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { add, del, getAll, update } from "../../../back/controller";
import Admin from "../admin";

export default function AdminFormation(){

    const [current, setCurrent]= useState(null);
    const [toAdd, setAdd]= useState(false)
    const [start, setstart]= useState("")
    const [end, setend]= useState("")
    const [place, setplace]= useState("")
    const [school, setschool]= useState("")
    const [subject, setsubject]= useState("")
    const [lock, setLock]= useState(false)
    const [message, setMessage]= useState([])
    const [toupdate, setUpdate]= useState(false)
    const [formation, setformation]= useState([])
    const [isdel, setDel]= useState(true)


    useEffect(()=>{
      getAll("formation").then((rs)=>{
        setformation(rs)
      }).catch((err)=>{
        setformation([])
      })
    }, [current, toAdd, isdel])

    function fillField(ad) {
        setstart(ad.start)
        setend(ad.end)
        setplace(ad.place)
        setschool(ad.school)
        setsubject(ad.subject)
    }

    function remove(id){
      del("formation", id).then(
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
      if(school!=="" && start !=="" && place!==""){
        let form={
          "start": start,
          "end": end,
          "place": place,
          "school": school,
          "subject":subject
        }
        setLock(true)
        if(toupdate){
            form= {...form, id:current._id}
            update("formation", form).then((rs)=>{
                setMessage(rs.message);
                setLock(false);
                setstart("")
                setschool("")
                setplace("")
                //setAdd(false)
                setCurrent(null)
            }).catch(err=>{
                setMessage("typing mistake")
                setLock(false)
            })
        }else{
            add("formation", form).then((rs)=>{
                setMessage(rs.message);
                setLock(false);
                setstart("")
                setschool("")
                setplace("")
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
                    <h4 className="card-title">Formation</h4>
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
                                    <th>date</th>
                                    <th>school</th>
                                    <th>place</th>
                                    <th>subject</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {formation!==[] ? formation.map(ad=>{
                                    return <tr key={ad._id}>
                                      <td>
                                        {ad.start +" "+ ad.end}
                                      </td>
                                      <td>{ad.school}</td>
                                      <td>{ad.place}</td>
                                      <td width={"20%"}>
                                        {ad.subject}
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
                                  <label htmlFor="exampleInputEstart3">place</label>
                                  <input type="text" defaultValue={current !== null ? current["place"] : ""} onChange={(event)=>setplace(event.target.value)} className="form-control" id="exampleInputEstart3" placeholder="place" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEstart4">school</label>
                                  <input type="text" defaultValue={current !== null ? current["school"] : ""} onChange={(event)=>setschool(event.target.value)} className="form-control" id="exampleInputEstart4" placeholder="school" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEstart5">subject</label>
                                  <input type="text" defaultValue={current !== null ? current["subject"] : ""} onChange={(event)=>setsubject(event.target.value)} className="form-control" id="exampleInputEstart5" placeholder="subject" />
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