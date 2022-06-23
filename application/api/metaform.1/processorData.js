({
  access: 'public',
  method: async ({ action }) => {
    if (!context.formManagerServer)
      await application.enterprise.appAdapter.getFormManagerServer(context);

    const data = await context.formManagerServer.processorData({ action });
    return data;
  },
});
