export interface DonneesEmailVerification {
  prenom: string;
  lienVerification: string;
}

// Template email HTML "email-safe" : mise en page par tableaux, styles en
// ligne (les clients mail ignorent souvent <style>). Palette santé : blanc,
// bleu professionnel, touche de rose — sobre, clinique, pas de noir/or.
export function rendreEmailVerification({ prenom, lienVerification }: DonneesEmailVerification): string {
  const bleu = "#1657CC";
  const bleuFonce = "#0F3D8A";
  const rose = "#E8677E";
  const fond = "#EEF2F7";
  const carte = "#FFFFFF";
  const texte = "#1F2937";
  const texteAttenue = "#5B6472";
  const bordure = "#E3E8F0";

  return `<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="light" />
<title>Confirmez votre adresse email</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<style>
  body, table, td { font-family: -apple-system, Helvetica, Arial, sans-serif; }
  @media only screen and (max-width: 620px) {
    .conteneur { width: 100% !important; }
    .contenu-pad { padding-left: 24px !important; padding-right: 24px !important; }
    .titre { font-size: 22px !important; }
  }
</style>
</head>
<body style="margin:0; padding:0; background-color:${fond}; -webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${fond};">
    <tr>
      <td align="center" style="padding: 48px 16px;">
        <table role="presentation" class="conteneur" width="560" cellpadding="0" cellspacing="0" style="width:560px; max-width:560px; background-color:${carte}; border-radius:14px; overflow:hidden; border: 1px solid ${bordure}; box-shadow: 0 2px 10px rgba(22,87,204,0.06);">

          <!-- Barre d'accent -->
          <tr>
            <td style="background: linear-gradient(90deg, ${bleu} 0%, ${bleu} 70%, ${rose} 100%); height: 5px; line-height:5px; font-size:0;">&nbsp;</td>
          </tr>

          <!-- En-tête / wordmark -->
          <tr>
            <td align="center" style="padding: 36px 40px 8px 40px;">
              <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 0.5px; font-size: 20px; color: ${bleuFonce};">
                DSP
              </div>
              <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: ${texteAttenue}; margin-top: 6px;">
                Dispositif de Sécurité des Patients
              </div>
            </td>
          </tr>

          <!-- Corps -->
          <tr>
            <td class="contenu-pad" style="padding: 24px 44px 4px 44px;">
              <h1 class="titre" style="margin: 0 0 18px 0; font-family: -apple-system, Helvetica, Arial, sans-serif; font-weight: 600; font-size: 24px; line-height: 1.35; color: ${texte};">
                Bienvenue, ${escapeHtml(prenom)}
              </h1>
              <p style="margin: 0 0 20px 0; font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.7; color: ${texteAttenue};">
                Votre espace DSP est prêt. Il ne reste qu'une étape : confirmer votre adresse email
                pour activer votre compte et sécuriser l'accès à la plateforme.
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding: 12px 44px 36px 44px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="border-radius: 8px; background-color: ${bleu};">
                    <a href="${lienVerification}" target="_blank"
                       style="display: inline-block; padding: 14px 38px; font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 600; color: #FFFFFF; text-decoration: none; border-radius: 8px;">
                      Confirmer mon adresse email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Repli lien texte -->
          <tr>
            <td class="contenu-pad" style="padding: 0 44px 32px 44px;">
              <p style="margin: 0 0 6px 0; font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 12.5px; color: ${texteAttenue};">
                Le bouton ne fonctionne pas ? Copiez ce lien dans votre navigateur :
              </p>
              <p style="margin: 0; font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 12.5px; word-break: break-all;">
                <a href="${lienVerification}" style="color: ${bleu}; text-decoration: underline;">${lienVerification}</a>
              </p>
            </td>
          </tr>

          <!-- Separateur -->
          <tr>
            <td style="padding: 0 44px;">
              <div style="height: 1px; background-color: ${bordure};"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 22px 44px 36px 44px;">
              <p style="margin: 0; font-family: -apple-system, Helvetica, Arial, sans-serif; font-size: 11.5px; line-height: 1.6; color: #93999F;">
                Ce lien expire dans 48 heures. Si vous n'êtes pas à l'origine de cette inscription, vous pouvez ignorer cet email sans risque.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(valeur: string): string {
  return valeur
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
