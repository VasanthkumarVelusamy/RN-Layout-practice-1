import {View, Text, StyleSheet} from 'react-native'

export default function ListItem() {
    return (
        <View style={style.box}></View>
    )
}

const style = StyleSheet.create({
    box: {
        height: 120,
        alignSelf: 'stretch',
        backgroundColor: 'pink',
        borderRadius: '10',
        borderBlockColor: 'red'
    }
})