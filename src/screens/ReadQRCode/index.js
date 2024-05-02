import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, Image, } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { CameraView, Camera } from "expo-camera/next";
import { styles } from "../../components";

const barcodeImage = require("../../../assets/photographer.png");

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Ainda não escaneado')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Solicita as permissões da câmera
    useEffect(() => {
        askForCameraPermission();
    }, []);


    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    };


    async function copyToClipboard(){
        await Clipboard.setStringAsync(text);
        alert('Texto copiado para a área de transferência!');
    }

    // Checka as permissões e retorna a tela 
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Solicitando permissão para acessar à câmera.</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>Sem acesso à câmera.</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }


    return (
        <View style={styles.cameraContainer}>
            <View style={styles.barcodeImageBox}>
                <Image source={barcodeImage} style={{ height: 150, width: 150 }} />
            </View>
            <View style={styles.barcodebox}>
                <CameraView
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "pdf417"],
                    }}
                    style={{ height: 400, width: 400 }} />
            </View>
            <Text style={styles.maintext}>{text}</Text>

            <View style={[styles.boxButtons, {justifyContent:'space-evenly'}  ]}>

                {scanned && (
                    <TouchableOpacity onPress={copyToClipboard} style={[styles.button, { backgroundColor: '#171717' }]}>
                        <Text style={[styles.buttonText, { color: '#F9F5FF' }]}>Copiar Texto</Text>
                    </TouchableOpacity>
                )}

                {scanned && (
                    <TouchableOpacity onPress={() => setScanned(false)} style={[styles.button, { backgroundColor: '#F9F5FF' }]} >
                        <Text style={[styles.buttonText, { color: '#000' }]}>Escanear novamente</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
