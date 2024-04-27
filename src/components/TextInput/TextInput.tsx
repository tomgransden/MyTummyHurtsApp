import { TextInputProps, TextInput as TextInputBase } from 'react-native';

import { styles } from './TextInput.style';

const TextInput = ({ style, ...rest }: TextInputProps) => {
  return <TextInputBase placeholderTextColor="white" style={[styles.container, style]} {...rest} />;
};

export default TextInput;
