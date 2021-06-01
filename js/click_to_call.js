var ZingayaConfig = {"buttonLabel":"Llamar a un Agente","labelColor":"#f0f098","labelFontSize":18,"labelTextDecoration":"none","labelFontWeight":"bold","labelShadowDirection":"bottom","labelShadowColor":"#8fd3ec","labelShadow":0,"buttonBackgroundColor":"#174b63","buttonGradientColor1":"#174b63","buttonGradientColor2":"#174b63","buttonGradientColor3":"#174b63","buttonGradientColor4":"#174b63","buttonShadow":"true","buttonHoverBackgroundColor":"#69ad26","buttonHoverGradientColor1":"#30b3f1","buttonHoverGradientColor2":"#2aa8ef","buttonHoverGradientColor3":"#2cacf0","buttonHoverGradientColor4":"#2daef0","buttonActiveShadowColor1":"","buttonActiveShadowColor2":"","buttonCornerRadius":2,"buttonPadding":14,"iconColor":"#ffffff","iconOpacity":1,"iconDropShadow":0,"iconShadowColor":"#13487f","iconShadowDirection":"bottom","iconShadowOpacity":0.5,"callme_id":"7ec5b63e56ae4359904884c68b5ec8bc","poll_id":null,"analytics_id":null,"zid":"d381a3ca437ddaa2fde26768c56a3a08","type":"widget","widgetPosition":"left","plain_html":false,"save":1};
(function(d, t) {
    var g = d.createElement(t),s = d.getElementsByTagName(t)[0];g.src = '//d1bvayotk7lhk7.cloudfront.net/js/zingayabutton.js';g.async = 'true';
        g.onload = g.onreadystatechange = function() {
        if (this.readyState && this.readyState != 'complete' && this.readyState != 'loaded') return;
        try {Zingaya.load(ZingayaConfig, 'zingaya7ec5b63e56ae4359904884c68b5ec8bc'); if (!Zingaya.SVG()) {
                var p = d.createElement(t);p.src='//d1bvayotk7lhk7.cloudfront.net/PIE.js';p.async='true';s.parentNode.insertBefore(p, s);
                p.onload = p.onreadystatechange = function() {
                        if (this.readyState && this.readyState != 'complete' && this.readyState != 'loaded') return;
                        if (window.PIE) PIE.attach(document.getElementById("zingayaButton"+ZingayaConfig.callme_id));
        }}} catch (e) {}};
    s.parentNode.insertBefore(g, s);
}(document, 'script'));