import { toNano } from '@ton/core';
import { Const } from '../wrappers/Const';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const const = provider.open(await Const.fromInit());

    await const.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(const.address);

    // run methods on `const`
}
