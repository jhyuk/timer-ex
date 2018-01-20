//여기서 리덕스와 state관련 작업을 다 해주고
//presenter에서는 데이터를 보여주기만 하면 된다.

import { connect } from "react-redux";  //connect는 컴포넌트를 store에 연결하는 것을 도와준다.
import Timer from "./presenter";


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

export default connect(mapStateToProps)(Timer);  

// connect는 
//isPlaying, elapsedTime, timerDuration를 리턴하는 함수와 
//presenter에 있는 Timer와 연결한다.
//그렇기 때문에 presenter에 있는 props에 state가 들어있게 되면서 연결이 된것이다.