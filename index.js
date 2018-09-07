//const electron = require('electron');
const url = require('url');
const path = require('path');
var fs = require('fs');
//var sqlite3 = require('sqlite3').verbose();

const {app, BrowserWindow, ipcMain, Menu, MenuItem} = require('electron');

const menu = new Menu()
menu.append(new MenuItem({ label: 'Hello' }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'Electron', type: 'checkbox', checked: true }))

let mainWindow;

app.on('ready' , function(){
    win = new BrowserWindow({
        width: 1200, 
        height: 600,
        minWidth: 200,
        minHeight: 200,
        autoHideMenuBar: true,
        show: false,
        icon: __dirname + '/icon.iconset/logo.png'
    })
    win.on('closed', () => {
        win = null
    });

    splash = new BrowserWindow({
        width: 300, 
        height: 300,
        transparent: false, 
        frame: false, 
        alwaysOnTop: true,
        resizable: false
    });

    splash.loadURL(url.format({
        pathname: path.join(__dirname, 'pages/spinner.html'),
        protocol: 'file:',
        slashes: true
    }));
    setTimeout(function (){
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'pages/graph_1.html'),
            protocol: 'file:',
            slashes: true
        }));
        win.once('ready-to-show', () => {
            splash.destroy();
            win.show();
        });
    }, 1000);

    //win.loadURL(url.format({
    //    pathname: path.join(__dirname, 'pages/spinner.html'),
    //    protocol: 'file:',
    //    slashes: true
    //}));
	
	//win.loadURL(url.format({
    //    pathname: path.join(__dirname, 'pages/graph_1.html'),
    //    protocol: 'file:',
    //    slashes: true
    //}));

    var graphName = "";

    ipcMain.on('Name', (event, arg) => {
        graphName = arg;
    });

    ipcMain.on('importData', (event, arg) => {
        fs.readFile(graphName, 'utf-8', (err, data) => {
            event.sender.send('responseGraph', data);
        });
    });

    ipcMain.on('exportData', (event, arg) => {
        fs.writeFile(graphName, arg)
    });

    ipcMain.on('show-context-menu', (event, arg) => {
		const menu = new Menu();
		menu.append(new MenuItem ({
			label: 'Item ' + arg,
	}));
	 	menu.popup(menu)
  	});
});
  
