import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        {/* Today's Task */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTiltle}>Today's task</Text>
          
          <View style={styles.items}>
            {/* {This is where the tasks will go!} */}
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
