import React from 'react';
import LayoutDoc from './layout';
import ContainerDoc from './layout/container';

const Sections = [
	{
		name: 'Layout',
		component: LayoutDoc,
		sections: [
			{
				name: 'Container',
				component: ContainerDoc,
			},
			{
				name: 'Test',
				component: () => <div>test</div>
			}
		],
	},
];

export default Sections;
