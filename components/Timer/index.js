//여기서 리덕스와 state관련 작업을 다 해주고
//presenter에서는 데이터를 보여주기만 하면 된다.

import { connect } from "react-redux";  //connect는 컴포넌트를 store에 연결해주는 역할.
import Timer from "./presenter";
import { bindActionCreators } from "redux";
import { actionCreators as timerActions} from "../../reducer";

//mapStateToProps함수는 스토어에서 state를 복사해서 컨테이너의 props에 붙여넣는다.
//즉 state에서 데이터를 가져오는 것을 관리한다.
//이 state는 Provider store에서 가져온다.
function mapStateToProps(state){  
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch){  //디스패치는 액션을 리듀서로 보내는 함수다.
    return {
        //reducer에서 정의한 startTimer와 dispatch를 묶어준다.
        startTimer: bindActionCreators(timerActions.startTimer, dispatch),
        restartTimer: bindActionCreators(timerActions.restartTimer, dispatch),
        addSecond: bindActionCreators(timerActions.addSecond, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer);  

// connect는 
//isPlaying, elapsedTime, timerDuration를 리턴하는 함수 mapStateToProps와 
//presenter에 있는 Timer와 연결한다.
//그렇기 때문에 presenter에 있는 props에 state가 들어있게 되면서 연결이 된것이다.