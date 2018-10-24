const { getAppUrl, blacklistLiveReloadUrl } = require('detox-expo-helpers');

// Copied from detox-expo-helpers so we can disable sync before blacklisting.
const reloadApp = async (params) => {
  const url = await getAppUrl();
  await device.launchApp({
    permissions: params && params.permissions,
    newInstance: true,
    url,
    sourceApp: 'host.exp.exponent',
    // Setting this to false will show Expo's intro page on each restart.
    // This has the "Disable Live Reload" button, which can be tapped with Detox:
    // `await element(by.text("Disable Live Reload")).tap();`
    // I've had some luck with other projects where this removes the need to disable sync. Not the case with this project for some reason.
    launchArgs: { EXKernelDisableNuxDefaultsKey: true },
  });

  // Should not have to do this!
  // Detox/EarlGrey synchronisation does not play well with Expo.
  await device.disableSynchronization();

  // This also doesn't seem to work. Apparently it used to.
  // This should allow us to use synchronisation as it will ignore events such as Expo's live reload polling.
  await blacklistLiveReloadUrl();
};

describe('Example', () => {
  beforeEach(async () => {
    // Should not have to do this!
    // Detox/EarlGrey synchronisation does not play well with Expo.
    // This can be turned off (see above) but is reset on app restart.
    // There seems to be no way to disable sync before we're already blocked on something else.
    // So instead, wait some time and hope the app has started.
    device.deviceDriver.waitUntilReady = async () => {
      await new Promise(done => setTimeout(done, 5000)) // wait 5 seconds
    };

    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.label('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.label('World!!!'))).toBeVisible();
  });
});
