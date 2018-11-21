const MenuItem = (props) => {
    return (
        <div className="menuItem">
            <span onClick={props.onClick}>
                {props.favorite ? <FaHeart style={{ color: "red" }} /> : <FaHeart />}
            </span>
            <span className="description">{props.item}</span>
        </div>
    );
};

// After transpiling
var MenuItem = function MenuItem(props) {
    return React.createElement(
        "div",
        { className: "menuItem" },
        React.createElement(
            "span",
            { onClick: props.onClick },
            props.favorite ? React.createElement(FaHeart, { style: { color: "red" } }) : React.createElement(FaHeart, null)
        ),
        React.createElement(
            "span",
            { className: "description" },
            props.item
        )
    );
};