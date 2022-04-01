({
  Struct: {
    store: 'memory',
    scope: 'application',
    allow: 'read',
  },
  metadata: {
    type: 'enterpriseMasterData',
    name: 'Nomenclature',
    description: {
      en: 'tangible assets, services, fixed assets, products, semi-finished products',
      ru: 'материальные активы, услуги, основные средства, продукция, полуфабрикаты',
    },
    codeDefinition: { type: 'string', length: 9 },
    descriptionDefinition:  { length: 50 },
    representationDefinition: {},
    props: {
      isNew: {
        type: 'boolean',
        name: 'isNew',
      }
    },

  },
  fn: {
    type: 'enterpriseScript',
    module() {
      const beforeSave = async (failure = false) => {
        console.debug('Before save ');
      };
      const afterSave = async (failure = false) => {
        console.debug('Before load enterprise application');
      };
    },
  },
});
