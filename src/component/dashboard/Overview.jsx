import React from 'react'
import { Table, Pagination } from 'antd'
import { DahboardColumn } from '../antd/columns/DashboardColumns'

const Overview = ({ filterData, current, total, pagination, resetFilters }) => {
	return (
		<div>
			<div className='cs-fw-700 cs-fs-24 cs-bm-10'>
				Overview
			</div>
			{filterData.length ?
				<div>
					<Table dataSource={filterData}
						columns={DahboardColumn}
						rowKey="id"
						pagination={false}
						scroll={{ y: 'calc(100vh - 285px)', x: 'calc(700px + 50%)' }} />

					<Pagination className="cs-tm-10 cs-bm-10" current={current}
						pageSize={10} total={total} onChange={pagination}
						showSizeChanger={false} />
				</div> :
				<div className='cs-vh60  cs-vt-center cs-hrz-center cs-dis-flex'>
					<div className='cs-fs-20 cs-fw-600'>
						No data found on selected fitlers
						<p className='cs-font-12 cs-vt-center cs-hrz-center cs-dis-flex cs-cursor-pointer' onClick={resetFilters}>
							Reset filters?
						</p>
					</div>
				</div>}
		</div>
	)
}

export default Overview