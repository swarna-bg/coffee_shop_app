import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTSIZE, SPACING,COLORS } from '../theme/theme'
import GradientBGIcon from './GradientBGIcon'
import ProfilePic from './profilePic'


interface HeaderBarProps {
    title?:string
}

const HeaderBar :React.FC<HeaderBarProps>= ({title}) => {
  return (
    <View style={styles.headerContainer}>
        <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePic/>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        padding:SPACING.space_30,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center"
    },
    headerText:{
        fontSize:FONTSIZE.size_20,
        color:COLORS.primaryWhiteHex
    }
})

export default HeaderBar