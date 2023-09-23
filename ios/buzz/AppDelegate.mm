#import "AppDelegate.h"
#import <Firebase.h>
#import <CodePush/CodePush.h>
#import <React/RCTBundleURLProvider.h>
#import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.moduleName = @"buzz";
    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = @{};
    [FIRApp configure];
    // Retrieve the Google Maps API key from Info.plist
    NSString *googleMapsAPIKey = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"GMSApiKey"];

    if (googleMapsAPIKey.length > 0) {
        [GMSServices provideAPIKey:googleMapsAPIKey];
    } else {
        NSLog(@"Google Maps API key not found in Info.plist.");
    }
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
    return [CodePush bundleURL];
#endif
}

/// This method controls whether the `concurrentRoot` feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires rendering on Fabric (i.e., on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns ` false`.
- (BOOL)concurrentRootEnabled
{
    return true;
}

@end
