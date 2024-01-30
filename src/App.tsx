import React from 'react';
import { Outlet } from "react-router";
import './App.css';
import Accordion from './Accordion'
import SearchForm from './components/SearchForm'


function App() {

  const url: String = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  const [data, setData] = React.useState('');
  const [isShowAcc, setIsShowAcc] = React.useState(false);
  const [isSave, setIsSave] = React.useState(false);

  const onSubmitSearch = async (word: String) => {
    if (!word.trim()) return;
    try {
      const response = await fetch(`${url}${word}`)
      const data = await response.json()
      if (response.ok && data.length) {
        setData(JSON.stringify(data))
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const showAccordion = ()=>{
    if(isShowAcc){
      setIsShowAcc(false)
    } else{
      setIsShowAcc(true)
    }
  }

  const saveWord = ()=>{
    if(isSave){
      setIsSave(false)
    } else{
      setIsSave(true)
    }
  }



  return (
    <div className="App">
      <SearchForm
        onSubmitSearch={onSubmitSearch}
      />
      
      <Accordion
        dataWord={data}
        showAccordion={showAccordion}
        isShowAcc={isShowAcc}
        isSave={isSave}
        addSaveWord={saveWord}
      />
      <Outlet />
    </div>
  );
}

export default App;
