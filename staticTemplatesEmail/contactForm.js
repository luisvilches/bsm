module.exports = `<heml>
<head>
  <style>
    body{background:#fff}
    container {max-width: 600px;}
    block{padding:10px 10px;}
    .pd{padding:10px 30px}
    .pd2{padding:10px}
    .centerImage{display:block;margin: 10px auto;}
  </style>
  <font href="https://fonts.googleapis.com/css?family=Roboto" />
</head>
<body>
  <container>
    <row class="pd">
      <column large="12" small="12">
          <img class="centerImage" src="https://i.ibb.co/4f0LSZ9/logo-for-facto-1.png" alt="logo" width="300" />
      </column>
    </row>
    <row class="pd2">
        <column large="12" small="12" style="background:#ffffff;border-radius:10px;">
            <block>
              <h1 style="text-align:center;color:#32A641;font-size:25px;">Nuevo mensaje</h1>
              <h1 style="text-align:center;color:#3A3A3A;font-size:16px;">Enviado desde el formulario de contacto</h1>
              <block style="background:#eee;border-radius:8px;">
                <table>
                  <tr>
                    <td style="color:#3A3A3A;font-weight:700;">Nombre:</td>
                    <td style="color:#32A641;">{name}</td>
                  </tr>
                  <tr>
                    <td style="color:#3A3A3A;font-weight:700;">Teléfono:</td>
                    <td style="color:#32A641">{phone}</td>
                  </tr>
                  <tr>
                    <td style="color:#3A3A3A;font-weight:700;">Correo:</td>
                    <td style="color:#32A641">{email}</td>
                  </tr>
                  <tr>
                    <td style="color:#3A3A3A;font-weight:700;">Mensaje:</td>
                    <td style="color:#32A641">{msg}</td>
                  </tr>
                </table>
              </block>
            </block>
        </column>
    </row>
    <row>
      <column large="6" small="6">
        <button href="tel:{phone}" style="margin: auto;background:#32A641;width:160px; height:40px; border-radius:5px">Llamar</button>
      </column>
      <column large="6" small="6">
        <button href="mailto:{email}" style="margin: auto;background:#32A641;width:160px; height:40px; border-radius:5px">Enviar correo</button>
      </column>
    </row>
    <row>
      <column large="12" small="12">
        <h6 style="text-align:center;color:#32A641">support@bukitech.com</h6>
      </column>
    </row>
  </container>    
</body>
</heml>`;