import React, {useState, useEffect} from 'react'
import './App.css'
function Pass({user}) {
    const [filter, setFilter] = useState("ALL")
  useEffect(()=>{
    if(filter==='Male'){
        let newUser = user.filter(item=>item.gender==='Male' ? [item.id, item.bio] : item)
        console.log(newUser)
    }
    else if(filter==='Female'){
        let newUsers = user.filter(item=>item.gender===filter? [item.id, item.bio] : 'item')
        console.log(newUsers)
    }
    else{
        alert(filter+"all")
    }
  },[filter,user])
  console.log(filter)
    return (
        <div >
            {user.length > 0 ? (
                <div style={{marginTop:"10px"}}>
                <select onChange={(e)=>setFilter(e.target.value)} style={{width:"100%"}}>
                <option value="ALL">All</option>
                <option value="Male">Male</option>
                <option value="Female" >Female</option>
              </select>
            
            {user.map((item,index)=>(
                <div key={index} className="form_padding">
                    <h3>{item.name}</h3>
                    <p>Bio : {item.bio}</p>
            <p>Gender : {item.gender}</p>
            <ul>
                {item.hobbies.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
                <h4>Course : {item.course}</h4>
                </div>
            ))}
            </div>
            ) : (<h1>No Users Records</h1>)}
        </div>
    )
}

export default Pass
