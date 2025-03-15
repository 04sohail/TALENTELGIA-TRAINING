import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import Form from './Form'
import { Tasks } from "./types"



const getTasksFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
};

const Wrapper_Data = () => {
    const INPUT_FIELD = document.getElementById("input-field") as HTMLInputElement;
    const SUBMIT_BUTTON = document.getElementById("submit-btn") as HTMLButtonElement;
    const keyName = "tasks"
    const [IS_EDITING, SET_IS_EDITING] = useState<boolean>(false)
    const [EDITING_TASK_ID, SET_EDITING_TASK_ID] = useState<number | null>(null)
    const [user, updateUser] = useState<Tasks[]>([])
    useEffect(() => {
        const user: Tasks[] = getTasksFromLocalStorage();
        updateUser(user)
    }, [])
    const deleteTask = (id: number) => {
        if (confirm("Do You Want To Delete The Data : ")) {
            const tasks: Tasks[] = getTasksFromLocalStorage().filter(
                (element: Tasks) => element.id !== id
            );
            saveTaskToLocalStorage(tasks);
        }
    };
    const editTask = (id: number) => {
        const tasks: Tasks[] = getTasksFromLocalStorage();
        tasks.forEach((element: Tasks) => {
            if (element.id === id) {
                INPUT_FIELD.value = element.task;
                INPUT_FIELD.focus();
                SUBMIT_BUTTON.innerText = "UPDATE";
                SET_IS_EDITING(true)
                SET_EDITING_TASK_ID(id)
            }
        });
    };


    const saveNewTasksToLocalStorage = (newTasks: Tasks) => {
        if (IS_EDITING) {
            const tasks: Tasks[] = getTasksFromLocalStorage().map((element: Tasks) => {
                if (element.id === EDITING_TASK_ID) {
                    return newTasks
                }
                return element
            });
            saveTaskToLocalStorage(tasks);
            SET_IS_EDITING(false)
            SET_EDITING_TASK_ID(null)
            SUBMIT_BUTTON.innerText = "ADD"
            return
        }
        const updatedTasks = [...user, newTasks]
        localStorage.setItem(keyName, JSON.stringify(updatedTasks));
        updateUser(updatedTasks)
    };
    const saveTaskToLocalStorage = (tasks: Tasks[]) => {
        localStorage.setItem(keyName, JSON.stringify(tasks));
        updateUser(tasks);
    };
    const taskStyle = (isCompleted: boolean) => ({
        textDecoration: isCompleted ? 'line-through' : 'none'
    });
    const handleCompletedTask = (event: React.MouseEvent, id: number) => {
        if ((event.target as Element).closest(".icons")) return
        const tasks: Tasks[] = getTasksFromLocalStorage().map((element: Tasks) => {
            if (element.id === id) {
                if (!element.isCompleted) {
                    element.isCompleted = !element.isCompleted
                }
            }
            return element
        });
        saveTaskToLocalStorage(tasks)
    }
    return (
        <>
            <Form saveTasksToLocalStorage={saveNewTasksToLocalStorage} />
            <div id="wrapper-data">
                {
                    user.map((e) => (
                        <div key={e.id} className='inner-wrapper-data' onClick={(event) => { handleCompletedTask(event, e.id) }}>
                            {e.isCompleted ? (
                                <p style={taskStyle(e.isCompleted)}>{e.task}</p>
                            ) : (
                                <p>{e.task}</p>
                            )}


                            <div className="icons">
                                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(e.id)} />
                                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(e.id)} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Wrapper_Data
