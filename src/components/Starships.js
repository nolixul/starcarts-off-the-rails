import { Card, Grid, Group, Text } from '@mantine/core'

const Starships = () => {
    return (
		<Grid>
			<Grid.Col span={4}>
				<Card shadow='sm' padding='lg' radius='md' withBorder>
					<Group position='apart' mt='md' mb='xs'>
						<Text weight={500}>Starship Title</Text>
					</Group>
					<Text size='sm' color='dimmed'>
						Starship details
					</Text>
				</Card>
			</Grid.Col>
		</Grid>
    );
};

export default Starships;