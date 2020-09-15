import PostPreview from './post-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const MorePosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
        More Posts
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            image={
              post.image
                ? post.image
                : `https://og-image.now.sh/${post.title.replace(
                    ' ',
                    '%20'
                  )}.jpeg?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg`
            }
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MorePosts;
