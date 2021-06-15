import React from 'react'

const EnemyBox = ({creatureData}) => {
	return (
		<div className="enemy">
			{
				creatureData.map((creature, i) => {
					console.log(creature)
					return (
						<div className="enemyBox" key={`creature-${i}`}>
							<img src={creature.data.imageUrl} alt={creature.data.name.en_US} />
							<div>Name: {creature.data.name.en_US}</div>
							{ Boolean(creature.data.type) &&
								<div>Type: {creature.data.type.name.en_US}</div>
							}
							{ Boolean(creature.data.family) &&
								<div>Family: {creature.data.family.name.en_US}</div>
							}
							<div>Is Tameable: {creature.data.is_tameable ? 'Tameable' : 'Not tameable'}</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default EnemyBox
