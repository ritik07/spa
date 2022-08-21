import React from 'react'
import { Table, Card, Pagination } from 'antd'
import { DahboardColumn } from '../antd/columns/DashboardColumns'

const Overview = ({ responseData }) => {
	return (
		<div>
			<div className='cs-fw-700 cs-fs-24 cs-bm-10'>
				Overview
			</div>

			<Table dataSource={responseData} columns={DahboardColumn} rowKey="id" pagination={false} />
			{/* <Pagination className="frz-tm-10 frz-bm-10" current={current}
				pageSize={50} total={state.total} onChange={pagination}
				showSizeChanger={false} /> */}
		</div>
	)
}

export default Overview