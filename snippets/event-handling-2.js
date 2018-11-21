const HeartDefault = <FaHeart />;
const HeartRed = <FaHeart style={{ color: "red" }} />;

class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick() {
    this.setState({ favorite: !this.state.favorite })
  }
  render() {
    const { favorite } = this.state;

    return (
      <div className="menuItem">
        <span onClick={this.handleOnClick}>
          {favorite ? HeartRed : HeartDefault}
        </span>
        <span className="description">{this.props.item}</span>
      </div>
    );
  }
}