import "@stdlib/deploy";

contract Addresses with Deployable {
    a1: Address = address("EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N");
    a2: Address = address("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N")
    a3: Address;

    a4: Address;
    a5: Address;
    a6: Address; 

    init() {
        self.a3 = newAddress(0, 0x1000000000000000000000000);
    }

    receive() {
        self.a1 == self.a2;

        self.a4 = myAddress();
        self.a5 = sender();
        self.a6 = newAddress(0, 0);
    }
}
