import { StyleSheet } from "react-native";
import { colors } from "@/app/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.green[300],
        fontSize: 25
    },
})