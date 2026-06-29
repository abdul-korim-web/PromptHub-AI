export const fetchAllPrompts = async () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  try {
    const res = await fetch(`${serverUrl}/allprompts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
       cache: "no-store",
    });

    const data = await res.json();

    if (res.ok && data.success) {
      return { success: true, data: data.data || [] };
    } else {
      return { success: false, error: data?.message || "Failed to fetch prompts" ,data:[]};
    }
  } catch (error) {
    return { success: false, error: error.message,data:[] };
  }
};