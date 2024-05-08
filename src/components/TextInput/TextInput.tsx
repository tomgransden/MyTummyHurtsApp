import { TextInputProps, TextInput as TextInputBase, Text } from 'react-native';

import { styles } from './TextInput.style';

const TextInput = ({ style, placeholder, ...rest }: TextInputProps) => {
  return (
    <>
      <Text style={{ fontWeight: 'bold' }}>{placeholder}</Text>
      <TextInputBase
        placeholder={placeholder}
        placeholderTextColor="white"
        style={[styles.container, style]}
        {...rest}
      />
    </>
  );
};

export default TextInput;
