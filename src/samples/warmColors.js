import TexturePack from '../TexturePack';
import SimpleCube from '../SimpleCube';

const warmColors = new TexturePack('Warm Colors');

// Cursor
warmColors.addBlock(SimpleCube.createBlockType('Cursor', {
  lineColor: '#00aa00',
  fillColor: 'rgba(0, 255, 0, 0.2)'
}));

// Opaque
warmColors.addBlock(SimpleCube.createBlockType('Red Cube', {
  lineColor: '#aa0000',
  fillColor: '#ff0000'
}));
warmColors.addBlock(SimpleCube.createBlockType('Orange Block', {
  lineColor: '#aa4a00',
  fillColor: '#ff7700'
}));
warmColors.addBlock(SimpleCube.createBlockType('Yellow Block', {
  lineColor: '#aaaa00',
  fillColor: '#ffff00'
}));

// Glass
warmColors.addBlock(SimpleCube.createBlock('Red Glass', {
  lineColor: 'rbga(255, 0, 0, 0.8)',
  fillColor: 'rgba(255, 0, 0, 0.3)'
}));
warmColors.addBlock(SimpleCube.createBlock('Orange Glass', {
  lineColor: 'rgba(255, 127, 0, 0.8)',
  fillColor: 'rgba(255, 127, 0, 0.3)'
}));
warmColors.addBlock(SimpleCube.createBlock('Yellow Glass', {
  lineColor: 'rgba(255, 255, 0, 0.8)',
  fillColor: 'rgba(255, 255, 0, 0.3)'
}));

export default warmColors;
