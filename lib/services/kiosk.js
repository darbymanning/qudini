const APP_URL = import.meta.env.SNOWPACK_PUBLIC_APP_URL;

export async function addToQueue(data) {
  const url = `${APP_URL}/api/customer`;
  const req = await fetch(url, {
    body: JSON.stringify(data),
    method: "POST",
  });
  return await req.json();
}

export async function getCustomerDetails(customerId) {
  const url = `${APP_URL}/api/customer/${customerId}`;
  const req = await fetch(url);
  return await req.json();
}

export async function getData(fetch, kioskId) {
  const url = `${APP_URL}/api/kiosk/data/${kioskId}`;
  const req = await fetch(url);
  return await req.json();
}

export async function getSettings(fetch, kioskId) {
  const url = `${APP_URL}/api/kiosk/settings/${kioskId}`;
  const req = await fetch(url);
  return await req.json();
}

export default { addToQueue, getCustomerDetails, getData, getSettings };
