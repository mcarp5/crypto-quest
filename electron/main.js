const {app,BrowserWindow,Menu} = require('electron');
const path = require('path');
let mainWin, splash;
function createWindow(){
  const iconPath = path.join(__dirname, 'assets', 'icon-512.png');
  splash = new BrowserWindow({width:520,height:340,frame:false,transparent:false,alwaysOnTop:true,icon:iconPath});
  splash.loadFile(path.join(__dirname,'splash.html'));
  mainWin = new BrowserWindow({
    width: 1200, height: 800, show:false, icon:iconPath,
    webPreferences:{ preload: path.join(__dirname,'preload.js') }
  });
  mainWin.loadFile(path.join(__dirname,'app','index.html'));
  mainWin.on('ready-to-show', ()=>{ setTimeout(()=>{ try{splash.destroy()}catch{}; mainWin.show(); }, 1200); });
  Menu.setApplicationMenu(null);
}
app.whenReady().then(()=>{ createWindow(); app.on('activate', ()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow(); }) });
app.on('window-all-closed', ()=>{ if(process.platform!=='darwin') app.quit(); });
