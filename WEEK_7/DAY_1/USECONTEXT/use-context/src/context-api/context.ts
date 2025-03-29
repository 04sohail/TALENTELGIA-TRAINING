import { createContext } from "react"
import { User } from "../type"
export const ParentContext = createContext<User>({} as User)
