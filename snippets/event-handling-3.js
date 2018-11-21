const MenuItem = (props) => {
  return (
      <div className="menuItem">
          <span onClick={props.onClick}>
              {props.favorite ? HeartRed : HeartDefault}
          </span>
          <span className="description">{props.item}</span>
      </div>
  );
};