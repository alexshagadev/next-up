import Module from "./Module";

const ModulesPathway = () => {
  const modules = [
    { title: "Communication", link: "/modules/communication", className: "communication" },
    { title: "Finance", link: "/modules/finance", className: "finance" },
    { title: "Productivity", link: "/modules/productivity", className: "productivity" },
  ];

  return (
    <div className="flex flex-col items-center mt-36"> {/* Increased margin-top to move everything down */}
      {modules.map((module, index) => {
        // Set fixed values for horizontal and vertical movement
        const fixedX = index === 2 ? index * -50 : index * 160;  // Bring hexagons closer together
        const fixedY = index === 0 ? index * 150 + 80 : index === 2 ? index * 150 - 120 : index * 150 + 50;  // Move the first hexagon down a bit more

        return (
          <div
            key={index}
            className={`relative ${module.className}`}
            style={{
              transform: `translateY(${fixedY}px) translateX(${fixedX}px)`, // Use fixed values for X and Y
            }}
          >
            <Module 
              title={module.title} 
              link={module.link} 
              className={module.className}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ModulesPathway;
