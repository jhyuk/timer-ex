import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";


// presenter 에는 presenter의 역할만 해주고 state나 리덕스 작업은 index.js에서 해주기로하자.


function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes * 60
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}


class Timer extends Component{
    // Component life Cycle
    //컴포넌트에 props가 바뀌었을때 자동으로 실행되는 함수 
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying){
            const timeInterval = setInterval(() => {
                currentProps.addSecond()
            },1000);
            this.setState({
                timeInterval
            })
        } else if(currentProps.isPlaying && !nextProps.isPlaying){
            clearInterval(this.state.timeInterval);
        }
    }
    render(){
        console.log(this.props) 
        const { isPlaying, elapsedTime, timerDuration, startTimer,restartTimer, addSecond } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying ? ( <Button iconName="play-circle" onPress={startTimer} /> ) : null }
                    {/* {!isPlaying && <Button iconName="play-circle" onPress={} /> } */} 
                    {/* 위 두줄은 같은 말이다. null은 무효값이라 없애도 상관없음 */}
                    {isPlaying ? (<Button iconName="stop-circle" onPress={restartTimer} /> ) : null }
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