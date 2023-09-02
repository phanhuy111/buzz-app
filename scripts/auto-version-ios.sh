

echo "Auto Version Code for iOs"

TIMESTAMP=$(date +%s)
SECOND_VERSION_CODE=$((TIMESTAMP-1677401896))
VERSION_CODE=$SECOND_$((SECOND_VERSION_CODE/10))

VERSION_NAME="1.0.0"
CONFIG_FILE=ios/buzz.xcodeproj/project.pbxproj
if [ -e "$CONFIG_FILE" ]
then
  sed -i "" 's/MARKETING_VERSION = [0-9].[0-9].*/MARKETING_VERSION = '$VERSION_NAME';/g' $CONFIG_FILE
  sed -i "" 's/CURRENT_PROJECT_VERSION = [0-9]*/CURRENT_PROJECT_VERSION = '$VERSION_CODE'/g' $CONFIG_FILE
fi

INFO_PLIST_FILE=ios/buzz/Info.plist
if [ -e "$INFO_PLIST_FILE" ]
then
  plutil -replace CFBundleVersion -string "$VERSION_CODE" $INFO_PLIST_FILE
  plutil -replace CFBundleShortVersionString -string "$VERSION_NAME" $INFO_PLIST_FILE
fi

echo "Version Name: $VERSION_NAME"
echo "Version Code: $VERSION_CODE"