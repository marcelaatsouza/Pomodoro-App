import { Pressable, StyleSheet, Text } from "react-native";
import { Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_700Bold, Baloo2_800ExtraBold } from "@expo-google-fonts/baloo-2";
import { useFonts } from "expo-font";

export const FocusButton = ({ onPress, title, icon, black, grey }) => {
    const [loaded] = useFonts({
        Baloo2_400Regular,
        Baloo2_500Medium,
        Baloo2_600SemiBold,
        Baloo2_700Bold,
        Baloo2_800ExtraBold,
    });

    if (!loaded) {
        return null;
    };

    return (
        <Pressable style={[styles.button, black && styles.blackButton, grey && styles.greyButton]} onPress={onPress}>
            {icon}
            <Text style={[styles.buttonText, black && styles.blackButtonText, grey && styles.greyButtonText]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 10,
        width: '100%',
        gap: 8,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Baloo2_700Bold',
        fontSize: 18,
    },
    blackButton: {
        backgroundColor: '#000',
        width: '90%'
    },
    blackButtonText: {
        color: '#FFF',
    },
    greyButton: {
        justifyContent: 'left',
        backgroundColor: '#EEE',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 11,
        gap: 16
    },
    greyButtonText: {
        color: '#000',
    }
});