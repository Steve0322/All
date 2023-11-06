function handleLogoClick(event) {
  const logoId = event.target.id;

  const logoURLs ={
    insta: "https://www.naver.com/",
    facebook: "https://www.google.co.kr/?hl=ko",
    twitter: "https://www.daum.net/"
  };

  window.open(logoURLs[logoId]);
}

const snsLogos = document.querySelectorAll(".sns-logo");
snsLogos.forEach(function (logo) {
  logo.addEventListener('click', handleLogoClick);
});