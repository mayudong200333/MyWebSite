import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import {BlogData} from '../../lib/blog-util';
import OverviewHeader from './overviewHeader';
import OverviewItem from './overviewItem';

type Props = {
  blogs:BlogData[]
}

export default function BlogsOverView({blogs}:Props) {

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <OverviewHeader />
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <OverviewItem key={blog.slug} blog={blog}/>
          ))}
        </div>
      </div>
    </div>
  )
}
