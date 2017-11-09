console.log('projsGallery');
'use strict';


var gProjs = [{
    id: "sokoban",
    name: "Sokoban",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum", "publishedAt": 1448693940000,
    about: "this is will be the about the project section ",
    client: "lolo",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/sokoban/index.html"
}, {
    id: "minesweeper",
    name: "Minesweeper",
    title: "A single-player puzzle ",
    desc: "lorem ipsum lorem ipsum lorem ipsum", "publishedAt": 1448693940000,
    about: "this is will be the about the project section Minesweeper",
    client: "puki",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/minesweeper/index.html"

}, {
    id: "touch_nums",
    name: "Touch Nums",
    title: "Wanna know how fast can you think..",
    desc: "lorem ipsum lorem ipsum lorem ipsum", "publishedAt": 1448693940000,
    about: "this is will be the about the project section Touch Nums",
    client: "Muki",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/touch_nums/index.html"

}, {
    id: "chess",
    name: "Chess",
    title: "Chess Game",
    desc: "lorem ipsum lorem ipsum lorem ipsum", "publishedAt": 1448693940000,
    about: "this is will be the about the project section Chess Game",
    client: "Fuki",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/chess/index.html"    

}, {
    id: "pop_balloons",
    name: "Pop Balloons",
    title: "Try to pop the balloons",
    desc: "lorem ipsum lorem ipsum lorem ipsum Pop Balloons", "publishedAt": 1448693940000,
    about: "this is will be the about the project section ",
    client: "soso",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/pop_balloons/index.html"
}, {
    id: "calculator",
    name: "Calculator",
    title: "Calculting stuff",
    desc: "lorem ipsum lorem ipsum lorem ipsum", "publishedAt": 1448693940000,
    about: "this is will be the about the project section calculator",
    client: "lili",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/calculator/index.html"

}, {
    id: "memory_monsters",
    name: "Memory Monsters",
    title: "Test your memory...",
    desc: "descreption of the game Memory Monsters", "publishedAt": 1448693940000,
    about: "this is will be the about the project section Memory Monsters",
    client: "om kultom",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link:"projects/memory_monsters/",
    link: "projects/memory_monsters/index.html"

}, {
    id: "saimonsPiano",
    name: "Saimon's Piano",
    title: "Saimon's Piano",
    desc: "descreption of the game Saimon's Piano", "publishedAt": 1448693940000,
    about: "this is will be the about the project section ",
    client: "lolofofo",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/saimonsPiano/index.html"
},{
    id: "inPicture",
    name: "In Picture",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum", "publishedAt": 1448693940000,
    about: "this is will be the about the project section ",
    client: "farid elatrash",
    labels: ["Matrixes", "keyboard events"],
    category: "Mind Games",
    link: "projects/inPicture/index.html"
}];

function SendEmail(){

    var userEmail = document.querySelector("#email_address").value;
    var userSub = document.querySelector("#subject").value;
    var userMsg = document.querySelector("#msg").value;

    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sawsan.elhade@gmail.com&su='+userSub+'&body='+userMsg,'_blank');

}

function initPage(){
    
    renderPort();
    renderModal();
}

function renderPort() {

    var strHtml = '';
    for (var i = 0; i < gProjs.length; i++){
        strHtml += '<div class="col-md-4 col-sm-6 portfolio-item">';
        strHtml += '<a class="portfolio-link" data-toggle="modal" href="#'+gProjs[i].id+'">';
        strHtml += '<div class="portfolio-hover">';
        strHtml += '<div class="portfolio-hover-content">';
        strHtml += '<i class="fa fa-plus fa-3x"></i></div></div>';
        strHtml += '<img class="img-fluid" src="img/portfolio/'+gProjs[i].id+'.jpg" alt="'+gProjs[i].name+'">';
        strHtml += '</a>';
        strHtml += '<div class="portfolio-caption">';
        strHtml += '<h4>'+gProjs[i].title+'</h4>';
        strHtml += '<p class="text-muted">Illustration</p>';
        strHtml += '</div></div>';
    }
    
    var elPort = document.querySelector('#myPortfolio');
    elPort.innerHTML = strHtml;
}


function renderModal() {
    
        var strHtml = '';
        for (var i = 0; i < gProjs.length; i++){
            strHtml += '<div class="portfolio-modal modal fade" id="'+gProjs[i].id+'" tabindex="-1" role="dialog" aria-hidden="true">';
            strHtml += '<div class="modal-dialog">';
            strHtml += '<div class="modal-content"><div class="close-modal" data-dismiss="modal">';
            strHtml += '<div class="lr">';
            strHtml +=  '<div class="rl"></div></div></div>';
            strHtml +=  '<div class="container"><div class="row"><div class="col-lg-8 mx-auto"><div class="modal-body">';
            strHtml +=  '<h2>'+gProjs[i].name+'</h2>';
            strHtml +=  '<p class="item-intro text-muted">'+gProjs[i].desc+'</p>';
            strHtml += '<img class="img-fluid d-block mx-auto" src="img/portfolio/'+gProjs[i].id+'-full.jpg" alt="'+gProjs[i].name+'">';
            strHtml += '<p>'+gProjs[i].desc+'</p>';
            strHtml += '<ul class="list-inline">';
            var date = new Date(gProjs[i].publishedAt);
            strHtml += '<li>Date: '+ getMonth(gProjs[i].publishedAt) + ' '+date.getFullYear()+'</li>';
            strHtml += '<li>Client: '+gProjs[i].client+'</li>';
            strHtml += '<li>Category: '+gProjs[i].category+'</li>';
            strHtml += '<li>Check it out<a href ="'+gProjs[i].link+'" "_blank">: '+gProjs[i].name+'</a></li>';
            strHtml += '</ul>';
            strHtml += '<button class="btn btn-primary" data-dismiss="modal" type="button">';
            strHtml += '<i class="fa fa-times"></i>'
            strHtml += 'Close Project</button>';
            strHtml += '</div></div></div></div></div></div></div>';
            
        }
        
        var elModals = document.querySelector('#modals');
        elModals.innerHTML = strHtml;
    }

    function getMonth(strDate){
        
        var date = new Date(strDate);
        var month = date.getMonth();
        var ret = '';

        switch(month){
            case 0: ret = 'January';
            case 1: ret = 'February';
            case 2: ret = 'March';
            case 3: ret = 'April';
            case 4: ret = 'May';
            case 5: ret = 'June';
            case 6: ret = 'July';
            case 7: ret = 'August';
            case 8: ret = 'September';
            case 9: ret = 'October';
            case 10: ret = 'November';
            case 11: ret = 'December';
        }

        return ret;
    }
    