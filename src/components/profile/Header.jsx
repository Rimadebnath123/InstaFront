import React from "react";
import"../../styles/header.css"
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SavedStatus from './SavedStatus';
const Header =({myInfo})=>{
    return(
        <div style={{display:"flex",flexDirection:"column",margin:"5vh",width:'90%'}}>
    <div style={{display:"flex",justifyContent:"flex-start",gap:"10vh"}}>
<img style={{width:'28vh', height:'28vh',borderRadius:"50%",objectFit:"cover"}} src={`${myInfo.profilePic}`} alt=""/>
<div>
<div style={{height:"80px",display:"flex",gap:"5px",alignItems:"center"}}>
    <span style={{fontSize:"20px"}}>{myInfo.username}</span>
    <span class="profile_header_button">Edit Profile </span>
    <span class="profile_header_button">View Archive</span>
    <span><SettingsApplicationsIcon/></span>
</div>
<div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <span>{myInfo.post}posts</span>
    <span>{myInfo.followers}followers</span>
    <span>{myInfo.following}following</span>
</div>
    <div style={{marginTop:"20px",marginLeft:"20px"}}>
        {myInfo.name}
    </div>
<p style={{marginLeft:"20px"}}>{myInfo.Bio}</p>
</div>
</div>
<SavedStatus savedStatus={myInfo.savedStatus}/>
</div>
    )  
}
export default Header