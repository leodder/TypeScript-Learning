type ButtonProps = {
    children: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void,
    id?: number
}

const Button = ({ children, handleClick, id }: ButtonProps) => {
    return (
        <button onClick={(event) => handleClick(event, id)}>{children}</button>
    )
}

export default Button