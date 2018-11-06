# with-detox-tests

Demonstrates integration of the Detox gray box end-to-end testing library with Expo. Uses [detox](https://github.com/wix/Detox) 9.0.6+, [detox-expo-helpers](https://github.com/expo/detox-expo-helpers) and [expo-detox-hooks](https://github.com/expo/detox-tools).

![](https://raw.githubusercontent.com/expo/with-detox-tests/master/example.gif)

### Try it out

1. [Install dependencies](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies) (only follow Step 1 from this guide for now, the rest is already done in this project)
2. Run `./setup.sh`. This should grab the latest [Expo app](https://expo.io/tools) and place it inside `bin/`
3. Start the packager: `expo start` (if you don't have `expo` installed, `yarn global add expo`).
4. `npm run e2e`
