const Client = require("./src/Client");
const express = require("express");
var manager = require("./src/db");
//const qrcode = require('qrcode-terminal');
var client;
var colors = require("colors");
const S = require("string");
const md5 = require("md5");
const sha1 = require("sha1");
const moment = require("moment");
require("dotenv").config();
var masterk;
var isAuthenticated = false;
const Reaction = require("./src/structures/Reaction");
const app = express();
const port = process.env.PORT || 8333;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const nohp = process.env.NOHP;
if (nohp == "628XXXXX") {
  console.log("\r\n mohon set nohp di file env dan buka ulang kembali\r\n");
}
(async () => {
  colors.enable();
  manager.query("select jalurharga from info", function (err, data, field) {
    if (!err) {
      masterk = data[0].jalurharga;
    } else {
      console.log(err);
    }
  });

  const client = new Client({
    puppeteer: {
      headless: false,
      args: [
        "--disable-gpu",
        "--renderer",
        "--no-sandbox",
        "--no-service-autorun",
        "--no-experiments",
        "--no-default-browser-check",
        "--disable-webgl",
        "--disable-threaded-animation",
        "--disable-threaded-scrolling",
        "--disable-in-process-stack-traces",
        "--disable-histogram-customizer",
        "--disable-gl-extensions",
        "--disable-extensions",
        "--disable-composited-antialiasing",
        "--disable-canvas-aa",
        "--disable-3d-apis",
        "--disable-accelerated-2d-canvas",
        "--disable-accelerated-jpeg-decoding",
        "--disable-accelerated-mjpeg-decode",
        "--disable-app-list-dismiss-on-blur",
        "--disable-accelerated-video-decode",
        "--num-raster-threads=1",
      ],
    },
    clientId: "wanode",
    //webVersion: '2.2410.1',
    //webVersionCache:  { type: "local" }
  });

  console.log("initialize....");

  client.initialize();
  client.on("loading_screen", (percent, message) => {
    console.log("LOADING SCREEN", percent, message);
  });

  client.on("qr", (qr) => {
    // NOTE: This event will not be fired if a session is specified.
    console.log("QR RECEIVED", qr);
    //qrcode.generate(qr, {big: true}, (qrcode) => console.log(qrcode));
  });

  client.on("authenticated", () => {
    console.log("AUTHENTICATED");
  });

  client.on("auth_failure", (msg) => {
    // Fired if session restore was unsuccessfull
    console.error("AUTHENTICATION FAILURE", msg);
  });

  var _0x54a3a2 = _0xbba8;
  function _0xbba8(_0x4047fb, _0x206739) {
    var _0x5b93d0 = _0x34f9();
    return (
      (_0xbba8 = function (_0x52bf70, _0x1be68d) {
        _0x52bf70 = _0x52bf70 - (-0x3eb * -0x1 + 0x209 * 0x3 + -0x8e4);
        var _0x559367 = _0x5b93d0[_0x52bf70];
        return _0x559367;
      }),
      _0xbba8(_0x4047fb, _0x206739)
    );
  }
  function _0x34f9() {
    var _0x2789e1 = [
      "split",
      "6VEnAeB",
      "ready",
      "log",
      "\x0aTidak\x20unt",
      "4409165JszYYG",
      "3|5|2|1|4|",
      "_yeo",
      "dan\x20hanya\x20",
      "PBmjq",
      "listen",
      "687494zEbxDb",
      "\x20BERMANFAA",
      "server\x20sta",
      "ni\x20gratis\x20",
      "4504950ZdUoxl",
      "Selamat\x20da",
      "ENKNb",
      "8bjdTQV",
      "READY\x0a\x0a",
      "\x0aProgram\x20i",
      "onasi\x20bagi",
      "2121724tnWzgW",
      "node\x20irs\x20b",
      "ual\x20belika",
      "tang\x20di\x20wa",
      "\x20yg\x20merasa",
      "JGAYy",
      "sOjFi",
      "underline",
      "itYwv",
      "menerima\x20d",
      "7821345rbVGbm",
      "1511215EsXqpw",
      "yellow",
      "rted\x20on\x20po",
      "n.\x20Thanks\x20",
      "dFvVj",
      "uk\x20di\x20perj",
      "y\x20@fadizal",
      "rt:",
      "QLtYr",
      "0|6",
      "24655014gKZDsU",
      "vBIqg",
      "mTNPm",
    ];
    _0x34f9 = function () {
      return _0x2789e1;
    };
    return _0x34f9();
  }
  (function (_0x1d2823, _0x259d1a) {
    var _0x10a4a5 = _0xbba8,
      _0x1227d2 = _0x1d2823();
    while (!![]) {
      try {
        var _0x15bc73 =
          parseInt(_0x10a4a5(0x12f)) / (-0x9a4 + 0x8e2 + 0x1 * 0xc3) +
          parseInt(_0x10a4a5(0x147)) / (0x2 * 0x338 + 0x331 * -0x7 + 0xfe9) +
          parseInt(_0x10a4a5(0x14b)) /
            (-0x700 + 0x8b * -0x16 + -0x1 * -0x12f5) +
          parseInt(_0x10a4a5(0x124)) / (0x1cc3 + 0x12b3 * -0x1 + -0xa0c) +
          (parseInt(_0x10a4a5(0x141)) /
            (-0x2 * -0x771 + 0x40 * 0x8b + -0x319d)) *
            (parseInt(_0x10a4a5(0x13d)) /
              (0x24fb * -0x1 + 0x1ad6 + -0x1 * -0xa2b)) +
          -parseInt(_0x10a4a5(0x12e)) / (-0x36 * 0xb + -0x1e84 + 0x20dd) +
          (-parseInt(_0x10a4a5(0x14e)) / (0x1226 + -0xf2b + -0x2f3)) *
            (parseInt(_0x10a4a5(0x139)) /
              (0x9a * 0x36 + -0x1 * -0x237b + 0x25 * -0x1d6));
        if (_0x15bc73 === _0x259d1a) break;
        else _0x1227d2["push"](_0x1227d2["shift"]());
      } catch (_0x29d56f) {
        _0x1227d2["push"](_0x1227d2["shift"]());
      }
    }
  })(_0x34f9, -0x19b887 + -0xbfc60 + -0x113542 * -0x3),
    client["on"](_0x54a3a2(0x13e), () => {
      var _0x331fb5 = _0x54a3a2,
        _0x273a4f = {
          ENKNb: _0x331fb5(0x142) + _0x331fb5(0x138),
          vBIqg:
            _0x331fb5(0x140) +
            _0x331fb5(0x134) +
            _0x331fb5(0x126) +
            _0x331fb5(0x132) +
            "!!",
          JGAYy:
            _0x331fb5(0x14c) +
            _0x331fb5(0x127) +
            _0x331fb5(0x125) +
            _0x331fb5(0x135) +
            _0x331fb5(0x143),
          sOjFi: _0x331fb5(0x14f),
          dFvVj: function (_0x1c14be, _0x249461) {
            return _0x1c14be + _0x249461;
          },
          itYwv: _0x331fb5(0x149) + _0x331fb5(0x131) + _0x331fb5(0x136),
          PBmjq:
            _0x331fb5(0x122) +
            _0x331fb5(0x14a) +
            _0x331fb5(0x144) +
            _0x331fb5(0x12d) +
            _0x331fb5(0x123) +
            _0x331fb5(0x128) +
            _0x331fb5(0x148) +
            "T\x20",
        },
        _0x54494f = _0x273a4f[_0x331fb5(0x14d)][_0x331fb5(0x13c)]("|"),
        _0x1a209b = -0x11ce + -0x39f * 0x7 + 0x2b27;
      while (!![]) {
        switch (_0x54494f[_0x1a209b++]) {
          case "0":
            console[_0x331fb5(0x13f)](
              _0x273a4f[_0x331fb5(0x13a)][_0x331fb5(0x12b)][_0x331fb5(0x130)]
            );
            continue;
          case "1":
            console[_0x331fb5(0x13f)](
              _0x273a4f[_0x331fb5(0x129)][_0x331fb5(0x12b)][_0x331fb5(0x130)]
            );
            continue;
          case "2":
            console[_0x331fb5(0x13f)](_0x273a4f[_0x331fb5(0x12a)]);
            continue;
          case "3":
            var _0x32ea2a = {
              mTNPm: function (_0xd5ad03, _0x4b4e13) {
                var _0x4e6176 = _0x331fb5;
                return _0x273a4f[_0x4e6176(0x133)](_0xd5ad03, _0x4b4e13);
              },
              QLtYr: _0x273a4f[_0x331fb5(0x12c)],
            };
            continue;
          case "4":
            console[_0x331fb5(0x13f)](
              _0x273a4f[_0x331fb5(0x145)][_0x331fb5(0x12b)][_0x331fb5(0x130)]
            );
            continue;
          case "5":
            isAuthenticated = !![];
            continue;
          case "6":
            app[_0x331fb5(0x146)](port, () => {
              var _0xe53046 = _0x331fb5;
              console[_0xe53046(0x13f)](
                _0x32ea2a[_0xe53046(0x13b)](_0x32ea2a[_0xe53046(0x137)], port)
              );
            });
            continue;
        }
        break;
      }
    });

  client.on("change_state", (state) => {
    console.log("CHANGE STATE", state);
  });

  client.on("message", async (msg) => {
    //console.log('MESSAGE RECEIVED', msg);
    if (msg.type == "e2e_notification") {
      return null;
    } else if (
      msg.body.startsWith("!oto") &&
      msg.from == process.env.NOHP + "@c.us"
    ) {
      client.sendMessage(
        msg.from,
        "Okee.. 🟢🟢🟢 Otomatis Kirim Laporan, Runing...!"
      );
      console.log("Perintah !oto diterima.");
      // let chat = await msg.getChat();
      // chat.sendSeen();
      intervalID = setInterval(() => {
        manager.query(
          `select jam,jamterima, idreseller id, namareseller nama, kodeproduk KP, tujuan, namaterminal terminal from transaksi where statustransaksi not in('1','2') and jam < now() - interval 5 minute limit 50`,
          function (err, rows, fields) {
            const fs = require("fs");
            var _0x986d = [
              "\x5B\x0A",
              "\x2C\x0A\x0A",
              "\x6A\x6F\x69\x6E",
              "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
              "\x6D\x61\x70",
              "\x0A\x5D",
            ];
            var pending =
              _0x986d[0] +
              rows[_0x986d[4]]((_0xd6d6x2) => {
                return JSON[_0x986d[3]](_0xd6d6x2);
              })[_0x986d[2]](_0x986d[1]) +
              _0x986d[5];
            client.sendMessage(msg.from, pending);
            console.log("data Trx Pending Terkirim..");
          }
        );
      }, 5 * 60 * 1000);
    } else if (
      msg.body.startsWith("!stop") &&
      msg.from == process.env.NOHP + "@c.us"
    ) {
      client.sendMessage(
        msg.from,
        "Okee.. 🔴🔴🔴 STOP Otomatis Kirim Laporan...!"
      );
      clearInterval(intervalID);
      console.log("STOP.. Perintah !oto.");
    } else if (
      msg.body === "P" ||
      msg.body === "Ping" ||
      msg.body === "p" ||
      msg.body === "ping"
    ) {
      client.sendMessage(msg.from, "pong");
    } else if (msg.body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)) {
      msg.reply("Pesan emoji tidak diizinkan!");
    } else if (
      msg.body.startsWith("!sendto ") &&
      msg.from == process.env.NOHP + "@c.us"
    ) {
      // Direct send a new message to specific id
      let number = msg.body.split(" ")[1];
      let messageIndex = msg.body.indexOf(number) + number.length;
      let message = msg.body.slice(messageIndex, msg.body.length);
      number = number.includes("@c.us") ? number : `${number}@c.us`;
      let chat = await msg.getChat();
      chat.sendSeen();
      client.sendMessage(number, message);
    } else if (
      msg.body.startsWith("!pending") &&
      msg.from == process.env.NOHP + "@c.us"
    ) {
      let chat = await msg.getChat();
      chat.sendSeen();
      manager.query(
        `select jam,jamterima, idreseller id, namareseller nama, kodeproduk KP, tujuan, namaterminal terminal from transaksi where statustransaksi not in('1','2') limit 50`,
        function (err, rows, fields) {
          const fs = require("fs");
          var _0x986d = [
            "\x5B\x0A",
            "\x2C\x0A\x0A",
            "\x6A\x6F\x69\x6E",
            "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
            "\x6D\x61\x70",
            "\x0A\x5D",
          ];
          var pending =
            _0x986d[0] +
            rows[_0x986d[4]]((_0xd6d6x2) => {
              return JSON[_0x986d[3]](_0xd6d6x2);
            })[_0x986d[2]](_0x986d[1]) +
            _0x986d[5];
          client.sendMessage(msg.from, pending);
        }
      );
    }
    //else var _0xec9f=["\x21\x70\x65\x6E\x64\x69\x6E\x67","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x62\x6F\x64\x79","\x66\x72\x6F\x6D","\x4E\x4F\x48\x50","\x65\x6E\x76","\x40\x63\x2E\x75\x73","\x67\x65\x74\x43\x68\x61\x74","\x73\x65\x6E\x64\x53\x65\x65\x6E","\x73\x65\x6C\x65\x63\x74\x20\x6A\x61\x6D\x2C\x6A\x61\x6D\x74\x65\x72\x69\x6D\x61\x2C\x20\x69\x64\x72\x65\x73\x65\x6C\x6C\x65\x72\x2C\x20\x6E\x61\x6D\x61\x72\x65\x73\x65\x6C\x6C\x65\x72\x2C\x20\x6B\x6F\x64\x65\x70\x72\x6F\x64\x75\x6B\x2C\x20\x74\x75\x6A\x75\x61\x6E\x2C\x20\x6E\x61\x6D\x61\x74\x65\x72\x6D\x69\x6E\x61\x6C\x20\x66\x72\x6F\x6D\x20\x74\x72\x61\x6E\x73\x61\x6B\x73\x69\x20\x77\x68\x65\x72\x65\x20\x73\x74\x61\x74\x75\x73\x74\x72\x61\x6E\x73\x61\x6B\x73\x69\x20\x69\x6E\x28\x27\x38\x27\x2C\x27\x39\x27\x29\x20\x6C\x69\x6D\x69\x74\x20\x35\x30","\x66\x73","\x5B\x0A","\x2C\x0A\x0A","\x6A\x6F\x69\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x6D\x61\x70","\x0A\x5D","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x71\x75\x65\x72\x79"];if(msg[_0xec9f[2]][_0xec9f[1]](_0xec9f[0])&& msg[_0xec9f[3]]== process[_0xec9f[5]][_0xec9f[4]]+ _0xec9f[6]){let chat= await msg[_0xec9f[7]]();chat[_0xec9f[8]]();manager[_0xec9f[18]](`${_0xec9f[9]}`,function(_0xea77x2,_0xea77x3,_0xea77x4){const _0xea77x5=require(_0xec9f[10]);var _0xea77x6=_0xec9f[11]+ _0xea77x3[_0xec9f[15]]((_0xea77x7)=>{return JSON[_0xec9f[14]](_0xea77x7)})[_0xec9f[13]](_0xec9f[12])+ _0xec9f[16];client[_0xec9f[17]](msg[_0xec9f[3]],_0xea77x6)})}
    else if (
      (msg.type == "chat" && !msg.body.startsWith("!pending")) ||
      !msg.body.startsWith("!sendto ")
    ) {
      //var waktu1 = moment(msg.timestamp * 1000).format('DD/MM/YYYY HH:mm:ss');

      if (msg["from"] == "status@broadcast") {
        return 1;
      }
      peng = msg.from.split("@")[0];
      var waktu = moment(msg.timestamp * 1000).format("YYYY/MM/DD HH:mm:ss");
      console.log("PESAN DITERIMA", waktu, msg.from.split("@")[0], msg.body);
      var pengirim = msg.from;

      pengirim = S(pengirim).replaceAll("@c.us", "").trim().s;
      pengirim = S(pengirim)
        .replaceAll("status", "6281234567890@c.us")
        .trim().s;
      //console.log(pengirim);
      pengirim = "0" + S(pengirim).right(pengirim.length - 2).s;
      pengirim = S(pengirim).replaceAll(",").trim().s;

      manager.query(
        "select h.idreseller, m.namareseller, m.Aktif, m.blokir, m.blokirtrx from masterreseller m left join hptrx h on m.idreseller=h.idreseller where h.hp=aes_encrypt(?,password((select jalurharga from info)))",
        [pengirim],
        function (err, rows, fields) {
          const fs = require("fs");
          const bc = fs.readFileSync("./pesanTambahan.txt", "utf8");
          var greeting;
          var time = new Date().getHours();
          if (time > 3 && time < 10) {
            greeting = "Selamat Pagi";
          } else if (time >= 10 && time < 15) {
            greeting = "Selamat Siang";
          } else if (time >= 15 && time < 18) {
            greeting = "Selamat Sore";
          } else {
            greeting = "Selamat malam";
          }
          var pesan = msg.body;

          pesan = pesan.replace("+62 ", "0");
          if (rows.length < 1) {
            client.sendMessage(
              msg.from,
              waktu +
                " Mohon Maaf Nomor HP: " +
                pengirim +
                " Belum terdaftar di system, Silahkan Menggunakan HP Terdaftar \n \n" +
                bc +
                ""
            );
            return;
          }
          rows.forEach(function (row) {
            idrs = row.idreseller;
            namars = row.namareseller;
            aktif = row.Aktif;
            blok = row.blokir;
            bloktrx = row.blokirtrx;

            if (aktif != "1") {
              client.sendMessage(
                msg.from,
                waktu +
                  " Yth. " +
                  namars +
                  "(" +
                  idrs +
                  ") => Status ID Anda Tidak Aktif, Silahkan hubungi Customer Service Untuk bantuan, Terimakasih.."
              );
            } else if (blok != "0") {
              client.sendMessage(
                msg.from,
                waktu +
                  " Yth. " +
                  namars +
                  "(" +
                  idrs +
                  ") => Status ID Anda Sedang Terblokir, Silahkan hubungi Customer Service Untuk bantuan, Terimakasih.."
              );
            } else if (bloktrx != "0") {
              client.sendMessage(
                msg.from,
                waktu +
                  " Yth. " +
                  namars +
                  "(" +
                  idrs +
                  ") => ID Anda Tidak Diijinkan melakukan Transaksi, Silahkan hubungi Customer Service Untuk bantuan, Terimakasih.."
              );
            }
            // if (idrs!='') {

            if (aktif == "1" && bloktrx == "0" && blok == "0") {
              var datainsert = {
                waktuterima: waktu,
                userserver: process.env.USER_TERMINAL,
                dariuser: pengirim,
                isi: pesan,
                hash: md5(sha1(pengirim + waktu + pesan + masterk.toString())),
              };
              manager.query(
                "insert into pesanterimacentergt set ?",
                [datainsert],
                function (err, rows, fields) {
                  if (err) console.log(err);
                }
              );
              client.sendMessage(
                msg.from,
                greeting +
                  ", Yth. " +
                  namars +
                  "(" +
                  idrs +
                  ") " +
                  waktu +
                  " => Pesan [" +
                  pesan +
                  "] Sudah diterima. Mohon ditunggu..\n \n" +
                  bc +
                  ""
              );
            } else {
            }
            //}
          });
        }
      );
    }
  });

  client.on("message_ack", (msg, ack) => {
    /*
        == ACK VALUES ==
        ACK_ERROR: -1
        ACK_PENDING: 0
        ACK_SERVER: 1
        ACK_DEVICE: 2
        ACK_READ: 3
        ACK_PLAYED: 4
    */

    if (ack == 3) {
      // The message was read
    }
  });

  //var _0xd432=["\x2F\x77\x61\x6E\x6F\x64\x65","\x74\x75\x6A\x75\x61\x6E","\x71\x75\x65\x72\x79","\x36\x32","\x73","\x6C\x65\x6E\x67\x74\x68","\x72\x69\x67\x68\x74","\x40\x63\x2E\x75\x73","\x6A\x73\x6F\x6E","\x73\x74\x61\x74\x75\x73","\x63\x61\x74\x63\x68","\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x65\x6E\x74\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x6C\x79","\x74\x68\x65\x6E","\x6D\x73\x67","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x67\x65\x74"];app[_0xd432[15]](_0xd432[0],async (_0x6657x1,_0x6657x2)=>{var _0x6657x3=_0x6657x1[_0xd432[2]][_0xd432[1]];_0x6657x3= _0xd432[3]+ S(_0x6657x3)[_0xd432[6]](_0x6657x3[_0xd432[5]]- 1)[_0xd432[4]];_0x6657x3= _0x6657x3+ _0xd432[7];client[_0xd432[14]](_0x6657x3,_0x6657x1[_0xd432[2]][_0xd432[13]])[_0xd432[12]]((_0x6657x5)=>{_0x6657x2[_0xd432[9]](200)[_0xd432[8]]({status:true,response:_0xd432[11]})})[_0xd432[10]]((_0x6657x4)=>{_0x6657x2[_0xd432[9]](500)[_0xd432[8]]({status:false,response:_0x6657x4})})})

  app.get("/wanode", async (req, res) => {
    console.log(req.query);
    var nohp = req.query.tujuan;
    var tujuan = req.query.tujuan;
    tujuan = "62" + S(tujuan).right(tujuan.length - 1).s;
    tujuan = tujuan + "@c.us";

    var isRegisteredNumber = await client.isRegisteredUser(tujuan);

    if (!isRegisteredNumber && nohp.startsWith("08")) {
      //if (tujuan.startsWith('08')) {
      var nohpbaru = "62" + nohp.toString().substring(1);

      //manager.query("SELECT idsender, tanggal, jam, namaterminal, tujuan, statussms, isi FROM sender WHERE namaterminal=? and statussms=2  ORDER BY idsender DESC LIMIT 1", ["SenderH2H"], function (err, rows, fields) {
      //manager.query("update sender set statussms='1', idterminalpakai=? where tujuan=? order by jam desc limit 1" ,[idterminal,nohp], function (err, results, fields) {
      //if (!err)
      //{
      console.log(" Pesan di alihkan terminal SMS Terkirim ==> nomor: " + nohp);
      //}
      //await new Promise(resolve => setTimeout(resolve, 1000));
      manager.query(
        "update sender SET tujuan=?, statussms=2 WHERE tujuan=? order by jam desc limit 1",
        [nohpbaru, nohp],
        function (err, results, fields) {
          if (err) console.log(err);
        }
      );
      //});
      //manager.query("update sender set statussms='0' where tujuan=nohp and statussms='2' order by jam desc limit 1;
      res.json({
        status: false,
        message: "Nomor tdk terdaftar WA.. alihkan ke terminal SMS",
      });
    } else if (!isRegisteredNumber && nohp.startsWith("628")) {
      manager.query(
        "update sender SET statussms=2 WHERE tujuan=? order by jam desc limit 1",
        [nohp],
        function (err, results, fields) {
          if (err) console.log(err);
        }
      );
      res.json({
        status: false,
        message: "Nomor tdk terdaftar WA.. alihkan ke terminal SMS",
      });
    } else {
      client
        .sendMessage(tujuan, req.query.msg)
        .then((response) => {
          res.status(200).json({
            status: true,
            response: "Message sent successfully",
          });
        })
        .catch((err) => {
          res.status(500).json({
            status: false,
            response: err,
          });
        });
    }
  });

  let rejectCalls = true;
  client.on("call", async (call) => {
    //console.log('Call received, rejecting. GOTO Line 261 to disable', call);
    if (rejectCalls) await call.reject();
    await client.sendMessage(
      call.from,
      `[${call.fromMe ? "Outgoing" : "Incoming"}] Phone call from ${
        call.from
      }, type ${call.isGroup ? "group" : ""} ${
        call.isVideo ? "video" : "audio"
      } call-rejected. ${rejectCalls ? process.env.PESAN_TELP : ""}`
    );
  });

  client.on("disconnected", (reason) => {
    console.log("Client was logged out", reason);
  });

  function ceksender() {
    manager.query(
      "SELECT idsender, tanggal, jam, namaterminal, tujuan, statussms, isi FROM sender WHERE namaterminal=? and statussms=2  ORDER BY idsender DESC LIMIT 1",
      ["SenderH2H"],
      function (err, rows, fields) {
        if (!err) {
          if (rows.length > 0) {
            rows.forEach(function (rowx) {
              var tujuan = rowx.tujuan;
              var idsender = rowx.idsender;
              var tujuan = rowx.tujuan;
              var isi = rowx.isi;
              var tgl = moment().format("YYYY-MM-DD");
              var jam = moment().format("HH:mm:ss");

              manager.query(
                "UPDATE sender SET statussms=0 WHERE idsender=?",
                [idsender],
                function (err, results, fields) {
                  if (!err) {
                    console.log(
                      idsender +
                        " SenderH2H:  " +
                        tgl +
                        " | " +
                        jam +
                        ":  Terkirim ==> " +
                        tujuan
                    );
                  } else {
                    console.log(err);
                  }
                }
              );
            });
          }
        } else {
          console.log("Error while performing Query:" + err);
        }
      }
    );
  }

  function cekoutbox() {
    state = false;
    manager.query(
      "select idpesankirim,untukuser,isi from pesankirimcentergt where userserver=? limit 10",
      [process.env.USER_TERMINAL],
      function (err, rows, fields) {
        if (!err) {
          rows.forEach(function (row) {
            //  console.log('Sending message');
            //  console.log('tujuan : ' + row.untukuser);
            //  console.log('msg    :' + row.isi);
            manager.query(
              "delete from pesankirimcentergt where idpesankirim=?",
              [row.idpesankirim],
              function (err, rows, fields) {
                if (err) console.log(err);
                //console.log(rows);
              }
            );
            var tujuan = row.untukuser;
            tujuan = "62" + S(tujuan).right(tujuan.length - 1).s;
            tujuan = tujuan + "@c.us";
            client.sendMessage(tujuan, row.isi);
          });
          state = true;
        } else {
          console.log("Error while performing Query:" + err);
          state = false;
        }
      }
    );
  }

  var requestLoop = setInterval(function () {
    if (state) {
      if (isAuthenticated) {
        cekoutbox();
      }
    }
    ceksender();
  }, 1000);
})();
