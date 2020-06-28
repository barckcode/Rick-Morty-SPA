import React from 'react'
import { Link } from 'react-router-dom'

const ListCharacters = ({ results }) => (
  results.map(character => (
    <article className='characters__card' key={character.id}>
      <Link to={`/Rick-Morty-SPA/characters/${character.id}`}>
        <figure>
          <img
            className='characters__card-img'
            src={character.image}
            alt={character.name}
          />
        </figure>
      </Link>

      <div className='characters__card-description'>
        <h3>{character.name}</h3>
        <div className='description__grid'>
          <p>Species:</p>
          <p>{character.species}</p>
          <p>Status:</p>
          <p>{character.status}</p>
          <p>Gender:</p>
          <p>{character.gender}</p>
        </div>
      </div>
    </article>
  ))
)

export default ListCharacters
