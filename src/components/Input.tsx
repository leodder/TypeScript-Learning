import { useState } from "react"
type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, handleChange }: InputProps) => {
    const [name, setName] = useState(value)
    return (
        <input type="text" value={name} onChange={(event) => {
            handleChange(event)
            setName(event.target.value)
        }} />
    )
}

export default Input