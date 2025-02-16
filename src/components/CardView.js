import { useState } from "react";
import ModuleCard from "./ModuleCard";
import QuizCard from "./QuizCard";

const CardView = ({ cluster, onBack, onComplete, modules = [], quizzes = [] }) => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(0);

  // Check if cluster exists and then perform filtering
  const clusterModules = cluster ? modules.filter((m) => m.clusterId === cluster.id) : [];
  const clusterQuizzes = cluster ? quizzes.filter((q) => q.clusterId === cluster.id) : [];

  // Alternate modules and quizzes
  const mixedList = [];
  const maxLen = Math.max(clusterModules.length, clusterQuizzes.length);
  
  for (let i = 0; i < maxLen; i++) {
    if (clusterModules[i]) mixedList.push({ type: "module", data: clusterModules[i] });
    if (clusterQuizzes[i]) mixedList.push({ type: "quiz", data: clusterQuizzes[i] });
  }

  // Items of the current step
  const currentItem = mixedList[currentStep];

  // Progress Update
  const handleNextStep = () => {
    if (currentStep < mixedList.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg mx-auto">
      {/* Back button */}
      <button
        className="mb-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition-all duration-300"
        onClick={onBack}
      >
        Back
      </button>

      {/* Cluster Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {cluster ? cluster.name : "No Cluster Selected"}
      </h2>

      {/* Progress indicator dots */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full ${
                index <= currentStep ? "bg-blue-500" : "bg-gray-300"
              } transition-all duration-300`}
            />
            <span className="text-sm text-gray-600 mt-2">{step}</span>
          </div>
        ))}
      </div>

      {/* Show currently in progress items */}
      <div className="flex justify-center mb-6">
        {currentItem ? (
          currentItem.type === "module" ? (
            <ModuleCard module={currentItem.data} />
          ) : (
            <QuizCard quiz={currentItem.data} />
          )
        ) : (
          <p className="text-gray-500">No more steps.</p>
        )}
      </div>

      {/* Next button */}
      <div className="flex justify-center">
        <button
          onClick={handleNextStep}
          className={`px-4 py-2 text-white rounded ${
            currentStep < mixedList.length - 1 ? "bg-blue-500 hover:bg-blue-700" : "bg-green-500 hover:bg-green-700"
          } transition-all duration-300`}
        >
          {currentStep < mixedList.length - 1 ? "Next Step" : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default CardView;
