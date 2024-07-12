import React from "react";
import { StyleSheet } from "react-native";
import { View,Button,Text, TextInput } from "react-native";
import ButtonComponent from "./ButtonComponent";
function FormComponent(){
    return (
        <View>
            <Text style={styles.queryName}>Nome Completo:</Text>
            <TextInput
            style={styles.input}
            keyboardType="text"
            />

            <Text style={styles.queryName}>Emprego:</Text>
            <TextInput
            style={styles.input}
            keyboardType="text"
            />

            <Text style={styles.queryName}>Renda Mensal:</Text>
            <TextInput
            style={styles.inputNum}
            keyboardType="numeric"
            />
            <View>
                <ButtonComponent></ButtonComponent>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    queryName:{
        marginTop:20,
        textAlign:'center',
        color:'#003f69'
    },
    input:{
        width:240,
        backgroundColor:'#f0f0f4'
    },
    inputNum:{
        textAlign:'center',
        margin:'auto',
        width:100,
        backgroundColor:'#f0f0f4'
    }
})
  
export default FormComponent