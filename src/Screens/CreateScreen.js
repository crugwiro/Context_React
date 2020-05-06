import React, {useContext, useState} from 'react';
import { Text, TextInput, View, StyleSheet} from 'react-native';
import {Context} from "../Context/BlogContext";


const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
    <View>
        <Text style={styles.label}> Title </Text>
        <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
        <Text style={styles.label}> Enter Content </Text>
        <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
    </View>
    )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 15,
        padding: 5
    },
    label: {
        fontSize: 20,
        margin: 5
    }
});


export default CreateScreen;
