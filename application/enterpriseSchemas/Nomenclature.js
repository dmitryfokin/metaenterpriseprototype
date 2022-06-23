({
  metadata: {
    type: 'enterpriseMasterData',
    name: 'Nomenclature',
    description: {
      en: 'tangible assets, services, fixed assets, products, semi-finished products',
      ru: 'материальные активы, услуги, основные средства, продукция, полуфабрикаты',
    },
    codeDefinition: { type: 'string', length: 9 },
    descriptionDefinition: { length: 50 },
    representationDefinition: {},
    fields: {
      isNew: {
        type: 'boolean',
        name: 'isNew',
        description: {
          en: 'Is new',
          ru: 'Новая позиция',
        },
      },
    },
    tables: {
    },
    hooks: {
      beforeSave: async (failure = false) => {
        console.debug('Before save Nomenclature');
      },
      afterSave: async (failure = false) => {
        console.debug('After save Nomenclature');
      },
    },
  },
});
