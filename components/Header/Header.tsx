import {Text, View} from "react-native";
import {ShoppingCart} from "lucide-react";
import {styles} from "./styles";

export default function Header(){
    return(
        <View style={styles.container}>
            <ShoppingCart size={22} color={"blue"}  strokeWidth={3}/>
            <Text style={styles.title}>comprar</Text>
        </View>
    );
}