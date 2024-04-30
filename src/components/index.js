import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F5FF',
        alignItems: 'center',
        justifyContent: 'center',
        gap:'5%'
      },
      box:{
        width: '80%',
        alignItems: 'center',
      },
      boxImage:{
        marginBottom: 20,
      },
      image:{
        width:300,
        height:300,
      },
      boxText:{
        gap:'5%',
        width:'100%',
        marginBottom: 20,
      },
      boxButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      button:{
        padding:10,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius:10,
        borderColor: '#171717'
      },
      buttonText:{
        fontSize: 16,
      },


      //Teste 1 
      cameraContainer:{
        flex: 1,
        backgroundColor: '#F9F5FF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        //gap:'15%'
      },
      camera: {
        flex: 1,
        alignItems: "stretch",
      },
      buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
        padding: 16,
      },
      buttonQR: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
      },
      //Teste2
        
      maintext: {
        fontSize: 16,
        margin: 20,
      },
      barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
      },
      barcodeImageBox:{
        padding:20
      },
});