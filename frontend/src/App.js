import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactChartkick, { LineChart, ColumnChart } from 'react-chartkick'
import Highcharts from 'highcharts'

ReactChartkick.addAdapter(Highcharts)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://seeklogo.com/images/B/brasao-da-republica-do-brasil-logo-F668D19105-seeklogo.com.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Cenário Eleitoral</h1>
        </header>

        <ul style={{listStyle: 'none'}}>
            <li>
                <div style={{
                    flex:1,
                    flexDirection: 'row',
                    backgroundColor:'red',
                    alignItems:'center'}}>

                    <div style={{
                        width:'80px',
                        height:'80px',
                        overflow: 'hidden', 
                        borderRadius: '50%'}}>
                        <img
                            style={{height:'100%'}} src={'https://img.jovempan.uol.com.br/uploads/2018/08/jair-bolsonaro.jpg'} />
                    </div>
                    <h3>Bolsonaro</h3>
                </div>
            </li>
        </ul>

        {/* <div style={{marginTop: 20}}>
        <LineChart discrete={true} data={{"2017-05-13": 2, "2017-05-14": 5, "2017-05-15": 1}} />
        </div> */}
        {/* <ColumnChart data={[["Sun", 32], ["Mon", 46], ["Tue", 28]]} /> */}

      </div>
    );
  }
}

export default App;
