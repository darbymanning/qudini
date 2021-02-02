import fetch from "node-fetch";

export async function get({ params }) {
  const url = `https://app.qudini.com/api/kiosk/settings/${params.kioskId}?serial=web`;
  const req = await fetch(url);
  const res = await req.json();

  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: res,
  };
}
