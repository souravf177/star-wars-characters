import Head from "next/head";
import React from "react";
import styled from "styled-components";

function CharacterCard({ character, imageUrl }) {
  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <CardContainer>
        <img src={imageUrl} alt="" />
        <CharacterInfo>
          <h1>{character.name}</h1>
          <h4>HEIGHT</h4>
          <span>{character.height} cm</span>
          <h4>MASS</h4>
          <span>{character.mass} pounds</span>
          <h4>HAIR COLOR</h4>
          <span>{character.hair_color}</span>
          <h4>SKIN COLOR</h4>
          <span>{character.skin_color}</span>
          <h4>BIRTH YEAR</h4>
          <span>{character.birth_year}</span>
          <h4>GENDER</h4>
          <span>{character.gender}</span>
          <h4>Films:</h4>
          {character.filmsData.map((film, index) => {
            return (
              <>
                <h4>
                  {index + 1}. {film.title}
                </h4>
                <p>
                  Director: {film.director}, Producers: {film.producers},
                  Release Date: {film.releaseDate}
                  <br />
                </p>
              </>
            );
          })}
          <h4>HOME PLANET</h4>
          <p>
            Title: {character.homePlanet.title}, Terrain:{" "}
            {character.homePlanet.terrain}, population:{" "}
            {character.homePlanet.population}
          </p>
          {character.species && (
            <>
              {" "}
              <h4>SPECIES</h4>
              <p>
                Name:{character.species.name}, Avaerage Lifspan:
                {character.species.average_lifeSpan}, Classification:
                {character.species.classification}, Language:
                {character.species.language}
              </p>
            </>
          )}
        </CharacterInfo>
      </CardContainer>
    </>
  );
}

export default CharacterCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;

  > img {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 50vw;
    border-right: 2px solid #9e4f60;
    background-color: #151515;
  }
`;

const CharacterInfo = styled.div`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 30vw;
  padding: 20px;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/bg_hash@2x-bd5b31294ea9.png");
  background-size: 7px;
  background-repeat: repeat-x;
  background-position: top left;
  background-color: #282727;

  > h1 {
    width: 100%;
    margin: 0 auto;
    color: #ddd;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  > h4 {
    color: #ddd;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  > p {
    color: #ddd;
    margin-left: 1rem;
    transition: color 125ms;
    text-transform: capitalize;
    text-decoration: none;

    ${
      "" /* :hover {
      color: rgb(183, 104, 121);
      cursor: pointer;
    } */
    }
  }

  > span {
    color: #aaa;
    text-transform: capitalize;
  }
`;
