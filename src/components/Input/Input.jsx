import cl from './Input.module.css'

function Input({ type = 'text', placeholder='', onChange, value }) {
    return (  
        <input value={value} onChange={onChange} className={cl.input} type={type} placeholder={placeholder} />
    )
}

export default Input