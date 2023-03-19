import { Card, Grid, Group, Text, Modal, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const Characters = () => {
    const [opened, { open, close }] = useDisclosure(false)
    
    return (
		<Grid>
			<Grid.Col span={4}>
				<Card shadow='sm' padding='lg' radius='md' withBorder>
					<Group position='apart' mt='md' mb='xs'>
						<Text weight={500}>Character Title</Text>
					</Group>
					<Text size='sm' color='dimmed'>
						Character details
					</Text>
				</Card>
                <Modal opened={opened} onClose={close} withCloseButton={false}>
						Modal without header, press escape or click on overlay to close
					</Modal>
					<Group position='center'>
						<Button onClick={open} color='pink'>View details</Button>
					</Group>
			</Grid.Col>
		</Grid>
    );
};

export default Characters;