import { readdir, lstatSync } from "fs";
const appReaddir = (path: string, options = {}, callback: (err: NodeJS.ErrnoException, data: Array<string>) => {} = null): Promise<Array<string> | NodeJS.ErrnoException> => {
  return new Promise((resolve, reject) => {
    readdir(path, { encoding: 'utf-8', ...options }, (err, data) => {
      if (callback) {
        callback(err, data);
      }
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}
const getFilePathByExt = async (path: string, ext: string) => {
  try {
    const result = await appReaddir(path);
    
  } catch (error) {
    
  }  
}