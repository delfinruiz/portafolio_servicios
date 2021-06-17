// cuando el usuario ingresa sus credenciales

function ingresar() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)

    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      observador();
      location.reload();
      console.log(user)

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      contenido.innerHTML = `
          <div class="alert alert-danger mt-3 text-center" role="alert">
          Usuario o Clave Incorrecta.
        </div>`
    });
};

// observador verifica si el usuario esta logeado o no

function observador() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('existe');
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      ver_login(false);
      ver_web(true);

      // leer estado de herramientas en la base click_to_call

      var id_click_to_call = '9K1gN7hL1Ce21B4ahBub';
      var id_widget_bitrix24 = 'xnx8qD9LKevxL7dtwThd';
      var db = firebase.firestore();

      db.collection("herramientas").doc(id_click_to_call).onSnapshot((doc) => {
      var estado_click_to_call = doc.data().estado;
      
      if (estado_click_to_call == 'on' && user){
        document.getElementById('click_to_call').checked = 1;
        click_to_call();
      } 
        
      console.log(estado_click_to_call);
      });

      // leer estado de herramientas en la base Widget Bitrix
      
      db.collection("herramientas").doc(id_widget_bitrix24).onSnapshot((doc) => {
      var estado_widget_bitrix24 = doc.data().estado;
      
      if (estado_widget_bitrix24 == 'on' && user){
        document.getElementById('widget_bitrix24').checked = 1;
        widget_bitrix();
      }
      
      console.log(estado_widget_bitrix24);
      });




    } else {
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      ver_web(false);
      ver_login(true);
      console.log('no existe')
    }
  });
}


// si el usuario esta logeado muestra la web si no la esconde

function ver_web(e) {
  if (e == true) {
    document.getElementById("web").style.display = "show";
  } else {
    document.getElementById("web").style.display = "none";
  }
};

// si el usuario esta logeado muestra la web si no muestra el login

function ver_login(a) {
  if (a == true) {
    document.getElementById("login").style.display = "show";
  } else {
    document.getElementById("login").style.display = "none";
  }
};

// Cerrar sesion

function cerrar() {

  firebase.auth().signOut().then(() => {
    observador();
    location.reload();
    console.log('Se cerro con exito');

  }).catch((error) => {
    console.log(error)
  });

}

observador();

// activar o desactivar script de herramientas

function herramientas() {

  var btn_click_to_call   = document.getElementById("click_to_call");
  var btn_widget_bitrix24 = document.getElementById("widget_bitrix24");
  var btn_chat_bot        = document.getElementById("chat_bot");
  
  (btn_click_to_call.checked == true) ? estado('9K1gN7hL1Ce21B4ahBub', 'on'): estado('9K1gN7hL1Ce21B4ahBub', 'off'); 
  (btn_widget_bitrix24.checked == true) ? estado('xnx8qD9LKevxL7dtwThd', 'on'): estado('xnx8qD9LKevxL7dtwThd', 'off');
  (btn_chat_bot.checked == true) ? estado('Ql2jaNLX9FNdBluBs9D3', 'on'): estado('Ql2jaNLX9FNdBluBs9D3', 'off');
  
}

function estado(id, estado_btn){

  var db = firebase.firestore();
  var editar_herramientas = db.collection("herramientas").doc(id);
  
  return editar_herramientas.update({
      estado: estado_btn
      }).then(function() {
      
        console.log('Documento actualizado ' + estado_btn);
        location.reload();
        }).catch((error) => {
      
        console.error(error);

  });

}


// script de herramientas

function click_to_call() {
  
  var ZingayaConfig = {"buttonLabel":"Llamar a un Agente","labelColor":"#d8dfe6","labelFontSize":19,"labelTextDecoration":"none","labelFontWeight":"bold","labelShadowDirection":"bottom","labelShadowColor":"#8fd3ec","labelShadow":0,"buttonBackgroundColor":"#07354a","buttonGradientColor1":"#07354a","buttonGradientColor2":"#07354a","buttonGradientColor3":"#07354a","buttonGradientColor4":"#07354a","buttonShadow":"true","buttonHoverBackgroundColor":"#69ad26","buttonHoverGradientColor1":"#138213","buttonHoverGradientColor2":"#138213","buttonHoverGradientColor3":"#138213","buttonHoverGradientColor4":"#138213","buttonActiveShadowColor1":"","buttonActiveShadowColor2":"","buttonCornerRadius":21,"buttonPadding":17,"iconColor":"#ffffff","iconOpacity":1,"iconDropShadow":0,"iconShadowColor":"#13487f","iconShadowDirection":"bottom","iconShadowOpacity":0.5,"callme_id":"8142b1b4501d46de8dfec6739c17b7ff","poll_id":null,"analytics_id":null,"zid":"0de7d300f87aec36f26c75e64cd46501","type":"widget","widgetPosition":"left","plain_html":false,"save":1};
  (function(d, t) {
      var g = d.createElement(t),s = d.getElementsByTagName(t)[0];g.src = '//d1bvayotk7lhk7.cloudfront.net/js/zingayabutton.js';g.async = 'true';
          g.onload = g.onreadystatechange = function() {
          if (this.readyState && this.readyState != 'complete' && this.readyState != 'loaded') return;
          try {Zingaya.load(ZingayaConfig, 'zingaya8142b1b4501d46de8dfec6739c17b7ff'); if (!Zingaya.SVG()) {
                  var p = d.createElement(t);p.src='//d1bvayotk7lhk7.cloudfront.net/PIE.js';p.async='true';s.parentNode.insertBefore(p, s);
                  p.onload = p.onreadystatechange = function() {
                          if (this.readyState && this.readyState != 'complete' && this.readyState != 'loaded') return;
                          if (window.PIE) PIE.attach(document.getElementById("zingayaButton"+ZingayaConfig.callme_id));
          }}} catch (e) {}};
      s.parentNode.insertBefore(g, s);
  }(document, 'script'));


}




function widget_bitrix() {

  (function (w, d, u) {
    var s = d.createElement('script');
    s.async = true;
    s.src = u + '?' + (Date.now() / 60000 | 0);
    var h = d.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s, h);
  })(window, document, 'https://cdn.bitrix24.es/b16166485/crm/site_button/loader_1_38qcmb.js');

}