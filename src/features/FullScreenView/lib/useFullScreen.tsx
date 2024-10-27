import { useContext } from "react"
import { ScreenContext } from "../config/ScreenContext"



export const useFullScreen = () => {
    const {state,setState,children,setChildren} = useContext(ScreenContext) ;
    const toggleState = () => {
       setState(!state)
    }

    return { state, toggleState ,children,setChildren}
}