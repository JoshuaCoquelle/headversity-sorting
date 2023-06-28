import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import type { Pet } from "./pet.types";

interface PetListItemProps {
  pet: Pet;
}

const PetListItem: React.FC<PetListItemProps> = ({ pet }) => {
  const getDogOrCatImage = (species: Pet["species"]): string => {
    return species === "dog"
      ? "https://placedog.net/100/100?r"
      : "http://placekitten.com/100/100?r";
  };

  return (
    <Grid item xs={12}>
      <Card
        elevation={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography component="p" variant="h6">
            {pet.name} - {pet.age}yrs
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {pet.species}
          </Typography>
        </CardContent>

        <CardContent>
          <Box display="flex">
            <img
              className="w-8 h-8 rounded-full"
              src={getDogOrCatImage(pet.species)}
              alt="Animal age"
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PetListItem;
