import { Fetch } from "./Fetch";
const ROOT= "https://mycv-back.herokuapp.com" //"https://cv-back.onrender.com"
const token=localStorage.getItem("token") 

export function loginCtrl(username, password){
    const user={
        "username": username,
        "password": password
    }
    return Fetch(ROOT+"/user/login", "POST", token, JSON.stringify(user));
}


export function add(name, element){
    return Fetch(ROOT+"/"+name+"/new", "POST", token, JSON.stringify(element))
}

export function update(name, element){
    return Fetch(ROOT+"/"+name+"/update", "PUT", token, JSON.stringify(element))
}

export function getAll(name){
    return Fetch(ROOT+"/"+name+"/all", "GET")
}

export function del(name, id){
    return Fetch(ROOT+"/"+name+"/delete/"+id, "DELETE", token)
}

export function getUser(name){
    return Fetch(ROOT+"/"+name+"/get/yameogoivan10@gmail.com", "GET")
}