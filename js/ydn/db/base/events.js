/**
 * @fileoverview Event dispatch from Storage.
 *
 * User: kyawtun
 * Date: 20/10/12
 */


goog.provide('ydn.db.events.StoreEvent');
goog.provide('ydn.db.events.StorageEvent');
goog.provide('ydn.db.events.Types');


/**
 * Event types.
 *
 * Note: these event type string are exported.
 * @enum {string}
 */
ydn.db.events.Types = {
  CONNECTED: 'connected',
  CREATED: 'created',
  DELETED: 'deleted',
  FAIL: 'failed',
  UPDATED: 'updated'
};


/**
 *
 * @param {ydn.db.events.Types} event_type event type.
 * @param {goog.events.EventTarget} event_target target.
 * @extends {goog.events.Event}
 * @constructor
 */
ydn.db.events.Event = function(event_type, event_target) {
  goog.base(this, event_type, event_target);

};
goog.inherits(ydn.db.events.Event, goog.events.Event);


/**
 *
 * @type {*} event source.
 */
ydn.db.events.Event.prototype.source = null;


/**
 *
 * @param {ydn.db.events.Types} event_type type.
 * @param {goog.events.EventTarget} event_target event target.
 * @param {number} version source.
 * @param {string=} msg optional message.
 * @extends {ydn.db.events.Event}
 * @constructor
 */
ydn.db.events.StorageEvent = function(event_type, event_target, version, msg) {
  goog.base(this, event_type, event_target);
  this.version = version;
  this.message = msg || '';
};
goog.inherits(ydn.db.events.StorageEvent, ydn.db.events.Event);

/**
 *
 * @type {number}
 */
ydn.db.events.StorageEvent.prototype.version = NaN;

/**
 *
 * @type {string}
 */
ydn.db.events.StorageEvent.prototype.message = '';


/**
 *
 * @param {ydn.db.events.Types} event_type  type.
 * @param {goog.events.EventTarget} event_target target.
 * @param {string} store_name source.
 * @param {*} key source.
 * @param {*} value source.
 * @extends {ydn.db.events.Event}
 * @constructor
 */
ydn.db.events.StoreEvent = function(event_type, event_target, store_name, key, value) {
  goog.base(this, event_type, event_target);
  this.store_name = store_name;
  this.key = key;
  this.value = value;
};
goog.inherits(ydn.db.events.StoreEvent, ydn.db.events.Event);

/**
 *
 * @type {string}
 */
ydn.db.events.StorageEvent.prototype.store_name = '';

/**
 *
 * @type {*}
 */
ydn.db.events.StorageEvent.prototype.key = '';

/**
 *
 * @type {*}
 */
ydn.db.events.StorageEvent.prototype.value = '';


