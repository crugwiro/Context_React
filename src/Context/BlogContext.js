import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blog':
            return action.payload;
        case 'edit_blog':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            });
        case 'delete_blog':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
            }
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        //response.data === our blogposts

        dispatch({type: 'get_blog', payload: response.data});
    }
};

const addBlog = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content});
        callback();
    };
};

const deleteBlog = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blog', payload: id})
    };
};

const editBlog = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blog', payload: {id, title, content}})
        callback()
    };
};


export const { Context, Provider} = createDataContext(blogReducer,
    {addBlog, deleteBlog, editBlog, getBlogPosts},
    []);