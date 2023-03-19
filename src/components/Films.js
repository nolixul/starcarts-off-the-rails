import { Card, Grid, Group, Text, Modal, Button, List } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { getFilms } from '../services/swapApi'

const Films = () => {
	const [opened, { open, close }] = useDisclosure(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [films, setFilms] = useState([])
    
    // fetch films once on render
    useEffect(() => {
        setIsLoading(true)
        getFilms().then((response) => {
            setFilms(response.results)
            setIsLoading(false)
        }).catch(() => {
            setIsError(true)
        })
    }, [])

    if (isLoading) return <Text weight={500}>Loading...</Text>

    if (isError) return <Text weight={500}>Oops! Something went wrong. Try reloading the page...</Text>

	return (
		<Grid>
			{films.map((film) => {
				return (
					<Grid.Col span={4}>
						<Card shadow='sm' padding='lg' radius='md' withBorder>
							<Group position='apart' mt='md' mb='xs'>
								<Text weight={500}>{film.title}</Text>
							</Group>
							<Text size='sm' color='dimmed'>
								{film.opening_crawl}
							</Text>
							<Modal opened={opened} onClose={close} withCloseButton={false}>
								<List style={listItems}>
									<List.Item><strong>Directed by:</strong> {film.director}</List.Item>
									<List.Item><strong>Opening crawl:</strong> {film.opening_crawl}</List.Item>
									<List.Item><strong>Release date:</strong> {film.release_date}</List.Item>
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

export default Films

const listItems = {
    listStyleType: 'none',
    padding: '5px'
}
