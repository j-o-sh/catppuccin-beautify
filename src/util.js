import { fileURLToPath  } from 'url';
import path from 'path';
import fs from 'fs';

function findRootDirectory(dir) {
  if (fs.existsSync(path.join(dir, 'package.json'))) {
    return dir
  } else {
    return findRootDirectory(path.dirname(dir))
  }
}

export const packageRoot = findRootDirectory(fileURLToPath(import.meta.url))

