type props = {
    children: string
}

const Heading = ({children}: props) => {
  return (
    <div>{children}</div>
  )
}

export default Heading