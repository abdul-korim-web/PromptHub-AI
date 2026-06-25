"use server";

import { revalidatePath } from "next/cache";

export const deletePromptAction = async (token, promptId) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  try {
    const res = await fetch(`${serverUrl}/creator/prompt/${promptId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok && data.success) {

      
      return { success: true, message: data.message || "Prompt deleted successfully!" };
    }

    return { success: false, message: data.message || "Failed to delete prompt" };
  } catch (error) {
    return { success: false, message: "Something went wrong. Please try again." };
  }
};