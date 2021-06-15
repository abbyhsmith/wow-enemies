import React from 'react'
import EnemyBox from './EnemyBox.js'

const ResultsDiv = ({creatureData, resultsClasses}) => {
	return (
		<div className="resultsDiv">
			<EnemyBox creatureData={creatureData} className={resultsClasses} />
		</div>
	)
}

export default ResultsDiv
