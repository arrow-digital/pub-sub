import { Request, Response } from 'express';

export class Controller {
  public static publish = async (_req: Request, res: Response) => {
    return res.status(200).send('hello, world publish');
  };

  public static subscribe = async (_req: Request, res: Response) => {
    return res.status(200).json('hello, world subscribe');
  };
}
