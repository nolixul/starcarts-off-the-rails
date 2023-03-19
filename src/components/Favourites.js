import { Container, Badge, ActionIcon, Grid } from "@mantine/core";
import { useContext } from "react";
import FavouritesContext from "../contexts/Favourites";

const Favourites = () => {
    const { favourites, setFavourites } = useContext(FavouritesContext)

    const handleRemoveFavourite = (toRemove) => {
        const updatedFavourites = favourites.filter((itemInFavourites) => {
            console.log(itemInFavourites, toRemove, 'itemInFavourites, item to remove')
            console.log(itemInFavourites !== toRemove, 'itemInFavourites !== toRemove')
            return itemInFavourites !== toRemove})
        console.log(updatedFavourites)
        setFavourites(updatedFavourites)
    }

    const removeButton = (
        <ActionIcon size="xs" color="blue" radius="xl" variant="transparent" component="button" onClick={(e) => {
            console.log(e, 'event in onclick in favourite badge')
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
