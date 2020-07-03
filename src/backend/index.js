const { ipcMain } = require('electron')

ipcMain.on('create', (event, arg) => {
    console.log(arg);
})