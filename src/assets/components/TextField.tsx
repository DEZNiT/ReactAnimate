import React from 'react';
import {TextInput, StyleSheet, Dimensions, View} from 'react-native';
import Text from './Text';
import {Color, Font} from '../variables';
// device dimensions
const width = Math.round(Dimensions.get('window').width);

type TextFieldProps = {
  placeholder?: string;
  placeholderTextColor?: string;
  textFieldStyle?: object;
  children?: React.ReactNode;
  secureTextEntry?: boolean;
  buttonBoxStyle?: object;
};

const TextField = ({
  placeholder,
  placeholderTextColor,
  textFieldStyle,
  children,
  secureTextEntry,
  buttonBoxStyle,
}: TextFieldProps) => {
  const placeholderColor = placeholderTextColor
    ? placeholderTextColor
    : Color.muted;
  const combinedStyles = [styles.defaultTextField, textFieldStyle];
  // const buttonBoxWidth =  textFieldStyle
  return (
    <>
      <TextInput
        placeholderTextColor={placeholderColor}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={combinedStyles}></TextInput>
      <View style={[buttonBoxStyle, styles.buttonBoxDefault]}>{children}</View>
    </>
  );
};

export default TextField;

const styles = StyleSheet.create({
  defaultTextField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: 'white',
    height: 60,
    width: width * 0.85,
    borderRadius: 20,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    alignSelf: 'center',
    fontFamily: `${Font.fontRegular}`,
    color: `${Color.default}`,
    paddingHorizontal: 15,
    letterSpacing: 1.1,
    // shadow
    shadowColor: '#E4EBF5',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 4.5,
    shadowOffset: {width: 1, height: 5},
  },

  buttonBoxDefault: {
    position: 'absolute',
  },
});
