const HeartDefault = <FaHeart />;
const HeartRed = <FaHeart style={{ color: "red" }} />;

class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    };
  }
  render() {
    const { favorite } = this.state;

    return (
      <div className="menuItem">
        <span onClick={() => this.setState({ favorite: !favorite })}>
          {favorite ? HeartRed : HeartDefault}
        </span>
        <span className="description">{this.props.item}</span>
      </div>
    );
  }
}