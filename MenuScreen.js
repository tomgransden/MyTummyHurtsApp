import { StyleSheet, Text, SafeAreaView, View } from "react-native";

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
      <Text>My tummy hurts</Text>
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
                  backgroundColor: "green",
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    height: 160,
    width: 160,
    borderRadius: 80,
  },
});
