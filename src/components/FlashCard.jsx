const FlashCard = ({
  id,
  title = 'Título do card',
  description = 'Descrição do card que pode conter mais palavras que o título',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) => {
  function handleCardClick(cardId) {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';
  return (
    <div
      className={`shadow-lg p-4 w-80 h-48 cursor-pointer 
                  flex flex-row items-center justify-center my-1
                  font-semibold ${fontSizeClassName} bg-blue-100`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
};

export default FlashCard;
