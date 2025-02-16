"use client";

import dynamic from "next/dynamic";

const Quiz = dynamic(() => import("react-quiz-component"), { ssr: false });

const QuizCard = ({ quiz }) => {
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="p-6 bg-yellow-50 rounded-lg shadow-sm text-center w-full">
        <h4 className="text-lg font-medium text-gray-800 mb-4">No Quiz Available</h4>
        <p className="text-gray-500">There are no questions available for this quiz.</p>
      </div>
    );
  }

  const quizData = {
    quizTitle: quiz.name || "Untitled Quiz",
    questions: quiz.questions.map((q, index) => ({
      question: q.question || `Question ${index + 1}`,
      questionType: "text",
      answerSelectionType: "single",
      answers: q.answers || ["No options available"],
      correctAnswer: q.correctIndex !== undefined ? (q.correctIndex + 1).toString() : "1",
    })),
  };

  return (
    <div className="p-6 bg-yellow-50 rounded-lg shadow-sm text-center w-full">
      <h4 className="text-lg font-medium text-gray-800 mb-4">{quiz.name || "Untitled Quiz"}</h4>
      <Quiz quiz={quizData} shuffle={true} />
    </div>
  );
};

export default QuizCard;
