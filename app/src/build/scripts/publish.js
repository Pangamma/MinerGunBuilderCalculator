const fs = require('fs');
const AdmZip = require('adm-zip');
const { NodeSSH } = require('node-ssh');

// const downloadsDir = process.env.DOWNLOADS_DIR || `${process.env.USERPROFILE}\\Downloads`;
const ClientAppDir = process.env.INIT_CWD;
// const fontelloProjectDir = ClientAppDir + '\\src\\build\\scripts\\fontello';
const zipFilePath = `${ClientAppDir}\\publish.zip`;
const distFolderPath = `${ClientAppDir}\\build`;
const zip = new AdmZip();
zip.addLocalFolder(distFolderPath);
zip.writeZip(zipFilePath);


function publishConfigType(confJson) {
  this.ssh = {
    /** @type {string} */
    user: confJson.ssh.user,
    /** @type {string} */
    pass: confJson.ssh.pass,
  }
  /** @type {string} */
  this.chown = confJson.chown;

  /** @type {string} */
  this.originalDir = confJson.originalDir;

  /** @type {string} */
  this.deployDir = confJson.deployDir;
}

const conf = new publishConfigType(require('../../../../publish.json'));
const publish = async function () {
  const ssh = new NodeSSH();
  await ssh.connect({
    username: conf.ssh.user,
    password: conf.ssh.pass,
    host: 'wc.lumengaming.com',
    port: 22
  });

  try {
    console.debug('Connecting to SSH...');
  
    const shell = ssh;
  
    console.debug('Uploading new files and clearing out old failed deployments');
    await shell.exec('rm', ['-rf', conf.deployDir]);
    await shell.mkdir(conf.deployDir);
  
    await shell.putFile(zipFilePath, `${conf.deployDir}/publish.zip`);
    fs.rm(zipFilePath, function(f){});
  
    await shell.exec('unzip', [`${conf.deployDir}/publish.zip`, '-d', conf.deployDir]);
    await shell.exec('chown', ['-R', conf.chown, conf.deployDir]);
  
    await shell.exec('rm', [`${conf.deployDir}/publish.zip`]);
    await shell.exec('mv', [conf.originalDir, `${conf.originalDir}-old`]);
    await shell.exec('mv', [conf.deployDir, conf.originalDir]);
    await shell.exec('rm', ['-rf', `${conf.originalDir}-old`]);
  } catch (e){
    console.error(e);
  } finally {
    ssh.dispose();
  }
};

publish().then(function(v){
  console.log('Finished!');
});