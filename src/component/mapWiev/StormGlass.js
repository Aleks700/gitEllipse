export default async function StormGlass(lat,lng,time){
    const paramsArray = ['airTemperature','waterTemperature','windSpeed','windDirection','currentDirection','currentSpeed'];
    const newParams = {};
    const params = paramsArray.join();
    const ApiKey = '587b326a-7f51-11ea-a222-0242ac130002-587b331e-7f51-11ea-a222-0242ac130002'; //login ключ для доступа к даннымы
    let response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lng}&lng=${lat}&params=${params}&start=${time}&end=${time}`, {
      headers: {
        'Authorization': ApiKey
      }
    })
    let json = await response.json();
    let weatherDate = json.hours[0] ;
    // console.log(weatherDate);
    for(const j in paramsArray){
        let sum = 0;
      console.log(weatherDate[paramsArray[j]]+'параметр');
        for (const z in weatherDate[paramsArray[j]]){
          // console.log(weatherDate[paramsArray[j]][z]+'значение внутри переменной ');
          sum = sum + weatherDate[paramsArray[j]][z];
            // sum = sum + weatherDate[paramsArray[j]][z];s
        }
        let object_length = Object.keys(weatherDate[paramsArray[j]]).length;
     
        // console.log(sum/object_length,'это деление суммы');
        // const value = sum/Object.keys(weatherDate[paramsArray[j]]).length;
        // console.log(value);
        newParams[paramsArray[j]]=sum/object_length;
    }
    // console.log(newParams,'новый объект');
    return newParams;
}