import React from 'react'
import './Files.css'
function Files({files}) {
  return (
    <div>

       <div className="files">
        
       { files.map((file)=>(
            <span key={file}> {file}</span>
        ))}
       </div>



    </div>
  )
}

export default Files