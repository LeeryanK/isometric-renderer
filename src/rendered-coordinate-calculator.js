const ROOT_3_DIVIDED_BY_2 = Math.sqrt(3) / 2;

function calculateRenderedX(x, y, z) {
  return z * ROOT_3_DIVIDED_BY_2 - x * ROOT_3_DIVIDED_BY_2;
}

function calculateRenderedY(x, y, z) {
  return y - x / 2 - z / 2;
}

export { calculateRenderedX, calculateRenderedY };
