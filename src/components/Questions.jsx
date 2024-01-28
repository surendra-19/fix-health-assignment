import React, { useState } from 'react';
import '../styles/Questions.css';
import QuestionData from '../Data.jsx';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Questions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="questionContainer">
      <div className="questionWrapper">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <ul>
          {QuestionData.map((qna, index) => (
            <li key={index} className={expandedIndex === index ? 'active' : ''} onClick={() => handleToggle(index)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{qna.question}</strong>
                {expandedIndex === index ? (
                  <RemoveCircleOutlineIcon className="icon" />
                ) : (
                  <ControlPointIcon className="icon" />
                )}
              </div>
              <div className={`answer ${expandedIndex === index ? 'active' : ''}`}>
                <p>{qna.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
