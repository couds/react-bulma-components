import React from 'react';

import LayoutDoc from './layout';
import ContainerDoc from './layout/container';
import LevelDoc from './layout/level';

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
				name: 'Level',
				component: LevelDoc,
			}
		],
	},
];

export default Sections;
