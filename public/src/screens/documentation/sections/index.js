import LayoutDoc from './layout';
import ContainerDoc from './layout/container';
import LevelDoc from './layout/level';
import MediaDoc from './layout/media';

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
      },
      {
        name: 'Media Object',
        component: MediaDoc,
      },
    ],
  },
];

export default Sections;
