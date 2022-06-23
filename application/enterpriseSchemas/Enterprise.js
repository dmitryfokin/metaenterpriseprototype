({
  metadata: {
    type: 'enterprise',
    description: {
      en: 'Prototype enterprise application on Metarhia',
      ru: 'Прототип приложения предприятия на технологическом стеке Metarhia',
    },
    hooks: {
      beforeLoadApplication: async (failure = false) => {
        console.debug('Before load enterprise application');
      },
      beforeLoadSession: async (failure = false) => {
        console.debug('Before load user session');
      },
    },
  },
});
