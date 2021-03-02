import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        minHeight: 350
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    headerButton: {
        color: '#606060',
        textDecorationLine: 'underline'
    }
});

export default styles;