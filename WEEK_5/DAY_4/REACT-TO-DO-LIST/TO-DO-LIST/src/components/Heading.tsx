import { useEffect, useState } from "react"
const generateDay = () => {
    const generatedDay = new Date().toLocaleString("default", { weekday: "long" });
    return generatedDay;
};

const Heading = () => {
    const [day, updateDay] = useState("")
    useEffect(() => {
        updateDay(generateDay())
    }, [])
    console.log(day);
    return (
        <>
            <h1 id="wrapper-heading"> Hello User Today Is {day}</h1>
        </>
    )
}
export default Heading
