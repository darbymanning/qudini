export async function addToQueue(data) {
  const url = "/api/customer";
  const req = await fetch(url, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await req.json();
}

export async function getCustomerDetails(customerId) {
  const url = `/api/customer/${customerId}`;
  const req = await fetch(url);
  return await req.json();
}

export async function getData(fetch, kioskId) {
  const url = `/api/kiosk/data/${kioskId}`;
  const req = await fetch(url);
  return await req.json();
}

export async function getSettings(fetch, kioskId) {
  const url = `/api/kiosk/settings/${kioskId}`;
  const req = await fetch(url);
  return await req.json();
}

export default { addToQueue, getCustomerDetails, getData, getSettings };
