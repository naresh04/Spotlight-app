import { COLORS } from '@/Constant/theme'
import { styles, } from '@/styles/auth.style'
import { useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import React, { Component, useReducer } from 'react'
import {useRouter} from "expo-router"
import { Text, View,Image, TouchableOpacity } from 'react-native'

export default function login() {
    const {startSSOFlow} = useSSO()
    const router = useRouter()
    const handleGoogleSignIn = async() => {
        try{
          const {createdSessionId,setActive} = await startSSOFlow({strategy:"oauth_google"})
          if(setActive && createdSessionId){
            setActive({session:createdSessionId})
            router.replace("/(Tabs)")
          }
        }catch (error){
          console.error("Auth error:",error)
        }
    }
    return (
      <View style={styles.container}>
            <View style = {styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name = 'leaf' size={32} color={COLORS.primary}/>
                </View>
                <Text style= {styles.appName}>spotlight</Text>
                <Text style= {styles.tagline}>Do't miss anything</Text>
            </View>
            <View style={styles.illustrationContainer}>
                <Image
                source={require("../../assets/images/logo-item.png")}
                style={styles.illustration}
                resizeMode='cover'
                >
                </Image>
            </View>
            <View style = {styles.loginSection}>
            <TouchableOpacity 
                style = {styles.googleButton}
                onPress={handleGoogleSignIn}
                activeOpacity={0.9}>
                <View style={styles.googleIconContainer}>
                    <Ionicons name="logo-google" size={20} color={COLORS.surface}/>
                </View>
                <Text style={styles.googleButtonText}>Continoue with google </Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By Continoue, you agree to our terms and privacy policy
            </Text>

            </View>
      </View>
    )
}
