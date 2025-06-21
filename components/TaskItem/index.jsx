import { Text, View, StyleSheet, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_700Bold, Baloo2_800ExtraBold } from "@expo-google-fonts/baloo-2";
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { IconCheck, IconDelete, IconPen } from "../Icons";

export const TaskItem = ({ completed, text, onToggleComplete, onPressEdit, onPressDelete }) => {
    const [loaded] = useFonts({
        Baloo2_400Regular,
        Baloo2_500Medium,
        Baloo2_600SemiBold,
        Baloo2_700Bold,
        Baloo2_800ExtraBold,
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });

    if (!loaded) {
        return null;
    };

    const cardStyles = [styles.card, styles.text];

    if (completed) {
        cardStyles.push(styles.cardCompleted, styles.textCompleted);
    };

    return (
        <View style={cardStyles}>
            <View style={styles.wrapper}>
                <Pressable onPress={onToggleComplete}>
                    <IconCheck checked={completed} style={styles.icon} />
                </Pressable>
                <Text style={[styles.text, completed && styles.textCompleted]} numberOfLines={10}>
                    {text}
                </Text>
            </View>
            <Pressable onPress={onPressEdit}>
                <IconPen checked={completed} style={styles.icon} />
            </Pressable>
            <Pressable onPress={onPressDelete}>
                <IconDelete checked={completed} style={styles.icon} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        gap: 15,
        borderRadius: 15,
        borderColor: '#000',
        borderWidth: 2,
    },
    cardCompleted: {
        backgroundColor: '#000'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        flex: 1,
    },
    text: {
        fontFamily: 'Quicksand_500Medium',
        color: '#000',
        fontSize: 16,
        flexShrink: 1,
    },
    textCompleted: {
        color: '#FFF',
        textDecorationLine: 'line-through'
    }
});