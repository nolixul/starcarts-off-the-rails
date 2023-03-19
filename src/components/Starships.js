import { Card, Grid, Group, Text, Button, Flex, Pagination } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { getStarships } from '../services/swapApi'
import StarshipDetails from './StarshipDetails'
import Favourites from './Favourites'
import useFavourites from '../hooks/useFavourites'

const Starships = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [starships, setStarships] = useState([])
    const [count, setCount] = useState(0)
    const [activePage, setActivePage] = useState(1)
    const [modalData, setModalData] = useState({})

    const { handleAddFavourite } = useFavourites()

	useEffect(() => {
		setIsLoading(true)
		getStarships(activePage)
			.then((response) => {
				setStarships(response.results)
                setCount(response.count)
				setIsLoading(false)
			})
			.catch((error) => {
				setIsError(true)
			})
	}, [activePage])

	if (isLoading) return <Text weight={500}>Loading...</Text>

	if (isError)
		return (
			<Text weight={500}>
				Oops! Something went wrong. Try reloading the page...
			</Text>
		)

	return (
        <Flex direction='column' align='center' gap='md'>
                 <Favourites />
		<Grid>
			{starships.map((starship) => {
				return (
					<Grid.Col span={4}>
						<Card shadow='sm' padding='lg' radius='md' withBorder>
							<Group position='apart' mt='md' mb='xs'>
								<Text weight={500}>{starship.name}</Text>
							</Group>
                            <Text size='sm' color='dimmed'>
								{starship.model}
							</Text>
							<Group position='center'>
								<Button onClick={() => {
											setModalData(starship)
											open()
										}} color='pink'>
									View details
								</Button>
                                <Button color='pink' onClick={() => {
                                         console.log(typeof favourites, 'typeof favourites in onclick')
                                    handleAddFavourite(starship.name)
                                }}>Add to favourites</Button>
							</Group>
						</Card>
					</Grid.Col>
				)
			})}
		</Grid>
        <StarshipDetails opened={opened} close={close} starship={modalData} />
        <Pagination total={Math.ceil(count / 10)} color='pink' value={activePage} onChange={setActivePage} withEdges />
        </Flex>
	)
}

export default Starships
