import fetch from "node-fetch";

async function _get(customerId) {
  const url = `https://app.qudini.com/api-customer-details/${customerId}`;
  const req = await fetch(url);
  return await req.json();
}

export async function get(req, res) {
  const data = await _get(req.params.customerId);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}
