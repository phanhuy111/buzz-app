import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

import { playIcon } from 'assets/images';

import { SCREEN_WIDTH, horizontalScale } from 'utils';

interface PropsType {
    source: string;
}

export const InstagramVideo = (props: PropsType) => {
    const { source } = props;
    const [pauseNumber, setPauseNumber] = React.useState(0);
    const isPaused = pauseNumber % 2 === 0;

    return (
        <TouchableWithoutFeedback onPress={() => setPauseNumber(pauseNumber + 1)}>
            <View style={{ flex: 1 }}>
                <Video
                    source={{ uri: source }}
                    style={{
                        flex: 1,
                    }}
                    paused={isPaused}
                    resizeMode={'contain'}
                    repeat
                />

                <View style={styles.playContainer}>
                    <Image
                        style={{
                            opacity: isPaused ? 1 : 0,
                            width: horizontalScale(40),
                            height: horizontalScale(40),
                        }}
                        source={playIcon}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    playContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
