


export default function ListaProdutos(){
    const [active, setActive] = useState ("presentes");

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
                onPress= /*terminarrrrr */
            </TouchableOpacity>



        </View>
    )
}
