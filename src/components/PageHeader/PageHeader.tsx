import { View, Text } from 'react-native';

import styles from './PageHeader.style';
import { IPageHeaderProps } from './PageHeader.type';

const defaultProps = {
  title: 'My tummy urts',
};

const PageHeader = ({ title }: IPageHeaderProps & typeof defaultProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

PageHeader.defaultProps = defaultProps;

export default PageHeader;
