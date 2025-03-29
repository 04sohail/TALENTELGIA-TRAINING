import { useContext } from 'react'
import Sub_child_3 from './sub_child/sub_child_3'
import { ParentContext } from '../context-api/context'

const Child_3 = () => {
    const { updateMessage } = useContext(ParentContext)
    return (
        <>
            <div onClick={() => updateMessage("Clicked From Child 3")}>From Child 3</div>
            <Sub_child_3 />
        </>
    )
}

export default Child_3