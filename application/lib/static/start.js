async () => {
  if (application.worker.id === 'W1') {
    console.debug('Load static ...');
  }

  application.schemas.application.static = new npm.metaenterprise.EStatic(
    { application: application.schemas.application }
  );
  const appStatic = application.schemas.application.static;
  await appStatic.loadPackage('metaformwebclient');
  await appStatic.loadPackage('swayer');
};
