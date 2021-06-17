    const sdk = VoxImplant.getInstance();
    sdk.init()
      .then(()=>{
        console.log('Este código se ejecuta después de que el SDK se inicializa correctamente.');
        return sdk.connect();
      })
      .then(()=>{
        console.log('Este código se ejecuta después de que el SDK se haya conectado correctamente a Voximplant');
        return sdk.login('user_click_2@clicktocall.peoplebpo.voximplant.com','1qaz2wsx*+');
      })
      .then(()=>{
        console.log('Este código se ejecuta al iniciar sesión correctamente');
        // const prueba = () => {
          const call = sdk.call('*');
          document.body.innerHTML = `<img src="img/llamando.gif" width="290" height="230">`;

          call.on(VoxImplant.CallEvents.Connected, () =>{
            document.body.innerHTML = `<img src="img/contesta.gif" width="290" height="230">`;
            console.log('Conectado');
          });
          
          call.on(VoxImplant.CallEvents.Failed, (e) => {
            document.body.innerHTML = `<img src="img/fallo.png" width="290" height="230">`;
            console.log(`La llamada falló con el ${e.code} error`);
          });
                    
          call.on(VoxImplant.CallEvents.Disconnected, () => console.log('La llamada ha terminado'));
          
        //};
  
        sdk.on(VoxImplant.Events.IncomingCall, (e) => {
          e.call.answer();
          console.log('Contesto');
          e.call.on(VoxImplant.CallEvents.Disconnected, () => console.log('La llamada ha terminado'));
          e.call.on(VoxImplant.CallEvents.Failed, (e) => console.log(`La llamada falló con el ${e.code} error`));
        });
  
      })
      .catch((e)=>{
        console.log(e);
      });

