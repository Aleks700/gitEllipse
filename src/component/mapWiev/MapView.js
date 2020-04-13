import React from 'react';
import { loadModules } from 'esri-loader';
import calculateEllipse from './calculateEllipse';
import './map.css'

export default class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  static defaultProps={
    X:30.20416,
    Y:59.93237,
    zoom:10,
    semimajorAxis:1000,
    semiminorAxis:500,
    angle:30
  };
  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map','esri/views/MapView','esri/Graphic',"esri/geometry/geometryEngine"], { css: true })
    .then(([Map, MapView,Graphic,geometryEngine]) => {
      const map = new Map({
        basemap: 'topo-vector'
      });

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [this.props.X, this.props.Y],
        zoom: this.props.zoom
      });

      const point1 = {
        type: "point",
        longitude: 30.20416,
        latitude: 59.93237
      };

      const point2 = {
        type: "point",
        longitude: 31.20416,
        latitude: 59.93237
      };
      const point3 = {
        type: "point",
        longitude: 30.20416,
        latitude: 59.93237
      };

      const point4 = {
        type: "point",
        longitude: 30.20416,
        latitude: 58.83237
      };
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],  // orange
        width: 2,
        outline: {
          color: [255, 255, 255], // white
          width: 3,
        }
      };
      const pointGraphic1 = new Graphic({
        geometry: point1,
        symbol: simpleMarkerSymbol
      });
      const pointGraphic2 = new Graphic({
        geometry: point2,
        symbol: simpleMarkerSymbol
      });
      const lineGrafs=new Graphic({
        geometry: {
          type: "polyline",
          paths: [
            [point1.longitude, point1.latitude],
            [point2.longitude, point2.latitude]
          ]
        },
        symbol: {
          type: "simple-line",
          color: "yellow",
          width: 1
        }
      });
      // const lineGrafs2=new Graphic({
      //     type: "polyline",
      //     paths: [
      //       [point3.longitude, point3.latitude],
      //       [point4.longitude, point4.latitude]
      //     ]
      //   },
      //   symbol: {
      //     type: "simple-line",
      //     color: "red",
      //     width: 1
      //   }
      // });


      // this.view.graphics.add(pointGraphic1);
      // this.view.graphics.add(pointGraphic2);
      // this.view.graphics.add(lineGrafs);
      // this.view.graphics.add(lineGrafs2);
      const LongitudeToMeter=geometryEngine.geodesicLength(lineGrafs.geometry,"meters");
      const LatitudeToMeter=geometryEngine.geodesicLength(lineGrafs.geometry,"meters");
      const MeterToLongitude = 1/LongitudeToMeter;

      console.log(1/LongitudeToMeter+" long");
      console.log(1/LatitudeToMeter+" latit");
      
      function oilEllipse(ArrayOfDate){
        calculateEllipse()

      }


      const ellipse_paths=calculateEllipse(30.20416,59.93237,0.017884826245207995,0.00884826245207995,40,200);
      const SecondEllipse_paths=calculateEllipse(30.21416,59.93237,0.017884826245207995,0.00884826245207995,40,200);


      //Draw ellipse with Grafics
      const polygon = {
        type: "polygon",
        rings: ellipse_paths
      };
      const SecondPolygon = {
        type: "polygon",
        rings: SecondEllipse_paths
      };

      const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 1],  // orange, opacity 80%
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      };
      const SecondSimpleFillSymbol = {
        type: "simple-fill",
        color: [0, 255, 255, 1],  // orange, opacity 80%
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      };

   

      const  polygonGraphic = new Graphic({                            
        geometry: polygon,
        symbol: simpleFillSymbol
      });

      const secondPoligon = new Graphic({                            
        geometry: SecondPolygon,
        symbol: SecondSimpleFillSymbol
      });

    

      const clicka = document.querySelector('#clicker');    //нахождение кнопки в DOM дереве
      clicka.addEventListener('click',()=>{                 //вещаем событие при нажатии кнопки
        this.view.graphics.add(polygonGraphic);   
        this.view.graphics.add(secondPoligon);   
      })

      const clear = document.querySelector('#clear');         //нахождение кнопки в DOM дереве
      clear.addEventListener('click',()=>{                    //вещаем событие при нажатии кнопки
        this.view.graphics.removeAll();                       //удаляем графику
      })

      // console.log(geometryEngine.distance(point1 ,point2,"meters"));

      
    });
  }

  componentWillUnmount() {             //прописываем поведение компонента при размонтировании
    if (this.view) {                   //устловие сущестоваониая объекта view
      // destroy the map view         
      this.view.container = null;       //удаление компонента
    }
  }

  render() {                            //отображение компоннента
    return (
      <div className="webmap" ref={this.mapRef} />
    );
  }
}