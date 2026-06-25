"use server"

export const addPromptsAction = async (token, promptData) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

  try {
    const result = await fetch(`${serverUrl}/creator/prompt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(promptData)
    })
    
    const data = await result.json()

    if (result.ok) {
      return { success: true, message:data?.message || "Prompt submitted successfully! 🎉" }
    } else {
      return { success: false, message: data?.message || "Failed to add prompt" }
    }
  } catch (error) {
    return { success: false, message: error.message }
  }
}