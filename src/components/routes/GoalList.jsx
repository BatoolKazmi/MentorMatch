import GoalItem from '../GoalItem';
import { useState } from 'react';
import '../../styles/Goal.css';
import NavBar from '../NavBar';
// import firestore from '../firebase';
// import { collection } from "@firebase/firestore";

// these are commented out because they are not working currently

function GoalList() {
    // const goalsRef = collection(firestore, 'goals');
    // const userGoals = onSnapshot(goalsRef, (snapshot) => {
    //     setGoals(snapshot.docs.map(doc => doc.data()));
    // });

    // console.log(userGoals);

    const [goals, setGoals] = useState([
        {
            id: 1,
            text: "Learn how to be confident",
            completed: false,
        },
        {
            id: 2,
            text: "Learn how to swim",
            completed: false,
        },
    ]);

    const [text, setText] = useState('');
    function addGoal(text) {
        setGoals([...goals, {
            id: goals.length + 1,
            text,
            completed: false,
        }]);
        setText('');
    }

    function deleteGoal(id) {
        setGoals(goals.filter(goal => goal.id !== id));
    }

    function toggleCompleted(id) {
        setGoals(goals.map(goal => {
            if (goal.id === id) {
                return { ...goal, completed: !goal.completed };
            }
            return goal;
        }));
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