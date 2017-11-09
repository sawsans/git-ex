console.log('Books');
'use strict'

var gBooks = [{
    //id : 'don_quixote',
    id: 1,
    name: 'Don Quixote',
    author: 'Miguel de Cervantes',
    price: 50,
    currency: '$',
    isDeleted: 0,
    image: '1.jpg',
    //simage : 'don_quixote.jpg',
    desc: 'Alonso Quixano, a retired country gentleman in his fifties, \
            lives in an unnamed section of La Mancha with his niece and \
            a housekeeper. He has become obsessed with books of chivalry, \
            and believes their every word to be true, despite the fact that \
            many of the events in them are clearly impossible. \
            Quixano eventually \
            appears to other people to have lost his mind from little sleep \
            and food and because of so much reading.\
            ',
    rateUP: 9,
    rateDOWN: 3
}, {
    //id : 'in_search_of_lost_time',
    id: 2,
    name: 'In Search of Lost Time',
    author: 'Marcel Proust',
    price: 54,
    currency: '$',
    isDeleted: 0,
    //image : 'in_search_of_lost_time.jpg',
    image: '2.jpg',
    desc: 'Swann\'s Way, the first part of A la recherche de temps perdu, \
            Marcel Proust\'s seven-part cycle, was published in 1913. In it, \
            Proust introduces the themes that run through the entire work. \
            The narrator recalls his childhood, aided by the famous madeleine; \
            and describes M. Swann\'s passion for Odette. \
            The work is incomparable. Edmund Wilson said "[Proust] \
            has supplied for the first time in literature an equivalent in \
            the full scale for the new theory of modern physics.',
    rateUP: 0,
    rateDOWN: 0
}, {
    //id : 'ulysses',
    id: 3,
    name: 'ulysses',
    author: 'James Joyce',
    price: 77,
    currency: '$',
    isDeleted: 0,
    //image : 'ulysses.jpg',
    image: '3.jpg',
    desc: 'Ulysses chronicles the passage of Leopold Bloom through Dublin \
           during an ordinary day, June 16, 1904. The title parallels and alludes \
           to Odysseus (Latinised into Ulysses), the hero of Homer\'s Odyssey \
           (e.g., the correspondences between Leopold Bloom and Odysseus, \
            Molly Bloom and Penelope, and Stephen Dedalus and Telemachus). \
            Joyce fans worldwide now celebrate June 16 as Bloomsday.',
    rateUP: 0,
    rateDOWN: 0
}, {
    //id : 'the_odyssey',
    id: 4,
    name: 'The Odyssey',
    author: 'Homer',
    price: 90,
    currency: '$',
    isDeleted: 0,
    //image : 'the_odyssey.jpg',
    image: '4.jpg',
    desc: 'The Odyssey is one of two major ancient Greek epic \
            poems attributed to Homer. It is, in part, a sequel to \
            the Iliad, the other work traditionally ascribed to Homer. \
            The poem is fundamental to the modern Western canon. Indeed \
            it is the second—the Iliad being the first—extant work of \
            Western literature. It was probably composed near the end of \
            the eighth century BC, somewhere in Ionia, the Greek-speaking \
            coastal region of what is now Turkey. The poem mainly centers \
            on the Greek hero Odysseus (or Ulysses, as he was known in \
            Roman myths) and his long journey home following the fall of \
            Troy. It takes Odysseus ten years to reach Ithaca after the \
            ten-year Trojan War. In his absence, it is assumed he has died, \
            and his wife Penelope and son Telemachus must deal with a group \
            of unruly suitors, the Mnesteres or Proci, \
            competing for Penelope\'s hand in marriage.',
    rateUP: 10,
    rateDOWN: 0
}, {
    //id : 'war_and_peace',
    id: 5,
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 64,
    currency: '$',
    isDeleted: 0,
    //image : 'war_and_peace.jpg',
    image: '5.jpg',
    desc: 'Epic in scale, War and Peace delineates in graphic \
            detail events leading up to Napoleon\'s invasion of \
            Russia, and the impact of the Napoleonic era on Tsarist \
            society, as seen through the eyes of five Russian \
            aristocratic families.',
    rateUP: 0,
    rateDOWN: 0
}, {
    //id : 'moby_dick',
    id: 6,
    name: 'Moby Dick',
    author: 'Herman Melville',
    price: 77,
    currency: '$',
    isDeleted: 0,
    //image : 'moby_dick.jpg',
    image: '6.jpg',
    desc: 'First published in 1851, Melville\'s masterpiece is, \
            in Elizabeth Hardwick\'s words, "the greatest novel in \
            American literature." The saga of Captain Ahab and his \
            monomaniacal pursuit of the white whale remains a peerless \
            adventure story but one full of mythic grandeur, poetic \
            majesty, and symbolic power. Filtered through the consciousness \
            of the novel\'s narrator, Ishmael, Moby-Dick draws us into a \
            universe full of fascinating characters and stories, from the \
            noble cannibal Queequeg to the natural history of whales, \
            while reaching existential depths that excite debate and \
            contemplation to this day.',
    rateUP: 0,
    rateDOWN: 3
}, {
    //id : 'the_divine_comedy',
    id: 7,
    name: 'The Divine Comedy',
    author: 'Dante Alighieri',
    price: 22,
    currency: '$',
    isDeleted: 0,
    //image : 'the_divine_comedy.jpg',
    image: '7.jpg',
    desc: 'Belonging in the immortal company of the great works of \
            literature, Dante Alighieri\'s poetic masterpiece, \
            The Divine Comedy, is a moving human drama, an unforgettable \
            visionary journey through the infinite torment of Hell, up the \
            arduous slopes of Purgatory, and on to the glorious realm of \
            Paradise — the sphere of universal harmony and eternal salvation.',
    rateUP: 0,
    rateDOWN: 0
}, {
    //id : 'hamlet',
    id: 8,
    name: 'Hamlet',
    author: 'William Shakespeare',
    price: 32,
    currency: '$',
    isDeleted: 0,
    //image : 'hamlet.jpg',
    image: '8.jpg',
    desc: 'The Tragedy of Hamlet, Prince of Denmark, or more \
            simply Hamlet, is a tragedy by William Shakespeare, \
            believed to have been written between 1599 and 1601. \
            The play, set in Denmark, recounts how Prince Hamlet \
            exacts revenge on his uncle Claudius, who has murdered \
            Hamlet\'s father, the King, and then taken the throne \
            and married Gertrude, Hamlet\'s mother. The play vividly \
            charts the course of real and feigned madness—from \
            overwhelming grief to seething rage—and explores themes \
            of treachery, revenge, incest, and moral corruption.',
    rateUP: 0,
    rateDOWN: 0
}];

//this function will draw the table
function renderBooks() {

    var strTableRows = '';

    for (var i = 0; i < gBooks.length; i++) {
        if (gBooks[i].isDeleted) continue;
        strTableRows += '<tr>\
                       <td>'+ gBooks[i].id + '</td>\
                       <td>'+ gBooks[i].name + '</td>\
                       <td>'+ gBooks[i].price + ' ' + (!gBooks[i].currency ? '$' : gBooks[i].currency) + '</td>\
                       <td>\
                       <a class="portfolio-link" data-toggle="modal" href="#'+ gBooks[i].id + '">\
                        <button class="btn btn-primary btn-xs">Read</button>\
                       </a>\
                        </td>\
                       <td>\
                         <button class="btn btn-danger btn-xs" onclick="deleteBook('+ gBooks[i].id + ')">Remove</button>\
                        </td>\
                        <td>\
                            <button class="btn btn-success btn-xs" onclick="readAndUpdateBook('+ gBooks[i].id + ')">Update</button>\
                        </td>\
                    </tr>';
    }

    var elAvailableBooks = document.querySelector('#availableBooks');
    elAvailableBooks.innerHTML = strTableRows;
    createModals();
}

function createModals() {

    var strModals = '';

    for (var i = 0; i < gBooks.length; i++) {
        var id = gBooks[i].id;
        var auth = (!gBooks[i].author)? 'Unknown Yet' : gBooks[i].author;
        
        var currency = (!gBooks[i].currency)? '$' : gBooks[i].currency;
        var rate = (!gBooks[i].rate)? 0 : gBooks[i].rate;
        var desc = (!gBooks[i].desc)? '' : gBooks[i].desc;
        var name = (!gBooks[i].name)? gBooks[i].name : 'No name';
        var rateUp = (gBooks[i].rateUP)?gBooks[i].rateUP:0;
        var rateDown = (gBooks[i].rateDOWN)?gBooks[i].rateDOWN:0;

        // console.log('auth',auth); console.log(id); console.log(auth); 
        // console.log(currency);  console.log(rate);  console.log(desc); 
        // console.log(name); 
        strModals += '<div class="portfolio-modal modal fade" id="' + id + '" tabindex="-1" role="dialog" aria-hidden="true">\
        <div class="modal-dialog">\
          <div class="modal-content">\
            <div class="close-modal" data-dismiss="modal">\
              <div class="lr">\
                <div class="rl"></div>\
              </div>\
            </div>\
            <div class="container">\
              <div class="row">\
                <div class="col-lg-8 mx-auto">\
                  <div class="modal-body">\
                    <h2>'+ gBooks[i].name + '</h2>\
                    <img class="img-fluid d-block mx-auto" src="img/'+ (i + 1) + '.jpg" alt="">\
                    <p>'+ desc + '</p>\
                    <ul class="list-inline">\
                      <li>author: '+ auth + '</li>\
                      <li>Price: '+ gBooks[i].price + ' ' + currency + '</li>\
                      <li>rated: \
                      <span class="emSpan" onclick="updateThumpsUP('+id+');"><i class="em em---1"></i>\
                      <span class="rateUp" id="rateUp'+id+'">'+ rateUp + '</span></span>\
                      <span class="emSpan" onclick="updateThumpsDOWN('+id+');"><i class="em em--1"></i>\
                      <span class="rateDOWN" id = "rateDOWN'+id+'">'+ rateDown  + '</span></span>\
                      </li>\
                    </ul>\
                    <button class="btn btn-primary" data-dismiss="modal" type="button">\
                        <i class="fa fa-times"></i>\
                        Close Project</button>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>'
    }
      
    var elModals = document.querySelector("#modals");
    elModals.innerHTML = strModals;
}

//Handle delete
function deleteBook(bookId) {
    var idx = getObjectIdByValue(gBooks, bookId, 'id');
    if (idx !== null && idx !== undefined) gBooks[idx].isDeleted = 1;
    renderBooks();
}

//this function gets value of a property of an object in an array of objects and returns its ID.
function getObjectIdByValue(arr, value, prop) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value)
            return i;
    }
    return null;
}
//this function will read (prompt) the details from the user: 
//name and price, then we will call a function addBook(name, price) 
//Then call the renderTable() to redraw the table
function readAndAddNewBook() {

    var newBook = prompt("Enter Book Name");
    var newPrice = prompt("Enter Book Price");

    //only if there's a price and a name then add a new item
    if (newBook && newPrice) addBook(newBook, newPrice);
}

//that will find the next available id and push a new book into 
//the gBooks model
function addBook(name, price) {

    var newIdx = gBooks.push({ name: name, price: price ,image:'99.jpg'});
    gBooks[newIdx - 1].id = newIdx;
    
    renderBooks();
    createModals();

}

//this function will prompt(from the user) for the book new price and call the function
function readAndUpdateBook(bookId) {
    var newPrice = prompt("Enter A new price ");
    //only if there's a price call the update function 
    if (newPrice) updateBook(bookId, newPrice);
}

//this function will update for the given bookId the price
function updateBook(bookId, bookPrice) {

    var idx = getObjectIdByValue(gBooks, bookId, 'id');
    if (idx !== null && idx !== undefined) gBooks[idx].price = bookPrice;

    renderBooks();
}

function updateThumpsUP(objId){
    var idx = getObjectIdByValue(gBooks, objId, 'id');
    var retVal = gBooks[idx].rateUP;
    var strId = '#rateUp'+ objId;
    if (idx !== null && idx !== undefined && retVal >= 0 && retVal <= 9) gBooks[idx].rateUP++;

    var elThums = document.querySelector(strId);
        elThums.innerHTML = gBooks[idx].rateUP;
}

function updateThumpsDOWN(objId){
    var idx = getObjectIdByValue(gBooks, objId, 'id');
    var rateVal = gBooks[idx].rateDOWN;
    var strId = '#rateDOWN'+ objId;
    
    if (idx !== null && idx !== undefined && rateVal >= 0 && rateVal <= 9){
     gBooks[idx].rateDOWN++;
        
    var elThums = document.querySelector(strId);
    elThums.innerHTML = gBooks[idx].rateDOWN;
  }
}