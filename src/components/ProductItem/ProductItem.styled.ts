import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { colors } from 'themes';

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    imageLogoBg: {
        borderRadius: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        padding: 10,
        gap: 10,
    },
    imageLogo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        gap: 1,
        width: 70,
        height: 70,
    },
    containerText: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    containerPrice: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors['white']['1'],
    },
    textTitle: {
        color: colors['white']['0'],
    },
}) as any;
