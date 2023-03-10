import { LockClosedIcon } from "@heroicons/react/20/solid";
import { FcGoogle } from "react-icons/fc";
import { SiAuth0 } from "react-icons/si";
import { BuiltInProviderType } from 'next-auth/providers'
import { getProviders, getSession, ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react"


type Props = {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

export default function SignIn({ providers }: Props) {

  // const providersArray = Object.values(providers).map((provider)=>{
  //   return {
  //     providerName:provider.name,
  //     providerId:provider.id
  //   }
  // })

  console.log(providers)
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-3">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-4" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div>
          <div className="w-full max-w-md space-y-3">
            <button
              onClick={() => signIn("google")}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-100 py-2 px-4 text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus:ring-2 focus:bg-slate-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FcGoogle
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("auth0")}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-100 py-2 px-4 text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus:ring-2 focus:bg-slate-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SiAuth0
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              Sign in with Auth0
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}