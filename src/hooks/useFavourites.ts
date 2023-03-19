import { useContext } from 'react'
import FavouritesContext from '../contexts/Favourites'

const useFavourites = () => {
	const { favourites, setFavourites } = useContext(FavouritesContext)

	const handleAddFavourite = (toAdd: string) => {
        // don't let user add favourite more than once
		if (!favourites.includes(toAdd)) {
			const updatedFavourites = [...favourites, toAdd]
			setFavourites(updatedFavourites)
		}
	}

	return { handleAddFavourite, favourites, setFavourites }
}

export default useFavourites
