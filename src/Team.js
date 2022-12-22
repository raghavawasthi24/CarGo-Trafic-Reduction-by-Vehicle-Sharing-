import React from 'react';
import MemberData from "./MemberData.js";
import Member from './Member';
import "./Team.css";

const Team = () => {
  return (
    <div className='team'>
         <p>THE TEAM</p>
        <h2 id="agents">Our Top Agents</h2>
        <div className="team-opt">
         { MemberData.map((val)=>{
              return (<div className="card-hook">
                <Member imgsrc={val.img} title={val.name} post={val.post}/>
                </div>)
            }
          )}
         </div>
    </div>
  )
}

export default Team