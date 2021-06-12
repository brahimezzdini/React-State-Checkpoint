import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
      Person: {
        fullName: " Brahim Ezzdini",
        bio: "I just love react",
        imgSrc: "./logo192.png",
        profession: "ingénieur"
      },
      show: false,
      currentCount:0
    };
  
    handleShowPerson = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      });
    };

    timer() {
      this.setState({
        currentCount: this.state.currentCount + 1
      })
      if(this.state.currentCount < 1) { 
        clearInterval(this.intervalId);
      }
    }
    componentDidMount() {
      this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
    componentWillUnmount(){
      clearInterval(this.intervalId);
    }
  render() {
      return (
          <div className="App">
            <h1 style={{color: 'red'}}>React State Checkpoint</h1>
              <header className="App-header">
                  
                      <h1 className="styleH1">{this.state.currentCount}</h1>
                      {this.state.show && (
                      <> 
                          <h2>{this.state.Person.fullName}</h2>
                          <h3>{this.state.Person.bio}</h3>
                          <img src={this.state.Person.imgSrc} alt="img"></img>
                          <h2>{this.state.Person.profession}</h2>
                          
                      </>
                      )}
              
                  <button className="style" onClick={this.handleShowPerson}> Show </button>
                  <br/>
                  <a style={{color:'#61dafb'}} href="https://github.com/brahimezzdini/React-State-Checkpoint.git">Voir code source sur Git</a>
                  
              </header>
          </div>
      );
  }
}

export default App;