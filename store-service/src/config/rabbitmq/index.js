import amqp from 'amqplib/callback_api';

class RabbitMQ {
  constructor() {
    this.channel = null;
  }
  connect() {
    return new Promise((resolve, reject) => {
      amqp.connect(process.env.RABBITMQ, (err, connection) => {
        this.channel = connection.createChannel();
        resolve();
      });
    });
  }
  async createQueue(queueName, routingKey) {
    try {
      const exchange = this.channel.assertExchange('amq.direct', 'direct');
      await this.channel.bindQueue(queueName, 'amq.direct', routingKey);

      return exchange;
    } catch (err) {
      console.log(err);
    }
  }
  async sentToQueue(queueName, routingKey, message) {
    try {
      const queue = await this.createQueue(queueName, routingKey);
      queue.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
      return queue;
    } catch (err) {
      console.log(err);
    }
  }
  async consume(queueName, routingKey) {
    const queue = await this.createQueue(queueName, routingKey);
    return await queue.consume(
      queueName,
      (msg) => console.log(msg.content.toString()),
      {
        noAck: true,
      }
    );
  }
}
export default RabbitMQ;
