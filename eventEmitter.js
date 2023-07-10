const eventEmitter = require('events');

console.log(eventEmitter);
/* <ref *1> [Function: EventEmitter] {
  once: [AsyncFunction: once],
  on: [Function: on],
  getEventListeners: [Function: getEventListeners],
  EventEmitter: [Circular *1],
  usingDomains: false,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  EventEmitterAsyncResource: [Getter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  setMaxListeners: [Function (anonymous)],
  init: [Function (anonymous)],
  listenerCount: [Function (anonymous)]
} */
//asociar evento con una funcion  (on)

