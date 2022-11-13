import React, { useState, useEffect } from "react";
import { add, del, getAll } from "../../../back/controller";
import Admin from "../admin";

export default function AdminCertification(){

    const [currentCertif, setCurrentCertif]= useState(null);
    const [toAdd, setAdd]= useState(false)
    const [title, setTitle]= useState("")
    const [origin, setOrigin]= useState("")
    const [url, setUrl]= useState("")
    const [file, setFile]= useState(null)
    const [message, setMessage]= useState("")
    const [lock, setLock]= useState(false)
    const [certifs, setCertifs]= useState([])
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
      getAll("certification").then((rs)=>{
        setCertifs(rs)
      }).catch((err)=>{
        console.log(err);
        setCertifs([])
      })
    }, [isdel, message, toAdd])

    const addOrUpdate= async (e)=>{
      e.preventDefault()
      if(title!=="" && origin !=="" && url!==""){
        const base= file ? await convert(file) : null
        const certif={
          "title": title,
          "origin": origin,
          "url": url,
          "image": base
        }
        setLock(true)
        add("certification", certif).then((rs)=>{
          setMessage(rs.message);
          setLock(false);
          setTitle("");
          setOrigin("");
          setFile(null)
        }).catch(err=>{
          setMessage("typing mistake")
        })
      }else{
        setMessage("fill fields")
      }
    }

    function remove(id){
      del("certification", id).then(
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
                    <h4 className="card-title">Certification</h4>
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
                                    <th>titre</th>
                                    <th>Origine</th>
                                    <th>url</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {certifs !==[] ? certifs.map(cert=>{
                                    return <tr key={cert._id}>
                                      <td className="py-1">
                                        <img src={cert.image} alt="image1" width={150} />
                                      </td>
                                      <td>{cert.title}</td>
                                      <td>{cert.origin}</td>
                                      <td>
                                        {cert.url}
                                      </td>
                                      <td>
                                          <button className="btn btn-danger m-1" onClick={()=>remove(cert._id)}>Delete</button>
                                          <button className="btn btn-warning" onClick={()=>{setCurrentCertif(cert); setAdd(true)}}>Update</button>
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
                                  <input type="text" defaultValue={currentCertif && currentCertif["title"] } onChange={(event)=>setTitle(event.target.value)} className="form-control" id="exampleInputName1" placeholder="title" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail2">Origin</label>
                                  <input type="text" defaultValue={currentCertif !== null ? currentCertif["origin"] : ""} onChange={(event)=>setOrigin(event.target.value)} className="form-control" id="exampleInputEmail2" placeholder="origin" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail3">Url</label>
                                  <input type="text" defaultValue={currentCertif !== null ? currentCertif["url"] : ""} onChange={(event)=>setUrl(event.target.value)} className="form-control" id="exampleInputEmail3" placeholder="url" />
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