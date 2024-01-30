import React from 'react';
import './Accordion.css'

interface IAccordionProps {
  dataWord: string,
  showAccordion: () => void,
  isShowAcc: boolean;
  isSave: boolean;
  addSaveWord: () => void
}
export interface RootInterface {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: any[];
  antonyms: any[];
}

export interface Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
}

export interface Phonetic {
  audio: string;
  sourceUrl?: string;
  license?: License;
  text?: string;
}

export interface License {
  name: string;
  url: string;
}


const Accordion: React.FC<IAccordionProps> = ({ dataWord, showAccordion, isShowAcc, isSave, addSaveWord }) => {
  const [save, setsave] = React.useState(false);
  //const [openId, setId] = React.useState(null);

  function addWord(key: string) {
    localStorage.setItem('savedWord', key);
  }

  function deleteWord() {
    localStorage.removeItem('savedWord');
  }

  if (!dataWord) return (<></>);

  function sc(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (isSave) {
      setsave(false);
      deleteWord();
    } else {
      setsave(true);
      addWord(dataWord);
    }
  }

  const item: RootInterface[] = JSON.parse(dataWord);

  return (
    <section className="Accordion">
      <ul className="accordion__list">
        <li className='accordion__container'>
          <h2 className="accordion__title" onClick={showAccordion}>{item[0].word}</h2>
          {isShowAcc ? (item[0].meanings.map((item, index) => (
            <div className='accordion__body'>
              <p key={index} className="accordion__meaning">{item.partOfSpeech}</p>
              <p className="accordion__definition">{item.definitions[0].definition}</p>
            </div>)))
            : (<div className='according__wrap'>
              <p className='according__partSpeech'>{item[0].meanings[0].partOfSpeech}</p>
              <p className='accordion__definition according__definition_type_cut'>{item[0].meanings[0].definitions[0].definition}</p>
            </div>)
          }
          <button className={`button ${save ? 'button__type_saved' : ''}`} onClick={sc}>Save</button>
        </li>
      </ul>
    </section>
  )
}

export default Accordion;
