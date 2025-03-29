import { useContext } from 'react'
import { ParentContext } from '../../context-api/context'

const Sub_child_1 = () => {
    const { updateMessage } = useContext(ParentContext)
    return (
        <div onClick={() => updateMessage("Clicked From Sub child 1")}>From Sub_child_1</div>
    )
}

export default Sub_child_1
