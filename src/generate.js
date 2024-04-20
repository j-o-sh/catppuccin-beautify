import { css } from './colors-css.js'
import { packageRoot } from './util.js'
import fs from 'fs'
import path from 'path'

fs.writeFileSync(path.join(packageRoot, 'colors.css'), css)

