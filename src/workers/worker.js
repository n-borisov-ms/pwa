/* eslint-disable */
import registerPromiseWorker from 'promise-worker/register';

registerPromiseWorker((message) => {
  console.log(message, 'in worker');
  if (message.type === 'message') {
    return message.message;
  }
});
