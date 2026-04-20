type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void,
    // renderItem?: (item: T) => React.ReactNode
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const List = <T extends {}>({ items, onClick,
    // renderItem
}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {/* {renderItem ? renderItem(item) : String(item)} */}
                        {JSON.stringify(item)}                    </div>
                )
            })}
        </div>
    )
}

export default List