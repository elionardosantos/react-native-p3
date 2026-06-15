import { TextInput, View } from "react-native";
import { styles } from "./styles";

export const Input = (
    {placeholder, onChangeText}: 
    {placeholder: string; onChangeText: (text: string)=>void; secureTextEntry?: boolean;}
) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholderTextColor={"#888"}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
};