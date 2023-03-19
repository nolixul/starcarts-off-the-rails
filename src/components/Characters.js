import {
	Card,
	Grid,
	Group,
	Text,
	Button,
	Pagination,
	Flex
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { getCharacters } from '../services/swapApi'
import CharacterDetails from './CharacterDetails'

const Characters = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [characters, setCharacters] = useState([])
    const [count, setCount] = useState(0)
    const [activePage, setActivePage] = useState(1)

	useEffect(() => {
		setIsLoading(true)
		getCharacters(activePage)
			.then((response) => {
				setCharacters(response.results)
                setCount(response.count)
				setIsLoading(false)
			})
			.catch(() => {
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
			<Grid>
				{characters.map((character) => {
					return (
						<Grid.Col span={4}>
							<Card shadow='sm' padding='lg' radius='md' withBorder>
								<Group position='apart' mt='md' mb='xs'>
									<Text weight={500}>{character.name}</Text>
								</Group>
                                <CharacterDetails opened={opened} close={close} character={character} />
								<Group position='center'>
									<Button onClick={open} color='pink'>
										View details
									</Button>
								</Group>
							</Card>
						</Grid.Col>
					)
				})}
			</Grid>
			<Pagination total={Math.ceil(count / 10)} color='pink' value={activePage} onChange={setActivePage} withEdges />
		</Flex>
	)
}

export default Characters
