function ses_to_google() {
    window.location.href = "https://www.google.com/search?q=ses+to+google";
}

function ses_to_facebook() {
    window.location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
}

function loginMicrosoft() {

  const clientId = "TU_CLIENT_ID";
  const redirectUri = "http://localhost:3000";

  const url =
    "https://login.microsoftonline.com/common/oauth2/v2.0/authorize" +
    "?client_id=" + clientId +
    "&response_type=token" +
    "&redirect_uri=" + encodeURIComponent(redirectUri) +
    "&scope=openid profile email";

  window.location.href = url;
}