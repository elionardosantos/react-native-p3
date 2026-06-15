import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const StyledButton = ({ title, onPress }: { title: string, onPress?: () => void } ) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
};