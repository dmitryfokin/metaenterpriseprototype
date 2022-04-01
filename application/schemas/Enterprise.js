({
  Struct: {
    store: 'memory',
    scope: 'application',
    allow: 'read',
  },
  metadata: {
    type: 'enterprise',
    description: {
      en: 'Prototype enterprise application on Metarhia',
      ru: 'Прототип приложения предприятия на технологическом стеке Metarhia',
    },
  },
  fn: {
    type: 'enterpriseScript',
    module() {
      const beforeLoadApplication = async (failure = false) => {
        console.debug('Before load enterprise application');
      };
      const beforeLoadSession = async (failure = false) => {
        console.debug('Before load user session');
      };
    },
  },
});
