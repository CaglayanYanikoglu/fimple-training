import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('init props', props);
    // this.counter = 20;
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 20,
      name: 'Caglayan'
    }
  }

  handleClick = () => {
    // this.counter = this.counter + 1;
    console.log('this counter', this.counter);
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return (
      <div style={{ border: '1px solid #ddd', padding: '16px' }}>
        <h2>Home</h2>
        <p>Counter {this.state.counter}</p>
        <button onClick={this.handleClick}>Increase</button>
        <p>Name  is {this.props.name}</p>
      </div>
    )
  }
}

export default Home;
