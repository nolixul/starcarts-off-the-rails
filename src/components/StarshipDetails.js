import { List, Modal } from '@mantine/core'

const StarshipDetails = ({ opened, close, starship }) => {
	// gets array of keys for starship API response
	const starshipDetails = Array.from(Object.keys(starship))

	// hard coded array of starship meta data we don't want to show users
	const fieldsToExclude = ['created', 'edited', 'url']

	// remove underscore and capitalise starship detail keys to display in list
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
	return (
		<Modal opened={opened} onClose={close} withCloseButton={false} id={starship.name}>
			<List style={listItems}>
				{starshipDetails
					.filter((detailKey) => starship[detailKey].length > 0)
					.filter(
						(detailKey) =>
							!fieldsToExclude.find(
								(keyToExclude) => keyToExclude === detailKey
							)
					)
					.map((detailKey) => {
						const detailName = cleanUpDetailName(detailKey)
						const valueToRender = cleanValuesToRender(starship[detailKey])
						return (
							<List.Item>
								{detailName}: {valueToRender}
							</List.Item>
						)
					})}
			</List>
		</Modal>
	)
}

export default StarshipDetails

const listItems = {
	listStyleType: 'none',
	padding: '5px'
}
