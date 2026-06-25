"use server";

import { revalidatePath } from "next/cache";

export const editPromptAction = async (token, promptId, updatedData) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  try {
    const res = await fetch(`${serverUrl}/creator/prompt/${promptId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      revalidatePath("/dashboard/prompts");
      return {
        success: true,
        message: data.message || "Prompt updated successfully! 🎉",
      };
    }

    return {
      success: false,
      message: data.message || "Failed to update prompt",
    };
  } catch (error) {
    console.log("error?.message", error?.message);
    return {
      success: false,
      message: error?.message || "Something went wrong! Please try again.",
    };
  }
};
