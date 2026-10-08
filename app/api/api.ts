export default async function MyApi(): Promise<any> {
  const url = "https://shfe-diplom.neto-server.ru/alldata";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("❌ Failed to get data:", error?.message || error);
    return null;
  }
}
