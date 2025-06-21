import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { router, useNavigation } from 'expo-router';

import { TasksProvider } from '../components/context/TasksProvider';
import { IconMenu, IconArrow, IconClock, IconList } from '../components/Icons';
import { Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_700Bold, Baloo2_800ExtraBold } from '@expo-google-fonts/baloo-2';
import { useFonts } from 'expo-font';


export default function Layout() {
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
        <TasksProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#FFF',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        headerTintColor: '#000',
                        drawerStyle: {
                            backgroundColor: '#FFF',
                            paddingTop: 50,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        },
                        drawerContentContainerStyle: {
                            flex: 1,
                            justifyContent: 'center',
                        },
                        drawerItemStyle: {
                            borderRadius: 0,
                            marginVertical: 15,
                            paddingLeft: 20,
                        },
                        drawerLabelStyle: {
                            fontFamily: 'Baloo2_700Bold',
                            fontSize: 20,
                            marginLeft: 10,
                        },
                        drawerActiveBackgroundColor: '#FFF',
                        drawerActiveTintColor: '#000',
                        drawerInactiveTintColor: '#000',
                    }}
                >
                    <Drawer.Screen
                        name='index'
                        options={{
                            headerShown: false,
                            drawerItemStyle: { display: 'none' },
                        }}
                    />
                    <Drawer.Screen
                        name='add-task/index'
                        options={{
                            drawerItemStyle: { display: 'none' },
                            title: 'ZenFocus',
                            headerTitleStyle: {
                                fontFamily: 'Baloo2_700Bold',
                                fontSize: 25,
                                paddingLeft: 10,
                            },
                            headerLeft: () => (
                                <IconArrow
                                    size={35}
                                    style={{ marginLeft: 16 }}
                                    onPress={() => router.navigate('/tasks')}
                                />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name='pomodoro'
                        options={{
                            drawerLabel: 'Timer',
                            drawerIcon: ({ color, size }) => (
                                <IconClock size={size} color={color} />
                            ),
                            title: 'ZenFocus',
                            headerTitleStyle: {
                                fontFamily: 'Baloo2_700Bold',
                                fontSize: 25,
                                paddingLeft: 10,
                            },
                            headerLeft: () => {
                                const navigation = useNavigation();
                                return (
                                    <IconMenu
                                        size={35}
                                        style={{ marginLeft: 16 }}
                                        onPress={() => navigation.openDrawer()}
                                    />
                                );
                            },
                        }}
                    />
                    <Drawer.Screen
                        name='tasks/index'
                        options={{
                            drawerLabel: 'To Do List',
                            drawerIcon: ({ color, size }) => (
                                <IconList size={size} color={color} />
                            ),
                            title: 'ZenFocus',
                            headerTitleStyle: {
                                fontFamily: 'Baloo2_700Bold',
                                fontSize: 25,
                                paddingLeft: 10,
                            },
                            headerLeft: () => {
                                const navigation = useNavigation();
                                return (
                                    <IconMenu
                                        size={35}
                                        style={{ marginLeft: 16 }}
                                        onPress={() => navigation.openDrawer()}
                                    />
                                );
                            },
                        }}
                    />
                    <Drawer.Screen
                        name='edit-task/[id]'
                        options={{
                            drawerItemStyle: { display: 'none' },
                            title: 'ZenFocus',
                            headerTitleStyle: {
                                fontFamily: 'Baloo2_700Bold',
                                fontWeight: '700',
                                fontSize: 25,
                                paddingLeft: 10,
                            },
                            headerLeft: () => (
                                <IconArrow
                                    size={35}
                                    style={{ marginLeft: 16 }}
                                    onPress={() => router.navigate('/tasks')}
                                />
                            ),
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
        </TasksProvider>
    );
}
