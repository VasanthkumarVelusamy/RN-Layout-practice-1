import { View, Text, StyleSheet } from 'react-native'
export default function Setting({children}) {

    return (
        <View>
            <Text style={style.setting}>{children}</Text>
        </View>
        )
}

const style=StyleSheet.create({
    setting: {
        width: 20,
        height: 20,
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: 'yellow',
        backgroundColor: 'lightgray'
    }
})