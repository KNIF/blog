import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className='flex items-center'>
      <Image
        src={picture}
        className='w-12 h-12 rounded-full'
        alt={name}
        width={48}
        height={48}
      />
      <div className='text-xl font-bold ml-4'>{name}</div>
    </div>
  );
};

export default Avatar;
