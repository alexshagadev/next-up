import { useState } from "react";
import { useRouter } from "next/router";

const CommunicationModule = () => {
  const router = useRouter();
  const [lessonIndex, setLessonIndex] = useState(0);

  const lessons = [
    "Lesson 1: Body Language",
    "Lesson 2: Active Listening",
    "Lesson 3: Negotiation",
  ];

  const handleNext = () => {
    if (lessonIndex < lessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
    } else {
      router.push("/module/communication/quiz");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-gray-100 mb-4">Communication Module</h1>
      <div className="text-xl text-gray-400 mb-12">
        <h2>{lessons[lessonIndex]}</h2>
      </div>
      <button
        onClick={handleNext}
        className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default CommunicationModule;
