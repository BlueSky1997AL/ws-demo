const socket = require('socket.io-client');
const socketConfig = {
  reconnectionAttempts: 50,
  path: '/ws',
  hostname: 'h-t-77bc9850.video.iqiyi.com',
  secure: false,
  port: '80',
  cookie: 'QC005=ce90fbd3731b1405e3a42b6cec55e005; QP001=1; QC006=95d60aa0384f23e9f4e8ece3239d0e08; QC001=1; T00404=b26e5b3453f2b4e58a14c43ee65169a7; QC007=DIRECT; QC008=1523184709.1523184709.1523184709.1; Hm_lvt_53b7374a63c37483e5dd97d78d9bb36e=1523184709; QC118=%7B%22color%22%3A%22FFFFFF%22%2C%22channelConfig%22%3A0%7D; P00004=20597199.1523184713.8624832187; QILINPUSH=1; QC010=158280697; QC159=%7B%22color%22%3A%22FFFFFF%22%2C%22channelConfig%22%3A0%2C%22hadTip%22%3A1%2C%22isOpen%22%3A1%2C%22speed%22%3A13%2C%22density%22%3A30%2C%22opacity%22%3A86%2C%22isFilterColorFont%22%3A1%2C%22proofShield%22%3A0%2C%22forcedFontSize%22%3A24%2C%22isFilterImage%22%3A1%7D; __dfp=a0150c36b40172456588e310b6273de4015c6a76aba6ba9f50f24d47cc7736a12f@1524480713813@1523184713813; Hm_lpvt_53b7374a63c37483e5dd97d78d9bb36e=1523186041; T00700=EgcI18DtIRABEgcIz7-tIRABEgcI67-tIRABEgcIhcDtIRABEgcImMDtIRABEgcIg8DtIRABEgcI87-tIRAB'
};
const socketUrl = 'wss://h-t-77bc9850.video.iqiyi.com/ws';

const io = socket(socketUrl, socketConfig);
io.on('data', (data) => {
  console.log(data);
});