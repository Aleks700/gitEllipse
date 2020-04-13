export default function calculateEllipse(x,y,a,b,angle,steps){
    if(steps==null)steps=36;
    let points=[];
    let beta=-angle*(Math.PI/180);
    let sinbeta=Math.sin(beta);
    let cosbeta=Math.cos(beta);
    for(let i=0;i<360;i+=360/steps){
      let alpha=i*(Math.PI/180);
      let sinalpha=Math.sin(alpha);
      let cosalpha=Math.cos(alpha);
      let X = x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta);
      let Y = y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta);
      let array=[X,Y];
      points.push(array);
    }
    console.log(points);
    return (points);
  }
 