import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { IconCheck, IconDelete } from "../../components/Icons";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_700Bold, Baloo2_800ExtraBold } from "@expo-google-fonts/baloo-2";
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";

export default function FormTask({ onFormSubmit, defaultValue = '' }) {
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
    
    const [description, setDescription] = useState(defaultValue);

    useEffect(() => {
        setDescription(defaultValue);
    }, [defaultValue]);

    const submitTask = () => {
        if (!description) {
            return
        };
        onFormSubmit(description);
        setDescription('');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.title}>{defaultValue ? 'Editar' : 'Nova'} tarefa:</Text>
                    <View style={styles.task}>
                        <View style={styles.labelWrapper}>
                            <Text style={styles.label}>
                                Em que você está trabalhando?
                            </Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            numberOfLines={10}
                            multiline
                            value={description}
                            onChangeText={setDescription}
                            placeholder='Digite sua tarefa...'
                            placeholderTextColor='#BBB'
                        />
                    </View>
                    <View style={styles.actions}>
                        <Pressable style={styles.button} onPress={() => router.navigate(`tasks`)}>
                            <IconDelete />
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={submitTask}>
                            <Text style={styles.buttonText}>Salvar</Text>
                            <IconCheck />
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    inner: {
        flex: 1,
        width: '90%',
        gap: 20,
        paddingTop: 20
    },
    title: {
        fontFamily: 'Baloo2_700Bold',
        textAlign: 'left',
        color: '#000',
        fontSize: 30,
        paddingBottom: 20,
    },
    task: {
        borderWidth: 2,
        borderRadius: 15,
        overflow: 'hidden',
        width: '100%',
    },
    labelWrapper: {
        backgroundColor: '#000',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    label: {
        fontFamily: 'Quicksand_500Medium',
        color: '#FFF',
        fontSize: 13,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontFamily: 'Quicksand_500Medium',
        fontSize: 15,
        color: '#000',
        height: 150,
        textAlignVertical: 'top'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    buttonText: {
        fontFamily: 'Quicksand_500Medium',
        fontSize: 15,
        color: '#000',
    }
});