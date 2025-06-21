import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { TaskItem } from "../../components/TaskItem";
import { FocusButton } from "../../components/FocusButton";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
import EmptyListImage from '../../assets/images/meditating.png';
import useTaskContext from "../../components/context/useTaskContext";
import { Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_700Bold, Baloo2_800ExtraBold } from "@expo-google-fonts/baloo-2";
import { useFonts } from "expo-font";
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

export default function Tasks() {
    const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();

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
            <View style={styles.wrapper}>
                <Text style={styles.title}>To Do List</Text>
                <View style={styles.innerWrapper}>
                    <View style={styles.inner}>
                        <FlatList
                            style={{ maxHeight: 450 }}
                            data={tasks}
                            renderItem={({ item }) => <TaskItem
                                completed={item.completed}
                                text={item.description}
                                key={item.id}
                                onPressDelete={() => deleteTask(item.id)}
                                onToggleComplete={() => toggleTaskCompleted(item.id)}
                                onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
                            />}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                            ListEmptyComponent={
                                <View style={styles.emptyContainer}>
                                    <Text style={styles.emptyText}>Ainda não há tarefas na sua lista, que tal adicionar uma?</Text>
                                    <Image style={styles.image} resizeMode='contain' source={EmptyListImage} />
                                </View>
                            }
                        />
                    </View>
                    <FocusButton title='Nova tarefa' icon={<IconPlus grey />} grey onPress={() => router.navigate('/add-task')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    wrapper: {
        gap: 20,
        width: '90%',
    },
    innerWrapper: {
        gap: 20,
    },
    inner: {
        gap: 20,
    },
    title: {
        fontFamily: 'Baloo2_700Bold',
        textAlign: 'left',
        color: '#000',
        fontSize: 30,
    },
    emptyContainer: {
        alignItems: 'center',
    },
    emptyText: {
        fontFamily: 'Quicksand_500Medium',
        fontWeight: '500',
        fontSize: 16,
    },
    image: {
        width: 300,
        height: 300,
    }
});