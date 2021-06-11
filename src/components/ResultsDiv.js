import React from 'react'
import EnemyBox from './EnemyBox.js'

const ResultsDiv = ({creatureData}) => {
	return (
		<div className="resultsDiv">
			<EnemyBox creatureData={creatureData} />
		</div>
	)
}

export default ResultsDiv
