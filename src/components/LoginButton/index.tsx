import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const LoginButton = ({title, ...rest}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
};