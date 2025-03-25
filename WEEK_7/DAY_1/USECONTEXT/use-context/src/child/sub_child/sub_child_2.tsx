import { useContext } from 'react'
import { ParentContext } from '../../context-api/context'

const Sub_child_2 = () => {
    const { updateMessage } = useContext(ParentContext)
    return (
        <div onClick={() => updateMessage("Clicked From Sub Child 2")}>From Sub_child_2</div>
    )
}

export default Sub_child_2