import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDaVFBIfk-_eHoduygArkwfc8D6hk6FuN4",
            authDomain: "auth-85fd3.firebaseapp.com",
            databaseURL: "https://auth-85fd3.firebaseio.com",
            projectId: "auth-85fd3",
            storageBucket: "auth-85fd3.appspot.com",
            messagingSenderId: "167338120010"
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        )
    }
}

export default App
