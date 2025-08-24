import { Stack } from "expo-router"

const OrderLayout = () => {
    return (
       <Stack>
        <Stack.Screen name="name" options={{headerShown: false }}/>
       </Stack>
    )
}
export default OrderLayout;