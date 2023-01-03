import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import PageHeader from "./PageHeader";
import dayjs from "dayjs";

const types = {
  0: "Medication",
  1: "Food",
};

const exampleData = [
  {
    createdDate: new Date(2023, 1, 2, 3, 24, 0),
    type: 0,
    metadata: {
      medications: ["Buscopan 20mg", "Ibuprofen 40mg", "Paracetamol 100mg"],
    },
  },
  {
    createdDate: new Date(2023, 1, 2, 14, 24, 0),
    type: 1,
    metadata: {
      image:
        "https://img.kidspot.com.au/ykOJKEb7/kk/2019/08/greeneggs-and-ham-601642-1.jpg",
      description:
        "Green eggs and hamasnhasFKSAhab   adsBFGBas asuigF uiasfJBsf gasFBJsa asuIFJAS asuFUasf iuasbwfJF UIafsaf",
    },
  },
];

const renderItem = (item, index) => {
  switch (item.type) {
    case 0:
      return (
        <View
          key={`${index}-${item.type}`}
          style={{
            minHeight: 56,
            paddingBottom: 16,
            marginHorizontal: 16,
            borderWidth: 1,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ fontSize: 16 }}>
                {dayjs(item.createdDate).format("hh:mma")}
              </Text>
            </View>
            <Text> - </Text>
            <View
              style={{
                backgroundColor: "white",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ fontSize: 16 }}>{types?.[item?.type]}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingHorizontal: 12,
            }}
          >
            {item.metadata.medications.map((medication, index) => (
              <View
                key={`medication-${index}`}
                style={{
                  borderWidth: 1,
                  borderRadius: 32,
                  marginRight: 12,
                  marginTop: 12,
                  minHeight: 24,
                  padding: 8,
                }}
              >
                <Text style={{ fontSize: 12 }}>{medication}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    case 1:
      return (
        <View
          key={`${index}-${item.type}`}
          style={{
            minHeight: 56,
            backgroundColor: "red",
            marginHorizontal: 16,
            paddingBottom: 16,
            marginTop: 16,
            borderWidth: 1,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ fontSize: 16 }}>
                {dayjs(item.createdDate).format("hh:mma")}
              </Text>
            </View>
            <Text> - </Text>
            <View
              style={{
                backgroundColor: "white",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ fontSize: 16 }}>{types?.[item?.type]}</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 16,
              flexDirection: "row",
              marginTop: 16,
            }}
          >
            <Image
              source={{ uri: item?.metadata?.image }}
              style={{ width: 60, height: 60, resizeMode: "cover" }}
            />
            <Text style={{ marginHorizontal: 16 }}>
              {item?.metadata?.description}
            </Text>
          </View>
        </View>
      );
  }
};

export default function Summary() {
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title={"My tummy hurts"} />
      <ScrollView contentContainerStyle={{ marginTop: 16 }}>
        {exampleData.map((item, index) => renderItem(item, index))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bfa2c8",
    marginTop: StatusBar.currentHeight,
  },
});
