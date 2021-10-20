import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown);

  return result.toString();
};

export default markdownToHtml;
