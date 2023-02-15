import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const blogDirectory = join(process.cwd(),'contents/myblogs');

export type BlogData = {
    [key:string] : string
}

export function getBlogSlugs() {
    return fs.readdirSync(blogDirectory);
}

export function getBlogBySlug(slug:string){
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(blogDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const blogData:BlogData = {
        slug:realSlug,
        ...data,
        content,
    }
    return blogData
}

export function getAllBlogs(){
    const slugs = getBlogSlugs();
    const blogs = slugs
    .map(
        (slug) => {
            return getBlogBySlug(slug)
        }
    )
    .sort((post1,post2)=>(post1.date > post2.date ? -1 : 1))
    return blogs
}