import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blog':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'Add_blog':
            return [...state,
                {   id: Math.floor(Math.random() * 9999),
                    title : `Blog post #${state.length + 1}`
                }];
        default:
            return state;
            }
};
const addBlog = (dispatch) => {
    return () => {
        dispatch({type: 'Add_blog'})
    };
};

const deleteBlog = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blog', payload: id})
    };
};

export const { Context, Provider} = createDataContext(blogReducer, {addBlog, deleteBlog}, []);