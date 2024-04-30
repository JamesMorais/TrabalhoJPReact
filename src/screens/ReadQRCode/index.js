import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
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
                <Image source={barcodeImage} style={{ height: 150, width: 150}} />
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

            {scanned && (
                <TouchableOpacity onPress={() => setScanned(false)} style={styles.button}>
                    <Text style={styles.buttonText}>Escanear novamente?</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}


