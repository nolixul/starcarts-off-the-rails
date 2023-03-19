import { useContext } from "react"
import FavouritesContext from "../contexts/Favourites"

const useFavourites = () => {
    const { favourites, setFavourites } = useContext(FavouritesContext)

    const handleAddFavourite = (toAdd: string) => {
        const updatedFavourites = [...favourites, toAdd];
        setFavourites(updatedFavourites)
    }

    return { handleAddFavourite, favourites, setFavourites }
}


export default useFavourites
