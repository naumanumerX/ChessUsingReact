import React from 'react'
import './Ranks.css'
function Ranks({ranks}) {
  return (
    <div>

       <div className="ranks">
        
       { ranks.map((rank)=>(
            <span key={rank}> {rank}</span>
        ))}
       </div>



    </div>
  )
}

export default Ranks