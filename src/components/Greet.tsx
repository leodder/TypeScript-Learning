type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
    return (
        <div>{isLoggedIn ? `Welcome ${name}! You have ${messageCount ?? 0} unread messsages.` : "Welcome Guest"}</div>
    )
}

export default Greet