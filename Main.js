const { app, BrowserWindow, ipcMain, dialog } = require('electron');
require('@electron/remote/main').initialize()
let WIN; 
function createWindow() {
  WIN = new BrowserWindow({
    frame: true,
    fullscreen: true,
    webPreferences: {enableRemoteModule: true, nodeIntegration: true, contextIsolation: false}
  })
  WIN.loadURL('http://localhost:3000')
}
ipcMain.handle('open-folder-dialog', async () => {
  const options = {
    properties: ['openDirectory'],  // Request folder selection
  };
  return await dialog.showOpenDialog(WIN, options);
});
app.on('ready', createWindow);
app.on('window-all-closed', ()=>{
  if (process.platform !== "darwin") {
    app.quit()
  }
})
app.on("activate", ()=>{
  if(BrowserWindow.getAllWindows().length === 0) createWindow()
})
