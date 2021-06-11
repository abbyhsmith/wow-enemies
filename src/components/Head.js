import React from 'react'
import Logo from '../images/wowlogo.webp'

const Head = () => {
	return (
		<div className="head">
			<img src={Logo} alt="World of Warcraft logo" />
			<h1>Enemy Search</h1>
		</div>
	)
}

export default Head
