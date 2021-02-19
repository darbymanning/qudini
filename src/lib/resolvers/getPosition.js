export default function ({ customerDetails }) {
  const inQueue = customerDetails.customerInQueue;
  return inQueue ? inQueue.currentPosition : null;
}
