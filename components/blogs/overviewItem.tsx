import {BlogData} from '../../lib/blog-util';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
    blog:BlogData
}

export default function OverviewItem({blog}:Props) {
    const {title,image,type,excerpt,slug,date,readingTime} = blog; 

    const linkPath = `/blogs/${slug}`

    const imageUrl = `/images/blogs/${slug}/${image}`;

    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Image className="h-48 w-full object-cover" src={imageUrl} alt="Test" width={100} height={100}/>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <Link href={linkPath} className="hover:underline">
                      {type}
                    </Link>
                  </p>
                  <Link href={linkPath} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{title}</p>
                    <p className="mt-3 text-base text-gray-500">{excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={date}>{date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{readingTime} read</span>
                    </div>
                </div>
              </div>
        </div>
    )
}