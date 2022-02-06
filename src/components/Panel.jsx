import React from 'react';

const Panel = ({toggleShowOrder}) => (
  <div className='panel'>
    <div className='dashboard'>
      <p className='dashboard-element'>
        Сортировка
      </p>
      <button
        className='btn btn-primary dashboard-element'
        onClick={() => {
          toggleShowOrder('city');
        }}
      >
        по городу
      </button>
      <button
        className='btn btn-primary dashboard-element'
        onClick={() => {
          toggleShowOrder('company');
        }}
      >
        по компании
      </button>
    </div>
  </div>
);

export default Panel;
