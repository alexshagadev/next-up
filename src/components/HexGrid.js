import { useState } from "react";
import Hexagon from "./Hexagon";
import CardView from "./CardView";

const HexGrid = () => {
  const [cardCluster, setCardCluster] = useState(null);
  const [completedClusters, setCompletedClusters] = useState([]); 

  const clusters = [
    { id: 0, name: "Productivity", color: "#A29BFE" },
    { id: 1, name: "Finance", color: "#FF6B6B" },
    { id: 2, name: "Health", color: "#4ECDC4" },
    { id: 3, name: "Test 2", color: "#FFE66D" },
    { id: 4, name: "Test 3", color: "#FFE66D" },
    { id: 5, name: "Test 4", color: "#FFE66D" },
    { id: 6, name: "Test 5", color: "#FFE66D" },
    { id: 7, name: "Test 6", color: "#FFE66D" },
    { id: 8, name: "Test 7", color: "#FFE66D" },
  ];

  // Function to save completed clusters
  const markClusterComplete = (clusterId) => {
    if (!completedClusters.includes(clusterId)) {
      setCompletedClusters([...completedClusters, clusterId]);
    }
    setCardCluster(null); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {cardCluster ? (
        <CardView
          cluster={cardCluster}
          onBack={() => setCardCluster(null)}
          onComplete={() => markClusterComplete(cardCluster.id)}
        />
      ) : (
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {clusters.map((cluster, index) => {
            const isCompleted = completedClusters.includes(cluster.id);
            return (
              <div
                key={cluster.id}
                className={`transition-transform transform hover:scale-105 ${
                  Math.floor(index / 4) % 2 === 1 ? "translate-x-6" : ""
                }`}
              >
                <Hexagon
                  color={isCompleted ? "#2ECC71" : cluster.color} 
                  onClick={() => setCardCluster(cluster)}
                >
                  <div className="text-center">
                    <p className={isCompleted ? "text-white font-bold" : ""}>
                      {cluster.name}
                    </p>
                    {isCompleted && (
                      <p className="text-white text-sm mt-1 font-semibold">Complete</p>
                    )}
                  </div>
                </Hexagon>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HexGrid;
