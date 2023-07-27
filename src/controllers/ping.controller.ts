import { Request, Response } from 'express';
import nacl from 'tweetnacl';
import * as dotenv from 'dotenv'; // see
dotenv.config();
import { getRomSearchingSlashCommand as getCommand } from '../commands/roms/romSearching';
import { gamesConfig } from '../config/games';
import { Client } from 'discord.js';
import { client } from 'src/Bot';
import { getRomUrl } from 'src/utils/getRomUrl';

const publicKey = process.env.DISCORD_PUBLIC_KEY; // add your token here

async function ping(req: Request, res: Response) {
  // Your public key can be found on your application in the Developer Portal
  console.log('req: ', req);
  const PUBLIC_KEY = publicKey as string;
  const headers = req.headers;
  const signature = headers['x-signature-ed25519'];
  const timestamp = headers['x-signature-timestamp'];
  const body = req.body; // rawBody is expected to be a string, not raw bytes

  console.log('signature: ', signature);

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp + JSON.stringify(body)),
    Buffer.from(signature as any, 'hex'),
    Buffer.from(PUBLIC_KEY, 'hex'),
  );
  console.log('pinging...');

  console.log('body: ', body);

  console.log('isVerified: ', isVerified);

  console.log('data: ', body.data);

  if (body.type == 1 && isVerified) {
    console.log('it was one');
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
          content: 'Here are the roms you requested:  ' + roms.join('\n'),
          ephemeral: true,
        });
      } catch (e) {
        return res.status(200).send({
          type: 4,
          content: 'Some error happened. ' + (e as Error).message,
        });
      }
    } else {
      return res.status(200).send({
        type: 2,
        ephemeral: true,
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
