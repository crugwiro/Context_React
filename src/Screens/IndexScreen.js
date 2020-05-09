import React, {useContext, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from "../Context/BlogContext";
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const {state, deleteBlog, getBlogPosts} = useContext(Context);
    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', ()=> {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        }
    }, []);
    return(
        <View>
            <FlatList
                data={state}
                keyExtractor={(item) => {
                    return item.title;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                    <Text style={styles.title}> {item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlog(item.id)}>
                        <Feather style={styles.icon} name='trash-2'/>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                    );
                }}
            />

        </View>
    )};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:() => (
             <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30}/>
        </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});


export default IndexScreen
