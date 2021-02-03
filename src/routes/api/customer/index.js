import fetch from "node-fetch";

async function _post(body) {
  const url = "https://app.qudini.com/api/kiosk/add-customer-to-queue";
  const req = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
  });
  return await req.json();
}

export async function post(req, res) {
  const data = await _post(req.body);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}
