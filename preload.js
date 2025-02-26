/**
 * arquivo de pré carregamento(+ desempenho) e reforco de segurança na
 * comunicação entre processo (IPC)
 */

// importação dos recursos do framework elctron
const { contextBridge, ipcRenderer } = require('electron')

// expor (autorizar a comunicação entre processo)

contextBridge.exposeInMainWorld('api', {
    clientWindow: () => ipcRenderer.send('client-window'),
    osWindow: () => ipcRenderer.send('os-window')
})