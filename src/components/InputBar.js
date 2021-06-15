import React, {useState} from 'react'

const InputBar = ({searchCreatures}) => {
	const [searchTerm, setSearchTerm] = useState('')
	
	const handleSubmit = () => {
		searchCreatures(searchTerm)
	}
	
	const handleKeyDown = (key) => {
		if (key === 'Enter') {
			searchCreatures(searchTerm)
		}
	}

	return (
		<div className="inputDiv">
			<input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => handleKeyDown(e.key)} placeholder="Enter enemy name" />
			<button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
		</div>
	)
}

export default InputBar
