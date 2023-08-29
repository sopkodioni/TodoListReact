import cl from './Btn.module.css'

function Btn({onClickFunc, style, children}) {
    return (  
        <button className={cl.btn} style={style} onClick={onClickFunc}>{children}</button>
    )
}

export default Btn