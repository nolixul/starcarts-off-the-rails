import { Card, Grid, Group, Text, Modal, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const Films = () => {
	const [opened, { open, close }] = useDisclosure(false)

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
					<Modal opened={opened} onClose={close} withCloseButton={false}>
						Modal without header, press escape or click on overlay to close
					</Modal>
					<Group position='center'>
						<Button onClick={open} color='pink'>View details</Button>
					</Group>
				</Card>
			</Grid.Col>
		</Grid>
	)
}

export default Films
