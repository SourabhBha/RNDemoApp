import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const AppTextField = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType, ...rest }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    autoCapitalize="none"
    {...rest}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderColor: '#dcdde1',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});

export default AppTextField;

