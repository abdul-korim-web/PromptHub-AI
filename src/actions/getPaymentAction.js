"use server"
export const getPaymentAction= async(sessionId,priceId,userId)=>{
    try {
        const data = {sessionId,priceId,userId}
        console.log('data', data)
       
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/payment/success`,{
            method:"POST",
            headers:{
"Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const resData = await res.json()
         return resData
        
    } catch (error) {
        
    }
}