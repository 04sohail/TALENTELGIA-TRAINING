import { useContext } from 'react'
import { ParentContext } from '../../context-api/context'

const Sub_child_3 = () => {
    const { updateMessage } = useContext(ParentContext)
    return (
        <div onClick={() => updateMessage("Clicked From Sub Child 3")}> From Sub_child_3</div>
    )
}

export default Sub_child_3