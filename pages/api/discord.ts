import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type discordApiRes = {
  username: string;
  discriminator: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let {
    data: { username, discriminator },
  } = await axios.get<discordApiRes>(
    'https://discordapp.com/api/v6/users/' + process.env.DISCORD_ID,
    {
      headers: {
        Authorization: process.env.DISCORD_TOKEN || 'TEST',
      },
    }
  );

  res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=600');
  res.status(200).json({ discordTag: username + '#' + discriminator });
};
