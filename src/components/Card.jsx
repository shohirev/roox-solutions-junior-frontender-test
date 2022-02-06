import React, {useContext} from 'react';
import {StateToggleContext} from '../contexts/index.jsx';

const Card = ({user}) => {
  const { setCurrentUserId, setUIProcess } = useContext(StateToggleContext);

  return (
    <div className="card">
      <div className='card-data-wrapper'>
        <p className='card-element'>
          <span>ФИО: </span>
          <span>{user.name}</span>
        </p>
        <p className='card-element'>
          <span>город: </span>
          <span>{user.address.city}</span>
        </p>
        <p className='card-element'>
          <span>компания: </span>
          <span>{user.company.name}</span>
        </p>
      </div>
      <div className='card-link-wrapper'>
        <a
          href='#'
          role='button'
          className='btn-card card-element'
          onClick={() => {
            setCurrentUserId(user.id);
            setUIProcess('showProfile');
          }}
        >
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default Card;
