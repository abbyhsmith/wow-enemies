import React from 'react'

const InputBar = ({setSearchTerm, searchTerm}) => {
	return (
		<div className="inputDiv">
			<input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter enemy name" />
		</div>
	)
}

export default InputBar
