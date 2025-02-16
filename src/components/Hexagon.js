const Hexagon = ({ children, onClick, color }) => {
    return (
  
      //styling for the hexagon shape and the hover
      <div
        className="w-24 h-28 flex items-center justify-center bg-gray-200 clip-hexagon cursor-pointer transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        <span className="text-white font-semibold text-center">{children}</span>
      </div>
    );
  };
  
  export default Hexagon;