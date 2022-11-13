import axios from "axios";

export async function Fetch(link, type, token, element){

    let head= {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
    }

    let options = {
        //headers: head
    };

    let response;

    if(type==="GET"){
        options={ 
            method: type,
            headers: head
        }
        response= await axios.get(link, options)
    }else if(type==="POST"){
        let opt={ 
            method: 'post', 
            headers: head,
            body: element
        }
        const response= await fetch(link, opt);
        return response.json();
    }else if(type==="PUT"){
        let opt={ 
            method: type, 
            headers:head,
            body: element
        }
        const response= await fetch(link, opt);
        return response.json();
    }else if(type==="DELETE"){
        let opt={
            method: type,
            headers: head
        }
        const response= await fetch(link, opt);
        return response.json();       
    }

    
    return response.data;
}