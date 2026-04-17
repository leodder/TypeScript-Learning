import type { personProps } from "./Person.types"

const Person = ({ firstName, lastName }: personProps) => {
    return (
        <div>{firstName} {lastName}</div>
    )
}

export default Person