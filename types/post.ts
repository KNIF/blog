import Author from './author';

type PostType = {
  slug: string;
  title: string;
  date: string;
  image: string;
  author: Author;
  excerpt: string;
  content: string;
};

export default PostType;
