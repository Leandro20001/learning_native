import React from "react";
import { StyleSheet } from "react-native";
import { View,Button,Text } from "react-native";
function ButtonComponent(){
    return (
        <View style={styles.btn}>
            <Button
            onPress={null}
            title="Clique"
            color={'#003f69'}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    btn:{
        marginTop:32,
    }
})

export default ButtonComponent