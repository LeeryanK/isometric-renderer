import calculateRenderCoordinates from './calculateRenderCoordinates';

class IsometricRenderer {
  constructor(canvas, origin, dimensions, textures) {
    this.canvas = canvas;
    this.origin = origin;
    this.xSize = dimensions.xSize;
    this.ySize = dimensions.ySize;
    this.zSize = dimensions.zSize;
    this.volume = this.xSize * this.ySize * this.zSize;
    this.blocks = new Uint8Array(this.volume);
    this.textures = textures;
  }
  
  render() {
    const blockIndicesOrder = this.getBlockIndicesOrder();
    for (let index of blockIndicesOrder) {
      const blockId = this.blocks[index];
      const { realX, realY, realZ } = this.getCoordinatesByIndex(index);
      const { renderX, renderY } = calculateRenderCoordinates(realX, realY, realZ);
      this.textures.getRenderer(blockId).render(this.canvas, renderX, renderY);
    }
  }
  
  getBlockIndicesOrder() {
    // TODO
  }
  
  getCoordinatesByIndex(index) {
    // TODO
  }
}

export default IsometricRender;
