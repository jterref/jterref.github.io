//species
var species = ["a ferret","an otter","a cat","a dog","a squirrel","a rat","a mouse","a fox","a bear","a raccoon",
                "a marten","a dragon","a lizard","a weasel","a wolf","a coyote","a lion","a tiger","a lynx","a horse",
                "a cow or ox","a zebra","a pig","a bat","a sheep","a rabbit","a kangaroo","a hedgehog"];
var species_plural = ["ferrets","otters","cats","dogs","squirrels","rats","mouses","foxes","bears","raccoons",
                        "martens","dragons","lizards","weasels","wolves","coyotes","lions","tigers","lynxes","horses",
                        "bovines","zebras","pigs","bats","sheeps","rabbits","kangaroos","hedgehogs"];


//themes
var theme_pool = ["medieval","renaissance","noir","a big city","feudal japan","old west",
                    "lovecraftian","horror or terror","futuristic","steampunk","a small town","ancient egypt","ancient rome"];

var theme_ids = {
    MEDIEVAL : 0,
    RENAISSANCE : 1,
    NOIR : 2,
    CITY : 3,
    FEUDAL : 4,
    OLDW : 5,
    LOCEVRAFT : 6,
    HORROR : 7,
    FUTURISTIC : 8,
    STEAMPUNK: 9,
    TOWN: 10,
    EGYPT: 11,
    ROME: 12,
};

//professions
var profession_themes = [];
profession_themes[theme_ids.MEDIEVAL] = ["a knight","an archer","a hunter","a thief","a king","a queen","a prince or princess",
                                            "a farmer", "a fisherman","a bartender","an innkeeper","a shopkeeper","a noble","an assassin",
                                            "a bard","a healer","a druid","a wizard or witch","an evil wizard or witch"];
profession_themes[theme_ids.RENAISSANCE] =["a king","a queen", "a prince or princess","a noble","a citizen","a shopkeeper",
                                            "a guard","an assassin","a thief", "a singer","a medic","a painter","a young boy",
                                            "a young girl"];
profession_themes[theme_ids.NOIR] = ["a police officer","a detective","an assassin","a barkeeper","a citizen", "a thief",
                                        "a dancer", "a medic", "a singer", "a musician","a young boy","a young girl","a gentleman"];
profession_themes[theme_ids.CITY] = ["a police officer","an athlete","a painter","a barkeeper","a citizen",
                                        "a thief", "a dancer", "a singer", "a musician","a young boy","a young girl",
                                        "a magician","a clown"];
profession_themes[theme_ids.FEUDAL] = ["a geisha","a samurai","a fisherman","a farmer","a thief","a feudal lord","the emperor",
                                        "a monk","a shopkeeper"];
profession_themes[theme_ids.OLDW] = ["a sheriff","a criminal","a dancer","a citizen","a farmer","a medic","a bartender",
                                        "an innkeeper","a native"];
profession_themes[theme_ids.LOCEVRAFT] = ["a paranoic","a young boy","a young girl","a conspirationist","an alienist",
                                            "a tainted evangilist"];
profession_themes[theme_ids.HORROR] = ["a citizen","an assassin","a police officer","a young boy","a young girl",
                                        "a mad scientist","a teenager","an undead","a witch","a demonologist"];
profession_themes[theme_ids.FUTURISTIC] = ["a spaceship pilot","an emperor","a citizen","an alien in disguise",
                                            "a time traveler"];
profession_themes[theme_ids.STEAMPUNK] = ["an engineer","a noble","a thief","a medic","a time traveler","an inventor","a mercenary"];
profession_themes[theme_ids.TOWN] = ["a police officer","a painter","a hunter","a herbalist","a woodcutter","a journalist","a writer",
                                        "a young boy","a young girl","a teenager","a baker"];
profession_themes[theme_ids.EGYPT] = ["a Pharao","a god","a slave","a fisherman","an artisan","a farmer","a writer","a priest",
                                        "a trader","a Vizier","a noble"];
profession_themes[theme_ids.ROME] = ["an emperor","a painter","a gladiator","a soldier","an artisan","a farmer","a writer","a priest",
                                        "a trader","a philosopher","a noble","an assassin","a musician"];                                      

//props
var props_themes_simple = [];
props_themes_simple[theme_ids.MEDIEVAL] = ["trees","food","a knife","a weapon","a tool","a map","a letter","a beverage",
                                            "a flame","a carriage","a fountain","coins"];
props_themes_simple[theme_ids.RENAISSANCE] = ["trees","food","a beverage","a tool","papers","a letter","a map","a fountain",
                                                "a table","a carriage","candles","a compass"];
props_themes_simple[theme_ids.NOIR] = ["a gun","a cigar","a beverage","food","a tool","papers","a letter","a knife","a map",
                                        "cards","a violin","a sax","a pocketwatch","jewelry","a lighter","a street clock",
                                        "a lamp post","a piano"];
props_themes_simple[theme_ids.CITY] = ["a beverage","food","papers","trash","a trashcan","a lamp post","trees",
                                        "a bench","a present"];
props_themes_simple[theme_ids.FEUDAL] = ["a beverage","food","trees","a tool","a letter","a garden","flying leaves",
                                            "stairs","a torii gate","a hokora","a lantern"];
props_themes_simple[theme_ids.OLDW] = ["a gun","a carriage","a tumbleweed","a sign","barrels","trees","food","a beverage",
                                        "a piano","bushes","a violin","a lantern","a bonfire","a rope"];
props_themes_simple[theme_ids.LOCEVRAFT] = ["a pocketwatch","dead trees","a cemetery","gates","a lantern","a weird monument",
                                            "chains","candles","fire","blood","books"];
props_themes_simple[theme_ids.HORROR] = ["chains","blades","blood","graves","dead trees","bones","rotten food",
                                            "a broken statue"];
props_themes_simple[theme_ids.FUTURISTIC] = ["a tool","a gun","food","a beverage","a lightsource","an electronic device",
                                                "a table"];
props_themes_simple[theme_ids.STEAMPUNK] = ["a wrench","a hammer","a machine","gears","a pocketwatch","a flag","a clock",
                                            "a lantern","fire","a ladder","a compass","a spyglass"];
props_themes_simple[theme_ids.TOWN] = ["a bench","a garden","trees","a fountain","a bridge","a fence","food","a streetlamp",
                                        "a monument"];
props_themes_simple[theme_ids.EGYPT] = ["an oasis","a monument","a river","a palmtree","food","dunes","a tent",
                                        "a bonfire","coins"];
props_themes_simple[theme_ids.ROME] = ["a fountain","a garden","food","trees","coins","wine","a vase","a bridge","a monument",
                                        "a lantern"];

var props_themes_complex = [];
props_themes_complex[theme_ids.MEDIEVAL] = ["a forest","food","a knife","a weapon","a tool","a map","a letter","a beverage",
                                            "a flame","a carriage","a fountain","a mountain or hill","a castle","a river","a lake","a bridge",
                                            "a cavern"];
props_themes_complex[theme_ids.RENAISSANCE] = ["a forest","food","a beverage","a tool","papers","a letter","a map","a fountain",
                                                "a table","a carriage","candles","a compass","a castle","a river","a lake","a bridge",
                                                "a church"];
props_themes_complex[theme_ids.NOIR] = ["a gun","a cigar","a beverage","food","a tool","papers","a letter","a knife","a map",
                                        "cards","a violin","a sax","a pocketwatch","jewelry","a lighter","a street clock",
                                        "a lamp post","a piano","a train","a plane","a car or truck","an storehouse","a bridge"];
props_themes_complex[theme_ids.CITY] = ["a beverage","food","papers","trash","a trashcan","a lamp post","trees",
                                        "a bench","a present","a car","a skyscrapper","a plane"];
props_themes_complex[theme_ids.FEUDAL] = ["a beverage","food","trees","a tool","a letter","a garden","flying leaves or petals",
                                            "stairs","a torii gate","a hokora","a lantern","a castle","a mountain","a river",
                                            "a lake"];
props_themes_complex[theme_ids.OLDW] = ["a gun","a carriage","a tumbleweed","a sign","barrels","trees","food","a beverage",
                                        "a piano","bushes","a violin","a lantern","a bonfire","a rope","a saloon","a bank",
                                        "a canyon","a train"];
props_themes_complex[theme_ids.LOCEVRAFT] = ["a pocketwatch","dead trees","cemetery","gates","a lantern","a weird monument",
                                                "chains","candles","fire","blood","a cosmic creature","a lighthouse","a library",
                                                "a church"];
props_themes_complex[theme_ids.HORROR] = ["chains","blades","blood","graves","dead trees","bones","rotten food",
                                            "a broken statue","a corpse","a house on a hill","a church","a trail","a lake",
                                            "a river"];
props_themes_complex[theme_ids.FUTURISTIC] = ["a gun","food","a beverage","a lightsource","an electronic device",
                                                "a table","a planet","a city","a vehicle"];
props_themes_complex[theme_ids.STEAMPUNK] = ["a wrench","a hammer","a flying ship","a train","a pocketwatch","a clock",
                                                "a lantern","fire","a ladder","a compass","a spyglass","a flying city",
                                                "a huge bridge","a building"];
props_themes_complex[theme_ids.TOWN] = ["a bench","a garden","a forest","a fountain","a bridge","a fence","food","a lighthouse",
                                        "a church","a river","a lake","a monuntain or hill","flying leaves or petals","a park"];
props_themes_complex[theme_ids.EGYPT] = ["an oasis","a monument","a river","a temple","a house","dunes","a sphinx",
                                        "a bonfire"];
props_themes_complex[theme_ids.ROME] = ["a fountain","a garden","food","trees","coins","wine","a vase","a bridge","a statue",
                                        "a lantern","the coliseum"];

//other variables
var time_pool = ["at dawn","in the morning","at noon","in the afternoon","at dusk","at night","at midnight"];

var extra_pool = ["Someone has a great secret","Someone is hiding","The scene should be draw from above the characters","One of the characters is sick",
                    "At least one of the characters is running","There's a fight or discussion happening","There's destruction or chaos","There's music playing",
                    "There's total silence","It's raining","There's talking","Someone is hurt","There's something in the distance"];

var color_pool = ["complementary colors","black and white","grayscale","monochromatic colors","analogous colors","pastel colors","tetradic colors","triadic colors","saturated colors"];

console.log(profession_themes);

//functions

function speciesdetermination(){
    choice_species = document.getElementById("nspecies").value;
    rand = Math.floor(Math.random() * (choice_species*2));

    switch(choice_species){
        case "1":
            charactern = "character is ";
            randspecies = species[Math.floor(Math.random() * species.length)];
            break;
        case "2":
            charactern = "characters are ";
            if (rand == 1){
                randspecies = "2 " + species_plural[Math.floor(Math.random() * species_plural.length)];
            } else {
                randspecies1 = Math.floor(Math.random() * species.length);
                species2 = species.filter(function(value){
                    return value != species[randspecies1]  
                });
                randspecies2 = Math.floor(Math.random() * species2.length);
                randspecies = species[randspecies1] + " and " + species2[randspecies2];
            }
            break;
        case "3":
            charactern = "characters are ";
            if (rand == 1){
                randspecies = "3 " + species_plural[Math.floor(Math.random() * species_plural.length)];
            } else if (rand == 2){
                randspecies1 = Math.floor(Math.random() * species_plural.length);
                species2 = species.filter(function(value){
                    return value != species[randspecies1]  
                });
                randspecies2 = Math.floor(Math.random() * species2.length);
                randspecies = "2 " + species_plural[randspecies1] + " and " + species2[randspecies2];
            }else{
                randspecies1 = Math.floor(Math.random() * species.length);
                species2 = species.filter(function(value){
                    return value != species[randspecies1]  
                });
                randspecies2 = Math.floor(Math.random() * species2.length);
                species3 = species2.filter(function(value){
                    return value != species2[randspecies2]  
                });
                randspecies3 = Math.floor(Math.random() * species3.length);
                randspecies = species[randspecies1] + ", " + species2[randspecies2] + ", and " + 
                                species3[randspecies3];
            }
    }
}

function themedetermination(){
    randtheme_n = Math.floor(Math.random() * theme_pool.length)
    randtheme = theme_pool[randtheme_n];
    
    // Profession pool determination
    prof_pool = profession_themes[randtheme_n];

    // Profession writing
    switch (choice_species){
        case "1":
            randprofession = prof_pool[Math.floor(Math.random() * prof_pool.length)];
            break;
        case "2":
            randprofession1 = Math.floor(Math.random() * prof_pool.length);
            prof_pool2 = prof_pool.filter(function(value){
                    return value != prof_pool[randprofession1]  
                });
            randprofession2 = Math.floor(Math.random() * prof_pool2.length);
            randprofession = prof_pool[randprofession1] + " and " + prof_pool2[randprofession2];
            break;
        case "3":
            randprofession1 = Math.floor(Math.random() * prof_pool.length);
            prof_pool2 = prof_pool.filter(function(value){
                    return value != prof_pool[randprofession1]  
                });
            randprofession2 = Math.floor(Math.random() * prof_pool2.length);
            prof_pool3 = prof_pool2.filter(function(value){
                    return value != prof_pool2[randprofession2]  
                });
            randprofession3 = Math.floor(Math.random() * prof_pool3.length);
            randprofession = prof_pool[randprofession1] + ", " + prof_pool2[randprofession2] + ", and " + 
                                prof_pool3[randprofession3];
    }
}
    
function propdetermination() {      
    choice_props = document.getElementById("nprops").value;
    props_pool = props_themes[randtheme_n];

    switch (choice_props){
        case "1":
            randprops = props_pool[Math.floor(Math.random() * props_pool.length)];
            break;
        case "2":
            randprops1 = Math.floor(Math.random() * props_pool.length);
            props_pool2 = props_pool.filter(function(value){
                    return value != props_pool[randprops1]  
                });
            randprops2 = Math.floor(Math.random() * props_pool2.length);
            randprops = props_pool[randprops1] + " and " + props_pool2[randprops2];
            break;
        case "3":
            randprops1 = Math.floor(Math.random() * props_pool.length);
            props_pool2 = props_pool.filter(function(value){
                    return value != props_pool[randprops1]  
                });
            randprops2 = Math.floor(Math.random() * props_pool2.length);
            props_pool3 = props_pool2.filter(function(value){
                    return value != props_pool2[randprops2]  
                });
            randprops3 = Math.floor(Math.random() * props_pool3.length);
            randprops = props_pool[randprops1] + ", " + props_pool2[randprops2] + ", and " + props_pool3[randprops3];
    }
}

function advanceddetermination(){
    randextra = extra_pool[Math.floor(Math.random() * extra_pool.length)];
    randcolor1 = Math.floor(Math.random() * color_pool.length)
    color_pool2 = color_pool.filter(function(value){
                    return value != color_pool[randcolor1]  
                });
    randcolor2 = Math.floor(Math.random() * color_pool2.length)
    randcolor = color_pool[randcolor1] + " or " + color_pool2[randcolor2] + "."; 
}
    
function simple() {
    speciesdetermination();
    themedetermination();
    props_themes = props_themes_simple;
    propdetermination();
    randtime = time_pool[Math.floor(Math.random() * time_pool.length)];
    document.getElementById("results").innerHTML="Draw " + randspecies +
                                                    ". The setting is " + randtheme +  
                                                    " and the " + charactern + randprofession + 
                                                    ". There should be " + randprops + 
                                                    " in the scene. The scene happens " + randtime + ".";
    downloadButton();
}
    
function complex() {
    speciesdetermination();
    themedetermination();
    props_themes = props_themes_complex;
    propdetermination();
    advanceddetermination();
    randtime = time_pool[Math.floor(Math.random() * time_pool.length)];
    document.getElementById("results").innerHTML = "Draw " + randspecies + 
                                                    ". The setting is " + randtheme +  
                                                    " and the " + charactern + randprofession + 
                                                    ". There should be " + randprops + 
                                                    " in the scene. The scene happens " + randtime + 
                                                    ". " + randextra + 
                                                    ". Try painting in " + randcolor;
    document.getElementById("resultins").style.display = "block";
    downloadButton();
}

function downloadButton(){
    document.getElementById("download_button").style.display = "block";
    var text= document.getElementById("results").innerHTML;
    var data= new Blob([text], {type: 'text/plain'});
    var url = window.URL.createObjectURL(data);
    document.getElementById('download_link').href = url;
}