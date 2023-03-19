import { Card, Grid, Group, Text } from '@mantine/core'

const Films = () => {
	return (
		<Grid>
			<Grid.Col span={4}>
				<Card shadow='sm' padding='lg' radius='md' withBorder>
					<Group position='apart' mt='md' mb='xs'>
						<Text weight={500}>Film Title</Text>
					</Group>
					<Text size='sm' color='dimmed'>
						Film details
					</Text>
				</Card>
			</Grid.Col>
		</Grid>
	)
}

export default Films
