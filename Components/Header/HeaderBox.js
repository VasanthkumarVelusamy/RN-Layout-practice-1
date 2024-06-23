import {View, Text, StyleSheet} from 'react-native'
import Profile from './Profile'
import Drawer from './Drawer'

export default HeaderBox = () => {
    return (
        <View style={headerStyle.headerBox}>
            <Drawer>Dr</Drawer>
            <Profile> P </Profile>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    headerBox: {
        height: 50,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20
    },
    drawer: {
        height: 100,
        width: 50,
    }
})