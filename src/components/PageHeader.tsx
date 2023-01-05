import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

type PageHeaderStyle = {
  container: ViewStyle;
  title: TextStyle;
};

const styles = StyleSheet.create<PageHeaderStyle>({
  container: {
    backgroundColor: 'mediumpurple',
    borderWidth: 1,
    borderColor: 'mediumpurple',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  title: { fontFamily: 'RubikBubbles-Regular', fontSize: 24, color: 'white' },
});

export default PageHeader;
