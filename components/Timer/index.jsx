import { Baloo2_400Regular, Baloo2_500Medium, Baloo2_600SemiBold, Baloo2_700Bold, Baloo2_800ExtraBold } from "@expo-google-fonts/baloo-2";
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";

export const Timer = ({ totalSeconds }) => {
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

  const date = new Date(totalSeconds * 1000);
  const options = { minute: '2-digit', second: '2-digit' };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString('pt-br', options)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Baloo2_700Bold',
    fontSize: 80,
  }
});