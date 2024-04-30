import { redisClient } from './redis';

// console.log('TESTE');
redisClient.on('messageBuffer', (channel, message) => {
  console.log(channel);
  console.log(message);
});
