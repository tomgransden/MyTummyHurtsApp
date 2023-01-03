import { View, Text } from "react-native";

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps): JSX.Element => (
  <View
    style={{
      backgroundColor: "mediumpurple",
      borderWidth: 1,
      borderColor: "mediumpurple",
      borderRadius: 16,
      marginHorizontal: 16,
      minHeight: 56,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text
      style={{
        fontFamily: "RubikBubbles-Regular",
        fontSize: 40,
        color: "white",
      }}
    >
      {title}
    </Text>
  </View>
);

export default PageHeader;
