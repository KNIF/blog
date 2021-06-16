import axios from 'axios';
import useSWR from 'swr';

const Intro = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR('/api/discord', fetcher);

  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        {error || !data?.discordTag ? 'KNIF' : data.discordTag}
        {/* KNIF */}
      </h1>
      <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        Full Stack Developer • C# & Node.js
      </h4>
    </section>
  );
};

export default Intro;
