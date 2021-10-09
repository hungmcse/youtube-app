import {Layout} from 'antd';
import * as React from 'react';

interface IProps {
	children: React.ReactNode
}

const {Header, Footer, Content} = Layout;

export function MasterPageLayout(props: IProps): React.ReactElement<IProps> {
	return (
		<Layout>
			<Header>
				<div>HungMC</div>
			</Header>
			<Layout>
				<Content>
					{props.children}
				</Content>
			</Layout>
			<Footer>HungMC Test Project</Footer>
		</Layout>
	)
}
