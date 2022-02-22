async () => {
  if (application.worker.id === 'W1') {
    console.debug('Load enterprise...');
  }

  domain.enterprise = new npm.metaenterprise.Enterprise(
    { model: application.schemas.model }
  );
  //domain.masterData = new npm.metaenterprise.MasterDataMeneger();
  // const options = { ...config.database, console };
  // db.pg = new npm.metaenterprise.Database(options);
};
