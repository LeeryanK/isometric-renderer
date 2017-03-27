const ROOT_3_DIVIDED_BY_2 = Math.sqrt(3) / 2;

function calculateRenderCoordinates(x, y, z) {
  return {
    x: z * ROOT_3_DIVIDED_BY_2 - x * ROOT_3_DIVIDED_BY_2,
    y: y - x / 2 - z / 2
  };
}

export default calculateRenderCoordinates;
