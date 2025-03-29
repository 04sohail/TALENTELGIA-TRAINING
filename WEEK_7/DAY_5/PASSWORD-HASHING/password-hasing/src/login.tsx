import bcrypt from 'bcryptjs';
import { useRef } from 'react'




const Login = () => {
    const input1 = useRef<HTMLInputElement>(null)
    const input2 = useRef<HTMLInputElement>(null)
    const salt = bcrypt.genSaltSync(1)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(input1.current?.value);
        console.log(input2.current?.value);
        const hashedPassword = bcrypt.hashSync(input2.current?.value as string, salt)
        console.log("SALT => ", salt);
        console.log("HASHED=>", hashedPassword);

    }
    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder='name' ref={input1} />
                <input type="text" placeholder='password' ref={input2} />
                <button type='submit'>submit</button>
            </form >
        </>
    )
}

export default Login