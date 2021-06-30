const fs = require('fs-extra');

async function copyFiles() {
  try {
    await fs.copy('../vue3-starter/*', '../../vue3-starter', {
      overwrite: true,
      errorOnExist: true,
    });
    console.log(
      '\x1b[32m',
      '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉'
    );
    return true;
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log(
        '\x1b[36m',
        'oops something went wrong'
      );
      return false;
    }
    throw error;
  }
}

copyFiles();

// Adding commands to script key in package.json at root level of project
const saveFile = require('fs').writeFileSync;
const pkgJsonPath =
  require.main.paths[0].split('node_modules')[0] + 'package.json';
const json = require(pkgJsonPath);

if (!json.hasOwnProperty('scripts')) {
  json.scripts = {};
}

json.scripts['postinstall'] = '';
saveFile(pkgJsonPath, JSON.stringify(json, null, 2));
