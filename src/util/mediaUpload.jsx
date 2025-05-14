import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://advbdpsdsehjwvctkduj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkdmJkcHNkc2Voand2Y3RrZHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDgzOTQsImV4cCI6MjA2MjM4NDM5NH0.HnUEGFkz7iKOztVplE-Lw5mfwWQ_90b0M1MtF-tMTug"
);

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