export default function (data) {
  const { customerInQueue } = data.customerDetails;
  if (!customerInQueue) return null;

  return {
    inQueue: true,
    firstName: customerInQueue.customer.name.split(" ")[0],
    position: parseInt(customerInQueue.currentPosition),
    customerId: customerInQueue.customer.identifier,
  };
}
