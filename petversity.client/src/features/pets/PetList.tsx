import { Grid } from "@mui/material";
import PetListItem from "./PetListItem";
import type { Pets } from "./pet.types";

interface PetListProps {
  pets: Pets;
}

const PetList: React.FC<PetListProps> = ({ pets }) => {
  return (
    <Grid container spacing={2} my={4}>
      {pets.map((pet) => (
        <PetListItem pet={pet} key={pet.id} />
      ))}
    </Grid>
  );
};

export default PetList;
