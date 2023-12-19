/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// import { redirect } from '@sveltejs/kit';

const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj)
};

export const load = async ({ locals, params }) => {

    const getBlog = async (blogId) => {
        try {
            const blog = serializeNonPOJOs(await locals.pb.collection('n_blogs').getOne(blogId));
            blog.publication_date = formatDate(blog.publication_date);
            
            console.log(blog.content);
            return blog;

        } catch (err) {
            console.log("Whoops");
        }
    }
    
    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    
    const blog = await getBlog(params.blogId);
    
    return {
        blog
    }
}