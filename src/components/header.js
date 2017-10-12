import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => (
        <View style={styles.viewStyle}>
            <Text style={styles.instructions}>{props.headerText}</Text>
        </View>
    );

export default Header;

const styles = StyleSheet.create({
    instructions: {
        // textAlign: 'center',
        color: '#333333',
        // marginBottom: 5,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
});
