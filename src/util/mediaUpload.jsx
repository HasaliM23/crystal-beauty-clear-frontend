import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://axdgkuflftfdkpmqsjgn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZGdrdWZsZnRmZGtwbXFzamduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NjM2NTUsImV4cCI6MjA2MzEzOTY1NX0.RAF7kIebxUeH3NCFm-usGbLwd7W1meVpkEXOVw-ep0I");

export default function mediaUpload(file) {
    const promise = new Promise(
        (resolve, reject) => {

            if (file == null) {
                reject("No file Selected")
            }
            const timeStamp = new Date().getTime();
            const newFileName = timeStamp + file.name;

            supabase.storage.from("images").upload(newFileName, file, {
                cacheControl: "3600",
                upsert: false,
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                        resolve(url)
                }


            ).catch(
                (error)=>{
                    console.log(error)
                    reject("file upload failed")
                }
            )

            

    }

   

)
 return promise

}