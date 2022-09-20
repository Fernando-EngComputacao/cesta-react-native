import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import TextMontserrat from '../../../components/Text';

export default function Details({name, farmLogo, farmName,description,price}) {
    return <>
        
        <TextMontserrat style={styles.nameBasket}>{name}</TextMontserrat>
            <View style={styles.viewFarmStyle}>
                <Image source={farmLogo} style={styles.logoFarmStyle} />
                <TextMontserrat style={styles.farmName}>{farmName}</TextMontserrat>
            </View>
            <TextMontserrat style={styles.description}>{description}</TextMontserrat>
            <TextMontserrat style={styles.price}>{price}</TextMontserrat>
        
    </>
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nameBasket: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
    },
    logoFarmStyle:{
        width: 32,
        height: 32,
    },
    viewFarmStyle: {
        flexDirection: "row",
        paddingVertical: 12,

    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }   

});