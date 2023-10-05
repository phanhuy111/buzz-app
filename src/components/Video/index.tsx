import React, { useState } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Video from 'react-native-video';

import { playIcon } from 'assets/images';

import { SCREEN_WIDTH, horizontalScale } from 'utils';

interface PropsType {
    handlePlayVideo: () => void;
    isPause?: boolean;
    source: string;
}

export const CustomVideo = (props: PropsType) => {
    const { isPause = false, source, handlePlayVideo } = props;

    return (
        <TouchableWithoutFeedback onPress={() => handlePlayVideo()}>
            <View style={{ flex: 1 }}>
                <Video
                    source={{ uri: source }}
                    style={{
                        flex: 1,
                        borderRadius: 10,
                    }}
                    paused={isPause}
                    resizeMode={'contain'}
                    repeat
                />

                <View style={styles.playContainer}>
                    <Image
                        style={{
                            opacity: isPause ? 1 : 0,
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
