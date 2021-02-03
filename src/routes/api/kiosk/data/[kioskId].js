import fetch from "node-fetch";

async function _get(kioskId) {
  const url = `https://app.qudini.com/api/kiosk/data/${kioskId}?serial=web`;
  const req = await fetch(url);
  return await req.json();
}

export async function get(req, res) {
  const data = await _get(req.params.kioskId);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}
