import "@stdlib/deploy";

contract Strings with Deployable {
    s1: String = "hello world";
    s2: String = "yes unicode no escaping /n";

    init() {
        let i1: Int = 214124;
        let i2: Int = 673480924924;
        
        let s3: String = i1.toString();
        let s4: String = i1.toFloatString(3);
        let s5: String = i2.toCoinsString();

        let sb: StringBuilder = beingString();
        sb.append(s1);
        sb.append("Your balance is: ");

        let s6: String = sb.toString();
    }
}
