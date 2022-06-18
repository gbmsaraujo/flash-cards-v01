const FlashCards = ({ children: flashcards }) => {
  return (
    <div className="border p-2 flex flex-row items-center justify-center flex-wrap gap-2">
      {flashcards}
    </div>
  );
};

export default FlashCards;
