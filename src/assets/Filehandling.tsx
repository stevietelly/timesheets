const {ipcRenderer, electron, remote} = window.require("electron");


const fs = window.require("fs");


export async function FileCreator(folder: string, filename: string, fileContent:{}): Promise<{fullfilled: boolean, err: any | null}>{
    try {
        fs.writeFileSync(folder + "//" + filename + ".json", JSON.stringify(fileContent))
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

export function CreateNewTimesheet(foldername: string, filename: string): string {
  FileCreator(foldername, filename, {name: filename})
  return foldername + filename + ".json";
}
const handleOpenFileDialog = async () => {

  const selectedFilePath = await ipcRenderer.invoke('open-file-dialog');
  
  if (!selectedFilePath) {
    return;
  }
  return selectedFilePath;
};

const handleReadFile = (filepath: string) => {

  var obj = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  return obj

};

export async function OpenTimesheet(){
  const dialog = handleOpenFileDialog();
  const filepath = await dialog.then((fp: string)=>{return fp})
  return  filepath;

} 