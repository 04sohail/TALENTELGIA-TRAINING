import { Tasks } from './types'

interface FormProps {
    saveTasksToLocalStorage: (task: Tasks) => void;
}

const Form = ({ saveTasksToLocalStorage }: FormProps) => {
    const INPUT_FIELD = document.getElementById("input-field") as HTMLInputElement;
    const triggerShakeAnimation = () => {
        INPUT_FIELD.classList.add("shake");
        setTimeout(() => INPUT_FIELD.classList.remove("shake"), 300);
        INPUT_FIELD.focus();
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const eventTarget = event.target as HTMLFormElement
        const inputField = (eventTarget[0] as HTMLInputElement)
        if (inputField.value.trim() === "") {
            triggerShakeAnimation()
        } else {
            const newTask: Tasks = {
                id: Date.now(),
                task: inputField.value,
                isCompleted: false,
            }
            saveTasksToLocalStorage(newTask)
            inputField.value = ""
        }
    }
    return (
        <>
            <form className="wrapper-form" onSubmit={handleSubmit} >
                <input type="text" placeholder="Add a new task..." id="input-field" />
                <button id="submit-btn">Add</button>
            </form>
        </>
    )
}

export default Form
