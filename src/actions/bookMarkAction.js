"use server";

export const bookMarkAction = async (userToken, id) => {
  console.log("hg");
  try {
    if (!userToken || !id) {
      return { success: false, message: "Token and Prompt ID are required." };
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/creator/prompt/bookmark/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      },
    );

    const data = await res.json();
    console.log("data", data);

    if (!res.ok || !data.success) {
      return {
        success: false,
        message: data.message || "Failed to process bookmark",
      };
    }

    return data;
  } catch (error) {
    console.error("Error in bookMarkAction API Call:", error);
    return {
      success: false,
      message: error.message || "Network error occurred.",
    };
  }
};
