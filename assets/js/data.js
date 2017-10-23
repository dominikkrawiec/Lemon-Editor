
window.onload = function(){
  var data = {};
  var dft = {
    title: "I'm the Doctor. Well, they call me the Doctor. I don't know why. I call me the Doctor too. I still don't know why.",
    lead: "Heh-haa! Super squeaky bum time! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself. No… It's a thing; it's like a plan, but with more greatness.",
    content: "The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant. The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant. Aw, you're all Mr. Grumpy Face today. You know how I sometimes have really brilliant ideas? You've swallowed a planet! No… It's a thing; it's like a plan, but with more greatness. <br/> <br />Annihilate? No. No violence. I won't stand for it. Not now, not ever, do you understand me?! I'm the Doctor, the Oncoming Storm - and you basically meant beat them in a football match, didn't you? I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship."
  }

   data.title = localStorage.getItem('title');
   data.lead = localStorage.getItem('lead');
   data.content = localStorage.getItem('content');

// if localStorage return null, set default values
   for(var item in data){
     if(data[item] == null || data[item] == ''){
       data[item] = dft[item];
     }
   }


   var content = document.querySelector('.content '),
       title = document.querySelector('header'),
       lead = document.querySelector('.lead');

       content.innerHTML = data.content;
       title.innerHTML = data.title;
       lead.innerHTML = data.lead;

}
