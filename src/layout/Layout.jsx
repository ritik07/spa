import { Outlet, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Row, Col } from 'antd';
import { useNavigate } from "react-router-dom";
import React from 'react';

const { Header, Content, Footer } = Layout;

const LayoutWrapper = () => {
	const navigate = useNavigate();

	return (
		<>
			<Layout className="cs-layout">
				<Header className="fix-header zi-5">
					<div className="logo" />
					<Row>
						<Col span={3} onClick={() => navigate('/')}>
							<div className="cs-fw-800 cs-clr-fff cs-fs-16 cs-dis-flex cs-hrz-centeru">
								Doggiesthan
							</div>
						</Col>
						<Col span={18}>
						</Col>

						<Col span={3} onClick={() => navigate('/termsandcondition')}>
							<div className="cs-fw-800 cs-clr-fff">
								Terms & conditions
							</div>
						</Col>
					</Row>
				</Header>
				<Content>
					<div className="cs-container">
						<Outlet />
					</div>
				</Content>
			</Layout>
		</>
	)
};

export default LayoutWrapper;