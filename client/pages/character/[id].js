import axios from "axios";
import React from "react";
import styled from "styled-components";
import CharacterCard from "../../components/CharacterCard";
import { characters } from "../characters";

function Character({ character, image }) {
  return (
    <CharacterContainer>
      <StarfieldLeft />
      <CharacterCard character={character} imageUrl={image} />
      <StarfieldRight />
    </CharacterContainer>
  );
}

// EXECUTED ON SERVER
export async function getStaticProps(context) {
  const respone = await fetch(
    `${process.env.CHARACTERAPI_BASEPATH}/${context.params.id}`
  ).then((res) => res.json());

  const image = characters.find((item) => item.id == context.params.id).image;

  return {
    props: {
      character: respone.data,
      image,
    },
  };
}

export async function getStaticPaths(context) {
  const totalCharacters = await (
    await axios.get(process.env.SWAPI_BASEPATH)
  ).data.count;

  // @ts-ignore
  const paths = [...Array(totalCharacters).keys()].map((i) => ({
    params: { id: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default Character;

const CharacterContainer = styled.div`
  padding: 40px;
  margin-top: 200px;
`;

const StarfieldLeft = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;

  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg);
`;

const StarfieldRight = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;

  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg);
`;
