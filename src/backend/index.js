const { ipcMain } = require('electron')

ipcMain.on('login', (event, arg) => {
    event.reply('login', arg)
})

ipcMain.on('recordEntry', (event, arg) => {
    console.log(arg);
    
    event.reply('recordEntry', arg)
})