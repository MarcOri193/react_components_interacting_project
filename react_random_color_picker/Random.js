import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button'; // importing the Button component class

class Random extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      color: [0, 100, 255]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // storing the random color as state and binding the method

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }
  // defining an event handler that's update the page to a new random color

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}. {/* accessing to show the color code and making it more readble */}
        </h1>
        <Button
          light={this.isLight()}
          onClick={this.handleClick}
        /> {/*rendering a Button instance, defining an event handler that updates the page to a new random color and passing it to another component as a prop with onCLick attribute*/}
      </div>
    );
  }
}

ReactDOM.render(
  <Random />,
  document.getElementById('app')
);
