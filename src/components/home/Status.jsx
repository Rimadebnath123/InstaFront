import React from "react";
import "../../styles/status.css"
import {obj as statusObj}from"../../data/statusData"
const Status=() =>{
    return(
        <div className="statusContainer">
                {
                    statusObj.map(obj=>{
                        return <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:'center'}}>

                        <img style={{ border:"8px solid pink", borderRadius:"50%"}} width="60px" height="60px" src={`${obj.profilePic}`} alt="profilePic"/>
                        <span>{obj.username}</span>
                        </div>
                    })
                }
        </div>
    )
}
export default Status