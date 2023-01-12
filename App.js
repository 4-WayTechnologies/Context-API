import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { createContext, useState } from "react";

import axios from 'axios';
import About from './About';
export const ContextApi=createContext()

const App = () => {
const [data,setData]=useState(null)
const [email,setEmail]=useState()
const [password,setPassword]=useState()
    const LoginBtn=()=>{
      var data = JSON.stringify({
        "Password": password,
        "Email": email,
        
      });
      const url= 'https://*****************************/users/login'
      axios({
        method:'post',
        url:url,
        headers: { 
          'Content-Type': 'application/json'
        },
        data :data
      }).then(response=>{
        setData(response.data)
      })
    }
  return (
    <ContextApi.Provider value={{data,setData}}>
    <View>
   {data==null?<View>
    <Text style={styles.loginText}>Login</Text>
            <TextInput placeholder='Email' style={styles.TextInput} value={email} onChangeText={(prev)=>setEmail(prev)}/>
            <TextInput placeholder='Password' style={styles.TextInput} value={password} onChangeText={(prev)=>setPassword(prev)} secureTextEntry={true}/>
            <TouchableOpacity style={styles.button} onPress={()=>LoginBtn()}>
            <Text style={styles.Login_btn}>Login</Text>
            </TouchableOpacity>
    </View>:<About/>}
            
  </View>
    </ContextApi.Provider>
 
  )
}

export default App

const styles = StyleSheet.create({
  loginText:{
    color:'#000000',
    fontSize:22,
    alignSelf:'center',
    marginTop:20
  },TextInput:{
    width:340,
    height:40,
    borderWidth:1,
    borderColor:'#000000',
    marginHorizontal:30,
    marginTop:20
  },button:{
    width:300,
    height:50,
    backgroundColor:'blue',
    marginHorizontal:50,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },Login_btn:{
    color:'#ffffff',fontSize:20
  }
})