import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}> 
            {/* Wrapping children around Touchable will register a touch on those children */}
            <View style={styles.listItem}>
                <Text>{props.itemData}</Text> 
                {/* itemData.item is where your item is located, .value is the value */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10, 
        marginVertical: 10, 
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;