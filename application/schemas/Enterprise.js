({
  Struct: {
    store: 'memory',
    scope: 'application',
    allow: 'read',
  },
  metadata: {
    type: 'enterprise',
    description: 'Prototype enterprise application on Metarhia',
  },
  fn: {
    type: 'enterpriseScript',
    module() {
      const beforeLoadApplication = async (failure = false) => {
        console.debug('Before load enterprise application');
      };
      const beforeLoadSession = async (failure = false) => {
        console.debug('Before load enterprise application');
      };
    },
  },
});
