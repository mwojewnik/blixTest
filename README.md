# BleakTest - React Native App

## Prerequisites
* Node.js (version 20.1.0 )
* Android Studio / XCode
* npm (recommended nvm)
* yarn


#### Notice
Verify that JAVA_HOME, ANDROID_HOME is set in env.

Test installation by running:

`
npm --version
`

`
npx --version
`

`
yarn --version
`



## Installation

1. Clone the repository: `git clone git@github.com:mwojewnik/blixTest.git` 
2. Navigate to the project directory: `cd BleakTest`
3. Install dependencies: `npm install` or `yarn install`

## Installation Instructions for iOS

To run the application on iOS devices, follow the steps below:

1. Open your terminal.

2. Navigate to the `ios` directory by executing the following command:

    ```bash
    cd ios
    ```

3. Update the project dependencies by entering:

    ```bash
    pod update
    ```

4. Next, install all dependencies by using the command:

    ```bash
    pod install
    ```

5. After the installation is complete, return to the main project directory by executing:

    ```bash
    cd ..
    ```

## Running

### Android

```bash
npx react-native run-android
```
### iOS

```bash
npx react-native run-ios 
```

or 

```bash
npm/yarn run ios 
```