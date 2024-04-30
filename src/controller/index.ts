import { Request, Response } from 'express';
import { redisClient } from '@/util/redis';
import { randomUUID } from 'crypto';
import { submitMessageWhatsapp } from '@/util/createWhatsappMessage';

export class Controller {
  public static publish = async (req: Request, res: Response) => {
    const { message, channel } = req.body;
    // console.log(req.body);

    // console.log(JSON.stringify(req.body));

    await redisClient.publish(channel, JSON.stringify(message));

    return res.status(200).send({ message: `Message publish`, channel });
  };

  public static subscribe = async (req: Request, res: Response) => {
    const { channel } = req.body;

    await redisClient.subscribe(channel, (error, count) => {
      if (error) {
        throw new Error(error.message);
      }

      console.log(`Subscribed to ${count} channel(s).`);
    });

    redisClient.on('message', (channel, message) => {
      console.log(`Received message from ${channel}: ${message}`);
    });

    return res.status(200).json('hello, world subscribe');
  };
}
