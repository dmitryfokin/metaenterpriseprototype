async () => {
  if (application.worker.id === 'W1') {
    console.debug('Connect to enterprise pg');
  }
  const options = { ...config.database, console };
  //db.pg = new npm.metaenterprise.Database(options);
  db.pg = new metarhia.metasql.Database(options);
};
