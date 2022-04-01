async () => {
  if (application.worker.id === 'W1') {
    console.debug('Load static ...');
  }

  const appStatic = application.schemas.application.static;

  const timeout = this.config.server.timeouts.watch;
  appStatic.watcher = new npm.metawatch.DirectoryWatcher({ timeout });
  
  appStatic.watcher.on('change', (filePath) => {
    node.fs.stat(filePath, (err, stat) => {
      if (err) return;
      if (stat.isDirectory()) {
        appStatic.load(filePath);
        return;
      }
      if (application.worker.id === 'W1') {
        appStatic.application.console.debug('Reload: ' + filePath);
      }
      appStatic.change(filePath);
    });
  });

  appStatic.watcher.on('delete', async (filePath) => {
    appStatic.delete(filePath);
    if (application.worker.id === 'W1') {
      appStatic.application.console.debug('Deleted: ' + filePath);
    }
  });

  appStatic.load = async (targetPath = this.path) => {
    const self = application.schemas.application.static;
    self.watcher.watch(targetPath);
    try {
      const files = await node.fsp.readdir(targetPath, { withFileTypes: true });
      for (const file of files) {
        if (file.name.startsWith('.')) continue;
        const filePath = node.path.join(targetPath, file.name);
        if (file.isDirectory()) await self.load(filePath);
        else await self.change(filePath);
      }
    } catch (err) {
      self.application.console.error(err.stack);
    }
  }

  appStatic.change = async (filePath) => {
    const win = process.platform === 'win32';
    const self = application.schemas.application.static;

    const staticKey = filePath.substring(self.application.root.length + 1)
      .split(node.path.sep)[1];
    const options = config.static[staticKey];
    if (!options) return;

    const pathAbsolute = node.path.join(self.application.root, options.path);
    let key = options.mountPath + '/' + filePath.substring(pathAbsolute.length + 1);
    if (win) key = metarhia.metautil.replace(key, path.sep, '/');
    try {
      const data = await node.fsp.readFile(filePath);
      self.files.set(key, data);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        self.application.console.error(err.stack);
      }
    }
  }

  appStatic.loadPackage = async (packageName) => {
    if (!config.static) return;
    if (!config.static[packageName]) return;
    const self = application.schemas.application.static;

    const pathAbsolute = node.path.join(
      self.application.root,
      config.static[packageName].path
    );
    await self.load(pathAbsolute);
  }

  await appStatic.loadPackage('metaformwebclient');
  await appStatic.loadPackage('swayer');
};
