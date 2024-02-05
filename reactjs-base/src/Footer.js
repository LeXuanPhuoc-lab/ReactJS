const Footer = ({items}) => {
    return (
        <footer>
            <p>{items.length} {items.length > 1 ? "items" : "item"}</p>
        </footer>
    );
}

export default Footer