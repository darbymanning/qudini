export default function (data) {
  const inQueue = data.customerDetails.customerInQueue;
  return inQueue ? inQueue.currentPosition : null;
}
