import { Request, Response } from 'express';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ping(req: Request, res: Response) {
  console.log('pinging...');
  console.log('req: ', req);

  return res.status(200).json({
    message: 'pong',
  });
}

export { ping };
