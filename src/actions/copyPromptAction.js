"use server"
export const copyPromptAction = async(promptId)=>{
    try {
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/creator/prompt/copy/${promptId}`,{
    method:"PATCH",
    headers:{
         "Content-Type": "application/json",
    }
})
const data = await res.json();
 return data
    } catch (error) {
        console.log('error?.message', error?.message)
    }
}