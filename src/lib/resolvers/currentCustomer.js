export default function (data) {
  const { customerInQueue } = data.customerDetails;
  if (!customerInQueue) return null;

  return {
    customerId: customerInQueue.customer.identifier,
    firstName: customerInQueue.customer.name.split(" ")[0],
    inQueue: true,
    position: parseInt(customerInQueue.currentPosition),
  };
}
