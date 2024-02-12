import {Stack} from "expo-router"

export default function RootLayout(){
    return<Stack>
        {/* <Stack.screen name="inbox/[id]"/> */}
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="components/Mail"options={{headerShown:false}}/>
        <Stack.Screen name="inbox/[id]" options={{headerShown:false}}/>
        <Stack.Screen name="inbox/SendMail" options={{headerShown:false}}/>


    </Stack>
}