import GoalItem from '../GoalItem';
import { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from '@firebase/firestore';
import firestore from '../firebase';
import '../../styles/Goal.css';
import NavBar from '../NavBar';

function GoalList() {

    const [goals, setGoals] = useState([]);
    const [text, setText] = useState('');

    // const [goals, setGoals] = useState([
    //     {
    //         id: 1,
    //         text: "Learn how to be confident",
    //         completed: false,
    //     },
    //     {
    //         id: 2,
    //         text: "Learn how to swim",
    //         completed: false,
    //     },
    // ]);

    // const [text, setText] = useState('');

    useEffect(() => {
        const goalCollectionRef = collection(firestore, 'goals');
        const unsubscribe = onSnapshot(goalCollectionRef, (snapshot) => {
            const goalsList = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setGoals(goalsList);
        });

        return () => unsubscribe();
    }, []);

    // function addGoal(text) {        
    //     setGoals([...goals, {
    //         id: goals.length + 1,
    //         text,
    //         completed: false,
    //     }]);
    //     setText('');
    // }

    // function deleteGoal(id) {
    //     setGoals(goals.filter(goal => goal.id !== id));
    // }

    // function toggleCompleted(id) {
    //     setGoals(goals.map(goal => {
    //         if (goal.id === id) {
    //             return { ...goal, completed: !goal.completed };
    //         }
    //         return goal;
    //     }));
    // }

    async function addGoal(text) {
        if (text.trim() !== "") {
            try {
                await addDoc(collection(firestore, 'goals'), {
                    text,
                    completed: false,
                });
                setText('');
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }

    async function deleteGoal(id) {
        try {
            await deleteDoc(doc(firestore, 'goals', id));
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }

    async function toggleCompleted(id, currentStatus) {
        try {
            const goalRef = doc(firestore, 'goals', id);
            await updateDoc(goalRef, {
                completed: !currentStatus,
            });
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    }

    return (
        <>
        <NavBar/>
        <div className='goal-list-container'>
            <div className="goal-list">
                {goals.map((goal) => (
                    <GoalItem
                    key = {goal.id}
                    goal = {goal}
                    deleteGoal = {deleteGoal}
                    toggleCompleted = {toggleCompleted}
                    />
                ))}
                <div className='add-goal-container'>
                    <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    />
                    <button onClick={() => addGoal(text)}>Add</button>
                </div>
            </div>
        </div>
        </>
        
    );
    
};

export default GoalList;