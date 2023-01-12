import { Button, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { ContextApi } from './App'

const About = () => {
  const response=useContext(ContextApi)

  const logout=()=>{
    response.setData(null)
  }
  return (
    
  <View>
  <TouchableOpacity onPress={()=>logout()} style={styles.logout_box}>
   <Text style={styles.logout_text}>LogOut</Text>
  
  </TouchableOpacity>
</View>
  )
}

export default About

const styles = StyleSheet.create({
  logout_box:{
      alignSelf:'center',
      marginTop:380
  },
  logout_text:
  {
    color:'#000000',
    fontSize:22,
    
  }
})