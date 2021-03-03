import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnNotSelected: {
        color: '#525252',
        fontSize: 20
    },
    btnSelected: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default styles;