import TexturePack from '../TexturePack';
import SimpleCube from '../SimpleCube';

const warmColors = new TexturePack('Warm Colors');

// Opaque
warmColors.addBlock(SimpleCube.createBlockType('Red Cube', '#ff0000'));
warmColors.addBlock(SimpleCube.createBlockType('Orange Block', '#ff7700'));
warmColors.addBlock(SimpleCube.createBlockType('Yellow Block', '#ffff00'));

// Glass
warmColors.addBlock(SimpleCube.createBlock('Red Glass', 'rgba(255, 0, 0, 0.5)'));
warmColors.addBlock(SimpleCube.createBlock('Orange Glass', 'rgba(255, 127, 0, 0.5)'));
warmColors.addBlock(SimpleCube.createBlock('Yellow Glass', 'rgba(255, 255, 0, 0.5)'));

export default warmColors;
