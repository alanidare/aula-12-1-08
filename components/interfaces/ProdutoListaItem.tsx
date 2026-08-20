import {Text, TouchableOpacity, View} from "react-native";
import {ProdutoItens} from "../../interfaces/ProdutoItens";
import {Trash2} from "lucide-react";
import {styles} from "/.styles";

interface Props{
    produto: ProdutoItem;
}

export default function ProdutoListaItem({produto}){
return(
    <View style ={stles.containerItem}>
    <TouchableOpacity style= {styles.buttonTopBar}>
    <Text>{produto.nome}</Text>
    </TouchableOpacity>

    <TouchableOpacity>
    <Trash2 color={"#777"} strokeWidth = {1} />
    </TouchableOpacity>
    </View>

);}