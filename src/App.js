import Button from './components/Button/Button';
import Container from './components/Container/Container';
import FormattedTime from "./components/FormattedTime/FormattedTime";
import { useState, useEffect } from 'react';
const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  
  return (
    <Container>
      <FormattedTime time={time} />
      <Button action={() => setTimerOn(true)}>START</Button>
      <Button action={() => setTimerOn(false)}>STOP</Button>
      <Button action={() => setTimerOn(setTime(0))}>RESET</Button>
    </Container>
  );
};

export default App;
