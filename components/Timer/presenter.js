import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";


// presenter 에는 presenter의 역할만 해주고 state나 리덕스 작업은 index.js에서 해주기로하자.


class Timer extends Component{
    render(){
        // console.log(this.props) 
        const { isPlaying, elapsedTime, timerDuration } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying ? ( <Button iconName="play-circle" onPress={() => alert("it works")} /> ) : null }
                    {/* {!isPlaying && <Button iconName="play-circle" onPress={() => alert("it works")} /> } */} 
                    {/* 위 두줄은 같은 말이다. null은 무효값이라 없애도 상관없음 */}
                    {isPlaying ? (<Button iconName="stop-circle" onPress={() => alert("it works")} /> ) : null }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2806ce"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default Timer;