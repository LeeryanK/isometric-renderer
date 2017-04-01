import TexturePack from '../TexturePack';
import SimpleCube from '../SimpleCube';

const warmColors = new TexturePack('Warm Colors');

// Opaque
warmColors.redBlock = SimpleCube.createBlockType('Red Cube', '#ff0000');
warmColors.orangeBlock = SimpleCube.createBlockType('Orange Block', '#ff7700');
warmColors.yellowBlock = SimpleCube.createBlockType('Yellow Block', '#ffff00');

// Glass
warmColors.redGlass = SimpleCube.createBlock('Red Glass', 'rgba(255, 0, 0, 0.5)');
warmColors.orangeGlass = SimpleCube.createBlock('Orange Glass', 'rgba(255, 127, 0, 0.5)');
warmColors.yellowGlass = SimpleCube.createBlock('Yellow Glass', 'rgba(255, 255, 0, 0.5)');

export default warmColors;
