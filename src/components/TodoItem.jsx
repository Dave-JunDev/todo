import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
export default function TodoItem({text, completed, onComplete, onDelete})
{
    return(
        <li>
            <span className={`icon
            ${completed && "icon-check--active"}`}
            onClick={onComplete}
            ><FaCheck></FaCheck></span>
            <p
                className={`text-todo ${completed && "text-todo--complete"}`}
            >{text}</p>
            <span
                className="closed"
                onClick={onDelete}
            ><IoClose /></span>
        </li>
    )
}

export {TodoItem}