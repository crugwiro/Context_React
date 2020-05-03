import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from "./Context/BlogContext";

const IndexScreen = () => {
    const {data, addBlog} = useContext(BlogContext);
    return(
        <View>
            <Text> Index Screen </Text>
            <Button title='Add Post' onPress={addBlog}/>
            <FlatList
                data={data}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return <Text> {item.title}</Text>
                }}
            />
        </View>
    )};

const styles = StyleSheet.create({});


export default IndexScreen
