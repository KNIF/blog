import useSWR from 'swr';
import { fetcher } from '../lib/swr';
import Container from './container';

const Footer = () => {
  //const { data, error } = useSWR('/api/discord', fetcher);

  return (
    <footer className='border-t border-custom-fg'>
      <Container>
        <div className='py-28 flex flex-col lg:flex-row items-center'>
          <h3 className='text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            {/* {error || !data ? 'KNIF' : data.discordTag}  */}
            &copy; {new Date().getFullYear()} KNIF. All rights reserved.
          </h3>
          <div className='flex flex-row lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
            {/* <a
              href='https://nextjs.org/docs/basic-features/pages'
              className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
            >
              Read Documentation
            </a>
            <a
              href='https://github.com/KNIF/blog'
              className='mx-3 font-bold hover:underline'
            >
              View on GitHub
            </a> */}

            <a href='https://github.com/KNIF' target='_blank'>
              <img
                src='/assets/icons/github.svg'
                alt='GitHub'
                width='30'
                height='30'
              />
            </a>
            <a
              href='https://twitter.com/@kNif68'
              target='_blank'
              className='ml-2'
            >
              <img
                src='/assets/icons/twitter.svg'
                alt='Twitter'
                width='30'
                height='30'
              />
            </a>
            <a
              href='https://youtube.com/c/kNif68'
              target='_blank'
              className='ml-2'
            >
              <img
                src='/assets/icons/youtube.svg'
                alt='YouTube'
                width='30'
                height='30'
              />
            </a>
            <a
              href='https://discord.gg/BGzdHuB'
              target='_blank'
              className='ml-2'
            >
              <img
                src='/assets/icons/discord.svg'
                alt='Discord'
                width='30'
                height='30'
              />
            </a>
            <a
              href='https://steamcommunity.com/id/kNif68'
              target='_blank'
              className='ml-2'
            >
              <img
                src='/assets/icons/steam.svg'
                alt='Steam'
                width='30'
                height='30'
              />
            </a>
            <a href='https://twitch.tv/kNif68' target='_blank' className='ml-2'>
              <img
                src='/assets/icons/twitch.svg'
                alt='twitch'
                width='30'
                height='30'
              />
            </a>
            <a
              href='https://reddit.com/u/kNif68'
              target='_blank'
              className='ml-2'
            >
              <img
                src='/assets/icons/reddit.svg'
                alt='Reddit'
                width='30'
                height='30'
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
