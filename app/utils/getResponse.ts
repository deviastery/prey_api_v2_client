const ROOT = "http://127.0.0.1:5000/api/v1/";

export default async function getResponse(request: string) {
  const url = ROOT + request;

  try {
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error: unknown) {
    console.log("Could not fetch.", error);
    return false;
  }
}
