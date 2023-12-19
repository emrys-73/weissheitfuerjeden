/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// import { redirect } from '@sveltejs/kit';

const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj)
};

export const load = async ({ locals }) => {

    const getBlogs = async () => {
        try {
            const blogs = serializeNonPOJOs(await locals.pb.collection('n_blogs').getFullList());
    
            // Assuming each blog has a 'publication_date' property
            blogs.forEach(blog => {
                blog.publication_date = formatDate(blog.publication_date);
            });
    
            console.log(blogs[0].title);
            return blogs;
        } catch (err) {
            console.log("Whoops")
        }
    }
    
    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    const blogs = await getBlogs();
    
    return {
        blogs
    }
}