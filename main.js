       const brazoSegundo = document.querySelector('.brazo-segundo');
        const brazoMinuto = document.querySelector('.brazo-minuto');
        const brazoHora = document.querySelector('.brazo-hora');
        function setDate(){  
        
         
        const esteMomento = new Date();
        
      
    
        /* los segundos se igualan a grados y se le indica al brazo de segundos que rote en esa cantidad
        de grados, pero cuando los segundos pasan de 59 a 0, el brazo de segundos vuelve hacia atras para 
        llegar a la posicion 0 en vez de avanzar. Para evitar esto, hacemos que cuando los segundos sean iguales a 0
         no haya transicion */
        const segundos = esteMomento.getSeconds();
        if (segundos == 00) {
            brazoSegundo.style.transition =  `none`;
        
        }else{
            brazoSegundo.style.transition = `0.5s`;
            
        }
        const segundosGrados = ((segundos / 60) * 360) + 90;
        brazoSegundo.style.transform = `rotate(${segundosGrados}deg)`;
        //lo mismo que pasa en segundos, tambien aplica para minutos
        const minutos = esteMomento.getMinutes();
        if (minutos == 00) {
            brazoMinuto.style.transition =  `none`;
        
        }else{
            brazoMinuto.style.transition = `0.5s`;
            
        }
        const minutosGrados = ((minutos / 60) * 360) + 90;
        brazoMinuto.style.transform = `rotate(${minutosGrados}deg)`;  
        
       
        //lo mismo en horas
        const horas = esteMomento.getHours();
      if (horas == 00) {
            brazoHora.style.transition =  `none`;
        
        }else{
            brazoHora.style.transition = `0.5s`;
            
        }
        const horasGrados = ((horas / 12) * 360) + ((minutos/60)*30) + 90;
        brazoHora.style.transform = `rotate(${horasGrados}deg)`;    
         
        
       
        }
        
        /*usando setInterval hacemos que la funcion setDate, que define la hora en el reloj, se ejecute cada segundo
        haciendo que funcione como un reloj real*/
        setInterval(setDate, 1000 );
        setDate();
        
