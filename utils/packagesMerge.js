const fs = require('fs')

const localPackageJson = require('../../package.json')
const sharedPackageJson = require('../package.json')

Object.assign(localPackageJson.dependencies, sharedPackageJson.dependencies)

fs.writeFileSync('../../package.json', JSON.stringify(localPackageJson, null, 2))