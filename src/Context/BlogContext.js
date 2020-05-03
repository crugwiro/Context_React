import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'Add_blog':
            return [...state, { title : `Blog post #${state.length + 1}` }];
        default:
            return state;
            }
};

export const BlogProvider = ({children}) => {
    const [blogPost, dispatch] = useReducer(blogReducer,[]);

    const addBlog = () => {
        dispatch({type: 'Add_blog'})
    };

    return <BlogContext.Provider value={{data: blogPost, addBlog}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;