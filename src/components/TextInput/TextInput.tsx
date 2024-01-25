import { TextInputProps, TextInput as TextInputBase } from 'react-native';

const TextInput = ({ style, ...rest }: TextInputProps) => {
  return (
    <TextInputBase
      placeholderTextColor="white"
      style={[
        {
          color: 'white',
          backgroundColor: '#bfa2c8',
          height: 56,
          fontSize: 20,
          borderRadius: 24,
          paddingHorizontal: 12,
          fontFamily: 'Rubik',
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default TextInput;
