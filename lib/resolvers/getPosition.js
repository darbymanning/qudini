export default function ({ customerDetails }) {
  const served = customerDetails.customerServed;
  const inQueue = customerDetails.customerInQueue;
  return inQueue ? inQueue.currentPosition : served;
}
