import './App.css'
import Header from './components/Header'
import { AppShell, MantineProvider } from '@mantine/core'
import { Routes, Route } from 'react-router-dom'
import Films from './components/Films'
import Characters from './components/Characters'
import Starships from './components/Starships'
import React from 'react'
import { useState } from 'react'
import FavouritesContext from './contexts/Favourites'

function App() {
	const [favourites, setFavourites] = useState([])

	return (
		<div className='App'>
			<MantineProvider
				theme={{ colorScheme: 'dark' }}
				withGlobalStyles
				withNormalizeCSS
			>
				<FavouritesContext.Provider value={{favourites, setFavourites}}>
					<AppShell padding='md'>
						<Header />
						<Routes>
							<Route path='/' element={<Films />} />
							<Route path='characters' element={<Characters />} />
							<Route path='starships' element={<Starships />} />
						</Routes>
					</AppShell>
				</FavouritesContext.Provider>
			</MantineProvider>
		</div>
	)
}

export default App
