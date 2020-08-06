import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, View, Button,  FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [isAddMode, setIsAddMode] = useState(false)
    
    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [
            ...currentGoals, 
            { id: Math.random().toString(), value: goalTitle}
            // { key : Math.random().toString(), value: enteredGoal}
        ]); // using a function will guarantee it will retrieve the latest state
        setIsAddMode(false);
    }

    const removeGoalHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        })
    }

    const cancelGoalAddHandler = () => {
        setIsAddMode(false)
    }

    return (
        <View style={styles.screen}>
            <Button title='Add New Goal' onPress={() => {setIsAddMode(true)}}/> 
            {/* <ScrollView > // ScrollView will load all items
                {courseGoals.map((goal) => 
                    <View 
                    style={styles.listItem}
                    key={goal}>
                        <Text>{goal}</Text>
                    </View>
                )}
            </ScrollView> */}
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler}/>
            <FlatList // FlatList will only load the 10 items at a time, and will load more as your scroll down.
                keyExtractor={(item, index) => item.id} // this will extract the key from courseGoals per item
                data={courseGoals}
                renderItem={ itemData => ( <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} itemData={itemData.item.value}/> )}
                // renderItem={ itemData => ( <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)} itemData={itemData.item.value}/> )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
