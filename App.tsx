import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { Header } from './src/components/Header';
import { Title } from './src/components/Title';
import { InfoText } from './src/components/InfoText';
import { Input } from './src/components/Input';
import { LoginButton } from './src/components/LoginButton';

export default function App() {
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
      />
      <Input
        placeholder={"Senha"}
        secureTextEntry={true} // mascara o texto digitado
      />
      <LoginButton 
        title={"Continuar"}
      />
    </LinearGradient>
  );
}


