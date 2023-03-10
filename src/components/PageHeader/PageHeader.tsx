import { View, Text } from 'react-native';

import styles from './PageHeader.style';

type PageHeaderProps = {
  title: string;
};

const defaultProps = {
  title: 'My tummy hurts',
};

const PageHeader = ({ title }: PageHeaderProps & typeof defaultProps): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

PageHeader.defaultProps = defaultProps;

export default PageHeader;
