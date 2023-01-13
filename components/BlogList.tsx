import Image from 'next/image';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';

// eslint-disable-next-line import/extensions
import urlFor from '@/lib/urlFor';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

import ClienSideRoute from './ClienSideRoute';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => (
  <div>
    <hr className="border-[#f7ab0a] mb-10" />

    <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
      {posts.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <ClienSideRoute route={`/post/${post.slug.current}`} key={post._id}>
          <div
            className="f
            lex flex-col group cursor-pointer"
          >
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop:blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {/* eslint-disable-next-line no-underscore-dangle */}
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map(
                    (category: {
                      _id: Key | null | undefined;
                      title:
                        | string
                        | number
                        | boolean
                        | ReactElement<
                            any,
                            string | JSXElementConstructor<any> // eslint-disable-next-line import/no-extraneous-dependencies
                          >
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    }) => (
                      <div
                        // eslint-disable-next-line no-underscore-dangle
                        key={category._id}
                        className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        <p>{category.title}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1">
              <p className="underline text-lg font-bold">{post.title}</p>
              <p className="text-gray-500 line-clamp-2">{post.description}</p>
            </div>

            <p className="mt-5 font-bold flex items-center group-hover:underline">
              Read Post
              <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </p>
          </div>
        </ClienSideRoute>
      ))}
    </div>
  </div>
);

export default BlogList;
