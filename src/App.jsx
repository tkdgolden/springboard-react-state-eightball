import './App.css'
import './components/EightBall'
import answerOptions from './answerOptions'
import EightBall from './components/EightBall';

const App = () => (
    <>
      <h1>Magic Eight Ball</h1>
      <EightBall answers={answerOptions} />
    </>
);

export default App
