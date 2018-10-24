# with-detox-tests

Demonstrates integration of the Detox gray box end-to-end testing library with Expo. Uses [detox-expo-helpers](https://github.com/expo/detox-expo-helpers).

![](https://raw.githubusercontent.com/expo/with-detox-tests/master/example.gif)

### Try it out

#### Install dependencies

1. [Install homebrew, node & applesimutils](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies) (only follow Step 1 from this guide for now, the rest is already done in this project)
1. Install `expo-cli` - `yarn global add expo-cli`
1. Download the latest Expo app from here: https://expo.io/tools. Extract, rename and place it inside `bin/`. The directory name must match "binaryPath" in the "detox" section of package.json. Latest as of 24/10/18 [here](https://dpq5q02fu5f55.cloudfront.net/Exponent-2.8.2.tar.gz).

#### Run the Expo app

```
yarn start
```

#### Run the tests

```
yarn e2e
```

Run `yarn e2e-verbose` for extra logging.

#### Notes

Make sure the app is in development mode - press 'p' in the expo-cli terminal to toggle.
