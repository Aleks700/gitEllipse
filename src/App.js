import React,{Fragment} from 'react';
import  WebMapView from './component/mapWiev/MapView';
// import Header from './component/header/header';
// import StormGlass from './component/mapWiev/StormGlass';
import OilsAlias from './component/mapWiev/OilsAlias';



function App() {
  const WeatherDate = () =>{
    let Xcoord = document.querySelector('#X').value;
    let Ycoord = document.querySelector('#Y').value;
    let Weight = document.querySelector('#weight').value;
    // let startTime = new Date(document.querySelector('#startTime').value); //рабочая функция
    let startTime = document.querySelector('#startTime').value;
    // startTime = startTime.toISOString();
    console.log(startTime,'Старт тайм в App');
    // StormGlass(Xcoord,Ycoord,startTime);
    OilsAlias(Xcoord,Ycoord,startTime,Weight)

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
      {/* <Header></Header> */}
      <WebMapView></WebMapView>
      <div style={divStyle}>
        <label>Введите дату аварии <input type="datetime-local" id="startTime" value="2020-04-01T10:30"></input></label>
        <input type="number" placeholder="Введите Y координату" id="Y" value={59.896297} ></input>
        <input type="number" placeholder="Введите X координату" id="X" value={30.179232}></input>
        <input type="number" placeholder="Масса нефти в тоннах" id="weight" value={5000}></input>
        <button id="stormGlass" onClick={WeatherDate}>Запрос данных</button> 
        <button id="clicker">Отрисовать</button> 
        <button id="clear">Очистить</button> 
      </div> 
    
    </Fragment>
  );
}

export default App;
