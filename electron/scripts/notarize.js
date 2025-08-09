const { notarize } = require('@electron/notarize');
exports.default = async function(context){
  if (context.electronPlatformName !== 'darwin') return;
  const appName = context.packager.appInfo.productFilename;
  if(!process.env.APPLE_ID || !process.env.APPLE_ID_PASS || !process.env.APPLE_TEAM_ID){
    console.log('Skipping notarization (no Apple creds set)'); return;
  }
  return await notarize({
    appBundleId: 'com.mattcarpenter.cryptoquest',
    appPath: `${context.appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASS,
    teamId: process.env.APPLE_TEAM_ID
  });
};
