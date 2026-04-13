import { sum } from "../components/sum";

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(323, 4)

    // Assertion
    // expect(result).toBe(7);
    expect(result).toBe(327);
})
