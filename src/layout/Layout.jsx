import { Outlet, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Row, Col } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const LayoutWrapper = () => {
	return (
		<>
			<Layout className="cs-layout">
				<Header className="fix-header zi-5">
					<div className="logo" />
					<Row>
						<Col span={24}>
							<div className="cs-fw-800 cs-clr-fff cs-fs-16 cs-dis-flex cs-hrz-centeru">
								Doggiesthan
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