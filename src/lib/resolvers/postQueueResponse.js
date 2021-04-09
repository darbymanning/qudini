export default function (qudiniResponse) {
  const { customerInQueue } = qudiniResponse.success;
  return {
    customerId: customerInQueue.customer.identifier,
    firstName: customerInQueue.customer.name.split(" ")[0],
    inQueue: true,
    position: parseInt(customerInQueue.currentPosition),
  };
}
