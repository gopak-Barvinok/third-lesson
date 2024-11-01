import { toNano } from '@ton/core';
import { Boolaen } from '../wrappers/Boolaen';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const boolaen = provider.open(await Boolaen.fromInit());

    await boolaen.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(boolaen.address);

    // run methods on `boolaen`
}
