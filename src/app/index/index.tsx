import { Text, View, StyleSheet } from "react-native"
import { styles } from "./styles"

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Hello World!</Text>
            <Text>My first App.</Text>
        </View>
    )
}

