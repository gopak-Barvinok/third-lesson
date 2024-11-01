import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { ThirdContract } from '../wrappers/ThirdContract';
import '@ton/test-utils';

describe('ThirdContract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let thirdContract: SandboxContract<ThirdContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        thirdContract = blockchain.openContract(await ThirdContract.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await thirdContract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: thirdContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and thirdContract are ready to use
    });
});
