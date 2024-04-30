import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../components";

const mainImg = require("../../../assets/maise1.png");

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.boxImage}>
                    <Image source={mainImg} style={styles.image} />
                </View>

                <View style={styles.boxText}>
                    <Text style={{ color: '#171717', fontWeight: '700', fontSize: 25 }}>Boas Vindas à <Text style={{ color: '#3479FA', }}>nossa plataforma!</Text></Text>
                    <Text style={{ fontWeight: '500', fontSize: 18 }}>Descubra a praticidade do nosso aplicativo com apenas um toque!</Text>
                    <Text style={{ color: '#333333', fontSize: 16 }}>Escolha entre gerar seu próprio QR Code ou ler um já existente!</Text>
                </View>

                <View style={styles.boxButtons}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#171717' }]} onPress={() => navigation.navigate("GenerateQRCode")}>
                        <Text style={[styles.buttonText, { color: '#F9F5FF' }]}>Gerar QR Code</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, { backgroundColor: '#F9F5FF' }]} onPress={() => navigation.navigate("ReadQRCode")}>
                        <Text style={[styles.buttonText, { color: '#000' }]}>Ler QR Code</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}