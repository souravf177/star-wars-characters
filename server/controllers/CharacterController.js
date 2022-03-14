import axios from "axios";

export const character_details = async (req, res) => {
  const id = req.params.id;

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
  } = (await axios.get(`${process.env.CHARACTER_API_URI}/${id}`)).data;

  const filmsPromises = [];
  films.forEach((url) => {
    filmsPromises.push(axios.get(url));
  });
  const filmsData = await (
    await Promise.all(filmsPromises)
  ).map((film) => {
    return {
      title: film.data.title,
      director: film.data.director,
      producers: film.data.producer,
      releaseDate: film.data.release_date,
    };
  });

  const homeWorldData = await (await axios.get(homeworld)).data;
  let spiciesData;
  if (species.length > 0) {
    spiciesData = await (await axios.get(species[0])).data;
  }

  res.status(200).json({
    status: 200,
    data: {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      birth_year,
      gender,
      homePlanet: {
        title: homeWorldData.name,
        terrain: homeWorldData.terrain,
        population: homeWorldData.population,
      },
      species: spiciesData
        ? {
            name: spiciesData.name,
            average_lifeSpan: spiciesData.average_lifespan,
            classification: spiciesData.classification,
            language: spiciesData.language,
          }
        : {},
      filmsData,
    },
  });
};
