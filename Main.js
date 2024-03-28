const { app, BrowserWindow, ipcMain, dialog } = require('electron');
require('@electron/remote/main').initialize()
let WIN; 
function createWindow() {
  WIN = new BrowserWindow({
    frame: true,
    fullscreen: false,
    show: false,
    webPreferences: {enableRemoteModule: true, nodeIntegration: true, contextIsolation: false}
  })
  WIN.maximize()
  WIN.loadURL('http://localhost:3000')
}
ipcMain.handle('open-folder-dialog', async () => {
  const options = {
    properties: ['openDirectory'],  // Request folder selection
  };
  return await dialog.showOpenDialog(WIN, options);
});

ipcMain.handle('open-file-dialog', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog(WIN, {
    properties: ['openFile'],  // Request opening a single file
  });
  if (canceled) {
    return null;  // No file selected
  } else {
    return filePaths[0];
  }
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
