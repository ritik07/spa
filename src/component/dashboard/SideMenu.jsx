import React from 'react'
import DashboardGraph from './DashboardGraph'
import { Row, Col, Card, Slider, Divider, Select, Button } from 'antd'

const SideMenu = ({ filterData, setPriceRange, priceRange, setDiscount, discount, onFilterApply }) => {

	return (
		<div>
			<div className='cs-fw-700 cs-fs-24 cs-bm-10'>
				Data visualization & filters
			</div>

			<Card className='cs-br-10'>
				<DashboardGraph filterData={filterData} />
			</Card>

			<Divider />

			<Card size='small' className='cs-br-10'>
				<div className='cs-label'>
					Price range
				</div>
				<Slider range max={2000} value={priceRange}
					onChange={(e) => setPriceRange(e)} />
			</Card>

			<Card size='small' className='cs-br-10 cs-tm-10'>
				<div className='cs-label'>
					Discount
				</div>
				<Slider max={100} value={discount} onChange={(e) => setDiscount(e)} />
			</Card>

			<div className='cs-dis-flex cs-tm-10'>
				<Button className='cs-rm-10' onClick={onFilterApply}>
					Apply
				</Button>
				<Button>
					Reset
				</Button>
			</div>
			{/* <Card size='small' className='cs-br-10 cs-tm-10'>
				<div className='cs-label cs-bm-5'>
					Category
				</div>
				<Select className='cs-w-100' mode='multiple' placeholder="Cateogry">
					{responseData.filter((item) => item.category).map((data, index) => {
						let unique = onlyUnique
						console.log("unique", unique)
						return (
							<Select.Option value={data.category} key={index}>
								{data.category}
							</Select.Option>
						)
					})}
				</Select>
			</Card> */}
		</div>
	)
}

export default SideMenu