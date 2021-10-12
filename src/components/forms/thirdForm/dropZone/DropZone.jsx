import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { submitForm } from "../../../../actions/actions";
import { useFormStore } from "../../../../context/Context";
import s from "./DropZone.module.css";

function DropZone() {
   const [, dispatch] = useFormStore();

   const onDrop = useCallback(
     (file) => {
       const reader = new FileReader();
       reader.readAsDataURL(file[0]);
       reader.onload = () => {
         dispatch(submitForm("thirdForm", reader.result));
       };
     },
     [dispatch]
   );
   const { getRootProps, getInputProps } = useDropzone({ onDrop });

   return (
     <div {...getRootProps()} className={s.wrapperDropzone}>
       <input {...getInputProps()} />
       <p>Drag 'n' drop one file here, or click to select files</p>
       <span className={s.cloud}>&#9729;</span>
     </div>
   );
}

export default DropZone;
