import React from 'react';

export function SingleWeek ({todo, toggleTodo}){
    const { id, task, completed} = todo;

    const handleCheckboxClick = (()=> {
        toggleTodo(id);
    });

    return(
        <li>
            <input type="checkbox" onChange={handleCheckboxClick} checked={completed}/>
            {task}
        </li>
    )
}
