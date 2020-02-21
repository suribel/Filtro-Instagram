//Author: Antonio Manuel Rodriguez Martos

const Scene = require('Scene');
const Assets = require('Assets');
const Time = require('Time');
const CamaraInfo = require('CameraInfo');
const Materials = require('Materials');
const Textures = require('Textures');
const Audio = require('Audio');


const WARNING = 1;

var remainingTime = null;
var countdownTimer = null;

var texto = Scene.root.find('Text0')
var nom_p = Scene.root.find('unknown')
var nom_p2 = Scene.root.find('unknown0')

var circuloblink = Scene.root.find('circuloblink')

var flecha1 = Scene.root.find('flecha1')
var flecha2 = Scene.root.find('flecha2')
var circulo1 = Scene.root.find('circulo1')

var letras = Scene.root.find('letras')
var level = Scene.root.find('level')

var personaje = Scene.root.find('goku');

var material = Materials.get('personaje');

flecha2.hidden = true;

circuloblink.hidden = true;
letras.hidden = true;

level.text = ""
texto.text = ""
personaje.hidden = true;

var num;
var n;

// Locate the playback controller in the Assets
const playbackController = Audio.getPlaybackController('audio');
const playbackController2 = Audio.getPlaybackController('audio1');

var power_level = 0;
var texture = Textures.get('yamcha-min');
var nombre_personaje = "";

function eleccion()
{

  switch (num)
  {
    case 0:
      nombre_personaje = "Yamcha";
      texture = Textures.get('yamcha-min');
      power_level = 	230000;
      break;

    case 1:
      nombre_personaje = "Vegetto SSJ";
      texture = Textures.get('vegeto2-min');
      power_level = 	4750000000000000;
      break;

    case 2:
      nombre_personaje = "Vegetto";
      texture = Textures.get('vegetto-min');
      power_level = 	175000000000000;
      break;

    case 3:
      nombre_personaje = "Majin Vegeta SSJ2";
      texture = Textures.get('vegeta2-min');
      power_level = 	10000000000;
      break;

    case 4:
      nombre_personaje = "Vegeta SSJ";
      texture = Textures.get('vegeta1-min');
      power_level = 	4500000000;
      break;

    case 5:
      nombre_personaje = "Vegeta";
      texture = Textures.get('vegeta-min');
      power_level = 	85000000;
      break;

    case 6:
      nombre_personaje = "Future Trunks SSJ";
      texture = Textures.get('trunks1-min');
      power_level = 	1700000000;
      break;

    case 7:
      nombre_personaje = "Future Trunks";
      texture = Textures.get('trunks-min');
      power_level = 	9600000;
      break;

    case 8:
      nombre_personaje = "Tenshinhan";
      texture = Textures.get('tensi-min');
      power_level = 	1000000;
      break;

    case 9:
      nombre_personaje = "Mr. Satan";
      texture = Textures.get('satan-min');
      power_level = 	67;
      break;

    case 10:
      nombre_personaje = "Piccolo";
      texture = Textures.get('picolo-min');
      power_level =  2000000000;
      break;

    case 11:
      nombre_personaje = "Nº 18";
      texture = Textures.get('n18-min');
      power_level = 	320000000;
      break;

    case 12:
      nombre_personaje = "Nº 17";
      texture = Textures.get('n17-min');
      power_level = 	300000000;
      break;

    case 13:
      nombre_personaje = "Nº 16";
      texture = Textures.get('n16-min');
      power_level = 	380000000;
      break;

    case 14:
      nombre_personaje = "Krillin";
      texture = Textures.get('krillin-min');
      power_level = 750000;
      break;

    case 15:
      nombre_personaje = "Gotenks SSJ3";
      texture = Textures.get('gotrunks3-min');
      power_level = 	54000000000;
      break;

    case 16:
      nombre_personaje = "Gotenks";
      texture = Textures.get('gotrunks-min');
      power_level = 	180000000;
      break;

    case 17:
      nombre_personaje = "Goku SSJ3";
      texture = Textures.get('goku3-min');
      power_level = 	30000000000;
      break;

    case 18:
      nombre_personaje = "Goku SSJ2";
      texture = Textures.get('goku2-min');
      power_level = 10000000000;
      break;

    case 19:
      nombre_personaje = "Goku SSJ";
      texture = Textures.get('goku1-min');
      power_level = 	5000000000;
      break;

    case 20:
      nombre_personaje = "Goku";
      texture = Textures.get('goku-min');
      power_level = 100000000;
      break;

    case 21:
      nombre_personaje = "Mystic Gohan";
      texture = Textures.get('gohan3-min');
      power_level = 75000000000;
      break;

    case 22:
      nombre_personaje = "Gohan SSJ2";
      texture = Textures.get('gohan2-min');
      power_level = 8400000000;
      break;

    case 23:
      nombre_personaje = "Freezer 4ª form";
      texture = Textures.get('freezer-min');
      power_level = 120000000;
      break;

    case 24:
      nombre_personaje = "Super Cell";
      texture = Textures.get('cell-min');
      power_level = 8000000000;
      break;

    case 25:
      nombre_personaje = "Kid Buu";
      texture = Textures.get('buu3-min');
      power_level = 300000000000;
      break;

    case 26:
      nombre_personaje = "Super Buu";
      texture = Textures.get('buu2-min');
      power_level = 55000000000;
      break;

    case 27:
      nombre_personaje = "Super Buu (Gohan absorbed)";
      texture = Textures.get('buu2,5-min');
      power_level = 150000000000000;
      break;

    case 28:
      nombre_personaje = "Fat Buu";
      texture = Textures.get('buu1-min');
      power_level = 25000000000;
      break;

    case 29:
      nombre_personaje = "Mr. Popo";
      texture = Textures.get('popo-min');
      power_level = 	1030;
      break;

    case 30:
      nombre_personaje = "Chaozu";
      texture = Textures.get('chaos-min');
      power_level = 	610;
      break;

    case 31:
      nombre_personaje = "Kaito";
      texture = Textures.get('kai-min');
      power_level = 	3500;
      break;

    case 32:
      nombre_personaje = "Babidi";
      texture = Textures.get('babidi-min');
      power_level = 	2000;
      break;

    case 33:
      nombre_personaje = "Majin Dabra";
      texture = Textures.get('dabura-min');
      power_level = 	400000000;
      break;

    case 34:
      nombre_personaje = "Super Buu (Gotenks absorbed)";
      texture = Textures.get('buupicolo-min');
      power_level = 	1500000000000;
      break;

    case 35:
      nombre_personaje = "Super Buu (Piccolo absorbed)";
      texture = Textures.get('buugotrun-min');
      power_level = 	560000000000;
      break;

    case 36:
      nombre_personaje = "Kibito Kai";
      texture = Textures.get('kaio-min');
      power_level = 	 2000000000;
      break;

    case 37:
      nombre_personaje = "Imperfect Cell";
      texture = Textures.get('cellimp-min');
      power_level = 	390000000;
      break;

    case 38:
      nombre_personaje = "Semi-Perfect Cell";
      texture = Textures.get('cellsemi-min');
      power_level =  570000000;
      break;

    case 39:
      nombre_personaje = "Cell Jr.";
      texture = Textures.get('minicell-min');
      power_level = 	 2200000000;
      break;

    case 40:
      nombre_personaje = "Mecha Freezer";
      texture = Textures.get('freezerre-min');
      power_level = 	185000000;
      break;

    case 41:
      nombre_personaje = "Dr. Gero";
      texture = Textures.get('n20-min');
      power_level = 	90000000;
      break;

    case 42:
      nombre_personaje = "Nº 19";
      texture = Textures.get('n19-min');
      power_level = 130000000;
      break;

    case 43:
      nombre_personaje = "Goten";
      texture = Textures.get('kidgoten-min');
      power_level = 	5400000;
      break;

    case 44:
      nombre_personaje = "Trunks";
      texture = Textures.get('kidtrunks-min');
      power_level = 	 5700000;
      break;

    case 45:
      nombre_personaje = "Dende";
      texture = Textures.get('dende-min');
      power_level = 	120;
      break;

    case 46:
      nombre_personaje = "Farmer";
      texture = Textures.get('human-min');
      power_level = 	20;
      break;

    case 47:
      nombre_personaje = "Farmer";
      texture = Textures.get('human-min');
      power_level = 	15;
      break;

    case 48:
      nombre_personaje = "Farmer";
      texture = Textures.get('human-min');
      power_level = 	10;
      break;

    case 49:
      nombre_personaje = "Saibaman";
      texture = Textures.get('saibaman-min');
      power_level = 	1200;
      break;

    case 50:
      nombre_personaje = "Nappa";
      texture = Textures.get('nappa-min');
      power_level = 	7500;
      break;

    case 51:
      nombre_personaje = "Chi-Chi";
      texture = Textures.get('chichi-min');
      power_level = 	80;
      break;

    default:

  }

}



function starCountdown()
{
  num = Math.floor(Math.random()*52);

  remainingTime = 6;
  countdownTimer = Time.setInterval(function()
  {
    remainingTime = remainingTime - 1;
    if (remainingTime-3 <= WARNING)
    {
      playbackController2.setPlaying(false);
      playbackController.setPlaying(true);
      flecha1.hidden = true;
      material2 = Materials.get('material12');
      circulo1.material = material2;
      flecha2.hidden = false;
      circuloblink.hidden = false;
      letras.hidden = false;
      level.text = "Power Level";
    }
    if (remainingTime <= WARNING)
    {

      flecha2.hidden = true;
      material2 = Materials.get('parpadeo');
      circulo1.material = material2;
      circuloblink.hidden = true;
      letras.hidden = true;
      eleccion();
      // Assign the texture to the material
      material.diffuse = texture;
      // Assign the material to the plane
      personaje.material = material;
      personaje.hidden = false;
      n = power_level.toString();
      texto.text = n;
      nom_p.text = "";
      nom_p2.text = nombre_personaje;
      stopCountdown();

    }
  }, 1000)
}

function stopCountdown()
{
  Time.clearInterval(countdownTimer);

}



CamaraInfo.isRecordingVideo.monitor()
  .subscribeWithSnapshot({isRecording: CamaraInfo.isRecordingVideo},
    function(snapshot)
    {
      if (snapshot.newValue == true && snapshot.oldValue == false)
      {
        starCountdown();
      }
      else
      {
        stopCountdown();
        letras.hidden = true;
        flecha2.hidden = true;
        material2 = Materials.get('material11');
        circulo1.material = material2;
        circuloblink.hidden = true;
        flecha1.hidden = false;
        // circulo1.hidden = false;
        texto.text = ""
        nom_p2.text = "";
        nom_p.text = ">unknown<";
        level.text = "";
        personaje.hidden = true;
        playbackController.setPlaying(false);
        playbackController2.setPlaying(true);
        playbackController.reset();
      }

    })
