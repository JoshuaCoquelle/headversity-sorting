import { ChangeEvent, useEffect, useState, FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import PetList from "./PetList";
import { selectPetState } from "./pets.slice";
import { Pet, Pets } from "./pet.types";
import { selectAuthState } from "../auth/auth.slice";

type SortOptions = "name" | "age";

const PetsView: FC = () => {
  const { pets } = useAppSelector(selectPetState);
  const { user } = useAppSelector(selectAuthState);
  const [sortedPets, sortPets] = useState<Pets>(sortPetsByKey(pets, "name"));
  const [sortKey, setSortKey] = useState<SortOptions>("name");

  useEffect(() => {
    sortPets(sortPetsByKey(pets, sortKey));
  }, [pets, sortKey]);

  function handleSortChange(e: ChangeEvent<HTMLSelectElement>) {
    setSortKey(e.target.value as SortOptions);
  }

  function sortPetsByKey(pets: Pets, sortKey: SortOptions) {
    return [...pets].sort((a: Pet, b: Pet) =>
      sortKey === "age" ? a.age - b.age : a.name.localeCompare(b.name)
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography textAlign="center" component="h1" variant="h5" mb={2}>
        {user.name}'s Pets 🐶
      </Typography>

      <Box>
        <label htmlFor="pet-select" style={{ marginRight: 10 }}>
          Sort:
        </label>

        <select name="pets" id="pet-select" onChange={handleSortChange}>
          <option value="name">name</option>
          <option value="age">age</option>
        </select>
      </Box>

      <Grid container spacing={3}>
        <PetList pets={sortedPets} />
      </Grid>
    </Container>
  );
};

export default PetsView;
