import React from "react"
import { Link } from "react-router-dom"

const Home_component = () => {
    return (
        <React.Fragment>

            <ul>
                <li>
                    <Link to={"/"}>HOME</Link>
                </li>
                <li>
                    <Link to={"/component_1"}>Component 1</Link>
                </li>
                <li>
                    <Link to={"/component_2"}>Component 2</Link>
                </li>
            </ul>
            <div>Home_component</div>
        </React.Fragment>
    )
}

export default Home_component
