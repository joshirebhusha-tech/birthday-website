function openWebsite() {
    document.getElementById("home").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    window.scrollTo(0, 0);
}


const reasons = [

    "I love your smile.",
    "I love the way you make me feel so comfortable.",
    "I love your eyes.",
    "I love the way you broke down all my walls.",
    "You made me feel and know the meaning of love.",
    "I love the way you take care of me.",
    "You made my life so much better.",
    "You made me your first priority.",
    "You click photos of clouds and sunsets remembering about how I like them.",
    "You remember small details about me.",
    "You treat me like a child.",
    "I love the way you look at me.",
    "You loved me when I looked chopped.",
    "You loved me during points where I couldn't love myself.",
    "You love the parts of me I don't even love myself.",
    "No one's taken care of me the way you have.",
    "You always make my day extraordinary and better.",
    "I love the way you ragebait me.",
    "I love the way I just smile along while looking at you.",
    "You healed my innerchild.",
    "My innerchild comes out around you.",
    "I have no boundaries or extent when it comes to my secrets when I am with you.",
    "I feel shy whenever you keep looking at me and call me pretty.",
    "I love hearing you talking abt bleach anime related stuffs.",
    "You flex me like I am the best girl you have ever seen.",
    "You make me feel heard.",
    "I can just be myself around you.",
    "You dont raise your voice at me.",
    "You haven't swore at me.",
    "You made me look for a future.",
    "You are kind to me.",
    "You are forgiving to me.",
    "You are FUNNY.",
    "You are adorable.",
    "You are so cute.",
    "You look so pretty.",
    "You look so cute when you pout.",
    "You understand me.",
    "You understand my circumstances.",
    "You find a way to communicate to me when your parents take your devices.",
    "I love the way you just like to hear me yap.",
    "You haven't said shut up to me when I am such a yapper.",
    "You want me to be healthy.",
    "You want us to get old together.",
    "You want to marry me.",
    "I love the way you wanna spend most of your time with me.",
    "I love your body, your stomach and your forearms — I love it all.",
    "You gave me pearl earing right after I said how much I love pearls.",
    "You gave me jhumka maile magexi mero barey sochdai diyo.",
    "You gave me a new reason to start loving rain.",
    "Everytime I am overthinking you are there.",
    "Everytime I feel alone and lonely you are there.",
    "You are my safe place.",
    "You are my home.",
    "I love your hugs mero sab tension melt hunxa.",
    "I love your kisses it makes me feel ticklish on my stomach.",
    "I love the voice you use for me hami bolda.",
    "You are my baby.",
    "You have been there for me in worst times.",
    "You have always persuaded me to think positive.",
    "You are the sunshine of my life.",
    "You made my awful spaces shine brighter.",
    "You dont make me feel useless.",
    "You dont make me feel replaceable.",
    "You make my heartbeat faster.",
    "Your arms are so comfortable.",
    "You make me feel like I am a teenage girl who just fell in love.",
    "You let me bite you.",
    "Even though I have hurt you so many times you still haven't left me.",
    "You are a good boyfriend, bestfriend, husband, father, daddy and a good son.",
    "You said you will build a house around a beach for me.",
    "You said you will come with me to the sea.",
    "You asked me not to eat unhealthy food.",
    "You dont like to see me cry.",
    "You know how to make me smile when i am mad.",
    "You are my goofy idiot.",
    "You go around searching for all symptoms and everything the moment i get sick.",
    "You said you will work and save enough money to take me to a psychiatrist.",
    "You make me feel so seen.",
    "You make me think of forever and whats its like to spend it with one person in every lifetime.",
    "You stopped me from self harming.",
    "You said you love me more but I love you infinity*more.",
    "You always make time for us to hangout together.",
    "You always compliment me whenever we meet.",
    "You like my bare face.",
    "I love the color of your eyes especially in the golden hour.",
    "I love your dara.",
    "I love your nakh.",
    "I love your lips thayaki bicha ma gloss lagako jasto talkinxa.",
    "I love the way you are such a good brother to your sister.",
    "I trust you with my life.",
    "You are willing to do everything for me to be happy.",
    "You adore me.",
    "I love holding hand with you.",
    "You make my life soooo funnn.",
    "You made me meet with your mom and grand ma.",
    "You made me be on a call with you and your didi and introduced me.",
    "You kept telling me jatra bela sab lakhey haru barey i loved it.",
    "You keep trying ra work for a better future.",
    "You are a hardworker.",
    "And i specially love to distract when you dont give attention to me when you are doing assignments.",
    "You want to spend your free time with me.",
    "You fall asleep while listening to my voice.",
    "You are comfortable around me.",
    "I love your baby voice.",
    "I love your sutera utheko voice.",
    "I love your sutera utheko face.",
    "I LOVE YOUR JAWLINE.",
    "I love to see your face when you are sulky.",
    "I love the way you bite my cheeks.",
    "I love the way you kiss my cheeks.",
    "I love the way you kiss my hand.",
    "I love to tickle you (hehe><).",
    "I love your peet nira ko mole.",
    "I love the sound of your laughter.",
    "You are down to do everything for me.",
    "I love the affection you show me.",
    "I love the way you treat me noones ever treated me esto maya le.",
    "Whenever you are about to do kalesh I love the way your eyes talkiney.",
    "I love your giggles whenever i catch you abt to do kalesh ani uh aba yo garxa vanera predict hanexi ko giggle.",
    "I love our thumbfights.",
    "I love our armrestling.",
    "I love you playing with my hair.",
    "I love you braiding my hair.",
    "I miss hamro spot ma vetney timlai ani basi rakhney so badly rn rudai xu lekhda.",
    "I love your hand placements.",
    "I love the way you feed me.",
    "I love the princess treatment you give me.",
    "I love the way even though you are cameraphobic you are ready to take photos and videos with me.",
    "I love the way even though you are cameraphobic you wanna do trends with me.",
    "I love your tharakpan.",
    "I love your cheeks.",
    "I love you being flirty.",
    "I love the way you made edits for me.",
    "I love the way you wrote letter to me with the rose.",
    "I love the way you grew a rose for me afai ra gave it to me.",
    "I love the way your nose ra gala ra kan turns red when you blush.",
    "I love the way you tease me.",
    "I love the way you wanna know more and more about me.",
    "I love the way you can never be full ra tired of me.",
    "You dont force me.",
    "I love the sounds you make when I tease you.",
    "I love the way you flex me infront of your friends.",
    "I love the way you accept me.",
    "I love your kisses around my neck.",
    "I love the way sometimes you are so clueless when I am crying.",
    "I love the way even though timlai fakauna audaina tei ni malai fakauna khojxa.",
    "You are possessive of me.",
    "You are obsessed with me.",
    "You feel safe around me to open up.",
    "My arms feel safe to you.",
    "My hugs bring you comforts.",
    "My kiss touches you in places you have never been touched before (I am the next Shakespeare).",
    "I love the way whenever we are together we both become weirdos.",
    "I love the way whenever we are together we dont care about what others will say.",
    "You make me wanna live my life.",
    "I cant live without you.",
    "I wanna die with you or before you.",
    "I love the way timi ma kalesh garna thalda adkeko natak garxau.",
    "I love the way you copy my actions bacha haru le garne jasari.",
    "I love the way you try your best not to swear around me.",
    "I love the strong feelings I have for you.",
    "I love the way you are so loyal to me.",
    "You dont even talk to aru kt knowing i will get upset.",
    "You prioritize me over yourself.",
    "You can carry me princess paara ma.",
    "You pray for me.",
    "You stayed with me even though ambuj raeesh wala incident paxi i am sorry baby i love you.",
    "Gai jatra ko din.",
    "You were there for me staying with me when i wasn't getting my periods.",
    "You came clean to me about everything.",
    "Timle aru lai share na gareko sab lies barey malai vanyo.",
    "You have a great ()=0.",
    "You are my soulmate.",
    "You are my world and everything I have.",
    "Your reactions are cute when I tease you.",
    "When i sang songs for you your reaction was great.",
    "You stay with me na sutey sama call ma.",
    "You get scared when i might get moms scolding or beating.",
    "You talk to even when you are half asleep.",
    "You show efforts for me.",
    "You are scared of me.",
    "You obey me.",
    "You remember most of the things abt us.",
    "Your height is perfect.",
    "You hair is fluffy (ahile kapal na vayeh ni).",
    "My day beings with you and ends with you.",
    "You do your best to give me your time.",
    "You tell me to sleep when i am sleepy but wanting to talk to you.",
    "You are a sleepyhead who still wants to talk to me nindra audah ni.",
    "Your nippies are really pukah pareko.",
    "I know one thing for sure mero life ma malai kaile eklai hunah didainau.",
    "I want my kids to have your eyes.",
    "I pray for us daily.",
    "Whenever there is a fight I pray.",
    "You make my heart feel so calm the thought of you, your voice, your hugs, your kisses.",
    "I am the most loved and important person to you.",
    "I just love you. I love you a lot. Thank you for being born on this date, the same world as me, the same galaxy as me, the same timeline as me, the same lifetime as me.",
    "I hope god keeps us together in every life time.",
    "I love you my baby."

];

let currentReason = 0;


function nextReason() {
    currentReason++;

    if (currentReason >= reasons.length) {
        currentReason = 0;
    }

    document.getElementById("reason-number").textContent =
        "Reason " + (currentReason + 1) + " / " + reasons.length;

    document.getElementById("reason-text").textContent =
        reasons[currentReason];

    document.getElementById("reason-text").style.animation = "none";

    void document.getElementById("reason-text").offsetWidth;

    document.getElementById("reason-text").style.animation =
        "reasonAppear 0.6s ease";
} 
function previousReason() {
    currentReason--;

    if (currentReason < 0) {
        currentReason = reasons.length - 1;
    }

    document.getElementById("reason-number").textContent =
        "Reason " + (currentReason + 1) + " / " + reasons.length;

    document.getElementById("reason-text").textContent =
        reasons[currentReason];

    document.getElementById("reason-text").style.animation = "none";

    void document.getElementById("reason-text").offsetWidth;

    document.getElementById("reason-text").style.animation =
        "reasonAppear 0.6s ease";
}
// FINAL BIRTHDAY SURPRISE

function birthdaySurprise() {

    document.getElementById("surprise-message").style.display = "block";

}