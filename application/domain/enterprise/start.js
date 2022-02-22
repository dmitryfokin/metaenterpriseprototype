async () => {
  if (application.worker.id === 'W1') {
    console.debug('Load enterprise...');
  }

  npm.metaenterprise.Enterprise.load(
    { model: application.schemas.model, domain, npm, config, application }
  );
};
