file:///E:/tugasSequelize/models/kwitansiModel.js:8
Order.belongsToMany(Cart, { through: Kwitansi, foreignKey: "OrderId" });
^

ReferenceError: Cannot access 'Order' before initialization
    at file:///E:/tugasSequelize/models/kwitansiModel.js:8:1
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:120:12)

Node.js v21.5.0
[nodemon] app crashed - waiting for file changes before starting...