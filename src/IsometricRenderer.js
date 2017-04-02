import calculateRenderCoordinates from './calculateRenderCoordinates';

class IsometricRenderer {
  constructor(canvas, dimensions, texturePack) {
    this.canvas = canvas;
    
    this.xSize = dimensions.xSize;
    this.ySize = dimensions.ySize;
    this.zSize = dimensions.zSize;
    this.volume = this.xSize * this.ySize * this.zSize;
    this.blockIndicesRenderingOrder = this.getBlockIndicesRenderingOrder();
    
    this.blocks = new Uint8Array(this.volume);
    this.texturePack = texturePack;
  }
  
  render() {
    for (let index of this.blockIndicesRenderingOrder) {
      const blockId = this.blocks[index];
      const { x: realX, y: realY, z: realZ } = this.getRealCoordinatesInPixelsByIndex(index);
      const { x: renderX, y: renderY } = calculateRenderCoordinates(realX, realY, realZ);
      this.texturePack.getBlockById(blockId).render(this.canvas, this.texturePack, renderX, renderY);
    }
  }
  
  getBlockIndicesOrder() {
    const blockIndices = [...Array(this.volume).keys()];
    const blockCoordinates = blockIndices.map(this.getRealCoordinatesInBlocksByIndex.bind(this));
    const lastBlockCoordinates = blockCoordinates[this.volume - 1];
    const { x: lbx, y: lby, z: lbz } = lastBlockCoordinates;
    const distancesFromLastBlock = blockCoordinates.map(({ x, y, z }) => {
      const dx = lbx - x;
      const dy = lby - y;
      const dz = lbz - z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    });
    
    blockIndices.sort((index1, index2) => {
      return distancesFromLastBlock[index1] - distancesFromLastBlock[index2];
    });
    
    return blockIndices;
  }
  
  getRealCoordinatesInBlocksByIndex(index) {
    return {
      x: Math.floor(index / this.zSize) % this.xSize,
      y: Math.floor(index / this.ySize),
      z: index % this.zSize
    };
  }
  
  getRealCoordinatesInPixelsByIndex(index) {
    const coordsInBlocks = this.getRealCoordinatesInBlocksByIndex(index);
    const blockSize = this.texturePack.blockSize;
    
    return {
      x: coordsInBlocks.x * blockSize,
      y: coordsInBlocks.y * blockSize,
      z: coordsInBlocks.z * blockSize
    };
  }
}

export default IsometricRenderer;
