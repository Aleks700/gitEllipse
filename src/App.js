import React,{Fragment} from 'react';
import  WebMapView from './component/mapWiev/MapView';
import Header from './component/header/header';
import StormGlass from './component/mapWiev/StormGlass';

function App() {

  const WeatherDate = () =>{
    let X = document.querySelector('#X').value;
    let Y = document.querySelector('#Y').value;
    let W=document.querySelector('#weight');
    let startTime=new Date(document.querySelector('#startTime').value).toISOString();
    console.log()
    StormGlass(X,Y,startTime);
  }


  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: "absolute",
    right:'5vw',
    top: '20vh'
  }
  return (
    <Fragment>
      <Header></Header>
      <WebMapView></WebMapView>
      <div style={divStyle}>
        <label>Введите дату аварии <input type="datetime-local" id="startTime" value="2020-04-01T10:30"></input></label>
        <input type="number" placeholder="Введите Y координату" id="Y" value={59.896297} ></input>
        <input type="number" placeholder="Введите X координату" id="X" value={30.179232}></input>
        <input type="number" placeholder="Масса нефти в тоннах" id="weight" value={500}></input>
        <button id="stormGlass" onClick={WeatherDate}>Запрос данных</button> 
        <button id="clicker">Отрисовать</button> 
        <button id="clear">Очистить</button> 
      </div> 
    
    </Fragment>
  );
}

export default App;
