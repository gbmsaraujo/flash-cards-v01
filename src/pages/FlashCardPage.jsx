import { useState } from 'react';
import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';
import { allFlashCards } from '../data/allFlashCards';
import { helperShuffleArray } from '../helpers/arrayHelpers';

const FlashCardPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allFlashCards);
    setAllCards(shuffledCards);
  }

  function handleRadioTitleClick() {
    // prettier-ignore
    const updatedCards = 
    [...allCards].map(card => ({...card, showTitle: true,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleRadioDescriptionClick() {
    const updatedCards = [...allCards].map(card => ({
      ...card,
      showTitle: false,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex(card => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setAllCards(updatedCards);
  }

  return (
    <>
      <Header>Flash Card - Volume 1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>
        <div className="flex flex-row items-center justify-center">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            label="Mostrar Título"
            buttonChecked={radioButtonShowTitle}
            onRadioClick={handleRadioTitleClick}
          />
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            label="Mostrar Descrição"
            buttonChecked={!radioButtonShowTitle}
            onRadioClick={handleRadioDescriptionClick}
          />
        </div>
        <FlashCards>
          {allCards.map(({ id, title, description, showTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
                onToggleFlashCard={handleToggleFlashCard}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
};

export default FlashCardPage;
