const { Consumer } = require("sqs-consumer")

const app = Consumer.create({
  queueUrl: "https://sqs.us-west-2.amazonaws.com/222471082636/Driver.fifo",
  handleMessage: (payload) => {
    const rawData = payload.Body.Message;
    const data = JSON.parse(rawData);
    console.log(data)
  },
})

app.start()