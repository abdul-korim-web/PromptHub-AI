

export const fetchCreatorPrompts = async (token) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  try {
    const result = await fetch(`${serverUrl}/creator/prompt`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      cache: "force-cache" 
    });

    const data = await result.json();
    console.log('data', data)

    if (result.ok) {
      return { success: true, data: data?.data };
    } else {
      return { success: false, error: data?.message || "Failed to fetch prompts" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};