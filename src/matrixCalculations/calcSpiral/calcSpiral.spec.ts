import { calcNGonVertices } from "Src/matrixCalculations/calcNGonVertices"
import { calcSpiral } from "Src/matrixCalculations/calcSpiral"

describe("getSpirals", () => {
  describe("NOT Mirrored", () => {
    it.each`
      vertices | reduction
      ${1}     | ${1}
      ${8}     | ${5}
      ${10}    | ${20}
      ${12}    | ${200}
      ${30}    | ${500}
    `(
      "should end roughly in the middle with $vertices vertices and $reduction reduction",
      ({ vertices, reduction }) => {
        const nGonVertices = calcNGonVertices(vertices)
        const actualSpirals = calcSpiral(nGonVertices, reduction)

        expect(actualSpirals[0]).toEqual({ x: 0, y: 1 })
        expect(actualSpirals[actualSpirals.length - 1].x).toBeLessThanOrEqual(
          0.00001
        )
        expect(actualSpirals[actualSpirals.length - 1].y).toBeLessThanOrEqual(1)

        expect(actualSpirals.length).toEqual(reduction + 1)
      }
    )

    it("should match expected output", () => {
      const nGonVertices = calcNGonVertices(12)
      const actualSpirals = calcSpiral(nGonVertices, 20)

      expect(actualSpirals).toMatchInlineSnapshot(`
        Array [
          Object {
            "x": 0,
            "y": 1,
          },
          Object {
            "x": 0.4749999999999999,
            "y": 0.8227241335952168,
          },
          Object {
            "x": 0.7794228634059948,
            "y": 0.4500000000000001,
          },
          Object {
            "x": 0.85,
            "y": 5.204748896376251e-17,
          },
          Object {
            "x": 0.692820323027551,
            "y": -0.39999999999999986,
          },
          Object {
            "x": 0.3750000000000002,
            "y": -0.6495190528383289,
          },
          Object {
            "x": 3.9658772283535854e-16,
            "y": -0.7,
          },
          Object {
            "x": -0.3249999999999996,
            "y": -0.5629165124598854,
          },
          Object {
            "x": -0.519615242270663,
            "y": -0.30000000000000027,
          },
          Object {
            "x": -0.55,
            "y": -1.0103336092965664e-16,
          },
          Object {
            "x": -0.4330127018922193,
            "y": 0.25000000000000006,
          },
          Object {
            "x": -0.22499999999999984,
            "y": 0.38971143170299744,
          },
          Object {
            "x": 0,
            "y": 0.4,
          },
          Object {
            "x": 0.17499999999999996,
            "y": 0.30310889132455354,
          },
          Object {
            "x": 0.2598076211353316,
            "y": 0.15000000000000005,
          },
          Object {
            "x": 0.25,
            "y": 1.5308084989341915e-17,
          },
          Object {
            "x": 0.1732050807568877,
            "y": -0.09999999999999994,
          },
          Object {
            "x": 0.07500000000000007,
            "y": -0.12990381056766578,
          },
          Object {
            "x": 5.665538897647978e-17,
            "y": -0.09999999999999998,
          },
          Object {
            "x": -0.02499999999999999,
            "y": -0.04330127018922199,
          },
          Object {
            "x": -0,
            "y": -0,
          },
        ]
      `)
    })
  })
  describe("Mirrored", () => {
    it.each`
      vertices | reduction
      ${1}     | ${1}
      ${8}     | ${5}
      ${10}    | ${20}
      ${12}    | ${200}
      ${30}    | ${500}
    `(
      "should end roughly in the middle with $vertices vertices and $reduction reduction",
      ({ vertices, reduction }) => {
        const nGonVertices = calcNGonVertices(vertices)
        const actualSpirals = calcSpiral(nGonVertices, reduction, true)

        expect(actualSpirals[0]).toEqual({ x: 0, y: 1 })
        expect(
          actualSpirals[Math.floor(actualSpirals.length / 2) - 1].x
        ).toBeLessThanOrEqual(0.00001)
        expect(
          actualSpirals[Math.floor(actualSpirals.length / 2) - 1].y
        ).toBeLessThanOrEqual(1)

        expect(actualSpirals.length).toEqual(reduction * 2 + 1)
      }
    )

    it("should match expected output", () => {
      const nGonVertices = calcNGonVertices(12)
      const actualSpirals = calcSpiral(nGonVertices, 20, true)

      expect(actualSpirals).toMatchInlineSnapshot(`
        Array [
          Object {
            "x": 0,
            "y": 1,
          },
          Object {
            "x": 0.4749999999999999,
            "y": 0.8227241335952168,
          },
          Object {
            "x": 0.7794228634059948,
            "y": 0.4500000000000001,
          },
          Object {
            "x": 0.85,
            "y": 5.204748896376251e-17,
          },
          Object {
            "x": 0.692820323027551,
            "y": -0.39999999999999986,
          },
          Object {
            "x": 0.3750000000000002,
            "y": -0.6495190528383289,
          },
          Object {
            "x": 3.9658772283535854e-16,
            "y": -0.7,
          },
          Object {
            "x": -0.3249999999999996,
            "y": -0.5629165124598854,
          },
          Object {
            "x": -0.519615242270663,
            "y": -0.30000000000000027,
          },
          Object {
            "x": -0.55,
            "y": -1.0103336092965664e-16,
          },
          Object {
            "x": -0.4330127018922193,
            "y": 0.25000000000000006,
          },
          Object {
            "x": -0.22499999999999984,
            "y": 0.38971143170299744,
          },
          Object {
            "x": 0,
            "y": 0.4,
          },
          Object {
            "x": 0.17499999999999996,
            "y": 0.30310889132455354,
          },
          Object {
            "x": 0.2598076211353316,
            "y": 0.15000000000000005,
          },
          Object {
            "x": 0.25,
            "y": 1.5308084989341915e-17,
          },
          Object {
            "x": 0.1732050807568877,
            "y": -0.09999999999999994,
          },
          Object {
            "x": 0.07500000000000007,
            "y": -0.12990381056766578,
          },
          Object {
            "x": 5.665538897647978e-17,
            "y": -0.09999999999999998,
          },
          Object {
            "x": -0.02499999999999999,
            "y": -0.04330127018922199,
          },
          Object {
            "x": -0,
            "y": -0,
          },
          Object {
            "x": 0.050000000000000044,
            "y": 9.184850993605156e-18,
          },
          Object {
            "x": 0.08660254037844393,
            "y": -0.05000000000000006,
          },
          Object {
            "x": 0.0749999999999999,
            "y": -0.12990381056766576,
          },
          Object {
            "x": -0,
            "y": -0.19999999999999996,
          },
          Object {
            "x": -0.12499999999999999,
            "y": -0.21650635094610968,
          },
          Object {
            "x": -0.2598076211353316,
            "y": -0.15000000000000005,
          },
          Object {
            "x": -0.3500000000000001,
            "y": -2.1431318985078686e-17,
          },
          Object {
            "x": -0.3464101615137754,
            "y": 0.19999999999999987,
          },
          Object {
            "x": -0.22500000000000012,
            "y": 0.38971143170299727,
          },
          Object {
            "x": -2.83276944882399e-16,
            "y": 0.5,
          },
          Object {
            "x": 0.2749999999999997,
            "y": 0.4763139720814415,
          },
          Object {
            "x": 0.5196152422706631,
            "y": 0.3000000000000003,
          },
          Object {
            "x": 0.6499999999999999,
            "y": 1.194030629168669e-16,
          },
          Object {
            "x": 0.606217782649107,
            "y": -0.35000000000000003,
          },
          Object {
            "x": 0.3749999999999998,
            "y": -0.6495190528383291,
          },
          Object {
            "x": -0,
            "y": -0.8,
          },
          Object {
            "x": -0.425,
            "y": -0.736121593216773,
          },
          Object {
            "x": -0.7794228634059946,
            "y": -0.45000000000000007,
          },
          Object {
            "x": -0.95,
            "y": -5.817072295949927e-17,
          },
          Object {
            "x": -0.8660254037844387,
            "y": 0.4999999999999998,
          },
        ]
      `)
    })
  })
})
