import { Image, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_700Bold, Baloo2_800ExtraBold } from "@expo-google-fonts/baloo-2";
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";
import { FocusButton } from '../components/FocusButton';
import HomeImage from '../assets/images/dreamer.png';

export default function Index() {
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

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>ZenFocus</Text>
            <Text style={styles.description}>
                Um refúgio sem distrações para {'\n'}a mente e seus projetos ganharem vida.
            </Text>
            <Image style={styles.image} source={HomeImage} resizeMode='contain' />
            <FocusButton title='Comece agora' black onPress={() => router.navigate('/pomodoro')} />
            <Text style={styles.footerText}>Desenvolvido por Marcela Ataide</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        gap: 15,
    },
    logo: {
        width: '90%',
        textAlign: 'left',
        fontFamily: 'Baloo2_700Bold',
        fontSize: 30,
    },
    description: {
        width: '90%',
        textAlign: 'right',
        fontFamily: 'Quicksand_500Medium',
        fontSize: 16,
    },
    image: {
        width: 300,
        height: 300,
    },
    footerText: {
        width: '90%',
        textAlign: 'right',
        fontFamily: 'Quicksand_500Medium',
        fontSize: 13,
    },
});
