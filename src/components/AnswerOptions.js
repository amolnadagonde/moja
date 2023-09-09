import React, { useEffect, useState } from "react";

const AnswerOptions = ({ optionList, selectOption }) => {
  const [num, setNum] = useState(null);

  useEffect(() => {
    setNum(null);
  }, [optionList, setNum]);

  const handleSelection = (e) => {
    setNum(e.target.innerText);
    selectOption(e.target.innerText);
  };
  const optionsToRender = optionList.map((optionItem) => {
    return (
      <p
        className={
          parseInt(num) === optionItem ? "option-item selected" : "option-item"
        }
        key={optionItem}
        onClick={handleSelection}
      >
        {optionItem}
      </p>
    );
  });
  return <div className="option-list">{optionsToRender}</div>;
};

export default React.memo(AnswerOptions);
