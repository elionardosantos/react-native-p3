import { Text, View } from "react-native";
import { styledInfoText } from "./styles";

export const InfoText = ({text}) => {
    return (
        <View style={styledInfoText.container}>
            <Text style={styledInfoText.text}>
                {text}
            </Text>
        </View>
    )
};