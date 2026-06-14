import { TextInput, View } from "react-native";
import { styles } from "./styles";

export const Input = ({placeholder, ...rest}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholderTextColor={"#888"}
                placeholder={placeholder}
                { ...rest }
            />
        </View>
    )
};