import { useContext } from 'react'
import Sub_child_1 from './sub_child/sub_child_1'
import { ParentContext } from '../context-api/context'

const Child_1 = () => {
    const { updateMessage } = useContext(ParentContext)
    return (
        <>
            <div onClick={() => updateMessage("Clicked From Child 1")}>From Child 1</div>
            <Sub_child_1 />
        </>
    )
}

export default Child_1
