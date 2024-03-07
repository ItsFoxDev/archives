var o=document.createElement('div');
o.id='archiveoverlay';
o.innerHTML='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link><i class="fa-solid fa-triangle-exclamation"></i> You are viewing an archive.<p>Links <u>will most likely</u> be outdated.</p><a href="javascript:ro();">Continue</a>'
document.body.appendChild(o)
var s=document.createElement('style');
s.innerHTML='#archiveoverlay{inset:0px;opacity:1;transition:opacity .3s ease;display:flex;align-content:center;justify-content:center;flex-direction:column;flex-wrap:wrap;align-items:center;position:fixed;width:100vw;height:100vh;background:yellow;z-index:92345789099;color:black;font-weight:bold;font-size:20px;}#archiveoverlay i{font-weight:bold !important;font-size:30px;}#archiveoverlay *{color:black;font-weight:normal;font-size:15px;}'
document.body.appendChild(s)
function ro(){
  document.getElementById('archiveoverlay').style.opacity='0';
  setTimeout(function(){
    document.getElementById('archiveoverlay').remove();
  },300)
}