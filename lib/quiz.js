import React, { useState, useContext, createContext } from 'react'
import questions from "@/lib/data";


const quizContext = createContext();

export function QuizProvider({ children }) {
    const quiz = useProvideQuiz();
    return <quizContext.Provider value={quiz}>{children}</quizContext.Provider>
}

export const useQuiz = () => {
    return useContext(quizContext);
}

function useProvideQuiz() {
      const totalQuestions = questions.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);
      const [end, setEnd] = useState(false);
      const [score, setScore] = useState(0);

      const resetQuiz = () => {
          setCurrentQuestion(0);
          setEnd(false);
          setScore(0);
      }

      const handleClick = (newScore) => {
        if (newScore === 9000) {
          setEnd(true);
        }
        setScore(score + newScore);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setEnd(true);
        }
        console.log(score);
      };

    return {
        end,
        setEnd,
        handleClick,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        resetQuiz,
        totalQuestions
    }
}
