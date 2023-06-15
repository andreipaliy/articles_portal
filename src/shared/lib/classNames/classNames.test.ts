import { classNames } from './classNames'

describe('classNames function', () => {
    test('should return only the classes passed using cls parameter', () => {
        expect(classNames('testString', {}, [])).toBe('testString')
    })

    test(
        'should return only the classes passed using modes with true value',
        () => {
            expect(classNames('', { testString: true }, [])).toBe('testString')
        },
    )

    test(
        'should return only the classes passed using additional parameter',
        () => {
            expect(classNames('', {}, ['testString1', 'testString2']))
                .toBe('testString1 testString2')
        },
    )

    test(
        'should\' include undefined & null passed in additional parameter',
        () => {
            expect(classNames('', {}, [undefined, 'testString', null]))
                .toBe('testString')
        },
    )

    test(
        'should include class from modes parameter based on it true value',
        () => {
            expect(classNames('', {
                one: true, two: false, three: 'good', four: undefined,
            }, [])).toBe('one three')
        },
    )
})
