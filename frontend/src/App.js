import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import ReactChartkick, { LineChart, ColumnChart } from 'react-chartkick'
import Highcharts from 'highcharts'

ReactChartkick.addAdapter(Highcharts)

const CandidateComponent = ({name, picture, description}) => {
    return (
        <div style={{display: 'flex', flexDirection:'row'}}>
        <div style={{
            display:'flex',
            flex:1,
            flexDirection: 'column',
            backgroundColor:'#f3f4f7',
            width: '30%',
            height: '240px',
            borderRadius: '10px',
            alignItems:'center',
            padding: 12,
            margin: 8,
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s'
        }}>
        <div style={{
            width:'120px',
            height:'120px',
            overflow: 'hidden',
            borderRadius: '50%'}}>
            <img style={{height:'100%'}} src={picture} />
        </div>
            <h3 style={{color: '#007fdb'}}>{name}</h3>
            <h4 style={{fontStyle:'italic'}}>{description}</h4>
        </div>

        <div style={{padding: 20}}>
            <LineChart
                discrete={true}
                data={{
                    "13/Ago": 2,
                    "14/Ago": 5,
                    "15/Ago": 1,
                    "16/Ago": 20,
                    "17/Ago": 10
                }}
            />
        </div>
    </div>
    )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://seeklogo.com/images/B/brasao-da-republica-do-brasil-logo-F668D19105-seeklogo.com.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Cenário Eleitoral</h1>
        </header>

        <div style={{padding: 20}}>

        <ul style={{listStyle: 'none'}}>
            <li>
                <CandidateComponent picture='https://img.jovempan.uol.com.br/uploads/2018/08/jair-bolsonaro.jpg'
                name='Bolsonaro'
                description='"Minha arma minha vida, Deus acima de todos."'/>
            </li>

            <li>
                <CandidateComponent
                    picture='https://pbs.twimg.com/profile_images/1029926047788228608/INFVA7Xs_400x400.jpg'
                    name='Ciro Gomes'
                    description='"Vou tirar teu nome do SPC"'/>
            </li>

            <li>
                <CandidateComponent
                    picture='https://images.immedia.com.br//26/26534_2_EL.jpg?c=201808011017'
                    name='Marina Silva'
                    description='"?"'/>
            </li>

            <li>
                <CandidateComponent
                    picture='https://www.diariodocentrodomundo.com.br/wp-content/uploads/2016/01/geraldo-alckmin-1-600x400.jpg'
                    name='Alckmin'
                    description='"Se eu for presidente não tem merenda, mas tem picolé de chuchu na sobremesa."'/>
            </li>
        </ul>

        </div>
      </div>
    )
  }
}

export default App
