
export default function TodoItem({text, completed})
{
    return(
        <li>
            <span className="icon icon-check icon-check--active">V</span>
            <p className="text-todo text-todo--complete">{text}</p>
            <span className="closed">X</span>
        </li>
    )
}

export {TodoItem}