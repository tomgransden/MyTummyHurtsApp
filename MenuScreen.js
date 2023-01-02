import { StyleSheet, Text, SafeAreaView, View, StatusBar } from "react-native";

export default function MenuScreen() {
  const array = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
  ];
  const titles = ["Weight", "Medication", "Mood", "Option 4", "Option 5"];
  var tot = array.length,
    h = 360 / tot,
    n = array.length;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          backgroundColor: "mediumpurple",
          borderWidth: 1,
          borderColor: "mediumpurple",
          borderRadius: 4,
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
          My tummy hurts
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.circle}>
          {Array(n)
            .fill()
            .map((_, i) => i)
            .map((i) => (
              <View
                key={i}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  position: "absolute",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [
                    { rotate: i * h + 90 + "deg" },
                    { translateX: -150 },
                  ],
                }}
              >
                <Text
                  style={{
                    transform: [{ rotate: -(i * h + 90) + "deg" }],
                  }}
                >
                  {titles[i]}
                </Text>
              </View>
            ))}
          <View style={styles.circle2}></View>
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "mediumpurple",
          borderWidth: 1,
          borderColor: "mediumpurple",
          borderRadius: 4,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "RubikBubbles-Regular",
            fontSize: 20,
            color: "white",
          }}
        >
          Settings
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#bfa2c8" },
  circle: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    height: 160,
    width: 160,
    borderRadius: 80,
  },
});
