import { toNano } from '@ton/core';
import { ThirdContract } from '../wrappers/ThirdContract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const thirdContract = provider.open(await ThirdContract.fromInit());

    await thirdContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(thirdContract.address);

    // run methods on `thirdContract`
}
