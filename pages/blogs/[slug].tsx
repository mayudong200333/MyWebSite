import { BlogData, getBlogBySlug, getBlogSlugs } from "@/lib/blog-util"
import { useRouter } from "next/router"
import ErrorPage from "next/error";
import { Fragment } from "react";

type Props = {
    blog:BlogData
}

export default function BlugDetailPage({blog}:Props) {
    const router = useRouter();
    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Fragment>
            {router.isFallback
            ?(<h1>Loading...</h1>)
            :(<h1>{blog.title}</h1>)
            }
        </Fragment>
    )
}

type Params = {
    params:{
        slug:string
    }
}

export function getStaticProps({params}:Params) {
    const slug = params.slug;
    const blog = getBlogBySlug(slug);

    return {
        props:{
            blog: blog
        },
        revalidate:600
    }
}

export function getStaticPaths(){
    const blogSlugsNames =  getBlogSlugs();
    const slugs = blogSlugsNames.map(fileName => fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map(slug=>({params:{slug:slug}})),
        fallback:false,
    }
}