import { Disclosure} from '@headlessui/react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import produce from 'immer';
import {FaGithub} from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IconContext } from 'react-icons';

const navigation = [
  { name: 'About me', href: '/', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
  { name: 'My Projects', href: '/projects', current: false },
  { name: 'My Research', href: '/researches', current: false },
]

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}


const Header = ()=>{
    const {data:session} = useSession();
    const router = useRouter()
    const curpath = router.pathname.split('/')[1]
    const [navState,setNav] = useState(navigation);

    useEffect(() => {
      const newNav = produce(navState,draftState => {
          draftState.map((e)=>{
          e.current = e.href.slice(1) === curpath
        })
      });
      setNav(newNav);
    },[curpath])

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className='flex flex-auto mr-3'>
                  <Link href="https://github.com/mayudong200333">
                  <IconContext.Provider value={{size:"2.5em",color:"white"}}>
                      <FaGithub />
                  </IconContext.Provider>
                  </Link>
                  </div>

                  <div className='flex flex-auto mr-3'>
                  <Link href="https://www.linkedin.com/in/yudongma/">
                  <IconContext.Provider value={{size:"2.5em",color:"white"}}>
                      <AiOutlineLinkedin />
                  </IconContext.Provider>
                  </Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navState.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                    session 
                    ? (<button
                        type="button"
                        onClick={() => signOut()}
                        className="inline-flex mr-3 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                          Sign Out
                      </button>)
                    : (<button
                        type="button"
                        onClick={() => signIn()}
                        className="inline-flex mr-3 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                          Sign in with Google Account
                      </button>)
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navState.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="div"
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;