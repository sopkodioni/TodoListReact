import { useRef } from 'react'
import style from './Warning.module.css'

const Warning = ({children}) => {
    const warningElement = useRef(null)

    setTimeout(() => {
        warningElement.current.style.display = 'none'
    }, 5000)

    return (
        <div ref={warningElement} className={style.warning}>
            {children}
        </div>
    )
}

export default Warning