import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { Boolaen } from '../wrappers/Boolaen';
import '@ton/test-utils';

describe('Boolaen', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let boolaen: SandboxContract<Boolaen>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        boolaen = blockchain.openContract(await Boolaen.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await boolaen.send(
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
            to: boolaen.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and boolaen are ready to use
    });
});
