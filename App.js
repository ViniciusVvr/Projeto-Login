import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, ScrollView, Image } from 'react-native';
import Fundo from './assets/Fundo';

//ESTILOS//

const estilos = StyleSheet.create({

  inputusuario: { backgroundColor: "white",
          borderColor: "orange",borderWidth: 2.5,
          borderRadius: 20,
          fontSize: 15,
          padding:10,
          marginTop: 10,
          marginHorizontal: 5,
          shadowColor: "black", shadowRadius: 5, 
          shadowOffset: {width: 5, height: 5}

  },
inputsenha: { backgroundColor: "white",
          borderColor: "orange",borderWidth: 2.5,
          borderRadius: 20,
          fontSize: 15,
          padding:10,
          marginTop: 25,
          marginHorizontal: 5,
          shadowColor: "black", shadowRadius: 5, 
          shadowOffset: {width: 5, height: 5}
},

esqueceu: {

        color: "white",
        marginTop: 13, marginLeft: 10,
        fontSize: 14.5,

},

creditos: {

        color: "white",
        marginTop: 165, textAlign: "center",
        fontSize: 11,

},

botao: {

      backgroundColor: 'rgba(251, 99 ,1, 1)',
      borderRadius: 10,
      padding: 15,
      marginLeft: 250, marginRight: 15,
      textAlign: 'center',
      color: "white",
      fontSize: 18,
      borderColor: 'black', borderWidth: 0.5,
      shadowColor: "black", shadowRadius: 5, 
                shadowOffset: {width: 5, height: 5},
                fontWeight: 'bold'

}
});


//conteudo//
const Formulario = () => {
return(
<View>
<TextInput placeholder="Usúario" style={estilos.inputusuario}/>

<TextInput placeholder="Senha" style={estilos.inputsenha}/>

<Text style={estilos.esqueceu}>
Esqueceu a senha?</Text>

<Text style={estilos.botao}>Entrar
      </Text>

      <Text style={estilos.creditos}>
Design feito por: Vinicius Verissimo Rosa</Text>


</View>
)
}


//PRINCIPAL//
const Principal = () => {
return(

<View style = {{flex: 1}}>

<ImageBackground style={{flex: 1}} source={Fundo}>

<Image style={{height: 200,
                width: 200,
                  marginTop: 60,
                  marginBottom: 30,
                   marginLeft: 80}} source={require('./assets/logoD.png')}/>

    <Formulario/>
    </ImageBackground>
</View>

)
  }

 export default Principal;