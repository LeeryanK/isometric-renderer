class TexturePack {
  constructor(name, blockSize, initialBlocks) {
    this.name = name;
    this.blockSize = blockSize;
    this.blocks = initialBlocks || [];
    this.initBlockDict();
  }
  
  addBlock(block) {
    this.blocks.push(block);
    this.blockDict[block.name] = this.id_++;
  }
  
  getBlockById(id) {
    return this.blocks[id];
  }
  
  initBlockDict() {
    this.id_ = 1; // Start at 1 because 0 is reserved for nothingness.
    this.blockDict = {};
    
    for (let { name } of this.blocks) {
      this.blockDict[name] = this.id_++;
    }
  }
}

export default TexturePack;
