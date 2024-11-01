import "@stdlib/deploy";

contract ThirdContract with Deployable {

    i1: Int as int257;
    i2: Int as uint256;
    i3: Int as uint128;
    i4: Int as uint128;
    i5: Int as int128;
    i6: Int as coins;
    i7: Int as uint64;
    i8: Int as int64;
    i9: Int as uint23;
    i10: Int as int32;
    i11: Int as uint16;
    i12: Int as int16;
    i13: Int as uint8;
    i14: Int as int8;

    init() {           
        self.i2 = 0x83df;
        self.i4 = 123425235253;
        self.i5 = pow(10, 9);
        self.i6 = ton("1.23");
        self.i14 = self.i3 + 200;
    }

    receive() {
        let int1: Int as uint128 = 3001;
        let int2: Int as int32 = 57;
        let i: Int as int8 = -12;

        i = int1 * 3 + (int2 - i);
        i = int1 % 10;
        i = int1 / 1000;

        i = min(int2, 11);
        i = max(int2, 66);
        i = abc(-1 * int2);
    }
}
