import { Text, View } from "react-native";
import { styledTitle } from "./styles";

export const Title = ({ title }) => {
    return (
        <View style={styledTitle.container}>
            <Text style={styledTitle.title}>{ title }</Text>
        </View>
    )
};