import React from 'react'

const EnemyBox = ({creatureData}) => {
	return (
		<div className="enemyBox">
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
	)
}

export default EnemyBox
