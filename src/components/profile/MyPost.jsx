import React from "react";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

const MyPost =({post})=>{
    return(
        <div>
            <div style={{padding:"2vh 0vh",marginTop:"5vh",borderTop:"1px solid grey",display:"flex",justifyContent:"center",gap:"5vh",textTransform:"uppercase"}}>
                <span><PostAddIcon style={{fontSize:"15px"}}/> Posts</span>
                <span><GroupWorkIcon style={{fontSize:"15px"}}/> Reels</span>
                <span><TurnedInNotIcon style={{fontSize:"15px"}}/> Saved</span>
                <span><AccountBoxIcon style={{fontSize:"15px"}}/> Tagged</span>
            </div>
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto",columnGap:"2vh",rowGap:"2vh"}}>
            {post.map((ele)=>{
                return <img src={`${ele.postImages[0]}`} alt="" style={{width:"300px",height:"300px",objectFit:"cover"}}/>

            })}

        </div>
        </div>
    )
}
export default MyPost