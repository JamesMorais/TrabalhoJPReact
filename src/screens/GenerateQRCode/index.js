import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { styles } from "../../components";

const barcodeImage = require("../../../assets/work-from-home.png");

export default function GenerateQRCode({ navigation }) {
    const [qrValue, setQRValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    const generateQRCode = () => {
        if (!qrValue) return;

        setIsActive(true);
    };

    const handleInputChange = (text) => {
        setQRValue(text);

        if (!text) {
            setIsActive(false);
        }
    };

    return (
        <View style={[styles.container, {justifyContent:'flex-start', paddingTop:20}]}>
            <View style={styles.barcodeImageBox}>
                <Image source={barcodeImage} style={{ height: 150, width: 150 }} />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerador de QR Code
                </Text>
                <Text style={styles.description}>
                    Cole uma URL ou insira um texto para criar um QR Code.
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="   Digite o texto ou URL"
                    value={qrValue}
                    onChangeText={handleInputChange}
                />
                <TouchableOpacity
                    style={[styles.button, { alignItems: 'center', backgroundColor: '#171717' }]}
                    onPress={generateQRCode}
                >
                    <Text style={[styles.buttonText, { color: '#F9F5FF' }]}>
                        Gerar QR Code
                    </Text>
                </TouchableOpacity>
                {isActive && (
                    <View style={styles.qrCode}>
                        <QRCode
                            value={qrValue}
                            size={200}
                            color="black"
                            backgroundColor="white"
                        />
                    </View>
                )}
            </View>
        </View>
    );
} 