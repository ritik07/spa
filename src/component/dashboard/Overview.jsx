import React from 'react'
import { Table, Card } from 'antd'
import { DahboardColumn } from '../antd/columns/DashboardColumns'

const Overview = ({ responseData }) => {
	return (
		<div>
			<div className='cs-fw-700 cs-fs-24 cs-bm-10'>
				Overview
			</div>

			<Table dataSource={responseData} columns={DahboardColumn} rowKey="id" />
		</div>
	)
}

export default Overview