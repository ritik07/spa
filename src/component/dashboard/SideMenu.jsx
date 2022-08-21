import React from 'react'
import DashboardGraph from './DashboardGraph'

const SideMenu = ({ responseData }) => {
	return (
		<div>
			<DashboardGraph responseData={responseData} />
		</div>
	)
}

export default SideMenu