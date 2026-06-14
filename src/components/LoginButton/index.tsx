import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const LoginButton = ({title}: {title: string}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
};