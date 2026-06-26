"use server"
export  const addReviewAction= async(userToken,userComment,promptCreatorId)=>{

   
    try {
        const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/prompt/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          userComment,
          promptId: promptCreatorId,
        }),
      }
    );
     const data = await res.json();
     return data
    
    } catch (error) {
        
    }
}