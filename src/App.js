import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDaVFBIfk-_eHoduygArkwfc8D6hk6FuN4",
            authDomain: "auth-85fd3.firebaseapp.com",
            databaseURL: "https://auth-85fd3.firebaseio.com",
            projectId: "auth-85fd3",
            storageBucket: "auth-85fd3.appspot.com",
            messagingSenderId: "167338120010"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                )
            case false:
                return <LoginForm />
            default:
                return (
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                )
        }  
    }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App
