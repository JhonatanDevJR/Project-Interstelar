var img= document.getElementById('foto')
var text1= document.getElementById('text1')
var test= document.getElementById('teste')
function entrou1(){
    text1.innerHTML=`<p>Mercury is the closest planet to the Sun and the smallest in the Solar System. It is the first planet in the Solar System, counting from the closest to the Sun, at a distance of only 57.9 million kilometers from the star. The first observations with a telescope date back to 1610, and Galileo Galilei made the first observations. A day on Mercury lasts 59 days on Earth. A year on Mercury lasts 88 days on Earth. Mercury's rotation speed can reach 180 thousand km/hour.</p>`
    document.getElementById("foto1").style.display='none';
}
function saiu1(){
    text1.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto1").style.display ='block'; 
} 

function entrou2(){
    text2.innerHTML=`<p>Venus is a rocky planet in the solar system, the second closest to the Sun, and is known to be Earth's sister planet. Venus is similar to Earth in terms of size and mass, being only 650 km smaller in diameter and 81.5% of Earth's mass. Venus' atmosphere is very dense and composed of 96.5% carbon dioxide, which gives the planet a yellowish color.</p>`
    document.getElementById("foto2").style.display='none';
}
function saiu2(){
    text2.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto2").style.display ='block'; 
} 

function entrou3(){
    text3.innerHTML=`<p>Planet Earth is one of the planets that make up the Solar System and is the third closest planet to the Sun. Its formation occurred billions of years ago, as did the existence of life here. Some theories explain its origin, such as the solar nebula theory.</p>`
    document.getElementById("foto3").style.display='none';
}
function saiu3(){
    text3.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto3").style.display ='block'; 
} 

function entrou4(){
    text4.innerHTML=`<p>Mars is the fourth planet in the Solar System, located between Earth and Jupiter. Located 227 million km from the Sun, it is a planet formed by a rocky surface and an atmosphere rich in CO2. Representation of Mars, the fourth planet from the Sun. Due to its color, it is also called the Red Planet. It has the largest volcano in our entire system, a red surface, and even seasons such as summer and winter.</p>`
    document.getElementById("foto4").style.display='none';
}
function saiu4(){
    text4.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto4").style.display ='block'; 
} 

function entrou5(){
    text5.innerHTML=`<p>Jupiter is a gas giant and the largest planet in the Solar System. Jupiter is the fifth planet in the Solar System from the Sun. It is a gas giant with a surface formed mostly by helium and hydrogen gases, with a large atmosphere and a solid or pasty core inside.</p>`
    document.getElementById("foto5").style.display='none';
}
function saiu5(){
    text5.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto5").style.display ='block'; 
} 

function entrou6(){
    text6.innerHTML=`<p>Saturn is a gaseous planet in the Solar System, the second largest and the sixth most distant from the Sun. It is known for its rings, which are visible from Earth. It is the planet with the most moons in the Solar System, with 146. It has a surface with yellowish, brown and white tones. It is composed mainly of hydrogen and helium, but also contains ammonia and frozen water.</p>`
    document.getElementById("foto6").style.display='none';
}
function saiu6(){
    text6.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto6").style.display ='block'; 
} 

function entrou7(){
    text7.innerHTML=`<p>Uranus is a gaseous planet in the Solar System, the third largest and fourth most massive. It is the coldest planet in the Solar System, with temperatures that can reach -224°C. It has a light blue coloration, due to the presence of methane in its atmosphere. It is known as the "tilted planet" because its rotation is in the opposite direction to the other planets, with an inclination of 98° in relation to the plane of its orbit.</p>`
    document.getElementById("foto7").style.display='none';
}
function saiu7(){
    text7.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto7").style.display ='block'; 
} 

function entrou8(){
    text8.innerHTML=`<p>Neptune is a gaseous planet in the Solar System that is classified as an ice giant. It is the eighth planet from the Sun, and is therefore the most distant planet from the Sun. As a result, the time it takes Neptune to complete a full orbit around this star is very long: 165 years.</p>`
    document.getElementById("foto8").style.display='none';
}
function saiu8(){
    text8.innerHTML='<h2>click on the image.</h2>'
    document.getElementById("foto8").style.display ='block'; 
} 
function menu() {
    if (itens.style.display== 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display= 'block'
    }
}

