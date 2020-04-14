import StormGlass from './StormGlass';

function OilAlias(Xcoord,Ycoord,emergencyTime,weigth){
    while time<=600:
		Ry=42.5*(0.17**(1.0/3.0))*(massa_razliva**(1.0/3.0))*(time**0.25)
		Ry=42.5*((plot_vod-plot_neft)/plot_vod)**(1.0/3.0))*(massa_razliva**(1.0/3.0))*((time)**0.25);	
        Rx=Ry+0.15*(scor_veter**(4.0/3.0))*((time*60)**(3.0/4.0))				
      								 					
       						
    const t1=373;
    const t2=413; 
    const t3=453; 
    const t4=493; 						
    mol1=60+0.3*(t1-273.15)+0.001*(t1-273.15);					
    mol2=60+0.3*(t2-273.15)+0.001*(t2-273.15); 					
    mol3=60+0.3*(t3-273.15)+0.001*(t3-273.15); 					
    mol4=60+0.3*(t4-273.15)+0.001*(t4-273.15);					
    molSumma=mol1+mol2+mol3+mol4;								
    molDolya1=mol1/molSumma; 						
	molDolya2=mol2/molSumma; 							
	molDolya3=mol3/molSumma; 							
	molDolya4=mol4/molSumma;							
		alfa1=0.0125; 									
		alfa2=0.058; 									
		alfa3=0.0000482; 									
		alfa4=0.0000005;									
		A1=2.9+alfa1*t1-alfa2*mol1+alfa3*t1*mol1;			
		A2=2.9+alfa1*t2-alfa2*mol2+alfa3*t2*mol2;			
        A3=2.9+alfa1*t3-alfa2*mol3+alfa3*t3*mol3;							
        A4=2.9+alfa1*t4-alfa2*mol4+alfa3*t4*mol4;			
		B1=10+(alfa4/t1)+(tVod/(mol1**2));					
		B2=10+(alfa4/t2)+(tVod/(mol2**2));					
		B3=10+(alfa4/t3)+(tVod/(mol3**2));					
		B4=10+(alfa4/t4)+(tVod/(mol4**2));					
        P1=2.72**(A1*(1-(((t1*math.log(t1))/(tmpVod*math.log(tmpVod)))*math.log(B1))));				
        P2=2.72**(A2*(1-(((t1*math.log(t2))/(tmpVod*math.log(tmpVod)))*math.log(B2))));				
        P3=2.72**(A3*(1-(((t1*math.log(t3))/(tmpVod*math.log(tmpVod)))*math.log(B3))));				
        P4=2.72**(A4*(1-(((t1*math.log(t4))/(tmpVod*math.log(tmpVod)))*math.log(B4))));		
		K=0.0025*(Scor_Tech**0.78);															
		N1=((K*molDolya1*P1*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
		N2=((K*molDolya2*P2*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
		N3=((K*molDolya3*P3*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
		N4=((K*molDolya4*P4*At*3600)/(8.314*tmpOkruzh));					//количество испарившегося вещества за час
		Nsum=(N1*mol1+N2*mol2+N3*mol3+N4*mol4)/plotnost_neft;									//суммарное количество испарившейся нефти за час
		S=(100e-4)*2.72**(-0.1*(i*3600));												
		R1=3e-6*molDolya1*S*At*3600*mol1;
		R2=3e-6*molDolya2*S*At*3600*mol2;
		R3=3e-6*molDolya3*S*At*3600*mol3;
		R4=3e-6*molDolya4*S*At*3600*mol4;
		Rs=R1+R2+R3+R4;						
		Rsum=Rs/plotnost_neft;
		massaRozliva=massaRozliva-Nsum-Rsum;
		
		New_X=X+((math.cos(gradus_veter)*scor_veter*0.03*time)/111120)+((math.cos(gradus_tech)*scor_tech*1.0*time)/111120)

}
