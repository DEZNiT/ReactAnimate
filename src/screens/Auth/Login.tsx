import React, {useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import Svg, {Image as ImageSvg, ClipPath, Circle} from 'react-native-svg';
import {Text, TextField, Button} from '../../assets/components';
import {Color} from '../../assets/variables';
import Animated, {Easing, onChange} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  clockRunning,
  startClock,
  timing,
  debug,
  stopClock,
  Extrapolate,
  interpolate,
  concat,
} = Animated;

const runTiming = (clock: any, value: number, dest: number) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ]);
};

const LoginScreen = () => {
  const buttonOpacity = useRef(new Value(1));
  const onStateChange = useCallback(
    event(
      [
        {
          nativeEvent: ({state}: any) =>
            block([
              cond(
                eq(state, State.END),
                set(buttonOpacity.current, runTiming(new Clock(), 1, 0)),
              ),
            ]),
        },
      ],
      {useNativeDriver: true},
    ),
    [],
  );

  const onCloseState = useCallback(
    event(
      [
        {
          nativeEvent: ({state}: any) =>
            block([
              cond(
                eq(state, State.END),
                set(buttonOpacity.current, runTiming(new Clock(), 0, 1)),
              ),
            ]),
        },
      ],
      {useNativeDriver: true},
    ),
    [],
  );

  // const rotate = translationYRef.current.interpolate({
  // 	inputRange: [-100, 100],
  // 	outputRange: ['-25deg', '25deg'],
  // });

  const buttonY = buttonOpacity.current.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const textInputZindex = buttonOpacity.current.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP,
  });
  const textInputOpacity = buttonOpacity.current.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const bgY = buttonOpacity.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 3 - 50, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const textInputY = buttonOpacity.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: Extrapolate.CLAMP,
  });

  const rotateClose = buttonOpacity.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-180, 180],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
          },
          {transform: [{translateY: bgY}]},
        ]}>
        <Svg height={height + 50} width={width}>
          <ClipPath id="clip">
            <Circle r={height + 50} cx={width / 2}></Circle>
          </ClipPath>
          <ImageSvg
            height={height + 50}
            width={width}
            href={require('../../assets/images/im1.jpg')}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"></ImageSvg>
        </Svg>
      </Animated.View>

      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          position: 'absolute',
          top: height / 3,
          left: width / 2.9,
          zIndex: 10,
        }}></Image>

      <View style={{height: height / 3, justifyContent: 'center'}}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <Animated.View
            style={[
              styles.buttonStyle,
              {
                opacity: buttonOpacity.current,
                zIndex: 1,
                transform: [{translateY: buttonY}],
              },
            ]}>
            <Text size="l" fontFamily="medium">
              Sign In
            </Text>
          </Animated.View>
        </TapGestureHandler>
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: height / 3,
            zIndex: textInputZindex,
            opacity: textInputOpacity,
            transform: [{translateY: textInputY}],
            justifyContent: 'center',
          }}>
          <TapGestureHandler onHandlerStateChange={onCloseState}>
            <Animated.View style={styles.closeButton}>
              <Animated.Text
                style={{
                  transform: [{rotate: concat(rotateClose + 'deg')}],
                }}>
                X
              </Animated.Text>
            </Animated.View>
          </TapGestureHandler>

          <TextField
            placeholder="Email"
            textFieldStyle={{shadowColor: Color.darkShadow}}></TextField>

          <TextField
            placeholder="Password"
            textFieldStyle={{shadowColor: Color.darkShadow}}></TextField>
          <Animated.View
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button color="primary" title="Sign In" size="l"></Button>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    justifyContent: 'flex-end',
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 6.5,
    shadowOffset: {width: 1, height: 2},
  },
  buttonStyle: {
    backgroundColor: Color.white,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
