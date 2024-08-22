export default function handler(req, res) {
  const auth = { login: 'kenan', password: 'testing' }; // Change these values

  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  if (login && password && login === auth.login && password === auth.password) {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <html>
	$HTML(head)
        <body>
          $HTML(logo_link)
          <table>
            <tr><td align='left'>Server IP:</td><td align='left'>Pulling from CDN response headers?</td></tr>
            <tr><td align='left'>Server Region:</td><td align='left'>Ansible dictionary?</td></tr>
          </table>
        </body>
      </html>
    `);
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication required.');
  }
}

