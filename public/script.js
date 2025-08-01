// শুধুমাত্র উদাহরণ: প্রথম ২০টা নাম দেখানো হলো সংক্ষেপে
const firstNames = [
  "Aylin","Zayn","Ivory","Max","Rivka","Dustin","Elaine","Isaiah","Holly","Kye",
  "Haley","Holden","Blaire","Kaysen","Brooklyn","Lane","Mariam","Cash","Maia","Jadiel",
  "Amara","Jeffery","Bridget","Leonard","Maren","Van","Aubrielle","Zyair","Angelica","Luka",
  "Juliana","Andrew","Serenity","Lorenzo","Sevyn","August","Jane","Nash","Carolyn","Benjamin",
  "Anika","Bear","Clare","Mitchell","Anika","Fernando","Malayah","Elliott","Rosalia","Oscar",
  "Juliet","Khari","Laura","Oscar","Charley","Cason","Elina","Dominick","Giovanna","Zayne",
  "Kayla","Everett","Sariah","Ethan","Chandler","Nicholas","Hope","Hayes","Bethany","Jeremias",
  "Astrid","Malik","Gemma","Mac","Palmer","Greyson","Abby","Zaiden","Daisy","Tobias",
  "Kaylani","Colt","Stephanie","Rio","Karen","Blaine","Jolie","Shepherd","Kora","Major",
  "Nina","Tristan","Cara","Cannon","Amber","Alan","Harley","Ryland","Kylee","Eddie",
  "Milana","Ty","Josephine","Bentley","Maleah","Dominick","Ruth","Ivan","Elyse","Rogelio",
  "Emma","Graham","Zaniyah","Levi","Paula","Amos","Kairi","Declan","Presley","Lian",
  "Finley","Paul","Leilany","Raul","Payton","Santiago","Mallory","Omari","Hallie","Jeffrey",
  "Brittany","Brody","Alice","Van","Kynlee","Shepard","Julissa","Dillon","Wren","Rudy",
  "Khalani","Henry","Savannah","Brixton","Malia","Atlas","Faye","Keaton","Brianna","Conner",
  "Blaire","Andre","Trinity","Keegan","Remy","Zayne","Emerald","Nathaniel","Heidi","Davion",
  "Crystal","Yosef","Rivka","Will","Promise","Tyson","Saige","Langston","Giavanna","David",
  "Beatrice","Ephraim","Maxine","Porter","Kenzie","Atlas","Naya","Cole","Ariana","Yosef",
  "Madeleine","Johnathan","Zoey","Henry","Rosa","Tate","Amelie","Thatcher","Amiyah","Jayceon",
  "Alison","Isaias","Maddison","Otis","Aleena","Zaiden","Harmony","Fernando","Alessandra","Cyrus",
  "Braylee","Kingston","Marilyn","Pedro","Avayah","Colten","Lauren","Donovan","Belen","Owen",
  "Cecilia","Atreus","Madilynn","Porter","Aileen","Jon","Karter","Dexter","Maren","Brayan",
  "Joanna","Ezekiel","Noemi","Grant","Rachel","Jackson","Mckenzie","Blaze","Avah","Crosby",
  "Marianna","Abdiel","Sky","Tommy","Veda","Gerald","Ayleen","Eddie","Vienna","Kylen",
  "Celia","Leon","Margo","Frederick","Katherine","Colter","Kayleigh","Remi","Madilynn","Nelson",
  "Alivia","Adonis","Louisa","Isaiah","Heaven","Joseph","Paulina","Gerardo","Valeria","Eliel",
  "Keira","Gerardo","Lilian","Francisco","Kamryn","Zavier","Addisyn","Miles","Josephine","Camilo",
  "Katie","Nehemiah","Emely","Ethan","Adley","Charles","Aleah","Kalel","Jayda","Kayson",
  "Everly","Cain","Aviana","Jaxx","Rayne","Damir","Harley","Maximo","Guadalupe","Randy",
  "Marina","Jakari","Blaire","Garrett","Alianna","Felix","Etta","Garrett","Wren","Jadiel",
  "Hallie","Landyn","Kamilah","Kashton","Rylee","Bridger","Norah","Bentley","Isabelle","Jaden",
  "Elodie","Westley","Briar","Easton","Lilian","Grant","Amaya","Mohamed","Diana","Angel",
  "Layne","Damien","Layne","Rafael","Jennifer","Mitchell","Zaniyah","Jaxon","Bailey","Holden",
  "Piper","Dilan","Chelsea","Quinton","Estella","Kenneth","Allie","Kaleb","Isabelle","Eliseo",
  "Ariana","Grayson","Nala","Rodney","Capri","Gunnar","Collins","Wells","Jenna","Brayan",
  "Romina","Jaxtyn","Nora","Josue","Zahra","Lane","Ember","Kyro","Daniella","Matthias",
  "Judith","Muhammad","Zara","Finley","Marie","Westin","Kira","Zyair","Sarai","Atticus",
  "Brynlee","Nicholas","Zaniyah","Kaison","Raquel","Tadeo","Alma","Roy","Naomi","Ander",
  "Tiffany","Felix","Madilyn","Ledger","Amelia","Chris","Madilynn","Easton","Morgan","Edison",
  "Mckenzie","Kenji","Ariah","Erik","Deborah","Caspian","Jayleen","George","Morgan","Clyde",
  "Hadassah","Franklin","Florence","Kamari","Michelle","Kyler","Loretta","Sincere","Isla","Makai",
  "Aubree","Leighton","Everlee","Milo","Emmalyn","Knox","Leilany","Nicholas","Priscilla","Anthony",
  "Elizabeth","Kamari","Malani","Connor","Anne","Callen","Mckenzie","Jabari","Astrid","Everest",
  "Priscilla","Robert","Eva","Jayce","Margot","Legacy","Laney","Derek","Amani","Nicolas",
  "Emani","Cooper","Salem","Nixon","Magnolia","Angel","Keilani","Jamie","Lola","Emir",
  "Hayden","Waylon","Giuliana","Jeffrey","Jenesis","Legacy","Chanel","Duncan","Loretta","Nikolas",
  "Tiffany","Andre","Allison","Barrett","Jaycee","Wilson","Khaleesi","Stetson","Sevyn","Joseph",
  "Kadence","Davian","Celeste","Robin","Vanessa","Kolton","Cataleya","Leo","Braelynn","Kieran",
  "Katelyn","Marvin","Nataly","Ezequiel","Cora","Jasper","Jazlyn","Griffin","Ailani","Allen",
  "Lia","Bronson","Chaya","Declan","Marlowe","Raymond","Zahra","Riley","Ivory","Jefferson",
  "Skye","Bronson","Jacqueline","Adonis","Lauryn","Jude","Ashlyn","Jett","Daniela","Abel",
  "Journee","Uriel","Jolene","Kameron","Alexa","Prince","Mazikee","Evan","Alexandria","Darius",
  "Nicole","Nixon","Madalynn","Leighton","Luciana","Jad","Janiyah","Phillip","Madilyn","Juan",
  "Khalani","Colin","Lucia","Dallas","Katelyn","Grady","Sofia","Axel","Fatima","Conner",
  "Summer","Blaine","Hadley","Mathias","Noor","Adam","Carmen","Major","Yareli","Genesis",
  "Esther","Bruno","Iyla","Isaias","Itzel","Brayan","Zariah","Leo","Bristol","Vincent",
  "Jessie","Troy","Raegan","Keith","Adrianna","Remi","Kennedi","Kristopher","Jacqueline","Cain",
  "Raquel","Avery","Melany","Soren","Julianna","Salvatore","Remi","Bryce","Poppy","Kenji",
  "Ellen","Braden","Bailee","Dior","Armani","Uriah","Hailey","Josiah","Daniela","Albert",
  "Harper","Trent","Alayna","Arthur","Jessica","Cade","Mckenzie","Gustavo","Everleigh","Kaiser",
  "Jianna","Jaziel","Jazmine","Lian","Indie","Tristan","Elsa","Quinn","Kenia","Omar",
  "Lacey","Tripp","Gracelynn","Stefan","Yaretzi","Cody","Monica","Ray","Ada","Maxwell",
  "Anahi","Cooper","Noah","Malachi","Fiona","Thiago","Alani","Quentin","Alena","Pablo",
  "Anahi","Kyng","Quinn","Devin","Marilyn","Jedidiah","Mary","Roland","Demi","Raymond",
  "Marisol","Javier","Kaylie","Bentley","Thea","George","Nicole","Atreus","Tinsley","Niklaus",
  "Leah","Dean","Rosalia","Lucca","Angel","Truett","Evelyn","Liam","Kimber","Amos",
  "Monroe","Lennox","Angel","Sam","Genesis","Nathan","Marceline","Arian","Noa","Yosef",
  "Jimena","Ismael","Paris","Zander","London","Tristan","Paisleigh","Tomas","Claire","Harrison",
  "Chelsea","Remy","Kairi","Rocco","Eliza","Dax","Laura","Lane","Ellie","Azrael",
  "Anne","Devon","Viviana","Zion","Anaya","Memphis","Ember","Gordon","Avah","Elias",
  "Aleah","Emiliano","Alessia","Sebastian","Elaina","Edward","Kayla","Leroy","Sutton","Aldo",
  "Coraline","Valentino","Nola","Judson","Raelyn","Wesley","Anika","Elisha","Aspen","Sterling",
  "Mercy","Lance","Matilda","Muhammad","Aubriella","Tyler","Alexia","Cash","Angelica","Kannon",
  "Daniela","Matthias","Eliana","Jack","Emberly","Sam","Alexia","Franklin","Karina","Jamie",
  "Etta","Phillip","Addisyn","Roy","Valery","George","Zora","Jaylen","Melina","Emanuel",
  "Adriana","Braylen","Isabela","Emanuel","Amaya","Avi","Katelyn","Soren","Rylie","Mason",
  "Kennedi","Ronan","Livia","Bear","Mary","Raphael","Adley","Atlas","Sutton","Rhett",
  "Sage","Fletcher","Oaklyn","Dillon","Rosalia","Dane","Maci","Finnley","Miriam","Nicholas",
  "Izabella","Dustin","Amelie","Killian","Valerie","Kyler","Katalina","Avi","Phoenix","Ashton",
  "Alanna","Seven","Adalynn","Boston","Evelyn","Waylon","Joanna","Arlo","Sara","Kellen",
  "Deborah","Phillip","Gwendolyn","Jones","Serena","Davian","Belle","Paul","Juliet","Korbyn",
  "April","Gael","Alayah","Ridge","Quinn","Ismael","Viviana","Lane","Gloria","Andrew",
  "Valerie","Fabian","Danna","Lawson","Cassandra","Abdullah","Tiana","Francis","Annalise","Otto",
  "Ensley","Jayce","Michelle","Frankie","Hope","Zev","Kora","Aarav","Itzel","Francisco",
  "Marisol","Orlando","Malaysia","Theo","Valeria","Magnus","Brynn","Jett","Kaia","Stanley",
  "Violeta","Azariah","Maisie","Isaias","Everlee","Major","Miracle","Major","Sophia","Cedric",
  "Sophie","Hamza","Amoura","Jaxxon","Lainey","Javier","Zainab","Bowen","Harper","Adler",
  "Rachel","Rome","Ximena","Lachlan","Sophia","Madden","Harlow","Vincent","Adley","Dennis",
  "Audrey","Kason","Amayah","Julien","Angel","Jayden","Elyse","Ahmad","Yamileth","Kamden",
  "Deborah","Royce","Melanie","Riggs","Lauryn","Grey","Megan","Jalen","Jazmine","Logan",
  "Skyler","Troy","Romina","Abner","Blaire","Trey","Tori","Frederick","Abby","Oliver",
  "Penny","Aiden","Aleah","Eliezer","Zola","Antonio","Valentina","Crosby","Catherine","Leo",
  "Katherine","Javier","Scarlett","Knox","Ashlyn","Leroy","Marianna","Darren","Journee","Roy",
  "Jianna","Robert","Morgan","Asa","Rachel","Taylor","Adelyn","Dash","Khloe","Preston",
  "Layla","Reece","Ansley","Eliel","Allie","Mateo","Ada","Ridge","Samara","Jair",
  "Alaiya","Kristian","Kimora","Royal","Jessica","David","Madilyn","Zakai","Yareli","Bryan",
  "Elizabeth","Callan","Brianna","Augustus","Serena","Ari","Brylee","Kobe","Priscilla","Eugene",
  "Naya","Leo","Aurora","Kyree","Collins","Crew","Kamiyah","Lachlan","Itzel","Kaiden",
  "Vada","Major","Elliot","Brantley","Madisyn","Amir","Regina","Jameson","Alianna","Dilan",
  "Reyna","Ashton","Katherine","Joaquin","Chaya","Grady","Tinsley","Rhett","Nola"
];
const lastNames = [
  "Cortez","Collier","Wells","Chung","Barron","Moody","Gomez","Hammond","Ellison","Bauer",
  "Richards","Glenn","Lamb","Turner","Lawson","Boone","Jensen","Parsons","Mays","Fernandez",
  "Whitney","Stafford","Wilkinson","Harmon","Hurley","Bartlett","Stanton","Shah","Silva","Ferguson",
  "Phillips","Cooper","Webb","Kline","Burns","Jensen","Watkins","Maynard","Miller","Kemp",
  "Rivers","Glass","McClain","Kemp","Fleming","Peralta","Simpson","Macdonald","Carroll","Juarez",
  "Choi","Becker","Carroll","Yates","Atkins","Compton","Walton","Johns","Simon","Riley",
  "Hughes","House","Gonzalez","Proctor","Gray","Hansen","Harper","Melendez","Woodward","Roman",
  "Thornton","Hart","Huber","Jennings","Watson","Ball","Salas","McDonald","Gilbert","Carrillo",
  "Delgado","McLaughlin","Dejesus","Weeks","Gould","Ahmed","Roberson","Logan","McDaniel","Lambert",
  "Meyer","Clements","Owen","Salas","Gardner","Little","Moody","Norton","O’Neal","Koch",
  "Farrell","Bennett","Fernandez","Rush","Walton","Ray","Tucker","Keith","Tang","Johnson",
  "Rice","Mosley","Moore","Frost","Marks","Morse","Jenkins","Armstrong","O’Donnell","Arnold",
  "Carlson","Stein","Bautista","Andrews","Peterson","Morton","Harrington","Wolfe","Love","Estes",
  "Salazar","Ramos","Hurley","Duarte","Mullen","Dejesus","Zavala","Terry","Small","Ashley",
  "Rodriguez","Gutierrez","Hood","Lynch","Nichols","Arellano","Savage","Kennedy","McGee","Glenn",
  "Fuller","Richards","Strickland","Colon","Simon","Sanford","Cole","Lara","Parra","Peck",
  "Clay","Chung","Rasmussen","Mahoney","Bush","Clayton","Ponce","Lim","Ramirez","Barrera",
  "Archer","Vance","Moss","Lyons","Nichols","Moon","Ellis","Ward","Clay","Fuentes",
  "Cardenas","Young","Rodriguez","Meza","Moran","Gentry","Quintero","Avila","Hardy","Curry",
  "Zhang","Valencia","Chase","Decker","Salas","Robertson","Fleming","Miles","Lyons","Espinosa",
  "Alexander","Bruce","Liu","Hayden","Merritt","Lawrence","Wolfe","McMahon","Perez","Wells",
  "Dyer","Ibarra","Moss","Ponce","Buck","Moses","Shaffer","Harmon","Donovan","O’brien",
  "Cook","Barr","Armstrong","Pena","Taylor","McCoy","Fitzpatrick","Horn","McLean","Corona",
  "Andrade","McLean","Guevara","Sheppard","Burch","O’Neal","Nielsen","Ashley","Marin","Grant",
  "Strong","Wise","Stevens","Dudley","McGee","Rosas","Ibarra","Harrell"
];

function generateName() {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

function generateSet(count = 12) {
  const set = new Set();
  while (set.size < count) {
    set.add(generateName());
  }
  return Array.from(set);
}

function autoResizeTextarea(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

const generateBtn = document.getElementById('generate-btn');
const nameSetsDiv = document.getElementById('name-sets');

generateBtn.addEventListener('click', () => {
  nameSetsDiv.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const names = generateSet(15);

    const box = document.createElement('div');
    box.className = 'name-set';

    const textarea = document.createElement('textarea');
    textarea.readOnly = true;
    textarea.value = names.join('\n');
    autoResizeTextarea(textarea); // স্ক্রল বার ছাড়াই উঁচু হবে

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';

    copyBtn.addEventListener('click', () => {
      textarea.select();
      document.execCommand('copy');
      copyBtn.textContent = 'Copied!';
    });

    box.appendChild(textarea);
    box.appendChild(copyBtn);
    nameSetsDiv.appendChild(box);
  }
});
