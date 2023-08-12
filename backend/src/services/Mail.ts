import { transporter } from "../config/smtpConfig";
import { IMailDTO } from "../interfaces/MailDTO";

export async function sendMail(data: IMailDTO) {
  const message = {
    from: "emaildetestes@gmail.com",
    to: "companypool@gmail.com",
    subject: data.subject,
    html: `<!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .header {
          background-color: #f5f5f5;
          padding: 10px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Alerta de Contato</h2>
        </div>
        <p>Um usuário entrou em contato! Seguem abaixo os dados do mesmo:</p>
        <ul>
          <li><strong>Nome:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.from}</li>
          <li><strong>Número:</strong> ${data.number}</li>
        </ul>
        <p><strong>Mensagem:</strong></p>
        <p>${data.content}</p>
      </div>
    </body>
    </html>
    `,
    //text: `Um usuário entrou em contato! Segue abaixo os dados do mesmo:\nNome: ${data.name};\nEmail: ${data.from};\nNúmero: ${data.number};\n\nMensagem: \n${data.subject}\n${data.content}`,
  };

  transporter.sendMail(message, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(`[Server] => Email as sended from ${data.from}!`);
  });
}
