import StormGlass from './StormGlass';




export default  async function OilAlias(Xcoord,Ycoord,emergencyTime,OilWeigth){
    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    };
    
    console.log(emergencyTime,'Это эмергенси тайм в OilsAliass');
    // .toISOString();

    console.log(emergencyTime,'Это эмергенси тайм после объекта в OilsAliass');
    let OilAliasDate = [];
    let plot_vod = 1003.0;
    let plot_neft = 832;
    let KelvinTemp = 273;
    // emergencyTime = new Date(emergencyTime).toISOString();
    console.log(emergencyTime,'firstt try')
    
    const timeFromEmerginceInMinute = 60;
    for (let i = 1; i<11; i++){
        let IsoTime = emergencyTime
        let OilAliasIter = [];
        OilAliasIter.push(i);
        OilAliasIter.push(Xcoord);
        OilAliasIter.push(Ycoord);
        let time = 60*i;
        let IsoFormate = new Date(emergencyTime).toISOString();
        console.log(IsoFormate, 'Это исо формат в Oils Alias');
        let WeatherDate = await StormGlass(Xcoord,Ycoord,IsoFormate);
        console.log(WeatherDate,'Weather Date'); //Вызов  fetch функции 
       

        let scor_veter = WeatherDate.windSpeed;
        let scor_tech = WeatherDate.currentSpeed;
        let gradus_tech = WeatherDate.currentDirection;
        let gradus_veter = WeatherDate.windDirection;
        let tmpVod = WeatherDate.waterTemperature + KelvinTemp;
        let tmpOkruzh = WeatherDate.airTemperature + KelvinTemp;
    


        // Ry=42.5*(0.17**(1.0/3.0))*(OilWeigth**(1.0/3.0))*(time**0.25);
        let Ry=42.5*((plot_vod-plot_neft)/plot_vod**(1.0/3.0))*(OilWeigth**(1.0/3.0))*((time)**0.25);
        console.log(Ry,'Ry')	
        let Rx=Ry+0.15*(scor_veter**(4.0/3.0))*((time*60)**(3.0/4.0));
        console.log(Rx,'Rx')	
        let At=(Math.pi*Rx*Ry)/4.0;		
        OilAliasIter.push(Ry);
        OilAliasIter.push(Rx);
        			 					
                                
        const t1=373;
        const t2=413; 
        const t3=453; 
        const t4=493; 						
        let mol1=60+0.3*(t1-273.15)+0.001*(t1-273.15);					
        let mol2=60+0.3*(t2-273.15)+0.001*(t2-273.15); 					
        let mol3=60+0.3*(t3-273.15)+0.001*(t3-273.15); 					
        let mol4=60+0.3*(t4-273.15)+0.001*(t4-273.15);					
        let molSumma=mol1+mol2+mol3+mol4;								
        let molDolya1=mol1/molSumma; 						
        let molDolya2=mol2/molSumma; 							
        let molDolya3=mol3/molSumma; 							
        let molDolya4=mol4/molSumma;							
        let alfa1=0.0125; 									
        let alfa2=0.058; 									
        let alfa3=0.0000482; 									
        let alfa4=0.0000005;									
        let A1=2.9+alfa1*t1-alfa2*mol1+alfa3*t1*mol1;			
        let A2=2.9+alfa1*t2-alfa2*mol2+alfa3*t2*mol2;			
        let A3=2.9+alfa1*t3-alfa2*mol3+alfa3*t3*mol3;							
        let A4=2.9+alfa1*t4-alfa2*mol4+alfa3*t4*mol4;			
        let B1=10+(alfa4/t1)+(tmpVod/(mol1**2));					
        let B2=10+(alfa4/t2)+(tmpVod/(mol2**2));					
        let B3=10+(alfa4/t3)+(tmpVod/(mol3**2));					
        let B4=10+(alfa4/t4)+(tmpVod/(mol4**2));					
        let P1=2.72**(A1*(1-(((t1*Math.log(t1))/(tmpVod*Math.log(tmpVod)))*Math.log(B1))));				
        let P2=2.72**(A2*(1-(((t1*Math.log(t2))/(tmpVod*Math.log(tmpVod)))*Math.log(B2))));				
        let P3=2.72**(A3*(1-(((t1*Math.log(t3))/(tmpVod*Math.log(tmpVod)))*Math.log(B3))));				
        let P4=2.72**(A4*(1-(((t1*Math.log(t4))/(tmpVod*Math.log(tmpVod)))*Math.log(B4))));		
        let K=0.0025*(scor_tech**0.78);															
        let N1=((K*molDolya1*P1*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
        let N2=((K*molDolya2*P2*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
        let N3=((K*molDolya3*P3*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
        let N4=((K*molDolya4*P4*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
        let Nsum=(N1*mol1+N2*mol2+N3*mol3+N4*mol4)/plot_neft;									//суммарное количество испарившейся нефти за час
        let S=(100e-4)*2.72**(-0.1*(i*3600));												
        let R1=3e-6*molDolya1*S*At*3600*mol1;
        let R2=3e-6*molDolya2*S*At*3600*mol2;
        let R3=3e-6*molDolya3*S*At*3600*mol3;
        let R4=3e-6*molDolya4*S*At*3600*mol4;
        let Rs=R1+R2+R3+R4;						
        let Rsum=Rs/plot_neft;
        OilWeigth=OilWeigth-Nsum-Rsum;
        Xcoord=Xcoord+((Math.cos(gradus_veter)*scor_veter*0.03*time)/111120)+((Math.cos(gradus_tech)*scor_tech*1.0*time)/111120);
        OilAliasDate.push(OilAliasIter);
        console.log(OilAliasDate);
        emergencyTime = emergencyTime.setHours(emergencyTime.getHours()+1);
      
    }
        console.log(OilAliasDate);
        console.log('Это ваше значение');
}
