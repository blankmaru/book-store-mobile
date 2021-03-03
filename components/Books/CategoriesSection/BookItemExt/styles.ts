import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
    },
    contentContainer: {
        maxWidth: 230,
    },
    title: {
        color: 'white',
        fontSize: 18,
        maxWidth: 200,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#666666',
        fontSize: 16
    },
    pages: {
        color: '#666666'
    },
    categoriesContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    category: {
        minWidth: 70,
        maxWidth: 150,
        height: 30,
        backgroundColor: '#303030',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginTop: 5
    },
    categoryTitle: {
        color: '#d6d6d6',
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 18
    },
    image: {
        width: 110,
        height: 175,
        marginBottom: 15,
        borderRadius: 15,
        marginRight: 15
    }
});

export default styles;