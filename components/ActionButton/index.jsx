import { Pressable, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from "@expo-google-fonts/quicksand";

export const ActionButton = ({ active, onPress, display }) => {
  const [loaded] = useFonts({
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
    <Pressable style={active ? styles.contextButtonActive : null} onPress={onPress}>
      <Text style={active ? styles.contextButtonTextActive : styles.contextButtonText} >
        <Text>{display}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  contextButtonText: {
    fontFamily: 'Quicksand_500Medium',
    color: '#FFF',
    fontSize: 13
  },
  contextButtonTextActive: {
    fontFamily: 'Quicksand_500Medium',
    color: '#000',
  }
});