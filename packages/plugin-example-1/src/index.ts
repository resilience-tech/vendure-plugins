export default {
  name: 'plugin-example-1',
  version: '1.0.0',
  description: 'A sample Vendure plugin example.',
  hooks: {
    onInit: (vendureApp) => {
      // Custom initialization logic for the plugin
    },
  },
  // Additional plugin configurations can go here
};