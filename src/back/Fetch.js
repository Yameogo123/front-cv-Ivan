
export async function Fetch(link, type, token, element){

    /*let head= new Headers({
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Accept, Content-Type, Authorization',
        "Content-Type": "application/json",
        "Authorization": token,
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, OPTIONS"
    });*/

    let options = {
        
    };

    if(type==="GET"){
        options={
            ...options, 
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        }
    }else if(type==="POST"){
        options={
            ...options, 
            method: 'post', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            },
            body: element
        }
    }else if(type==="PUT"){
        options={
            ...options, 
            method: 'put', 
            body: element,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        }
    }else if(type==="DELETE"){
        options={
            ...options, 
            method: 'delete',
            headers: {
                //Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            }
        }
    }

    const response= await fetch(link, options);
    return response.json();
}