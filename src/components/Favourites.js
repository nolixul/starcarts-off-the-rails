import { Container, Badge, ActionIcon, Grid } from "@mantine/core";
import { useContext } from "react";
import FavouritesContext from "../contexts/Favourites";

const Favourites = () => {
    const { favourites, setFavourites } = useContext(FavouritesContext)

    // this doesn't work.. yet! It's an issue with the event target being passed through, ran out of time to address.
    const handleRemoveFavourite = (toRemove) => {
        const updatedFavourites = favourites.filter((itemInFavourites) => {
            return itemInFavourites !== toRemove})
        setFavourites(updatedFavourites)
    }

    const removeButton = (
        <ActionIcon size="xs" color="blue" radius="xl" variant="transparent" component="button" onClick={(e) => {
            // here's the culprit with removing the favourite
            handleRemoveFavourite(e.target)
        }} >
          <p>X</p>
        </ActionIcon>
      )
      if (favourites === undefined) { return null}
    if (favourites.length < 1) {return null}
   
    return (
        <Container py="md">
            <Grid span={4} gutterMd="xl" justify="center">
            {favourites.map((itemInFavourites) => {
                                console.log(favourites.length)
                return <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: 'pink', deg: 35 }} size="lg" pr={3} rightSection={removeButton}>{itemInFavourites}</Badge>
            })}
            </Grid>
        </Container>
    );
};

export default Favourites;
