import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {updateAvatar} from "../../../../app/modules/Auth/_redux/profileCrud";
 
const initialState = {
  file: null,
  imagePreviewUrl: null
}
const resultInitialState = {
  type: null,
  msg:null
}
export function ProfileForm2() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const [fileData, setFileData] = useState(initialState)
  const [uploadResult, setUploadResult] = useState(resultInitialState)
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 
  const handleSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',fileData.file);
    const result = await updateAvatar(formData);
    setFileData(initialState);
    setUploadResult({type: result.type, msg: result.msg})
    console.log(result)
    
}
const cancelUpload = (e) =>{
  e.preventDefault();
  setFileData(initialState);
}

const onClick = (e) =>{
  e.preventDefault();
}
const handleImageChange =(e) =>{
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        setFileData({
            file: file,
            imagePreviewUrl: reader.result
        });
    }

    reader.readAsDataURL(file)
}
const {file, imagePreviewUrl} = fileData;

if (imagePreviewUrl) {
  var imagePreview = (<img src={imagePreviewUrl} />);
} else {
  var imagePreview = (<div className="previewText center">Please select an Image for Preview</div>);
}
  return (
    <div >
      {uploadResult.type!==null ?
      <div role="alert" className={`alert alert-${uploadResult.type}`}>
        <div className="alert-text">{uploadResult.msg}</div>
        </div>
        : null
        }
      <form onSubmit={(e) => handleSubmit(e)}>
      <input {...getInputProps()} onChange={(e) => handleImageChange(e)}  />
      {imagePreview}
      { file===null ?
      <div className='margiv-top-10' {...getRootProps()}>
      <button onClick={(e)=>onClick(e)} class="btn btn-success"> Upload </button>
      </div>
      : 
      <div className='margiv-top-10'>
      <button  class="btn btn-success"> Save </button>
      <button onClick={(e) =>cancelUpload(e)} class="btn btn-danger"> Cancel </button>
      </div>
      }
      {/* {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      } */}
      </form>
 
    </div>
  )
}