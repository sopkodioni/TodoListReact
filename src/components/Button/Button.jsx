import cl from './Button.module.css'

function Button({onClickFunc, style, children}) {
    return (  
        <button className={cl.btn} style={style} onClick={onClickFunc}>{children}</button>
    )
}

export default Button