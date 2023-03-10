import React from 'react'
import './style.css';

const Page = ({teamsPerPage, totalTeams, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalTeams / teamsPerPage); i++){
    pageNumbers.push(i);
  }
  return (
    <nav className='contianer'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => {paginate(number);}}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Page