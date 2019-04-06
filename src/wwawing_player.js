const {app, BrowserWindow} = require('electron');
let window;

function createWindow() {
  window = new BrowserWindow({ width: 800, height: 600 });
  window.loadURL(`file://${__dirname}/index.html`);
  window.on('closed', destroyWindow);
}

function destroyWindow() {
  window = null;
}

function quitApplication() {
  if (process.platform !== "darwin") {
    app.quit();
  }
}

app.on('ready', createWindow);
app.on('window-all-closed', quitApplication);
app.on('active', function() {
  if (win === null) {
    createWindow();
  }
});
