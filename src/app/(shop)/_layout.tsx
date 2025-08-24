import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const TabsLayout = () => {
    return (
        <SafeAreaView style={styles.SafeArea}>
            <Tabs
            screenOptions={ {
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: '#eee',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 1,
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 17,
                },
                headerShown: false,
            }}
            >
            <Tabs.Screen name="index" options={{
                headerShown: false
            }}/>
            <Tabs.Screen name="orders" options={{
                headerShown: false
            }}/>
        </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout;

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,

    }
})