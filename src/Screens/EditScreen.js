import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from "../Context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";



const EditScreen = ({navigation}) => {
    const {state, editBlog} = useContext(Context);
    const id = navigation.getParam('id');

    const blogPost = state.find(blogPost => blogPost.id === id);

    return <BlogPostForm
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {editBlog(id, title, content, () => navigation.pop())}
    }/>
};

const styles = StyleSheet.create({});


export default EditScreen;
