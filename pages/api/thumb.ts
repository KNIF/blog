import { NextApiRequest, NextApiResponse } from 'next';
import request from 'request';
import fs, { PathLike } from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const download = async (url: string, dest: PathLike, cb: Function) => {
    const file = fs.createWriteStream(dest);
    const sendReq = request.get(url);

    // verify response code
    sendReq.on('response', (response) => {
      if (response.statusCode !== 200)
        return cb('Response status was ' + response.statusCode);
      sendReq.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close());

    // check for request errors
    sendReq.on('error', (err) => {
      fs.unlink(dest, (e) => console.error(e));
      return cb(err.message);
    });

    // Handle errors
    file.on('error', (err) => {
      fs.unlink(dest, (e) => console.error(e)); // Delete the file async. (But we don't check the result)
      return cb(err.message);
    });
  };

  await download(
    'https://og-image.now.sh/Intro%20to%20C%23%20Delegates.jpeg?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg',
    '../../public/assets/image.png',
    console.log
  );

  res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=600');
  res.status(200).json({ image: process.env.VERCEL_URL + '/assets/image.png' });
};
