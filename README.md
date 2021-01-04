# ID_S10208584_Brian_Assn2_Website
Introduction
Project Name:
Servant Catalouge

---------------------------------------------------------------
GitHub link: https://brianlimmj.github.io/IDS10208584_Brian_Assn2_Website/
Wireframe link: https://xd.adobe.com/view/a1cf2baf-8c37-43e0-9703-59920d2c5b45-f49c/


To begin, this website was made for new and existing players of the poular mobile rpg game known as Fate /Grand Order. This will help provide character information for players who want a quick search of characters when playing the game. It also displays the character's image when they have leveled them to max level.

The website allows players to be fascinated by not only the background image but also the auto complete feature for when players decide to input names. Another feature that is implemented is the option to either continue adding on characters upon search or they can choose to remove the search results.

The website is built such that it accomodates to various devices such as desktop view and mobile view. 

However, since the game Fate/Grand Order is a very well known game, it splits into various servers across the globe and this website was built for the North America server also known as the Fate/Grand Order English server. Any search on servants will only accommodate to the english server and that the loading time of pictures will be a while due to how large the image is.

The website was inspired by https://rayshift.io/ and https://fategrandorder.fandom.com/wiki/Fate/Grand_Order_Wikia. But the main credit of website goes to https://fate-go.us/ and https://www.fate-go.jp/.


Design Process
--------------------------------------------------------------------------------------------------------------------------------


Features
-------------------------------------------------------------------------------------------------------------------------------- 
Bootstrap nav bar: Used in all html and styled in css 
Source: https://getbootstrap.com/docs/4.0/components/navbar/

Bootstrap cards: Used in about.html and styled in about-style.css
Source: https://getbootstrap.com/docs/4.0/components/card/

Flipcard: Used in search.html and styled in search-style.css
Source: https://www.w3schools.com/howto/howto_css_flip_card.asp

Javascript

Jquery Blur and focus: Used in line 25-30 for servant.js
Source: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_focus_blur

Autocomplete: Used in servant.js
Source: https://www.w3schools.com/howto/howto_js_autocomplete.asp

HTML DOM addEventListener() Method: Used in servant.js
Source: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

Media query: Used in all html to style and accomodate for mobile devices
Source: https://www.w3schools.com/css/css_rwd_mediaqueries.asp

Sources/References  
-------------------------------------------------------------------------------------------------------------------------------- 
Api Source:
----------------------------------------------------------------
https://github.com/atlasacademy/fgo-game-data-api

Font souce:
---------------------------------------------------------------
https://fonts.google.com/?selection.family=Quicksand:wght@500

Image(s) sources:
----------------------------------------------------------------
The following images are credited accordingly:
fgo.png used in about.html/index.html/search.html as the logo brand in line 14 source: https://gachax.com/wp-content/uploads/2020/01/fate-grand-order.png found on: https://gachax.com/game_db/fate-grand-order/

lb.png used in about-style.css/index-style.css/search-style.css as the background image in line 3 source: https://steamuserimages-a.akamaihd.net/ugc/958604734782466382/83BE9E749E25D2D1C1AB0106E31A406A9CBDBCD3/ found on: https://steamcommunity.com/sharedfiles/filedetails/?id=1619553450 

sAscenion also known as ServantList[i]['extraAssets']['charaGraph']['ascension'][4] found in servant.js line 53 and 70 acts as the image in which displays all the characters. source: https://api.atlasacademy.io/export/NA/nice_servant.json