import ReactDOM from 'react-dom';
import { User } from './User';
const App = () => {
  return (
    <>
      <User userName={'Tom'} userAge={24} userNationality={'UK'} />{' '}
      <User userName={'Hannah'} userAge={31} userNationality={'PL'} />{' '}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
