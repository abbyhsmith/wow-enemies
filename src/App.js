import {useState, useEffect} from 'react'
import Head from './components/Head.js'
import InputBar from './components/InputBar.js'
import ResultsDiv from './components/ResultsDiv.js'
import classNames from 'classnames'

function App() {
	const [creatureData, setCreatureData] = useState([])
	const [filled, setFilled] = useState(false)

	const searchCreatures = (creature) => {
			fetch(
				`https://us.api.blizzard.com/data/wow/search/creature?namespace=static-us&name.en_US=${creature}&orderby=name&access_token=USSQo8a8EPLyJ9cHRREir8fmzHNtXYi5Up`
			)
				.then((response) => {
					return response.json()
				})
				.then((creatureDataResponse) => {
					if (creatureDataResponse.results.length > 0) {
						const creatures = creatureDataResponse.results

						creatures.map((creature) => {
							const creatureFamilyId = creature.data.id

							return fetch(
								`https://us.api.blizzard.com/data/wow/creature/${creatureFamilyId}?namespace=static-us&locale=en_US&access_token=USSQo8a8EPLyJ9cHRREir8fmzHNtXYi5Up`
							)
							.then((response) => response.json())
							.then((familyData) => {
								if (familyData.family) {
									return familyData.family.name.value
								} else {
									return ''
								}
							})
							.catch((error) => console.error(error))
						})
						
						const creatureImageRequests = creatures.map((creature) => {
							const creatureImageId = creature.data.creature_displays[0].id

							return fetch(
								`https://us.api.blizzard.com/data/wow/media/creature-display/${creatureImageId}?namespace=static-us&access_token=USSQo8a8EPLyJ9cHRREir8fmzHNtXYi5Up`
							)
							.then((response) => response.json())
							.then((imageData) => {
								if (imageData.assets) {
									return imageData.assets[0].value
								} else {
									return ''
								}
							})
							.catch((error) => console.error(error))
						})

						Promise.all(creatureImageRequests)
							.then((urls) => {
								creatures.forEach((creature, i) => {
									creature.data.imageUrl = urls[i]
								})
								setCreatureData(creatures)
							})
						
					}
				})
	}

	console.log(creatureData)

	const handleFilled = () => {
		if (creatureData.length > 0) {
			setFilled(true)
		} else {
			setFilled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('load', handleFilled)
		return () => {
			window.removeEventListener('load', handleFilled)
		}
	})

	const resultsClasses = classNames({
		'resultsFilled': filled
	})

	return (
		<div className="App">
			<Head />
			<InputBar searchCreatures={searchCreatures} />
			<ResultsDiv creatureData={creatureData} className={resultsClasses} />
		</div>
	);
}

export default App;
