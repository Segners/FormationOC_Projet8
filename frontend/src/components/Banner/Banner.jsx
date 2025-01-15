import "../style.css";

function Banner(props) {
  const bannerStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
      {props.showText && (
        <>
          <h1 className="h1__back">
            {props.text ? props.text : "Chez vous, partout et ailleurs"}
          </h1>
          <h1 className="h1__front">
            {props.text ? props.text : "Chez vous, partout et ailleurs"}
          </h1>
        </>
      )}
    </div>
  );
}
export default Banner;
