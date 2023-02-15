import BlogsOverView from "@/components/blogs/blogsOverview";
import { BlogData, getAllBlogs } from "@/lib/blog-util";
import { Fragment } from "react";

type Props = {
    blogs:BlogData[]
}


export default function BlogsPage({blogs}:Props) {
    return (
        <Fragment>
            <BlogsOverView blogs={blogs}/>
        </Fragment>
    )
} 

export function getStaticProps(){
    const allBlogs = getAllBlogs();
    return {
        props: {
            blogs:allBlogs
        }
    }
}