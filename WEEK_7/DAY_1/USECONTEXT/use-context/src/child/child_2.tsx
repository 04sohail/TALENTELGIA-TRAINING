import { useContext } from 'react'
import Sub_child_2 from './sub_child/sub_child_2'
import { ParentContext } from '../context-api/context'

const Child_2 = () => {
    const { updateMessage } = useContext(ParentContext)
    return (
        <>
            <div onClick={() => updateMessage("Clicked From Child 2")} >From Child 2</div>
            <Sub_child_2 />
        </>
    )
}

export default Child_2