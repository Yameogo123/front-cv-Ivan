import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { add, del, getAll } from "../../../back/controller";
import Admin from "../admin";

export default function AdminProjet(){

    const [current, setcurrent]= useState(null);
    const [toAdd, setAdd]= useState(false)
    const [title, setTitle]= useState("")
    const [date, setdate]= useState("")
    const [place, setplace]= useState("")
    const [link, setLink]= useState("")
    const [file, setFile]= useState(null)
    const [message, setMessage]= useState("")
    const [lock, setLock]= useState(false)
    const [projets, setprojets]= useState([])
    const [isdel, setDel]= useState(true)

    const convert=(file)=>{
      return new Promise((resolve, reject)=>{
        const fileReader= new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
          resolve(fileReader.result);
        }

        fileReader.onerror=(error)=>{
          reject(error)
        }
      })
    }

    useEffect(()=>{
      getAll("projet").then((rs)=>{
        setprojets(rs)
      }).catch((err)=>{
        console.log(err);
        setprojets([])
      })
    }, [isdel, message])

    const addOrUpdate= async (e)=>{
      e.preventDefault()
      if(title!=="" && date !=="" && place!==""){
        const base= file ? await convert(file) : null
        const projet={
          "title": title,
          "date": date,
          "place": place,
          "link": link,
          "image": base
        }
        setLock(true)
        add("projet", projet).then((rs)=>{
          setMessage(rs.message);
          setLock(false);
          setTitle("");
          setdate("");
          setFile(null)
        }).catch(err=>{
          setMessage("typing mistake")
        })
      }else{
        setMessage("fill fields")
      }
    }

    function remove(id){
      del("projet", id).then(
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
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">projet</h4>
                    <p className="card-description">
                        <button className="btn btn-primary m-1" onClick={()=>setAdd(false)}>list</button>
                        <button className="btn btn-success m-1" onClick={()=>setAdd(true)}>add</button>
                    </p>
                    {
                        !toAdd ? 
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>title</th>
                                    <th>date</th>
                                    <th>place</th>
                                    <th>link</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {projets !==[] ? projets.map(cert=>{
                                    return <tr key={cert._id}>
                                      <td className="py-1">
                                        <img src={cert.image} alt="image1" />
                                      </td>
                                      <td>{cert.title}</td>
                                      <td>{cert.date}</td>
                                      <td>
                                        {cert.place}
                                      </td>
                                      <td>{cert.link}</td>
                                      <td>
                                          <button className="btn btn-danger m-1" onClick={()=>remove(cert._id)}>Delete</button>
                                          <button className="btn btn-warning" onClick={()=>setcurrent(cert)}>Update</button>
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
                              <form className="forms-sample" encType="multipart/form-data" onSubmit={(e)=>addOrUpdate(e)}>
                                <div className="form-group">
                                  <label htmlFor="exampleInputName1">title</label>
                                  <input type="text" defaultValue={current && current["title"] } onChange={(event)=>setTitle(event.target.value)} className="form-control" id="exampleInputName1" placeholder="title" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail2">date</label>
                                  <input type="date" defaultValue={current !== null ? current["date"] : ""} onChange={(event)=>setdate(event.target.value)} className="form-control" id="exampleInputEmail2" placeholder="date" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail3">place</label>
                                  <input type="text" defaultValue={current !== null ? current["place"] : ""} onChange={(event)=>setplace(event.target.value)} className="form-control" id="exampleInputEmail3" placeholder="place" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail4">Link</label>
                                  <input type="text" defaultValue={current !== null ? current["link"] : ""} onChange={(event)=>setLink(event.target.value)} className="form-control" id="exampleInputEmail4" placeholder="link" />
                                </div>
                                <div className="form-group">
                                  <label>File upload</label>
                                  <input type="file" onChange={(event)=>setFile(event.target.files[0])}  className="form-control file-upload" />
                                </div>
                                {!lock && <button className="btn btn-primary me-2" > Save </button>}
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