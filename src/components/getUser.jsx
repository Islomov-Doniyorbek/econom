const BASE_URL = "https://economily-production.up.railway.app";

const fetchAllUsers = async (page = 1, limit = 10) => {
  try {
    // URL ga page va limit query paramlarini qo'shamiz
    const url = new URL(`${BASE_URL}/api/v1/user/list`);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include" // cookie kerak bo'lsa
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Foydalanuvchilarni olishda xatolik");
    }

    return await response.json(); // APIdan to'liq javob qaytadi
  } catch (error) {
    console.error("Userlarni olish xatosi:", error);
    throw new Error("Foydalanuvchilarni olishning imkoni bo‘lmadi: " + error.message);
  }
};

export default fetchAllUsers;
