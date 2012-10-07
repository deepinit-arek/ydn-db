// This file was autogenerated by calcdeps.py
goog.addDependency("../../../ydn-db/js/conn.js", [], ['ydn.db', 'ydn.db.con.Storage', 'goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/core.js", [], ['ydn.db.core.Storage', 'ydn.db.core.TxStorage']);
goog.addDependency("../../../ydn-db/js/dev.js", [], ['goog.debug.Console', 'goog.debug.Logger', 'goog.debug.LogManager', 'ydn.db.con.Storage']);
goog.addDependency("../../../ydn-db/js/main.js", [], ['ydn.db.Storage', 'ydn.db.TxStorage']);
goog.addDependency("../../../ydn-db/js/test.js", [], ['ydn.db.Storage', 'goog.debug.Console']);
goog.addDependency("../../../ydn-db/js/tr.js", [], ['ydn.db.tr.Storage', 'ydn.db.con.Storage']);
goog.addDependency("../../../ydn-db/js/ydn/db/i_storage.js", ['ydn.db.IStorage'], ['ydn.db.tr.IStorage', 'ydn.db.req.RequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/rich_storage.js", ['ydn.db.RichStorage_'], ['goog.storage.ExpiringStorage', 'goog.storage.EncryptedStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/storage.js", ['ydn.db.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.object', 'ydn.db.RichStorage_', 'ydn.db.core.Storage', 'ydn.db.TxStorage', 'ydn.db.IStorage', 'ydn.db.io.Query', 'ydn.db.io.Key', 'ydn.db.io.QueryService']);
goog.addDependency("../../../ydn-db/js/ydn/db/tx_storage.js", ['ydn.db.TxStorage'], ['ydn.error.NotSupportedException', 'ydn.db.core.TxStorage', 'ydn.db.io.QueryService', 'ydn.db.req.IndexedDb', 'ydn.db.req.SimpleStore', 'ydn.db.req.WebSql']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/base.js", ['ydn.db.base'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/db.js", ['ydn.db'], ['ydn.db.con.IndexedDb']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/error.js", ['ydn.db.InvalidKeyException', 'ydn.db.InvalidStateError', 'ydn.db.InternalError', 'ydn.db.ScopeError', 'ydn.db.SecurityError', 'ydn.db.NotFoundError'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key.js", ['ydn.db.Key'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key_range.js", ['ydn.db.IDBKeyRange', 'ydn.db.KeyRange'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/query.js", ['ydn.db.Query'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/schema.js", ['ydn.db.DataType', 'ydn.db.DatabaseSchema', 'ydn.db.IndexSchema', 'ydn.db.StoreSchema'], ['ydn.db.Key']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/html5_storage.js", ['ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage'], ['ydn.db.con.SimpleStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/i_database.js", ['ydn.db.con.IDatabase'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/i_storage.js", ['ydn.db.con.IStorage'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/indexed_db.js", ['ydn.db.con.IndexedDb'], ['goog.Timer', 'goog.async.DeferredList', 'goog.debug.Error', 'goog.events', 'ydn.async', 'ydn.db.base', 'ydn.db.DatabaseSchema', 'ydn.db.con.IDatabase', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/simple_storage.js", ['ydn.db.con.SimpleStorage'], ['goog.asserts', 'goog.async.Deferred', 'goog.Timer', 'ydn.db.Key', 'ydn.db.con.IDatabase']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/storage.js", ['ydn.db.con.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage', 'ydn.db.con.IndexedDb', 'ydn.db.con.SimpleStorage', 'ydn.db.con.WebSql', 'ydn.object', 'ydn.error.ArgumentException', 'ydn.db.con.IStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/conn/websql.js", ['ydn.db.con.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.json', 'ydn.db.SecurityError', 'ydn.db.base', 'ydn.db.con.IDatabase', 'goog.functions']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/i_storage.js", ['ydn.db.core.IStorage'], ['ydn.db.req.RequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/storage.js", ['ydn.db.core.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.object', 'ydn.db.tr.Storage', 'ydn.db.core.TxStorage', 'ydn.db.core.IStorage', 'ydn.db.io.Query', 'ydn.db.io.Key', 'ydn.db.io.CrudService']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/tx_storage.js", ['ydn.db.core.TxStorage'], ['ydn.error.NotSupportedException', 'ydn.db.tr.TxStorage', 'ydn.db.io.CrudService', 'ydn.db.req.IndexedDb', 'ydn.db.req.SimpleStore', 'ydn.db.req.WebSql']);
goog.addDependency("../../../ydn-db/js/ydn/db/io/crud_service.js", ['ydn.db.io.CrudService'], ['goog.async.Deferred', 'ydn.db.Query', 'ydn.db.Key']);
goog.addDependency("../../../ydn-db/js/ydn/db/io/key.js", ['ydn.db.io.Key'], ['ydn.db.Key']);
goog.addDependency("../../../ydn-db/js/ydn/db/io/query.js", ['ydn.db.io.Query'], ['ydn.db.Query', 'ydn.db.io.QueryService', 'ydn.db.Query']);
goog.addDependency("../../../ydn-db/js/ydn/db/io/query_service.js", ['ydn.db.io.QueryService'], ['goog.async.Deferred', 'ydn.db.Query', 'ydn.db.Key', 'ydn.db.io.CrudService']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/indexed_db.js", ['ydn.db.req.IndexedDb'], ['goog.async.DeferredList', 'ydn.db.req.RequestExecutor', 'ydn.json', 'ydn.error']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/request_executor.js", ['ydn.db.req.RequestExecutor'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.Query', 'ydn.db.Key', 'ydn.db.InternalError']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/simple_store.js", ['ydn.db.req.SimpleStore'], ['goog.asserts', 'goog.async.Deferred', 'goog.Timer', 'ydn.db.req.RequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/websql.js", ['ydn.db.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.db.req.RequestExecutor', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/i_storage.js", ['ydn.db.tr.IStorage'], ['ydn.db.tr.Mutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/mutex.js", ['ydn.db.tr.Mutex'], ['goog.array', 'goog.asserts', 'ydn.db.InvalidStateError']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/storage.js", ['ydn.db.tr.Storage'], ['ydn.db.con.Storage', 'ydn.db.tr.IStorage', 'ydn.db.tr.TxStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/tx_storage.js", ['ydn.db.tr.TxStorage'], ['ydn.db.con.IStorage', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/utils/test_utils.js", ['ydn.db.test'], ['ydn.db.io.QueryService']);
