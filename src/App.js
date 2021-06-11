import './App.scss';
import {useEffect, useState} from 'react'

function App() {
	const [creatureData, setCreatureData] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		if (searchTerm.length >= 2) {
			fetch(
				`https://us.api.blizzard.com/data/wow/search/creature?namespace=static-us&name.en_US=${searchTerm}&orderby=id&_page=1&access_token=USsnG0WSVQC6vzdh93pY4YbhKPBgTYfHhY`
			)
				.then((response) => {
					return response.json()
				})
				.then((creatureDataResponse) => {
					if (creatureDataResponse.results.length > 0) {
						//setCreatureData(response.results)
							creatureDataResponse.results.forEach((result) => {				fetch(
								`https://us.api.blizzard.com/data/wow/media/creature-display/${result.data.id}?namespace=static-classic-us&locale=en_US&access_token=USsnG0WSVQC6vzdh93pY4YbhKPBgTYfHhY`
							)
								.then((response) => {
									return response.json()
								})
								.then((imgData) => {
									if (imgData.assets) {
										result.data.image = imgData.assets[0].value
									}
								})
						})
						setCreatureData(creatureDataResponse.results)
					}
				})
		}
	}, [searchTerm])

	console.log(creatureData)

	return (
		<div className="App">
			<input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
			<div className="resultsDiv">
				{
					creatureData.map((creature) => {
						return (
							<div>
								{creature.data.name.en_US}
							</div>
						)
					})
				}
			</div>
		</div>
	);
}

export default App;
