import React from 'react';
import moment from 'moment';
import './App.css';
import Calender from './calender/calender';

function App() {

  const [inputValue, setInputValue] = React.useState<string>("");
  const [someDate, setSomeDate] = React.useState<Date>(new Date());

  const getCal = () => {
    const mDate = moment(inputValue, [
      "DD/MM/YYYY",
      "DD-MM-YYYY",
      "YYYY-MM-DD"]
      , true);
    if (mDate.isValid()) {
      setSomeDate(mDate.toDate());
    } else {
      alert('Invalid date input');
    }
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button data-testid="input-date" onClick={getCal}>Submit</button>
      </div>
      <Calender date={someDate} />
    </div>
  );
}

export default App;
