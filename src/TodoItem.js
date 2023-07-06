import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="TodoItem">
            <span 
                onClick={onComplete}
                className={`Icon Icon-check ${completed ? "Icon-check--active" : ""}`}>V</span>
            <p className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""}`}>{text}</p>
            <span
                onClick={onDelete} 
                className="Icon Icon-delete">X</span>
        </li>
    );
}

export { TodoItem };