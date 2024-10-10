// 円の面積
export function circle(radius) {
  if (radius > 0) {
    return Math.PI * radius ** 2;
  }
}

// 三角形の面積
export function triangle(base, height) {
  if (base > 0 && height > 0) {
    return base * height / 2;
  }
};

// 四角形の面積
export function square(base, height) {
  if (base > 0 && height > 0) {
    return base * height;
  }
}
