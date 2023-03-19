import { List, Modal } from '@mantine/core'

const CharacterDetails = ({ opened, close, character }) => {
	// gets array of keys for character API response
	const characterDetails = Array.from(Object.keys(character))

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
	return (
		<Modal opened={opened} onClose={close} withCloseButton={false}>
			<List style={listItems}>
				{characterDetails
					.filter((detailKey) => character[detailKey].length > 0)
					.filter(
						(detailKey) =>
							!fieldsToExclude.find(
								(keyToExclude) => keyToExclude === detailKey
							)
					)
					.map((detailKey) => {
						const detailName = cleanUpDetailName(detailKey)
						const valueToRender = cleanValuesToRender(character[detailKey])
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

export default CharacterDetails

const listItems = {
	listStyleType: 'none',
	padding: '5px'
}


// TODO: come back and figure out why this modal gets rendered when the first page gets rendered and if you can prevent that
// otherwise, put it back into the original page