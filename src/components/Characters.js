import { Card, Grid, Group, Text, Modal, Button, List } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { getCharacters } from '../services/swapApi'

const Characters = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		setIsLoading(true)
		getCharacters()
			.then((response) => {
				setCharacters(response.results)
				setIsLoading(false)
			})
			.catch(() => {
				setIsError(true)
			})
	}, [])

	// hard coded array of character meta data we don't want to show users
	const fieldsToExclude = ['created', 'edited', 'url', 'homeworld']

	// remove underscore and capitalise character detail keys to display in list
	const cleanUpDetailName = (detailName) => {
		let cleanedDetailName = detailName.replace('_', ' ')
		return (
			cleanedDetailName.charAt(0).toUpperCase() + cleanedDetailName.slice(1)
		)
	}

	// display number of elements if they are urls eg. number of films or starships
	const cleanValuesToRender = (detail) => {
		if (Array.isArray(detail)) return detail.length
		return detail
	}

    if (isLoading) return <Text weight={500}>Loading...</Text>

    if (isError) return <Text weight={500}>Oops! Something went wrong. Try reloading the page...</Text>

	return (
		<Grid>
			{characters.map((details) => {
				// gets array of keys for character API response
				const characterDetails = Array.from(Object.keys(details))
				return (
					<Grid.Col span={4}>
						<Card shadow='sm' padding='lg' radius='md' withBorder>
							<Group position='apart' mt='md' mb='xs'>
								<Text weight={500}>{details.name}</Text>
							</Group>
							{/* <Text size='sm' color='dimmed'>
                            character details
                        </Text>{' '} */}
							<Modal opened={opened} onClose={close} withCloseButton={false}>
								<List>
									{characterDetails
										.filter((detailKey) => details[detailKey].length > 0)
										.filter(
											(detailKey) =>
												!fieldsToExclude.find(
													(keyToExclude) => keyToExclude === detailKey
												)
										)
										.map((detailKey) => {
											const detailName = cleanUpDetailName(detailKey)
											const valueToRender = cleanValuesToRender(
												details[detailKey]
											)
											return (
												<List.Item>
													{detailName}: {valueToRender}
												</List.Item>
											)
										})}
								</List>
							</Modal>
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
	)
}

export default Characters
