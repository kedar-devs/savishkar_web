import React from 'react';
import FileViewer from 'react-file-viewer';
const View=(data)=> {
        console.log(data.data.title)
        console.log('in view say hiii')
    return (
        <div className="container fluid">
            <div className="container">
                <h1>{data.data.title}</h1>
                <div>
                   <FileViewer
                   fileType='docx'
                   filePath={data.data.content}
                   />
                </div>
            </div>
        </div>
    )
}
export default View
