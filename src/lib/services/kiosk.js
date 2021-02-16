import kiosk from "../stubs/kiosk";
import { isDev } from "../utils";

export async function addToQueue(data) {
  if (isDev) kiosk.addToQueue;

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

let numberOfServiceCalls = 0;

export async function getCustomerDetails(customerId) {
  if (isDev) {
    numberOfServiceCalls += 1;

    return numberOfServiceCalls < 5
      ? kiosk.getCustomerDetails.inQueue
      : kiosk.getCustomerDetails.served;
  }

  const url = `/api/customer/${customerId}`;
  const req = await fetch(url);
  return await req.json();
}

export async function getData(fetch, kioskId) {
  if (isDev) kiosk.getData;

  const url = `/api/kiosk/data/${kioskId}`;
  const req = await fetch(url);
  return await req.json();
}

export async function getSettings(fetch, kioskId) {
  if (isDev) kiosk.getSettings;

  const url = `/api/kiosk/settings/${kioskId}`;
  const req = await fetch(url);
  return await req.json();
}

export default { addToQueue, getCustomerDetails, getData, getSettings };
