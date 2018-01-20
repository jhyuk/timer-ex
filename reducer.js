

// 액션을 정의한다.
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// 정의한 액션 실행시킬수있게 함수로 만듬 (action creator)
//View에 있는 Component에 함수를 달고 함수가 호출이 되면 그 함수가 가지고있는 액션을 보내게 된다.
// 리덕스는 reducer를 실행시키고 받은 액션이 무엇인지 확인한다.
function startTimer(){
    return {
        type: START_TIMER
    };
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    };
}

function addSecond(){
    return {
        type: ADD_SECOND    
    };
}


//여기서는 디폴트값을 정해준다. 즉 초기 세팅값
const TIMER_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
}

function reducer(state = initialState, action){
    //reducer는 항상 state값을 가지고 있으며 state를 주지 않을 경우 디폴트로 initialState값을 가지고 시작한다. 
    //그리고 action 을 받는다. 액션을 보낼때 마다 리덕스는 자동(디폴트)으로 reducer를 실행한다.
    //switch는 정의한 액션의 타입기반으로 작동한다.

    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyADDSecond(state);
        default:            //state와 Timer와 연결하기
            return state;   //이 타이머가 진행중인지 아닌지 알아야하는데 위의 케이스가 아니면 state를 반환하지 않아 알수 없기 때문에 디폴트로 state를 반환한다.
    } 
}


//액션을 받은 reducer가 실행해줄 액션들
function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true
    }
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyADDSecond(state){
    if (state.elapsedTime < TIMER_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}

// 앱에서 사용하기위해 actionCreator를 export해준다.
// 이 앱에서는 View안에 버튼들(Component)이 수행할 함수들 
const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

export default reducer;