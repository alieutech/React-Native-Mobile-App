import React from "react";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={24} {...props} style={{ color: props.color }}/>;
}

const TabsLayout = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.SafeArea}>
            <Tabs
            screenOptions={ {
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 17,
                },
                headerShown: false,
            }}
            >
            <Tabs.Screen 
            name="index" 
            options={{
                 title: "Shop",
                tabBarIcon(props) {
                    const { color } = props;
                    return <TabBarIcon name="shopping-cart" color={color} />;
                },
            }}/>
            <Tabs.Screen 
            name="orders" 
            options={{
                title: "Orders",
                tabBarIcon(props) {
                    const { color } = props;
                    return <TabBarIcon name="book" color={color} />;
                },
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

    },
})