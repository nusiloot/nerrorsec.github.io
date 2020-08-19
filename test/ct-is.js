
window.addEventListener("message", handler, true);
function handler(event) {
if(event.origin === ‘chat.nirajkhatiwada.com.np’) {
  document.write('No XSS here')
} else {
  alert('Hi! L0L')

  
  iframe1.contentWindow.postMessage("Hello world","http://
www.example.com");
