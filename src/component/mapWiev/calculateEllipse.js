export default function calculateEllipse(x,y,MajorAlias,MinorAlias,angle){
  const meterLon = 0.0000017884826245207995;
    MajorAlias = MajorAlias * meterLon;
    MinorAlias = MinorAlias * meterLon;
    let steps=36;
    let points=[];
    let beta=-angle*(Math.PI/180);
    let sinbeta=Math.sin(beta);
    let cosbeta=Math.cos(beta);
    for(let i=0;i<360;i+=360/steps){
      let alpha=i*(Math.PI/180);
      let sinalpha=Math.sin(alpha);
      let cosalpha=Math.cos(alpha);
      let X = x + (MajorAlias * cosalpha * cosbeta - MinorAlias * sinalpha * sinbeta);
      let Y = y + (MajorAlias * cosalpha * sinbeta + MinorAlias * sinalpha * cosbeta);
      let array=[X,Y];
      points.push(array);
    }
    // console.log(points);
    return (points);
  }
 