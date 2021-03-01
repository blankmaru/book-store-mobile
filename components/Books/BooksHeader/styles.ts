import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        minHeight: 50,
        maxHeight: 75,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        padding: 20
    },
    subtitle: {
        fontSize: 16,
        color: '#c2c2c2'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        marginTop: 30,
        marginRight: 20
    },
    buttonInner: {
        minWidth: 100,
        minHeight: 30,
        backgroundColor: '#fa784a',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
});

export default styles;