const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div style={{backgroundColor: colorValue, height: 200, width: 188, color: isDarkText ? "#000" : "#FFF"  }} 
        className="d-flex flex-column justify-content-center mt-5 align-items-center border border-dark">
        <div>{colorValue ? colorValue : "Empty color"}</div>
        <div>{hexValue ? hexValue : null}</div>
        
    </div>
  );
};

export default Square;
