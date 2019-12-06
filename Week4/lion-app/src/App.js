import React from 'react';
import logo from './logo.svg';
import './App.css';

//JSX = html태그
// jsx -> style를 통해 css
// jsx -> className를 통해 css를 함

const myStyle = {color: 'red'
                ,fontWeight: 700,
}

// function WorldClock(props){
//   return(
//     <div className={"WorldClock"}>
//       <h2>도시 {props.city}</h2>
//       <h2>시간 {props.time}</h2>
//     </div>
//     //div태그는 하나만 쓸 수 있음...
//   )
// }

class App extends React.Component {
  constructor(props){
    super(props)
    this.cityTimeData=[
      ['서울',10],
      ['베이징',9],
      ['시드니',12],
      ['LA',17]
    ]
    this.state = {
      content: '',
      show: true,
    }
    console.log("parent 시작합니다.");
    
  }

componentDidMount(){
  console.log("parent 마운트 되어감");
  
}
componentDidUpdate(){
  console.log("Parent 업데이트!");
  
}
handlingChange = (event) =>{
  this.setState({content: event.target.value})
}
handlingClick = (event) =>{
  this.setState((prevState)=>({show:prevState.show}))
}
  render(){
    console.log("parent 랜더링 해줌");
    
    return (
      <div className="App">
        <h1 className={'myStyle'} >안녕</h1>
        <div className={'post'}>
          첫개시글입니다.
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        <button onClick={this.handlingClick}>손가락 튕기기</button>
        {this.state.show &&
        this.cityTimeData.map((citytime,index)=>
    <WorldClock city={citytime[0]} time={citytime[1]} key = {index}/>
    )}
        {/* style={myStyle} */}
        {/* css로 관리를 하는것이 목적일때 className를 씀 */}
      </div>
     
    );
  }
  
}

class WorldClock extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
    //this.setstate
    //this.state.minute 절대안됨...
    //this.setState({minute:1})
    
    console.log("   child 시작");
    
  }
  // Child Component : WorldClock의 componentDidMount
componentDidMount(){
  this.timer  =  setInterval(() => {
      this.setState((state)=>(
          state.minute  ===  59
          ?{hour :  state.hour  +  1, minute :  0}
          :{minute :  state.minute+1}
      ))
  }, 100)
console.log(" Child ) 마운트 되었습니다")
}
  componentDidUpdate(){
    console.log("   child 업데이트!");
    
  }
  componentWillUnmount() {
    console.log("child 언마운트");
    clearInterval(this.timer)
    
  }
  
  handlingClick = (event) => {
    console.log(event.target);
    
    this.setState({stop : event.target.value })
    clearInterval(this.timer)
  }
    //render 미리 약속된 함수
    render(){
      return(
        <div className={"WorldClock"}>
          <h2>도시 {this.props.city}</h2>
          <h2>시간 {this.state.hour}시 {this.state.minute}분</h2>
          <button value={true} onClick={this.handlingClick}>스톱 </button>
        </div>
        //div태그는 하나만 쓸 수 있음...
      )
    }
}



export default App;
