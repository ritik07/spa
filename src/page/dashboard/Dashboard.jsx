import React, { useEffect, useState } from 'react'
import { Row, Col, Spin, Table, Pagination } from 'antd'
// import Overview from '../../component/dashboard/Overview'
import SideMenu from '../../component/dashboard/SideMenu'
import axios from 'axios';
import { DahboardColumn } from '../../component/antd/columns/DashboardColumns';

const Dashboard = () => {

	const [responseData, setResponseData] = useState(false)
	const [apiError, setApiError] = useState(null)
	const [current, setCurrent] = useState(1)
	const [total, setTotal] = useState(1)
	const [filterData, setFilterData] = useState(false)
	const [priceRange, setPriceRange] = useState(undefined)
	const [discount, setDiscount] = useState(false)

	useEffect(() => {
		fetchData()
	}, [current])

	const fetchData = async () => {
		setResponseData(false)
		setFilterData(false)
		try {
			const response = await axios.get(`https://dummyjson.com/products?skip=${(100 - current * 10)}&limit=10`)
			setResponseData(response.data.products)
			setFilterData(response.data.products)
			setTotal(response.data.total)
			setApiError(null)
		} catch (err) {
			setApiError(err)
		}
	}

	const pagination = (page) => {
		setCurrent(page)
	}

	const onFilterApply = () => {
		setFilterData(responseData?.filter(response =>
			(priceRange ? (response.price >= priceRange[0] && response.price <= priceRange[1]) : true)
			&&
			(discount ? (response.discountPercentage <= discount) : true)
		))
	}

	return (
		filterData ?
			<Row gutter={[20, 20]}>
				<Col lg={6}>
					<SideMenu filterData={filterData}
						setPriceRange={(value) => setPriceRange(value)} priceRange={priceRange}
						setDiscount={(value) => setDiscount(value)} discount={discount} onFilterApply={onFilterApply} />
				</Col>

				<Col lg={18}>
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
						<div className='cs-fs-20 cs-fw-600 cs-vt-center cs-hrz-center cs-dis-flex cs-vh60'>
							No data found on selected fitlers
						</div>}
				</Col>

			</Row>
			:
			<div className='cs-vh100 cs-vt-center cs-hrz-center cs-dis-flex'>
				<Spin />
			</div>
	)
}

export default Dashboard