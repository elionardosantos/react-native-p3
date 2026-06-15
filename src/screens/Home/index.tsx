import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { StyledButton } from "../../components/StyledButton";
import { Title } from "../../components/Title";
import { InfoText } from "../../components/InfoText";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {

    const navigation = useNavigation();

    return (
        <LinearGradient  
            colors={['#3C1214', '#060101']}
            style={styles.container}
        >
            <StatusBar style="light" />
            <Header/>
            <Title
                title="Seja bem vindo(a)!"
            />
            <InfoText
                text="Ou não... kkkk"
            />
            <StyledButton
                title="Voltar"
                onPress={() => navigation.navigate("Login")}
            />
        </LinearGradient>
    )
};