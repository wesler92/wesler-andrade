

for(var mes=0;mes < 12; mes++){
    var d=0;
    console.log('');
    console.log('mês '+mes);
    console.log('D  S  T  Q  Q  S  S');
    for (var i = 0; i < 5; i++){
        
        if(i==0){
          console.log( ++d+' ',++d+' ',  ++d+' ',  ++d+' ',  ++d+' ',  ++d+' ',  ++d+' ');
          i++;
        }
        if(i==1){
          console.log( ++d+' ',++d+' ',  ++d,  ++d,  ++d,  ++d,  ++d);
          i++;
        }
        if(i==4){
          console.log( ++d, ++d, ++d);
          
        }
        else
        console.log( ++d, ++d, ++d, ++d, ++d, ++d,++d);
      }
}

