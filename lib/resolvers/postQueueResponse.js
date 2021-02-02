export default function (qudiniResponse) {
  const { customerInQueue } = qudiniResponse.success;
  return {
    inQueue: true,
    firstName: customerInQueue.customer.name.split(" ")[0],
    position: parseInt(customerInQueue.currentPosition),
    customerId: customerInQueue.customer.identifier,
  };
}
