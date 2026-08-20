


export default function ListaProdutos(){

    const [active, setActive] = useState ("presentes");
    const [produtos, setProdutos] = useState<ProdutoItem []> ([]);

    function alterarActivePraPresentes(){
        setActive("presentes");
    }

    function alterarActivePraComprados(){
        setActive("comprados");
    }

    return(
        <View style ={styles.container}>

            {/* filtro */}
        <View style ={styles.topBar}>
            <TouchableOpacity>
                style={StyleSheet.buttonTopBar}
                onPress= {alterarActiveParaPresentes}
                
                <CircleDashed color = {active === "presentes" ? "blue" : "gray"}/>
                <Text style = {{ color : active === "presentes" ? "blue" : "gray"}}>
                    Presentes
            </TouchableOpacity>

{/*FALKTA ACABAR */}

        </View>
    )
}
