require("apprequire")(__dirname);

(async () => {
  const server = await appRequire("server");
  await server.startAsync();
  console.info(`Server started at port ${server.info.port}`);
})();
