import style from './Button.module.css'

function Button({onClickFunc, styles, children}) {
    return (  
        <button className={style.btn} style={styles} onClick={onClickFunc}>{children}</button>
    )
}

export default Button