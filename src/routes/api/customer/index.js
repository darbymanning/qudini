import fetch from "node-fetch";

export async function post({ body }) {
  const url = "https://app.qudini.com/api/kiosk/add-customer-to-queue";
  const req = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
  });
  const res = await req.json();

  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: res,
  };
}
