
import toast from "react-hot-toast";
import { useState } from 'react';
import mediaUpload from "../util/mediaUpload";


export default function Testing() {

    const [file, setFile] = useState(null);
   
    function handleUpload(){
        mediaUpload(file).then(
            (url)=>{
                console.log(url)
                toast.success("File uploaded successfully")
            }

            ).catch(
                (error)=>{
                    console.log(error)
                    toast.error("File upload failed")
                }
            )

       
        }


        return(
        <div className="w-full h-screen bg-green-200 flex flex-col justify-center items-center ">
          
          <input type="file" onChange={
            (e)=>{
                setFile(e.target.files[0])
            }

        }/>
        

            <button onClick={handleUpload} className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-300 hover:text-gray-700">Upload</button>
        </div>
    )

}
