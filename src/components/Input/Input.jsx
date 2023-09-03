import style from './Input.module.css'

function Input({ type = 'text', placeholder='', onChange, value }) {
    return (  
        <input value={value} onChange={onChange} className={style.input} type={type} placeholder={placeholder} />
    )
}

export default Input