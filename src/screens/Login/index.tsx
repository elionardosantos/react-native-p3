import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { InfoText } from '../../components/InfoText';
import { Input } from '../../components/Input';
import { StyledButton } from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export const Login = () => {

  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  
  const user = "admin";
  const password = "123";

  const navigation = useNavigation();

  const handleLogin = () => {
    if (inputUser === user && inputPassword === password) {
      navigation.navigate('Home')
    } else {
      Alert.alert("Atenção!", "Usuário ou senha inválidos");
    }
  };


  return (
    <LinearGradient
      colors={['#3C1214', '#060101']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Header />
      <Title
        title={"Informe seus dados para entrar"}
      />
      <InfoText
        text={"Ou crie uma conta"}
      />
      <Input
        placeholder={"Usuário"}
        secureTextEntry={false} // mascara o texto digitado
        onChangeText={setInputUser}
      />
      <Input
        placeholder={"Senha"}
        secureTextEntry={true} // mascara o texto digitado
        onChangeText={setInputPassword}
      />
      <StyledButton 
        title={"Continuar"}
        onPress={handleLogin}
      />
      <InfoText 
        text="usuario: admin / senha: 123"
      />
    </LinearGradient>
  );
}