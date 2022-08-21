import React, { useEffect, useState } from 'react'
import { Row, Col, Spin } from 'antd'
import Overview from '../../component/dashboard/Overview'
import SideMenu from '../../component/dashboard/SideMenu'
import axios from 'axios';

const Dashboard = () => {

	const [responseData, setResponseData] = useState(false)
	const [apiError, setApiError] = useState(null)


	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			const response = await axios.get(`https://dummyjson.com/products?skip=20&limit=10`)
			setResponseData(response.data.products)
			setApiError(null)
		} catch (err) {
			setApiError(err)
		}
	}

	return (
		responseData ?
			<Row>
				<Col lg={6}>
					<SideMenu responseData={responseData} />
				</Col>

				<Col lg={18}>
					<Overview responseData={responseData} />
				</Col>
			</Row>
			:
			<div className='cs-vh100 cs-vt-center cs-hrz-center cs-dis-flex'>
				<Spin />
			</div>
	)
}

export default Dashboard