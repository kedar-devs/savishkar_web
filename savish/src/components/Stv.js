import React from 'react'
import FileViewer from 'react-file-viewer';
import './../css/view.css'
function Stv(props) {
    console.log('whats up buddy');
    console.log(props.match.params.story)
    console.log(props.location.data)
    return (
        <div>
            <div className="container fluid">
            <div className="container">
                <h1 style={{color:'white'}}>{props.location.data.title}</h1>

                <div className="rider img-fluid rounded">
                   <FileViewer
                   fileType={props.location.data.content.split('.').pop()}
                   filePath={props.location.data.content}
                   key={props.location.data._id}
                   className="img-fluid"
                   />
                </div>

            </div>
        </div>
        </div>
    )
}

export default Stv
