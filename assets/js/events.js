
var content = document.querySelector('.content'),
    title = document.querySelector('header'),
    lead = document.querySelector('.lead'),
    shareBtn = document.querySelector('#share');

// save content to localStorage when element is changed
content.onkeyup= function(){
    // saving current caret position
    var caret = getCaretCharacterOffsetWithin(content);
    localStorage.setItem('cursor', caret);
    localStorage.setItem('content', content.innerHTML);
    localStorage.setItem('currentElement', 'content');
    };

title.onkeyup= function(){
    var caret = getCaretCharacterOffsetWithin(title);
    localStorage.setItem('cursor', caret);
    localStorage.setItem('title', title.innerHTML);
    localStorage.setItem('currentElement', 'title');
    };

lead.onkeyup= function(){
    var caret = getCaretCharacterOffsetWithin(lead);
    localStorage.setItem('cursor', caret);
    localStorage.setItem('lead', lead.innerHTML);
    localStorage.setItem('currentElement', 'lead');

    };



shareBtn.addEventListener('click', function(){
  var data = {
    title: title.innerHTML,
    lead: lead.innerHTML,
    content: content.innerHTML
  };
  var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        throw new Error("Ajax is not supported by this browser");
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status == 200 && xhr.status < 300) {
                console.log(data);
            }
        }
    }

    xhr.open('POST', '/save');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("title=" + data.title +"&lead=" + data.lead + "&content=" + data.content);
});
