
import fetch from "node-fetch";


fetch(`https://jsonplaceholder.typicode.com/users`)
.then(Response => Response.json())
.then(data => {
    data.map((dataOne)=>
    console.log(dataOne.name))
}).catch((err)=>{
    console.log(err)
})