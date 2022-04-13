async () => {
  if (application.worker.id === 'W1') {
    console.debug('Load enterprise...');
  }

  npm.metaenterprise.Enterprise.load(
    { application: application.schemas.application }
  );
};
