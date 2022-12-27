// @author hanung dwi prasetyo
// instagram : @hanungp7
// GitHub : https://github.com/hanungprasetyo

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
  
});

//navbar fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  
  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

      // menampilkan QR code pertama
      let qrPanel = document.querySelector('#qr-panel');
      let qr = new QRious({
        element: qrPanel,
        value: 'https://hanung.space',
        size: 300,
        mime: 'image/png',
      });

      // generate QR code baru
      let qrBtn = document.querySelector('#qr-btn');
      qrBtn.addEventListener('click', function () {
        let qrInput = document.querySelector('#qr-input');
        new QRious({
          element: qrPanel,
          value: qrInput.value,
          size: 300,
          mime: 'image/png',
        });
      });


      // action buat download QR code
      let downloadBtn = document.querySelector('#downloadBtn');
      downloadBtn.addEventListener('click', function() {
        const container = document.querySelector("#qr-container");
        let canvas = container.querySelector('canvas');
        let link = document.createElement('a');
        link.download = 'qrcode-ether.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
