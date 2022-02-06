import React from 'react';
import sortBy from '../utilities/sort.js';
import Card from './Card.jsx';

const Board = ({users, order}) => {
  const cards = users ? (
    <ul className='cards-container'>
      {users.sort(sortBy[order])
            .map((user) => (
              <li key={user.id} className='board-element'>
                <Card user={user} />
              </li>
            ))
      }
    </ul>
  ) : null;

  const usersCountEntry = users ? (
    <p className='users-count-entry board-element'>
      Найдено {users.length} пользователей
    </p>
  ) : null;

  return (
    <div className='board'>
      <div className='board-content-wrapper'>
        <h1 className='board-element'>Список пользователей</h1>
        {cards}
        {usersCountEntry}
      </div>
    </div>
  );  
};

export default Board;
