import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';
import Error from '../../Shared/Error';
import { useNavigation } from "@react-navigation/native";

const ForgotPass = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [error, setError] = useState("");
    const image = require('../../assets/give2.png');
    const handleSubmit = () => {
        if (email === "" ) {
            setError("Please fill in your credentials");
        } 
        else{
            setError("");
            navigation.navigate('NewPass')
        }
    }
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={image}
                style={{ alignSelf: 'center', resizeMode: 'contain', marginBottom: 70 ,marginTop:90}}
            />
            <FormContainer title={"Forgot password"} >
            <Text style={styles.middleText}>
                    Please enter your email address to receive a{"\n"}verification code
                </Text>
                <Input require
                    placeholder={"Email ID"}
                    name={"email"}
                    id={"email"}
                    value={email}
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />

                {error ? <Error message={error} /> : null}
                <CommonButton title={'Send'} bgColor={'#9683dd'} textColor={'#ffffff'}
                    onPress={() => { handleSubmit()  }} />

            </FormContainer>

        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        marginBottom: 10,
        alignSelf: "center",
        color: '#979797',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
    },
    middleText: {
        marginBottom: 30,
        alignSelf: "center",
        color: '#979797',
        fontSize: 15,
        textAlign: 'center'
    }
})

export default ForgotPass