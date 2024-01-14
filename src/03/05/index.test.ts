import { HttpError, RangeError, add } from ".";

describe('add', () => {
    test('1+2=3', () => {
        expect(add(1,2)).toBe(3)
    })
    test('合計の上限は100', () => {
        expect(add(70, 80)).toBe(100)
    })
    test('入力値が0〜100の間でなければ例外', () => {
        expect(() => add(101,0)).toThrow(RangeError)
        expect(() => add(-1,100)).not.toThrow(HttpError)
        expect(() => add(0,101)).toThrow(Error)
        expect(() => add(100,-1)).toThrow('入力値は0〜100の間で入力してください')
    })
})

