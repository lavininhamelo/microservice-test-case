import amqp from "amqplib/callback_api";

const RABBITMQ_URL =
  "amqp://admin:admin@rabbitmq:5672" || process.env.RABBITMQ_URL;

function connect() {
  return amqp.connect(RABBITMQ_URL).then((conn) => conn.createChannel());
}

async function createQueue(channel, queueName) {
  try {
    const queue = await channel.assertQueue(queueName, { durable: true });
    return queue;
  } catch (err) {
    console.log(err);
  }
}

async function sentToQueue(queueName, message) {
  try {
    const channel = await connect();
    const queue = await createQueue(channel, queueName);
    return queue.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
  } catch (err) {
    console.log(err);
  }
}

async function consume(queueName, callback) {
  const channel = await connect();
  const queue = await createQueue(channel, queueName);
  return queue.consume(queueName, callback, { noAck: true });
}

export default { consume, sentToQueue };
