import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import {BlogData} from '../../lib/blog-util';

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]

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
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My blog</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Welcome to my Blog Page
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={blog.imageUrl} alt="Test" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">
                      {blog.type}
                    </a>
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
                    <p className="mt-3 text-base text-gray-500">{blog.excerpt}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={blog.date}>{blog.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{blog.readingTime} read</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
