import React, {useContext} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {Context} from "../Context/BlogContext";


const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    return <View>
        <Text> {blogPost.title}</Text>
    </View>
};

const styles = StyleSheet.create({});


export default ShowScreen;
