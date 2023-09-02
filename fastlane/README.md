fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios set_dev_info

```sh
[bundle exec] fastlane ios set_dev_info
```

Change Info Plist Dev

### ios set_production_info

```sh
[bundle exec] fastlane ios set_production_info
```

Change Info Plist Production

### ios setup

```sh
[bundle exec] fastlane ios setup
```

Sync Signing Profile

### ios deploy_dev

```sh
[bundle exec] fastlane ios deploy_dev
```

Ship to Testflight.

### ios deploy_production

```sh
[bundle exec] fastlane ios deploy_production
```



----


## Android

### android distribute_firebase_dev

```sh
[bundle exec] fastlane android distribute_firebase_dev
```



### android distribute_firebase_production

```sh
[bundle exec] fastlane android distribute_firebase_production
```



----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
