import { DoEncoding, NearestSquare, NormalizeString } from "../src/util.js";

describe("utility functions", () => {
    const loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget viverra massa. Aenean dignissim sapien non ornare fringilla.'
    let normalized: string;
    let encoded: string;

    beforeAll(() => {
        normalized = NormalizeString(loremipsum)
        encoded = DoEncoding(normalized);
    })


    it('should normalize string to be encoded', () => {
        expect(normalized).toBe('loremipsumdolorsitametconsecteturadipiscingelitdonecegetviverram');
    })

    it('should calculate nearest perfect square', () => {
        expect(NearestSquare(117)).toBe(121);
        expect(NearestSquare(15)).toBe(16);
    })

    it('should encode message', () => {
        expect(encoded).toBe('luinriov omtsanni rdaedgev eomciece mletpler ioteiigr prctstea ssoucdtm');
    })
})