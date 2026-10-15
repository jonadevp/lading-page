export const AUTO_REPLY_SUBJECT = 'Recibí tu mensaje';

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);

// Recorta ANTES de escapar, para no cortar una entidad a la mitad.
const shortName = (name: string): string => name.trim().slice(0, 60);

export const autoReplyHtml = (name: string): string => {
  const safeName = escapeHtml(shortName(name));

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${AUTO_REPLY_SUBJECT}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f1f5f9;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:8px;">
            <tr>
              <td style="padding:32px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#0f172a;">
                <p style="margin:0 0 16px;">Hola, ${safeName}:</p>
                <p style="margin:0 0 16px;">Recibí tu mensaje y te responderé pronto.</p>
                <p style="margin:0 0 16px;font-size:14px;color:#475569;">Si no enviaste este mensaje desde jonadevp.com, puedes ignorar este correo.</p>
                <p style="margin:0;">Jonathan Sanchez<br />jonadevp.com</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export const autoReplyText = (name: string): string =>
  [
    `Hola, ${shortName(name)}:`,
    '',
    'Recibí tu mensaje y te responderé pronto.',
    '',
    'Si no enviaste este mensaje desde jonadevp.com, puedes ignorar este correo.',
    '',
    'Jonathan Sanchez',
    'jonadevp.com',
  ].join('\n');