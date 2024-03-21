import Card from "./assets/components/flashcard";
import questions from "./assets/data";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-semibold mb-8 bg-gradient-to-br from-purple-500 to-pink-500 text-transparent bg-clip-text">React short flashcards</h1>
      <div className="container grid grid-cols-3 gap-5 justify-center items-center">
        {questions.map((question) => (
          <Card question={question.question} answer={question.answer} key={question.id}/>
        ))}
      </div>
    </div>
  );
};

export default App;
