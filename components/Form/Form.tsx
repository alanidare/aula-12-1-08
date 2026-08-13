import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

export default function Form() {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
            placeholder = "O que deseja comprar?" />
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}> Adicionar </Text>
            </TouchableOpacity>
        </View>
    );
}