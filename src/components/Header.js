import { useState } from 'react'
import { Center, Stack, Tabs } from '@mantine/core'
import { Link } from 'react-router-dom'

const Header = () => {
	const [activeTab, setActiveTab] = useState('films')

	return (
		<Stack>
			<h1>Star Cart 🚀</h1>
			<Center>
				<Tabs
					value={activeTab}
					onTabChange={setActiveTab}
					color='pink'
					radius='sm'
				>
					<Tabs.List>
						<Link to='/' style={navLink}>
							<Tabs.Tab value='films'>Films</Tabs.Tab>
						</Link>
						<Link to='/characters' style={navLink}>
							<Tabs.Tab value='characters'>Characters</Tabs.Tab>
						</Link>
						<Link to='/starships' style={navLink}>
							<Tabs.Tab value='starships'>Starships</Tabs.Tab>
						</Link>
					</Tabs.List>

					<Tabs.Panel value='films'></Tabs.Panel>
					<Tabs.Panel value='characters'></Tabs.Panel>
					<Tabs.Panel value='starships'></Tabs.Panel>
				</Tabs>
			</Center>
		</Stack>
	)
}

export default Header

const navLink = {
	textDecoration: 'none'
}
