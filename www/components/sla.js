window.onload = function(){
    document.querySelector("#scan").addEventListener('click', function(){
         cordova.plugins.barcodeScanner.scan(
        function (result) {
          if(result.text ==280720550){
              document.querySelector("#iPad").innerHTML = "<h1> iPad Mini Wi-Fi 64Gb -Cinza Espacial </h1> <img class='imagem'src='Imagem1.jpg'> <br> <h2>R$ 3.499,00</h2> <button class='comprar'>Adicionar a sacola</button> <br> <br> <button class='comprar'>Comprar</button> <h3>Descrição:</h3> Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado <br> <br> Sistema operacional: iOS <br> <br> Tamanho da tela: 7.9 <br> <br> Tecnologia: Wi-Fi <br> <br> Resolução da câmera: <br> <br> Câmera traseira: 8MP <br> <br> Câmera frontal: 7MP <br> <br> GPS: Sim <br> <br> Grava vídeos Sim <br> <br> Câmera traseira: Sim <br> <br> Câmera frontal: Sim <br> <br> Memória Flash 64 GB <br> <br> Funciona como celular: Não";
          }
              else if(result.text ==989895555){
              document.querySelector("#Samsung").innerHTML = "<h1> Samsung Galaxy J8 Dual Chip 4g </h1> <img class='imagem1' src='Imagem2.jpg'><br> <h2>R$ 1.888,00</h2> <button class='comprar'>Adicionar a sacola</button> <br> <br> <button class='comprar'>Comprar</button> <h3>Descrição:</h3> Velocidade do Processador: 1.8GHz <br> <br> Tipo de Processador: OctaCore <br> <br> Tamanho (Tela Principal): 153.6mm (6.0) <br> <br> Resolução (Tela Principal):1480 x 720 (HD+) <br> <br> CâmeraResolução -Câmera Traseira: 16.0 MP + 5.0 MP <br> <br> Memória RAM(GB): 4 GB <br> <br> Memória Total Interna (GB) -64 GB <br> <br> Memória Disponível (GB)  -50.6 GB";
              }
            
            else if(result.text ==85236987){
              document.querySelector("#Motorola").innerHTML = "<h1> Motorola One XT1941 Branco 64GB </h1> <img class='imagem1' src='Imagem3.jpg'> <br> <h2>R$ 854,00</h2> <button class='comprar'>Adicionar a sacola</button> <br> <br> <button class='comprar'>Comprar</button> <h3>Descrição:</h3>Sistema Operacional Android 8.1 Oreo <br> <br> Processador Qualcomm Snapdragon 625 Octa-Core de 2.0 GHz <br> <br> RAM 4GB <br> <br> Tecnologia GSM, 3G e 4G<br> <br> Memória interna 64 GB Total sendo uma parte usada para o sistema operacional e aplicativos pré-instalados <br> <br> Cor: Branco<br> <br> <h4>Características Gerais:</h4> <p> -Tela Max Vision e design ao máximo <br> <br> -Câmera dupla e armazenamento ilimitado <br> <br> -Android One: primeiro do Brasil, atualizado e seguro <br> <br> -Carregamento ultrarrápido TurboPower <br> <br> -Últimas inovações do Google incorporadas <br> <br> -Leitor Biométrico (Impressão Digital)</p> ";
            }
              else if(result.text ==85369877444){
              document.querySelector("#Asus").innerHTML = "<h1>Asus Zenfone Max Pro M1</h1> <img class='imagem1' src='Imagem4.jpg'> <br> <h2>R$ 1.199,00</h2> <button class='comprar'>Adicionar a sacola</button> <br> <br> <button class='comprar'>Comprar</button> <h3>Descrição:</h3>Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache<br> <br>Sistema Operacional: Android 8.1 Oreo<br> <br> Memória Ram: 4 Gb <br> <br> Memória Interna: 64 Gb<br> <br> Memória Expansiva: 2TB Sd  <br> <br>Tela: 6,0 Led Backlight Ips panel (1080x2160)<br> <br> Tipo de Chip: Nano -Dual Chip: Sim <br> <br> Conectividade: 3G; 4G; Wi-f <br> <br> Câmera Frontal: 8MP<br> <br> Câmera Traseira: 16+5MP";

          }else{
              document.querySelector("#iPad").innerHTML = "<h1>código de barra invalido </h1>";
          }
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false,
            showFlipCameraButton : true,
            showTorchButton : true,
            torchOn: false,
            saveHistory: true,
            prompt : "Place a barcode inside the scan area",
            resultDisplayDuration: 500,
            formats : "CODE_39",
            orientation : "landscape",
            disableAnimations : true, 
            disableSuccessBeep: false 
         }
     );
  });
}
