const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    backgroundColor: '#424221',
    width: 1024,
    height: 768,
    webPreferences: {
      webviewTag: true
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})