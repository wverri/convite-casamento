function doPost(e) {
  try {
    // Logging para debug
    Logger.log("Dados recebidos: " + JSON.stringify(e));
    
    // Obter dados do POST
    let data;
    
    if (e.postData && e.postData.type === "application/json" && e.postData.contents) {
      // Se veio como JSON no corpo da requisição
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Se veio como parâmetros do formulário
      data = {
        mainGuest: e.parameter.mainGuest || '',
        phone: e.parameter.phone || '',
        additionalGuests: [],
        attending: e.parameter.attending === 'true',
        timestamp: e.parameter.timestamp || new Date().toISOString()
      };
      
      // Tenta analisar os convidados adicionais
      try {
        if (e.parameter.additionalGuests) {
          data.additionalGuests = JSON.parse(e.parameter.additionalGuests);
        }
      } catch (parseError) {
        Logger.log("Erro ao analisar additionalGuests: " + parseError);
        // Se falhar, assume que não há convidados adicionais
        data.additionalGuests = [];
      }
    } else {
      throw new Error('Nenhum dado recebido');
    }
    
    // Obter a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Formatar a lista de acompanhantes
    let additionalGuestsStr = '';
    if (Array.isArray(data.additionalGuests)) {
      additionalGuestsStr = data.additionalGuests.join(", ");
    } else if (typeof data.additionalGuests === 'string') {
      additionalGuestsStr = data.additionalGuests;
    }
    
    // Verificar status de presença
    const attendanceStatus = data.attending ? "Sim" : "Não";
    
    // Adicionar dados à planilha
    sheet.appendRow([
      new Date(), // Data/Hora
      data.mainGuest, // Nome Principal
      data.phone, // Telefone
      attendanceStatus, // Presença Confirmada
      additionalGuestsStr // Acompanhantes
    ]);
    
    // Retornar uma página HTML com confirmação e script para fechar a janela
    return HtmlService.createHtmlOutput(`
      <html>
        <head>
          <title>Confirmação enviada com sucesso</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 20px;
              background-color: #f8f0ff;
              color: #614b32;
            }
            .success {
              padding: 20px;
              background-color: rgba(75, 181, 67, 0.1);
              border: 1px solid rgba(75, 181, 67, 0.5);
              border-radius: 5px;
              margin: 20px auto;
              max-width: 500px;
            }
            h2 { color: #4BB543; }
          </style>
        </head>
        <body>
          <div class="success">
            <h2>Confirmação Recebida!</h2>
            <p>Seus dados foram enviados com sucesso.</p>
            <p>Esta janela será fechada automaticamente.</p>
          </div>
          <script>
            // Fechar a janela automaticamente após 2 segundos
            setTimeout(function() {
              window.close();
            }, 2000);
          </script>
        </body>
      </html>
    `);
      
  } catch (error) {
    // Log de erro no console do Apps Script
    Logger.log("Erro: " + error.message);
    console.error(error);
    
    // Retornar uma página HTML de erro
    return HtmlService.createHtmlOutput(`
      <html>
        <head>
          <title>Erro ao processar</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 20px;
              background-color: #fff5f5;
              color: #614b32;
            }
            .error {
              padding: 20px;
              background-color: rgba(220, 53, 69, 0.1);
              border: 1px solid rgba(220, 53, 69, 0.5);
              border-radius: 5px;
              margin: 20px auto;
              max-width: 500px;
            }
            h2 { color: #DC3545; }
          </style>
        </head>
        <body>
          <div class="error">
            <h2>Ops! Algo deu errado.</h2>
            <p>Houve um problema ao processar sua confirmação.</p>
            <p>Erro: ${error.message}</p>
            <p>Esta janela será fechada automaticamente.</p>
          </div>
          <script>
            // Fechar a janela automaticamente após 3 segundos
            setTimeout(function() {
              window.close();
            }, 3000);
          </script>
        </body>
      </html>
    `);
  }
}

// Permitir acesso via CORS (necessário para web apps)
function doGet(e) {
  return HtmlService.createHtmlOutput(`
    <html>
      <head>
        <title>Serviço de Confirmação</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 20px;
            background-color: #f8f0ff;
            color: #614b32;
          }
          .info {
            padding: 20px;
            background-color: rgba(100, 149, 237, 0.1);
            border: 1px solid rgba(100, 149, 237, 0.5);
            border-radius: 5px;
            margin: 20px auto;
            max-width: 500px;
          }
          h2 { color: #6495ED; }
        </style>
      </head>
      <body>
        <div class="info">
          <h2>Serviço de Confirmação de Presença</h2>
          <p>O serviço está funcionando corretamente.</p>
          <p>Use o formulário no site para enviar sua confirmação.</p>
        </div>
      </body>
    </html>
  `);
} 