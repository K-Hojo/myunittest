export function add(a: number, b: number) {
  checkRange(a)
  checkRange(b)
  const sum = a + b;
  if (sum > 100) {
    return 100
  }
  return a + b
}
add(1, 2);

function checkRange(num: number) {
  if (num < 0 || num > 100) {
      throw new RangeError('入力値は0〜100の間で入力してください')
  }
}

export class RangeError extends Error {}
export class HttpError extends Error {}