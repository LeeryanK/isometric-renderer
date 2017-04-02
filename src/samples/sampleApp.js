import IsometricRenderer from '../IsometricRenderer';
import warmColors from './warmColors';

const canvas = document.querySelector('#iso-trial');
const blockTypeDisplay = document.querySelector('#bt-display');
// In the future, you can add any pack here.
const texturePack = warmColors;
const testRenderer = new IsometricRenderer(canvas, { x: 5, y: 5, z: 5 }, texturePack);

let blockType = 2;
let blockUnderCursorType = 0;
let cursor = { x: 0, y: 0, z: 0 };

function moveCursorAndUpdateDisplay(direction, amount) {
  if (direction in cursor) {
    if ((amount > 0 && cursor[direction] < testRenderer[direction + 'Size']) || (amount < 0 && cursor[direction] > 0)) {
      testRenderer.setBlockAt(blockUnderCursorType, cursor.x, cursor.y, cursor.z);
      
      cursor[direction] += amount;
      const blockIndex = testRenderer.getIndexForBlockCoords(cursor.x, cursor.y, cursor.z);
      blockUnderCursorType = testRenderer.blocks[blockIndex];
      testRenderer.setBlockAt(1, cursor.x, cursor.y, cursor.z);
    }
  }
}

function placeSelectedBlock() {
  blockUnderCursorType = blockType;
}

function updateBlockSelectionDisplay() {
  blockTypeDisplay.innerHTML = texturePack.getBlockById(blockType).name;
}

window.addEventListener('keypress', function(e) {
  if (e.key === '6' || e.keyCode === 54) {
    moveCursorAndUpdateDisplay('y', 1);
  } else if (e.key === 'y' || e.keyCode === 89) {
    moveCursorAndUpdateDisplay('y', -1);
  } else if (e.key === 'j' || e.keyCode === 74) {
    moveCursorAndUpdateDisplay('z', -1);
  } else if (e.key === 'm' || e.keyCode === 77) {
    moveCursorAndUpdateDisplay('z', 1);
  } else if (e.key === 'g' || e.keyCode === 71) {
    moveCursorAndUpdateDisplay('x', -1);
  } else if (e.key === 'v' || e.keyCode === 86) {
    moveCursorAndUpdateDisplay('x', 1);
  } else if (e.key === 'ArrowDown' || e.keyCode === 40) {
    blockType = 0;
    updateBlockSelectionDisplay();
  } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
    if (blockType > 1) {
      blockType--;
      updateBlockSelectionDisplay();
    }
  } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
    if (blockType < texturePack.blocks.length - 1) {
      blockType++;
      updateBlockSelectionDisplay();
    }
  } else if (e.key === 'ArrowUp' || e.keyCode === 38) {
    placeSelectedBlock();
  }
});
