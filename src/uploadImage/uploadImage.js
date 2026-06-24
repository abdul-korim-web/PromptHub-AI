export const uploadImage = async(image)=>{
    const formData=new FormData() 
    formData.append(`image`,image)
    const res = await fetch(`${process.env.NEXT_PUBLIC_IMG_BB}`,{
        method:"POST",
        body:formData
    })
    const data = await res.json()
    return data?.data?.url
}