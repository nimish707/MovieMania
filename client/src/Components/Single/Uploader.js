import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi';

function Uploader() {
  const {getRootProps,getInputProps}=useDropzone({
    multiple:false,
    maxSize:100000,
    onDrop:(acceptedFields)=>{
      alert(acceptedFields[0].name);
    },

  });

  return (
    <div className='w-full text-center'>
      
      <div 
      {...getRootProps()}
      className='px-6 pt-5 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointeer'>
         <input {...getInputProps()}/>
         <span className='mx-auto text-subMain text-3xl'>
            <FiUploadCloud/>
          </span>
          <p className='text-sm mt-2'>Drag your image</p>
          <em className='text-xs text-border'>
            (only .jpg and .png files will be accepted)
          </em>
      </div>
    </div>
  )
}

export default Uploader
