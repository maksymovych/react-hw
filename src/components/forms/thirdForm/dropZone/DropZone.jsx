import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { submitForm } from "../../../../actions/actions";
import { useFormStore } from "../../../../context/Context";
import s from "./DropZone.module.css";

function DropZone() {
   const [, dispatch] = useFormStore();

   const onDrop = useCallback(
     (acceptedFiles) => {
       acceptedFiles.forEach((file) => {
         const reader = new FileReader();

         reader.onload = () => {
           dispatch(submitForm("thirdForm", reader.result));
         };
         reader.readAsDataURL(file);
       });
     },
     [dispatch]
   );
   const { getRootProps, getInputProps } = useDropzone({ onDrop });
 
  return (
    <div {...getRootProps()} className={s.wrapperDropzone}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <span className={s.cloud}>&#9729;</span>
    </div>
  );
}

export default DropZone;
