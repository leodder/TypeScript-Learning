type ContainerProps = {
    styles: React.CSSProperties
}

const Container = ({ styles }: ContainerProps) => {
    return (
        <div
            style={styles}
        >
            text content goes here
        </div>
    )
}

export default Container