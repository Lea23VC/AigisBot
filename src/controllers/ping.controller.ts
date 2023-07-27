import { Request, Response } from 'express';
import nacl from 'tweetnacl';
import * as dotenv from 'dotenv'; // see
dotenv.config();
import { gamesConfig } from '../config/games';

import { getRomUrl } from 'src/utils/getRomUrl';

const publicKey = process.env.DISCORD_PUBLIC_KEY; // add your token here

async function ping(req: Request, res: Response) {
  // Your public key can be found on your application in the Developer Portal
  const PUBLIC_KEY = publicKey as string;
  const headers = req.headers;
  const signature = headers['x-signature-ed25519'];
  const timestamp = headers['x-signature-timestamp'];
  const body = req.body; // rawBody is expected to be a string, not raw bytes

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp + JSON.stringify(body)),
    Buffer.from(signature as any, 'hex'),
    Buffer.from(PUBLIC_KEY, 'hex'),
  );

  if (body.type == 1 && isVerified) {
    return res.status(200).send({
      type: 1,
    });
  }

  if (body.type == 2 && isVerified) {
    const data = body.data;
    const config = gamesConfig.find((game) => game.name == data.name);
    if (config) {
      try {
        const roms = await getRomUrl(
          config.id,
          data.options[0]['value'] as string,
        );
        return res.status(200).send({
          type: 4,
          data: {
            content:
              'Here are the roms you requested:  ' +
              '\n\n' +
              roms.slice(0, 10).join('\n\n'),
          },
        });
      } catch (e) {
        return res.status(200).send({
          type: 4,
          data: {
            content: 'Some error happened. ' + (e as Error).message,
          },
        });
      }
    } else {
      return res.status(200).send({
        type: 2,
        content: 'No roms found.',
      });
    }
  } else {
    return res.status(401).send('invalid request signature');
  }

  // return res.status(200).json({
  //   message: 'pong',
  // });
}

export { ping };
