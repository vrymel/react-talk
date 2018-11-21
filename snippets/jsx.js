return (
    <div className="menuItem">
        <span onClick={() => this.setState({ favorite: !favorite })}>
        {favorite ? HeartRed : HeartDefault}
        </span>
        <span className="description">{this.props.item}</span>
    </div>
);

// After transpiling
return React.createElement(
    "div",
    { className: "menuItem" },
    React.createElement(
      "span",
      { onClick: function onClick() {
          return _this2.setState({ favorite: !favorite });
        } },
      favorite ? HeartRed : HeartDefault
    ),
    React.createElement(
      "span",
    { className: "description" },
    this.props.item
    )
);