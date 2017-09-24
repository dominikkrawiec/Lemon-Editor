
window.onload = function(){
  var data = {};
  var dft = {
    title: 'Your title here...',
    lead: 'Lead to main content',
    content: 'You can write whatever you want'
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
