function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ClVL4Vq1uX":
        Script1();
        break;
      case "6Te9Dpe4o7h":
        Script2();
        break;
      case "69ggjCZiI1b":
        Script3();
        break;
  }
}

function Script1()
{
  if (!window.movedCaptions) {
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:20px !important;}";
 document.body.appendChild(sheet);
 window.movedCaptions = true;
}
}

function Script2()
{
  var body = document.querySelector("body")
var style = document.createElement('style')
 style.type = 'text/css';
 style.appendChild(document.createTextNode(".caption p { background: rgb(0,0,0); color: white; text-decoration: none; text-shadow: none; font-weight: unbold; }"));
 body.appendChild(style);
}

function Script3()
{
  document.addEventListener('keypress', function (e) {
if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
return false;
            }
        });
}

