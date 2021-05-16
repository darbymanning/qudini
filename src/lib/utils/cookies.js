import Cookies from "js-cookie";

export function getFormDataFromCookies(formData) {
  const cookiesFormData = Cookies.get("formData");

  if (formData) {
    return formData;
  } else if (cookiesFormData) {
    return JSON.parse(cookiesFormData);
  } else {
    return {};
  }
}

export function getHasCheckedIn() {
  return Cookies.get("hasCheckedIn");
}

export function removeHasCheckedIn() {
  return Cookies.remove("hasCheckedIn");
}

export function setHasCheckedIn() {
  Cookies.set("hasCheckedIn", true, { expires: 365 * 10 });
}

export function setCurrentCustomer(data) {
  const in30Minutes = 1 / 48;

  Cookies.set("currentCustomer", data, {
    expires: in30Minutes,
  });
}

export function getCurrentCustomer() {
  const currentCustomerCookie = Cookies.get("currentCustomer");

  if (currentCustomerCookie) {
    return JSON.parse(currentCustomerCookie);
  }
}

export function setFormData(formData) {
  formData = getFormDataFromCookies(formData);
  Cookies.set("formData", formData, { expires: 365 * 10 });
}

export function setPostQueueData(postQueueData) {
  Cookies.set("postQueueData", postQueueData, { expires: 365 * 10 });
}

export function getPostQueueData() {
  return JSON.parse(Cookies.get("postQueueData"));
}
