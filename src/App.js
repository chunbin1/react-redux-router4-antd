import React from "react";
// import { connect } from "react-redux";
import { addGun, removeGun, addGunAsync, addTwice } from "./index.redux";
import { connect } from "./myRedux-react-redux";
// const mapStatetoProps= (state)=>{
//     return {num:state}
// }
// const actionCreators = {addGun,removeGun,addGunAsync}

// App= connect(mapStatetoProps,actionCreators)(App)

@connect(
  // 要什么属性放到props里
  state => ({ num: state }),
  // 要什么方法，放到props里，自动dispatch
  { addGun, removeGun, addGunAsync, addTwice }
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          现在机枪有{this.props.num}把
        </h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>回收武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给武器</button>
        <button onClick={this.props.addTwice}>申请两把</button>
      </div>
    );
  }
}

// App = connect(state => ({ num: state }), { addGun, removeGun, addGunAsync })(
//   App
// );

export default App;
