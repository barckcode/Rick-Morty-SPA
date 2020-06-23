import React from 'react'

const ListCharacters = ({ data }) => (
  data.map(character => (
    <article className='characters__card' key={character.id}>
      <figure>
        <img
          className='characters__card-img'
          src={character.image}
          alt={character.name}
        />
      </figure>

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
