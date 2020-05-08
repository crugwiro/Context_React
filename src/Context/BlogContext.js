import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'edit_blog':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            });
        case 'delete_blog':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'Add_blog':
            return [...state,
                {   id: Math.floor(Math.random() * 9999),
                    title: action.payload.title,
                    content: action.payload.content
                }];
        default:
            return state;
            }
};
const addBlog = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'Add_blog', payload: {title, content}});
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
    {addBlog, deleteBlog, editBlog},
    [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}]);