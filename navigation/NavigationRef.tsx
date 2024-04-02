import { useRef,createRef } from "react"


export const navigationRef = createRef()


const navigationHook = (name, params) => {
navigationRef.current?.navigate(name, params)
}

export default  navigationHook