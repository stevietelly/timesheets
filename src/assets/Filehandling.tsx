const {ipcRenderer, electron, remote} = window.require("electron");


const fs = window.require("fs");


export async function FileCreator(filename: string, fileContent:{}): Promise<{fullfilled: boolean, err: any | null}>{
    try {
        fs.writeFileSync(filename, JSON.stringify(fileContent))
        return {fullfilled: true, err: null}
    } catch (error) {
        return {fullfilled: false, err: error}
    }
    
}

export const showOpenDialog = async (setStatus: React.Dispatch<React.SetStateAction<string>>, setSelectedFolder: React.Dispatch<React.SetStateAction<string>>) => {
    const { canceled, filePaths } = await ipcRenderer.invoke('open-folder-dialog');
    if (canceled) {
      setStatus('canceled');
    } else {
      setSelectedFolder(filePaths[0]);  // Assuming single selection
    }
    return [canceled, filePaths]
  };


    