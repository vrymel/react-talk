const HeartDefault = <FaHeart />;
const HeartRed = <FaHeart style={{ color: "red" }} />;

const MenuItem = (props) => {
    return (
        <div className="menuItem">
            <span onClick={this.props.onClick}>
                {this.props.favorite ? HeartRed : HeartDefault}
            </span>
            <span className="description">{this.props.item}</span>
        </div>
    );
};