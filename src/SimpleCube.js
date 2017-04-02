import BlockTexture from './BlockTexture';

const SimpleCube = {};

SimpleCube.createBlockType = function(name, {lineColor, fillColor}) {
  return new BlockTexture(name, function render(canvas, texturePack, x, y) {
    const BLOCK_SIZE = texturePack.blockSize;
    const ROOT_3_OVER_2 = Math.sqrt(3) / 2;
    const CTX = canvas.getContext('2d');
    
    // Vertices (Given alphabetic names)
    const ax = x;
    const ay = y;
    const bx = ax - BLOCK_SIZE * ROOT_3_OVER_2;
    const by = ay - BLOCK_SIZE / 2;
    const cx = ax;
    const cy = ay - BLOCK_SIZE;
    const dx = ax + BLOCK_SIZE * ROOT_3_OVER_2;
    const dy = by;
    const ex = bx;
    const ey = by + BLOCK_SIZE;
    const fx = ax;
    const fy = ay + BLOCK_SIZE;
    const gx = dx;
    const gy = dy + BLOCK_SIZE;
    
    CTX.strokeStyle = lineColor;
    CTX.fillStyle = fillColor;
    
    if (lineColor) {
      CTX.beginPath();
      CTX.moveTo(bx, by);
      CTX.lineTo(ex, ey);
      CTX.lineTo(fx, fy);
      CTX.lineTo(gx, gy);
      CTX.lineTo(dx, dy);
      CTX.lineTO(cx, cy);
      CTX.lineTo(bx, by);
      
      CTX.lineTo(gx, gy);
      CTX.lineTo(fx, fy);
      CTX.lineTo(cx, cy);
      CTX.lineTo(dx, dy);
      CTX.lineTo(ex, ey);
      
      CTX.stroke();
      CTX.closePath();
    }
    
    if (fillColor) {
      CTX.beginPath();
      CTX.moveTo(bx, by);
      CTX.lineTo(ex, ey);
      CTX.lineTo(fx, fy);
      CTX.lineTo(gx, gy);
      CTX.lineTo(dx, dy);
      CTX.lineTO(cx, cy);
      CTX.lineTo(bx, by);
      
      CTX.fill();
      CTX.closePath();
    }
  });
};

export default SimpleCube;
