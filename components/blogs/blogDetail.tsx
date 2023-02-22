import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { BlogData } from "@/lib/blog-util"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { useSession } from "next-auth/react"
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import py from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import CommentForm from "./comments/commentForm";
import CommentList from "./comments/commentList";


SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('python', py);


type Props = {
  blog: BlogData
}


export default function BlogDetail({ blog }: Props) {
  const {data:session,status} = useSession();

  const customRenderers = {
    code(code: any) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return <SyntaxHighlighter style={atomDark} language={language} children={children} />
    }
  }

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-indigo-600">Introducing</span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Welcome My World
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            This is my programming Note
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <article className="prose prose-stone ">
            <ReactMarkdown components={customRenderers} children={blog.content} />
          </article>
          {session 
          ?<CommentForm/>
          :<p>You should log in to write comment</p>
          }
          <CommentList/>
        </div>
        
      </div>
    </div>


  )
}