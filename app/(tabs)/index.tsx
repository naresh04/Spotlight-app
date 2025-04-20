import { Text, View, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import {styles} from  "../../styles/auth.style"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hello</Text>
      <Link href={"/notifications"}>Click To Visit Notification</Link>
   

    </View>
  );
}

