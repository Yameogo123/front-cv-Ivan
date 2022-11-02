import React, { useEffect, useState } from "react";
import { add, del, getAll, update } from "../../../back/controller";
import Admin from "../admin";

export default function AdminAdresse(){

    const [currentAdresse, setCurrentAdresse]= useState(null);
    const [toAdd, setAdd]= useState(false)
    const [mail, setMail]= useState("")
    const [phone, setPhone]= useState("")
    const [country, setCountry]= useState("")
    const [town, setTown]= useState("")
    const [adress, setAdress]= useState("")
    const [lock, setLock]= useState(false)
    const [adresse, setAdresse]= useState([])
    const [message, setMessage]= useState([])
    const [toupdate, setUpdate]= useState(false)
    const [isdel, setDel]= useState(true)

    useEffect(()=>{
      getAll("adresse").then((rs)=>{
        setAdresse(rs)
      }).catch((err)=>{
        console.log(err);
        setAdresse([])
      })
    }, [currentAdresse, isdel])

    function fillField(ad) {
        setMail(ad.mail)
        setPhone(ad.phone)
        setCountry(ad.country)
        setTown(ad.town)
        setAdress(ad.adress)
    }

    const addOrUpdate= (e)=>{
      e.preventDefault()
      if(town!=="" && mail !=="" && country!==""){
        let addresse={
          "mail": mail,
          "phone": phone,
          "country": country,
          "town": town,
          "adress":adress
        }
        setLock(true)
        if(toupdate){
          addresse= {...addresse, id:currentAdresse._id}
          update("adresse", addresse).then((rs)=>{
              setMessage(rs.message);
              setLock(false);
              setMail("")
              setTown("")
              setCountry("")
              //setAdd(false)
              setCurrentAdresse(null)
          }).catch(err=>{
              setMessage("typing mistake")
              setLock(false)
          })
        }else{
          add("adresse", addresse).then((rs)=>{
              setMessage(rs.message);
              setLock(false);
              setMail("")
              setTown("")
              setCountry("")
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

    function remove(id){
      del("adresse", id).then(
        (rs)=>{
          setDel(!isdel);
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
                    <h4 className="card-title">Adresse</h4>
                    <p className="card-description">
                        <button className="btn btn-primary m-1" onClick={()=>{
                            setCurrentAdresse(null);
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
                                    <th>mail</th>
                                    <th>phone</th>
                                    <th>town</th>
                                    <th>country</th>
                                    <th>adresse</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {adresse!==[] ? adresse.map(ad=>{
                                    return <tr key={ad._id}>
                                      <td>
                                        {ad.mail}
                                      </td>
                                      <td>{ad.phone}</td>
                                      <td>{ad.town}</td>
                                      <td>{ad.country}</td>
                                      <td>
                                        {ad.adress}
                                      </td>
                                      <td>
                                          <button className="btn btn-danger m-1" onClick={()=> remove(ad._id)} >Delete</button>
                                          <button className="btn btn-warning" onClick={()=>{
                                            setCurrentAdresse(ad);
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
                                  <label htmlFor="exampleInputName1">Mail</label>
                                  <input type="email" defaultValue={currentAdresse && currentAdresse["mail"] } onChange={(event)=>setMail(event.target.value)} className="form-control" id="exampleInputName1" placeholder="mail" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail2">Phone</label>
                                  <input type="tel" defaultValue={currentAdresse !== null ? currentAdresse["phone"] : ""} onChange={(event)=>setPhone(event.target.value)} className="form-control" id="exampleInputEmail2" placeholder="phone" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail3">Country</label>
                                  <input type="text" defaultValue={currentAdresse !== null ? currentAdresse["country"] : ""} onChange={(event)=>setCountry(event.target.value)} className="form-control" id="exampleInputEmail3" placeholder="country" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail4">town</label>
                                  <input type="text" defaultValue={currentAdresse !== null ? currentAdresse["town"] : ""} onChange={(event)=>setTown(event.target.value)} className="form-control" id="exampleInputEmail4" placeholder="town" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail5">adresse</label>
                                  <input type="text" defaultValue={currentAdresse !== null ? currentAdresse["adress"] : ""} onChange={(event)=>setAdress(event.target.value)} className="form-control" id="exampleInputEmail5" placeholder="adresse" />
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