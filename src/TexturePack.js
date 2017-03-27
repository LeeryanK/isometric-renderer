class TexturePack {
  constructor(name, blockSize, initialBlocks) {
    this.name = name;
    this.blockSize = blockSize;
    this.blocks = initialBlocks || [];
  }
  
  addBlock(block) {
    this.blocks.push(block);
  }
  
  getBlockById(id) {
    return this.blocks[id];
  }
}

export default TexturePack;
