import '../styles/Goal.css';

function GoalItem({goal, deleteGoal, toggleCompleted}) {
    return (
        <div className="goal-item">
            <input type="checkbox"
            checked={goal.completed}
            onChange={() => toggleCompleted(goal.id)}
            />
            <p>{goal.text}</p>
            <button onClick={() => deleteGoal(goal.id)}>
            ✖
            </button>
        </div>
    );
}

export default GoalItem;