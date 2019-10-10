var params = {
  active: true,
  currentWindow: true
}


document.querySelector("#blur").value = `0`;
document.getElementsByClassName('seeBlurValue')[0].innerHTML = `${document.getElementById("blur").value}px`;

document.getElementById('interactive').addEventListener("click", function() {
  paintPreview(`interactive`);
});

document.getElementById('gmail').addEventListener("click", function() {
  paintPreview(`gmail`);
});

document.getElementById('yahoo').addEventListener("click", function() {
  paintPreview(`yahoo`);
});

document.getElementById('mso').addEventListener("click", function() {
  paintPreview(`mso`);
});

let blurButton = document.getElementById('blur');
blurButton.addEventListener("change", function() {
  let preview = {
    cond:`blur`,
    value:blurButton.value
  };
  document.getElementsByClassName('seeBlurValue')[0].innerHTML = `${blurButton.value}px`;
  paintPreview(preview);
});

function paintPreview(preview) {
  chrome.tabs.query(params, gotTab);
    function gotTab(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, preview)
    }
}
