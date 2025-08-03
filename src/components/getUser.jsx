const BASE_URL = "https://economily-production.up.railway.app";

const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/user/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include" // cookie sessiyasi kerak bo‘lsa
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Foydalanuvchilarni olishda xatolik");
    }

    return await response.json(); // E.g. [ {id: 1, email: "...", ...}, ... ]
  } catch (error) {
    console.error("Userlarni olish xatosi:", error);
    throw new Error("Foydalanuvchilarni olishning imkoni bo‘lmadi: " + error.message);
  }
};

export default fetchAllUsers