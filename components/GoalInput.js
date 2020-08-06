import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const onAddGoalHandler = () =>{
        props.onAddGoal(enteredGoal)// No need to add bind
        setEnteredGoal('');
    }

    const onCancelHandler = () => {
        props.onCancel()
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={onAddGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color='red' onPress={onCancelHandler}/>
                    </View>
                </View>
                {/* .bind to preconfigure some arguments which should eventually be passed along when this function gets executed.  I can now set up entered goal as a to be forwarded argument  */}
                {/* OR <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} /> */}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: { 
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10, 
        width: '80%',
        marginBottom: 10
        
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1 // Flex will give all the space the parent has available, instead of giving space to only what the child needs
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})
export default GoalInput;