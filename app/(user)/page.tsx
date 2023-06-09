/* eslint-disable import/extensions */
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';

import BlogList from '@/components/BlogList';
import PreviewBlogList from '@/components/PreviewBlogList';
import { client } from '@/lib/sanity.client';

import PreviewSuspense from '../../components/PreviewSuspense';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;
