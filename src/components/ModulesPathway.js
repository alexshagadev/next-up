import Module from "./Module";

const ModulesPathway = () => {
  const modules = [
    { title: "Communication", link: "/modules/communication", className: "communication" },
    { title: "Finance", link: "/modules/finance", className: "finance" },
    { title: "Productivity", link: "/modules/productivity", className: "productivity" },
  ];

  return (
    <div className="flex flex-col items-center mt-60">
      {modules.map((module, index) => {
        let fixedX = 0;
        let fixedY = 120;  // Base Y position for the top row

        if (index === 0) {
          // Position Communication module (left side)
          fixedX = -120;  // Move left slightly
        } else if (index === 1) {
          // Position Finance module (right side) but move it up a bit
          fixedX = 120;   // Move right slightly
          fixedY = -55;    // Move Finance up a bit
        } else if (index === 2) {
          // Position Productivity module much higher, closer to the other two
          fixedX = 0;     // Center it horizontally
          fixedY = -40;   // Move it up closer to Communication and Finance
        }

        return (
          <div
            key={index}
            className={`relative ${module.className}`}
            style={{
              transform: `translateY(${fixedY}px) translateX(${fixedX}px)`,
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
