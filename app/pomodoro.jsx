import { useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import { FocusButton } from '../components/FocusButton';
import { ActionButton } from '../components/ActionButton';
import { Timer } from '../components/Timer';
import { IconPause, IconPlay } from '../components/Icons';
import { ProgressBar } from '../components/ProgressBar';

import FocusImage from '../assets/images/working-in-the-park.png';
import ShortBreakImage from '../assets/images/girl-with-cat.png';
import LongBreakImage from '../assets/images/drinking-coffee.png';

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: FocusImage,
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: ShortBreakImage,
    display: 'Pausa Curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: LongBreakImage,
    display: 'Pausa Longa'
  }
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue)
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return
    };

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        };

        return oldState - 1;
      });

      console.log('timer rolando')
    }, 1000);

    timerRef.current = id;
  };

  const progress = 1 - seconds / timerType.initialValue;

  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.imageWrapper}>
          <ProgressBar progress={progress} />
          <Image style={styles.image} resizeMode='contain' source={timerType.image} />
        </View>

        <View style={styles.actions}>
          <View style={styles.context}>
            {pomodoro.map(p => (
              <ActionButton key={p.id} active={timerType.id === p.id} onPress={() => toggleTimerType(p)} display={p.display} />
            ))}
          </View>
          <Timer totalSeconds={seconds} />
          <FocusButton title={timerRunning ? 'Pausar' : 'Começar'} icon={timerRunning ? <IconPause /> : <IconPlay />} onPress={toggleTimer} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    gap: 50,
  },
  image: {
    width: 300,
    height: 300,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#000',
    width: '90%',
    borderRadius: 15,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});