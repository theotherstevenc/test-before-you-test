chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

const originalmarkup = document.querySelector("html[lang]").innerHTML;

// ##### OPEN CHECKED #######
if (message === `interactive`) {
  document.getElementById('interactive').checked = false;
}
// ##### CLOSE CHECKED #######

// ##### OPEN GMAIL #######
if (message === `gmail`) {
  let finders = [
    {
      "find": /u\+ /gi,
      "replace":""
    },
    {
      "find": /u \+ /gi,
      "replace":""
    }
  ];
  let markup = originalmarkup;
  for(let finder of finders){
    markup = markup.replace(finder.find, finder.replace);
  }
  document.querySelector("html[lang]").innerHTML = markup;
  document.querySelector("style[advanced]").remove();
  let values = document.getElementsByTagName('input');
    for (let i = 0; i < values.length; i++) {
      values[i].checked = false;
    }

  }
// ##### CLOSE GMAIL #######

// ##### OPEN YAHOO #######
if (message === `yahoo`) {
  let finders = [
    {
      "find": /@media screen yahoo /gi,
      "replace":"@media screen"
    }
  ];
  let markup = originalmarkup;
  for(let finder of finders){
    markup = markup.replace(finder.find, finder.replace);
  }
  document.querySelector("html[lang]").innerHTML = markup;
  document.querySelector("style[advanced]").remove();

  var yahooBoxSize = document.createElement('style');
  yahooBoxSize.innerHTML = `* { box-sizing: content-box !important; }`;
  document.head.appendChild(yahooBoxSize);


  }
// ##### CLOSE YAHOO #######

// ##### OPEN MSO #######
if (message === `mso`) {
  let finders = [
    {
      "find": /\<\!\-\-\[if true\]\>/gi,
      "replace":""
    },
    {
      "find": /\<\!\-\-\[mso 15\]\>/gi,
      "replace":""
    },
    {
      "find": /\<\!\[endif\]\-\-\>/gi,
      "replace":""
    }
  ];

  let markup = originalmarkup;
  for(let finder of finders){
    markup = markup.replace(finder.find, finder.replace);
  }
  document.querySelector("html[lang]").innerHTML = markup;
  document.querySelector("style[advanced]").remove();
  let values = document.getElementsByTagName('input');
    for (let i = 0; i < values.length; i++) {
      values[i].checked = false;
    }

  }
// ##### CLOSE MSO #######

// ##### OPEN BLUR #######
if (message.cond === `blur`) {
  let markup = originalmarkup;
  document.querySelector("html[lang]").innerHTML = markup;

  var pageBlur = document.createElement('style');
  pageBlur.innerHTML = `body { filter: blur(${message.value}px) }`;
  document.head.appendChild(pageBlur);


  }
// ##### CLOSE BLUR #######

}
