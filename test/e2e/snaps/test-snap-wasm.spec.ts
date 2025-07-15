import { TestSnaps } from '../page-objects/pages/test-snaps';
import { loginWithoutBalanceValidation, openTestSnapClickButtonAndInstall } from '../page-objects/flows';
import { withFixtures } from '../helpers';
import FixtureBuilder from '../fixture-builder';
import mockWasmSnap from '../mock-response-data/snaps/snap-binary-mocks';

describe('Test Snap WASM', function () {
  it('can use webassembly inside a snap', async function () {
    await withFixtures(
      {
        fixtures: new FixtureBuilder().build(),
        testSpecificMock: mockWasmSnap,
        title: this.test?.fullTitle(),
      },
      async ({ driver }) => {
        await loginWithoutBalanceValidation(driver);
        const testSnaps = new TestSnaps(driver);
        
        await openTestSnapClickButtonAndInstall(driver, 'connectWasmButton');
        
        await Promise.all([
          testSnaps.check_installationComplete('connectWasmButton', 'Reconnect to WebAssembly Snap'),
          testSnaps.fillMessage('wasmInput', '23'),
          testSnaps.clickButton('sendWasmMessageButton')
        ]);
        
        await testSnaps.check_messageResultSpan('wasmResultSpan', '28657');
      },
    );
  });
});
