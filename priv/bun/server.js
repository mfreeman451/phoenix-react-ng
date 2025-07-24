// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {
    }
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    function isValidElementType(type) {
      return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) ? true : false;
    }
    function disabledLog() {
    }
    function disableLogs() {
      if (disabledDepth === 0) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (disabledDepth === 0) {
        var props = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
      if (prefix === undefined)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry)
        return "";
      var frame = componentFrameCache.get(fn);
      if (frame !== undefined)
        return frame;
      reentry = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string")
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
          for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
            namePropDescriptor++;
          for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
            _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
            for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
              _RunInRootFrame$Deter--;
          for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
            if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
                do
                  if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                    fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                    typeof fn === "function" && componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
      typeof fn === "function" && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (type == null)
        return "";
      if (typeof type === "function") {
        var prototype = type.prototype;
        return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
      }
      if (typeof type === "string")
        return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if (typeof type === "object")
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return type = describeNativeComponentFrame(type.render, false), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {
            }
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props);
      newKey._store.validated = oldElement._store.validated;
      return newKey;
    }
    function validateChildKeys(node, parentType) {
      if (typeof node === "object" && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
        if (isArrayImpl(node))
          for (var i = 0;i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (i = getIteratorFn(node), typeof i === "function" && i !== node.entries && (i = i.call(node), i !== node))
          for (;!(node = i.next()).done; )
            isValidElement(node.value) && validateExplicitKey(node.value, parentType);
      }
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && element.key == null && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = true;
        var childOwner = "";
        element && element._owner != null && element._owner !== getOwner() && (childOwner = null, typeof element._owner.tag === "number" ? childOwner = getComponentNameFromType(element._owner.type) : typeof element._owner.name === "string" && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function() {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "", owner = getOwner();
      owner && (owner = getComponentNameFromType(owner.type)) && (info = `

Check the render method of \`` + owner + "`.");
      info || (parentType = getComponentNameFromType(parentType)) && (info = `

Check the top-level render call using <` + parentType + ">.");
      return info;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop() {
    }
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null
    }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = true;
    var prefix, suffix, reentry = false;
    var componentFrameCache = new (typeof WeakMap === "function" ? WeakMap : Map);
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$2) {
                  ReactSharedInternals.thrownErrors.push(error$2);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props);
      for (key = 2;key < arguments.length; key++)
        validateChildKeys(arguments[key], props.type);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      if (isValidElementType(type))
        for (var i = 2;i < arguments.length; i++)
          validateChildKeys(arguments[i], type);
      else {
        i = "";
        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
          i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        if (type === null)
          var typeString = "null";
        else
          isArrayImpl(type) ? typeString = "array" : type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
        console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, i);
      }
      var propName;
      i = {};
      typeString = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      typeString && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, typeString, undefined, undefined, getOwner(), i);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      isValidElementType(type) || console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      return resolveDispatcher().useEffect(create, deps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.0.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development(), 1);
  if (false) {
  } else {
    module.exports = react_development;
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS((exports) => {
  var React = __toESM(require_react(), 1);
  (function() {
    function noop() {
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
      try {
        testStringCoercion(key);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      JSCompiler_inline_result && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol === "function" && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"), testStringCoercion(key));
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: key == null ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    function getCrossOriginStringAs(as, input) {
      if (as === "font")
        return "";
      if (typeof input === "string")
        return input === "use-credentials" ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : typeof thing === "string" ? JSON.stringify(thing) : typeof thing === "number" ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Internals = {
      d: {
        f: noop,
        r: function() {
          throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
        },
        D: noop,
        C: noop,
        L: noop,
        m: noop,
        X: noop,
        S: noop,
        M: noop
      },
      p: 0,
      findDOMNode: null
    }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map === "function" && Map.prototype != null && typeof Map.prototype.forEach === "function" && typeof Set === "function" && Set.prototype != null && typeof Set.prototype.clear === "function" && typeof Set.prototype.forEach === "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
      var key = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
      if (!container || container.nodeType !== 1 && container.nodeType !== 9 && container.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn)
          return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
      }
    };
    exports.preconnect = function(href, options) {
      typeof href === "string" && href ? options != null && typeof options !== "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : options != null && typeof options.crossOrigin !== "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      typeof href === "string" && (options ? (options = options.crossOrigin, options = typeof options === "string" ? options === "use-credentials" ? options : "" : undefined) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
      if (typeof href !== "string" || !href)
        console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      else if (1 < arguments.length) {
        var options = arguments[1];
        typeof options === "object" && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
      }
      typeof href === "string" && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
      typeof href === "string" && href ? options == null || typeof options !== "object" ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : options.as !== "style" && options.as !== "script" && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      if (typeof href === "string" && options && typeof options.as === "string") {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = typeof options.integrity === "string" ? options.integrity : undefined, fetchPriority = typeof options.fetchPriority === "string" ? options.fetchPriority : undefined;
        as === "style" ? Internals.d.S(href, typeof options.precedence === "string" ? options.precedence : undefined, {
          crossOrigin,
          integrity,
          fetchPriority
        }) : as === "script" && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined
        });
      }
    };
    exports.preinitModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && options.as !== "script" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
      if (encountered)
        console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
      else
        switch (encountered = options && typeof options.as === "string" ? options.as : "script", encountered) {
          case "script":
            break;
          default:
            encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', encountered, href);
        }
      if (typeof href === "string")
        if (typeof options === "object" && options !== null) {
          if (options.as == null || options.as === "script")
            encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
              crossOrigin: encountered,
              integrity: typeof options.integrity === "string" ? options.integrity : undefined,
              nonce: typeof options.nonce === "string" ? options.nonce : undefined
            });
        } else
          options == null && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options == null || typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : typeof options.as === "string" && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', encountered);
      if (typeof href === "string" && typeof options === "object" && options !== null && typeof options.as === "string") {
        encountered = options.as;
        var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
        Internals.d.L(href, encountered, {
          crossOrigin,
          integrity: typeof options.integrity === "string" ? options.integrity : undefined,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined,
          type: typeof options.type === "string" ? options.type : undefined,
          fetchPriority: typeof options.fetchPriority === "string" ? options.fetchPriority : undefined,
          referrerPolicy: typeof options.referrerPolicy === "string" ? options.referrerPolicy : undefined,
          imageSrcSet: typeof options.imageSrcSet === "string" ? options.imageSrcSet : undefined,
          imageSizes: typeof options.imageSizes === "string" ? options.imageSizes : undefined,
          media: typeof options.media === "string" ? options.media : undefined
        });
      }
    };
    exports.preloadModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && typeof options.as !== "string" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', encountered);
      typeof href === "string" && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
        as: typeof options.as === "string" && options.as !== "script" ? options.as : undefined,
        crossOrigin: encountered,
        integrity: typeof options.integrity === "string" ? options.integrity : undefined
      })) : Internals.d.m(href));
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return resolveDispatcher().useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return resolveDispatcher().useHostTransitionStatus();
    };
    exports.version = "19.0.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  var react_dom_development = __toESM(require_react_dom_development(), 1);
  if (false) {
  } else {
    module.exports = react_dom_development;
  }
});

// node_modules/react-dom/cjs/react-dom-server.bun.development.js
var exports_react_dom_server_bun_development = {};
__export(exports_react_dom_server_bun_development, {
  version: () => $version,
  renderToReadableStream: () => $renderToReadableStream
});
function objectName(object) {
  return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
    return p0;
  });
}
function describeKeyForErrorMessage(key) {
  var encodedKey = JSON.stringify(key);
  return '"' + key + '"' === encodedKey ? key : encodedKey;
}
function describeValueForErrorMessage(value) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
    case "object":
      if (isArrayImpl(value))
        return "[...]";
      if (value !== null && value.$$typeof === CLIENT_REFERENCE_TAG)
        return "client";
      value = objectName(value);
      return value === "Object" ? "{...}" : value;
    case "function":
      return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
    default:
      return String(value);
  }
}
function describeElementType(type) {
  if (typeof type === "string")
    return type;
  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
  }
  if (typeof type === "object")
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeElementType(type.render);
      case REACT_MEMO_TYPE:
        return describeElementType(type.type);
      case REACT_LAZY_TYPE:
        var payload = type._payload;
        type = type._init;
        try {
          return describeElementType(type(payload));
        } catch (x) {
        }
    }
  return "";
}
function describeObjectForErrorMessage(objectOrArray, expandedName) {
  var objKind = objectName(objectOrArray);
  if (objKind !== "Object" && objKind !== "Array")
    return objKind;
  var start = -1, length = 0;
  if (isArrayImpl(objectOrArray))
    if (jsxChildrenParents.has(objectOrArray)) {
      var type = jsxChildrenParents.get(objectOrArray);
      objKind = "<" + describeElementType(type) + ">";
      for (var i = 0;i < objectOrArray.length; i++) {
        var value = objectOrArray[i];
        value = typeof value === "string" ? value : typeof value === "object" && value !== null ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
        "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
      }
      objKind += "</" + describeElementType(type) + ">";
    } else {
      objKind = "[";
      for (type = 0;type < objectOrArray.length; type++)
        0 < type && (objKind += ", "), i = objectOrArray[type], i = typeof i === "object" && i !== null ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
      objKind += "]";
    }
  else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE)
    objKind = "<" + describeElementType(objectOrArray.type) + "/>";
  else {
    if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG)
      return "client";
    if (jsxPropsParents.has(objectOrArray)) {
      objKind = jsxPropsParents.get(objectOrArray);
      objKind = "<" + (describeElementType(objKind) || "...");
      type = Object.keys(objectOrArray);
      for (i = 0;i < type.length; i++) {
        objKind += " ";
        value = type[i];
        objKind += describeKeyForErrorMessage(value) + "=";
        var _value2 = objectOrArray[value];
        var _substr2 = value === expandedName && typeof _value2 === "object" && _value2 !== null ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
        typeof _value2 !== "string" && (_substr2 = "{" + _substr2 + "}");
        value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
      }
      objKind += ">";
    } else {
      objKind = "{";
      type = Object.keys(objectOrArray);
      for (i = 0;i < type.length; i++)
        0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = typeof _value2 === "object" && _value2 !== null ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
      objKind += "}";
    }
  }
  return expandedName === undefined ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), `
  ` + objKind + `
  ` + objectOrArray) : `
  ` + objKind;
}
function flushBuffered(destination) {
  typeof destination.flush === "function" && destination.flush();
}
function writeChunk(destination, chunk) {
  chunk.length !== 0 && destination.write(chunk);
}
function closeWithError(destination, error) {
  typeof destination.error === "function" ? destination.error(error) : destination.close();
}
function typeName(value) {
  return typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
}
function willCoercionThrow(value) {
  try {
    return testStringCoercion(value), false;
  } catch (e) {
    return true;
  }
}
function testStringCoercion(value) {
  return "" + value;
}
function checkAttributeStringCoercion(value, attributeName) {
  if (willCoercionThrow(value))
    return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", attributeName, typeName(value)), testStringCoercion(value);
}
function checkCSSPropertyStringCoercion(value, propName) {
  if (willCoercionThrow(value))
    return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", propName, typeName(value)), testStringCoercion(value);
}
function checkHtmlStringCoercion(value) {
  if (willCoercionThrow(value))
    return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", typeName(value)), testStringCoercion(value);
}
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return true;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName))
    return false;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return validatedAttributeNameCache[attributeName] = true;
  illegalAttributeNameCache[attributeName] = true;
  console.error("Invalid attribute name: `%s`", attributeName);
  return false;
}
function checkControlledValueProps(tagName, props) {
  hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null || (tagName === "select" ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."));
  props.onChange || props.readOnly || props.disabled || props.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
}
function validateProperty$1(tagName, name) {
  if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name])
    return true;
  if (rARIACamel$1.test(name)) {
    tagName = "aria-" + name.slice(4).toLowerCase();
    tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
    if (tagName == null)
      return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties$1[name] = true;
    if (name !== tagName)
      return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = true;
  }
  if (rARIA$1.test(name)) {
    tagName = name.toLowerCase();
    tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
    if (tagName == null)
      return warnedProperties$1[name] = true, false;
    name !== tagName && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = true);
  }
  return true;
}
function validateProperties$2(type, props) {
  var invalidProps = [], key;
  for (key in props)
    validateProperty$1(type, key) || invalidProps.push(key);
  props = invalidProps.map(function(prop) {
    return "`" + prop + "`";
  }).join(", ");
  invalidProps.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type) : 1 < invalidProps.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type);
}
function validateProperty(tagName, name, value, eventRegistry) {
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name])
    return true;
  var lowerCasedName = name.toLowerCase();
  if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout")
    return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties[name] = true;
  if (typeof value === "function" && (tagName === "form" && name === "action" || tagName === "input" && name === "formAction" || tagName === "button" && name === "formAction"))
    return true;
  if (eventRegistry != null) {
    tagName = eventRegistry.possibleRegistrationNames;
    if (eventRegistry.registrationNameDependencies.hasOwnProperty(name))
      return true;
    eventRegistry = tagName.hasOwnProperty(lowerCasedName) ? tagName[lowerCasedName] : null;
    if (eventRegistry != null)
      return console.error("Invalid event handler property `%s`. Did you mean `%s`?", name, eventRegistry), warnedProperties[name] = true;
    if (EVENT_NAME_REGEX.test(name))
      return console.error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties[name] = true;
  } else if (EVENT_NAME_REGEX.test(name))
    return INVALID_EVENT_NAME_REGEX.test(name) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties[name] = true;
  if (rARIA.test(name) || rARIACamel.test(name))
    return true;
  if (lowerCasedName === "innerhtml")
    return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties[name] = true;
  if (lowerCasedName === "aria")
    return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties[name] = true;
  if (lowerCasedName === "is" && value !== null && value !== undefined && typeof value !== "string")
    return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties[name] = true;
  if (typeof value === "number" && isNaN(value))
    return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties[name] = true;
  if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
    if (lowerCasedName = possibleStandardNames[lowerCasedName], lowerCasedName !== name)
      return console.error("Invalid DOM property `%s`. Did you mean `%s`?", name, lowerCasedName), warnedProperties[name] = true;
  } else if (name !== lowerCasedName)
    return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties[name] = true;
  switch (name) {
    case "dangerouslySetInnerHTML":
    case "children":
    case "style":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      return true;
    case "innerText":
    case "textContent":
      return true;
  }
  switch (typeof value) {
    case "boolean":
      switch (name) {
        case "autoFocus":
        case "checked":
        case "multiple":
        case "muted":
        case "selected":
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
        case "capture":
        case "download":
        case "inert":
          return true;
        default:
          lowerCasedName = name.toLowerCase().slice(0, 5);
          if (lowerCasedName === "data-" || lowerCasedName === "aria-")
            return true;
          value ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
          return warnedProperties[name] = true;
      }
    case "function":
    case "symbol":
      return warnedProperties[name] = true, false;
    case "string":
      if (value === "false" || value === "true") {
        switch (name) {
          case "checked":
          case "selected":
          case "multiple":
          case "muted":
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
          case "inert":
            break;
          default:
            return true;
        }
        console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
        warnedProperties[name] = true;
      }
  }
  return true;
}
function warnUnknownProperties(type, props, eventRegistry) {
  var unknownProps = [], key;
  for (key in props)
    validateProperty(type, key, props[key], eventRegistry) || unknownProps.push(key);
  props = unknownProps.map(function(prop) {
    return "`" + prop + "`";
  }).join(", ");
  unknownProps.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type) : 1 < unknownProps.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type);
}
function camelize(string) {
  return string.replace(hyphenPattern, function(_, character) {
    return character.toUpperCase();
  });
}
function escapeTextForBrowser(text) {
  if (typeof text === "boolean" || typeof text === "number" || typeof text === "bigint")
    return "" + text;
  checkHtmlStringCoercion(text);
  text = "" + text;
  var match = matchHtmlRegExp.exec(text);
  if (match) {
    var html = "", index, lastIndex = 0;
    for (index = match.index;index < text.length; index++) {
      switch (text.charCodeAt(index)) {
        case 34:
          match = "&quot;";
          break;
        case 38:
          match = "&amp;";
          break;
        case 39:
          match = "&#x27;";
          break;
        case 60:
          match = "&lt;";
          break;
        case 62:
          match = "&gt;";
          break;
        default:
          continue;
      }
      lastIndex !== index && (html += text.slice(lastIndex, index));
      lastIndex = index + 1;
      html += match;
    }
    text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
  }
  return text;
}
function sanitizeURL(url) {
  return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
}
function escapeEntireInlineScriptContent(scriptText) {
  checkHtmlStringCoercion(scriptText);
  return ("" + scriptText).replace(scriptRegex, scriptReplacer);
}
function scriptReplacer(match, prefix, s, suffix) {
  return "" + prefix + (s === "s" ? "\\u0073" : "\\u0053") + suffix;
}
function createRenderState(resumableState, nonce, externalRuntimeConfig, importMap, onHeaders, maxHeadersLength) {
  var inlineScriptWithNonce = nonce === undefined ? "<script>" : '<script nonce="' + escapeTextForBrowser(nonce) + '">', idPrefix = resumableState.idPrefix;
  externalRuntimeConfig = [];
  var { bootstrapScriptContent, bootstrapScripts, bootstrapModules } = resumableState;
  bootstrapScriptContent !== undefined && externalRuntimeConfig.push(inlineScriptWithNonce, escapeEntireInlineScriptContent(bootstrapScriptContent), "</script>");
  bootstrapScriptContent = [];
  importMap !== undefined && (bootstrapScriptContent.push('<script type="importmap">'), bootstrapScriptContent.push(escapeEntireInlineScriptContent(JSON.stringify(importMap))), bootstrapScriptContent.push("</script>"));
  onHeaders && typeof maxHeadersLength === "number" && 0 >= maxHeadersLength && console.error("React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.", maxHeadersLength === 0 ? "zero" : maxHeadersLength);
  importMap = {
    placeholderPrefix: idPrefix + "P:",
    segmentPrefix: idPrefix + "S:",
    boundaryPrefix: idPrefix + "B:",
    startInlineScript: inlineScriptWithNonce,
    htmlChunks: null,
    headChunks: null,
    externalRuntimeScript: null,
    bootstrapChunks: externalRuntimeConfig,
    importMapChunks: bootstrapScriptContent,
    onHeaders,
    headers: onHeaders ? {
      preconnects: "",
      fontPreloads: "",
      highImagePreloads: "",
      remainingCapacity: 2 + (typeof maxHeadersLength === "number" ? maxHeadersLength : 2000)
    } : null,
    resets: {
      font: {},
      dns: {},
      connect: { default: {}, anonymous: {}, credentials: {} },
      image: {},
      style: {}
    },
    charsetChunks: [],
    viewportChunks: [],
    hoistableChunks: [],
    preconnects: new Set,
    fontPreloads: new Set,
    highImagePreloads: new Set,
    styles: new Map,
    bootstrapScripts: new Set,
    scripts: new Set,
    bulkPreloads: new Set,
    preloads: {
      images: new Map,
      stylesheets: new Map,
      scripts: new Map,
      moduleScripts: new Map
    },
    nonce,
    hoistableState: null,
    stylesToHoist: false
  };
  if (bootstrapScripts !== undefined)
    for (onHeaders = 0;onHeaders < bootstrapScripts.length; onHeaders++) {
      maxHeadersLength = bootstrapScripts[onHeaders];
      bootstrapScriptContent = idPrefix = undefined;
      var props = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce
      };
      typeof maxHeadersLength === "string" ? props.href = inlineScriptWithNonce = maxHeadersLength : (props.href = inlineScriptWithNonce = maxHeadersLength.src, props.integrity = bootstrapScriptContent = typeof maxHeadersLength.integrity === "string" ? maxHeadersLength.integrity : undefined, props.crossOrigin = idPrefix = typeof maxHeadersLength === "string" || maxHeadersLength.crossOrigin == null ? undefined : maxHeadersLength.crossOrigin === "use-credentials" ? "use-credentials" : "");
      preloadBootstrapScriptOrModule(resumableState, importMap, inlineScriptWithNonce, props);
      externalRuntimeConfig.push('<script src="', escapeTextForBrowser(inlineScriptWithNonce));
      nonce && externalRuntimeConfig.push('" nonce="', escapeTextForBrowser(nonce));
      typeof bootstrapScriptContent === "string" && externalRuntimeConfig.push('" integrity="', escapeTextForBrowser(bootstrapScriptContent));
      typeof idPrefix === "string" && externalRuntimeConfig.push('" crossorigin="', escapeTextForBrowser(idPrefix));
      externalRuntimeConfig.push('" async=""></script>');
    }
  if (bootstrapModules !== undefined)
    for (bootstrapScripts = 0;bootstrapScripts < bootstrapModules.length; bootstrapScripts++)
      onHeaders = bootstrapModules[bootstrapScripts], idPrefix = inlineScriptWithNonce = undefined, bootstrapScriptContent = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce
      }, typeof onHeaders === "string" ? bootstrapScriptContent.href = maxHeadersLength = onHeaders : (bootstrapScriptContent.href = maxHeadersLength = onHeaders.src, bootstrapScriptContent.integrity = idPrefix = typeof onHeaders.integrity === "string" ? onHeaders.integrity : undefined, bootstrapScriptContent.crossOrigin = inlineScriptWithNonce = typeof onHeaders === "string" || onHeaders.crossOrigin == null ? undefined : onHeaders.crossOrigin === "use-credentials" ? "use-credentials" : ""), preloadBootstrapScriptOrModule(resumableState, importMap, maxHeadersLength, bootstrapScriptContent), externalRuntimeConfig.push('<script type="module" src="', escapeTextForBrowser(maxHeadersLength)), nonce && externalRuntimeConfig.push('" nonce="', escapeTextForBrowser(nonce)), typeof idPrefix === "string" && externalRuntimeConfig.push('" integrity="', escapeTextForBrowser(idPrefix)), typeof inlineScriptWithNonce === "string" && externalRuntimeConfig.push('" crossorigin="', escapeTextForBrowser(inlineScriptWithNonce)), externalRuntimeConfig.push('" async=""></script>');
  return importMap;
}
function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
  return {
    idPrefix: identifierPrefix === undefined ? "" : identifierPrefix,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent,
    bootstrapScripts,
    bootstrapModules,
    instructions: NothingSent,
    hasBody: false,
    hasHtml: false,
    unknownResources: {},
    dnsResources: {},
    connectResources: { default: {}, anonymous: {}, credentials: {} },
    imageResources: {},
    styleResources: {},
    scriptResources: {},
    moduleUnknownResources: {},
    moduleScriptResources: {}
  };
}
function createFormatContext(insertionMode, selectedValue, tagScope) {
  return {
    insertionMode,
    selectedValue,
    tagScope
  };
}
function createRootFormatContext(namespaceURI) {
  return createFormatContext(namespaceURI === "http://www.w3.org/2000/svg" ? SVG_MODE : namespaceURI === "http://www.w3.org/1998/Math/MathML" ? MATHML_MODE : ROOT_HTML_MODE, null, 0);
}
function getChildFormatContext(parentContext, type, props) {
  switch (type) {
    case "noscript":
      return createFormatContext(HTML_MODE, null, parentContext.tagScope | 1);
    case "select":
      return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue, parentContext.tagScope);
    case "svg":
      return createFormatContext(SVG_MODE, null, parentContext.tagScope);
    case "picture":
      return createFormatContext(HTML_MODE, null, parentContext.tagScope | 2);
    case "math":
      return createFormatContext(MATHML_MODE, null, parentContext.tagScope);
    case "foreignObject":
      return createFormatContext(HTML_MODE, null, parentContext.tagScope);
    case "table":
      return createFormatContext(HTML_TABLE_MODE, null, parentContext.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return createFormatContext(HTML_TABLE_BODY_MODE, null, parentContext.tagScope);
    case "colgroup":
      return createFormatContext(HTML_COLGROUP_MODE, null, parentContext.tagScope);
    case "tr":
      return createFormatContext(HTML_TABLE_ROW_MODE, null, parentContext.tagScope);
  }
  return parentContext.insertionMode >= HTML_TABLE_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext.insertionMode === ROOT_HTML_MODE ? type === "html" ? createFormatContext(HTML_HTML_MODE, null, parentContext.tagScope) : createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext.insertionMode === HTML_HTML_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext;
}
function pushTextInstance(target, text, renderState, textEmbedded) {
  if (text === "")
    return textEmbedded;
  textEmbedded && target.push("<!-- -->");
  target.push(escapeTextForBrowser(text));
  return true;
}
function pushStyleAttribute(target, style) {
  if (typeof style !== "object")
    throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
  var isFirst = true, styleName;
  for (styleName in style)
    if (hasOwnProperty.call(style, styleName)) {
      var styleValue = style[styleName];
      if (styleValue != null && typeof styleValue !== "boolean" && styleValue !== "") {
        if (styleName.indexOf("--") === 0) {
          var nameChunk = escapeTextForBrowser(styleName);
          checkCSSPropertyStringCoercion(styleValue, styleName);
          styleValue = escapeTextForBrowser(("" + styleValue).trim());
        } else {
          nameChunk = styleName;
          var value = styleValue;
          if (-1 < nameChunk.indexOf("-")) {
            var name = nameChunk;
            warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = true, console.error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-"))));
          } else if (badVendoredStyleNamePattern.test(nameChunk))
            name = nameChunk, warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = true, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
          else if (badStyleValueWithSemicolonPattern.test(value)) {
            name = nameChunk;
            var value$jscomp$0 = value;
            warnedStyleValues.hasOwnProperty(value$jscomp$0) && warnedStyleValues[value$jscomp$0] || (warnedStyleValues[value$jscomp$0] = true, console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value$jscomp$0.replace(badStyleValueWithSemicolonPattern, "")));
          }
          typeof value === "number" && (isNaN(value) ? warnedForNaNValue || (warnedForNaNValue = true, console.error("`NaN` is an invalid value for the `%s` css style property.", nameChunk)) : isFinite(value) || warnedForInfinityValue || (warnedForInfinityValue = true, console.error("`Infinity` is an invalid value for the `%s` css style property.", nameChunk)));
          nameChunk = styleName;
          value = styleNameCache.get(nameChunk);
          value !== undefined ? nameChunk = value : (value = escapeTextForBrowser(nameChunk.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-")), styleNameCache.set(nameChunk, value), nameChunk = value);
          typeof styleValue === "number" ? styleValue = styleValue === 0 || unitlessNumbers.has(styleName) ? "" + styleValue : styleValue + "px" : (checkCSSPropertyStringCoercion(styleValue, styleName), styleValue = escapeTextForBrowser(("" + styleValue).trim()));
        }
        isFirst ? (isFirst = false, target.push(styleAttributeStart, nameChunk, styleAssign, styleValue)) : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
      }
    }
  isFirst || target.push(attributeEnd);
}
function pushBooleanAttribute(target, name, value) {
  value && typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator, name, attributeEmptyString);
}
function pushStringAttribute(target, name, value) {
  typeof value !== "function" && typeof value !== "symbol" && typeof value !== "boolean" && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
}
function pushAdditionalFormField(value, key) {
  this.push('<input type="hidden"');
  validateAdditionalFormField(value);
  pushStringAttribute(this, "name", key);
  pushStringAttribute(this, "value", value);
  this.push(endOfStartTagSelfClosing);
}
function validateAdditionalFormField(value) {
  if (typeof value !== "string")
    throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
}
function getCustomFormFields(resumableState, formAction) {
  if (typeof formAction.$$FORM_ACTION === "function") {
    var id = resumableState.nextFormID++;
    resumableState = resumableState.idPrefix + id;
    try {
      var customFields = formAction.$$FORM_ACTION(resumableState);
      if (customFields) {
        var formData = customFields.data;
        formData != null && formData.forEach(validateAdditionalFormField);
      }
      return customFields;
    } catch (x) {
      if (typeof x === "object" && x !== null && typeof x.then === "function")
        throw x;
      console.error(`Failed to serialize an action for progressive enhancement:
%s`, x);
    }
  }
  return null;
}
function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
  var formData = null;
  if (typeof formAction === "function") {
    name === null || didWarnFormActionName || (didWarnFormActionName = true, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'));
    formEncType === null && formMethod === null || didWarnFormActionMethod || (didWarnFormActionMethod = true, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."));
    formTarget === null || didWarnFormActionTarget || (didWarnFormActionTarget = true, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
    var customFields = getCustomFormFields(resumableState, formAction);
    customFields !== null ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(attributeSeparator, "formAction", attributeAssign, actionJavaScriptURL, attributeEnd), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
  }
  name != null && pushAttribute(target, "name", name);
  formAction != null && pushAttribute(target, "formAction", formAction);
  formEncType != null && pushAttribute(target, "formEncType", formEncType);
  formMethod != null && pushAttribute(target, "formMethod", formMethod);
  formTarget != null && pushAttribute(target, "formTarget", formTarget);
  return formData;
}
function pushAttribute(target, name, value) {
  switch (name) {
    case "className":
      pushStringAttribute(target, "class", value);
      break;
    case "tabIndex":
      pushStringAttribute(target, "tabindex", value);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      pushStringAttribute(target, name, value);
      break;
    case "style":
      pushStyleAttribute(target, value);
      break;
    case "src":
    case "href":
      if (value === "") {
        name === "src" ? console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name) : console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name);
        break;
      }
    case "action":
    case "formAction":
      if (value == null || typeof value === "function" || typeof value === "symbol" || typeof value === "boolean")
        break;
      checkAttributeStringCoercion(value, name);
      value = sanitizeURL("" + value);
      target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      pushBooleanAttribute(target, name.toLowerCase(), value);
      break;
    case "xlinkHref":
      if (typeof value === "function" || typeof value === "symbol" || typeof value === "boolean")
        break;
      checkAttributeStringCoercion(value, name);
      value = sanitizeURL("" + value);
      target.push(attributeSeparator, "xlink:href", attributeAssign, escapeTextForBrowser(value), attributeEnd);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
      break;
    case "inert":
      value !== "" || didWarnForNewBooleanPropsWithEmptyValue[name] || (didWarnForNewBooleanPropsWithEmptyValue[name] = true, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", name));
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      value && typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator, name, attributeEmptyString);
      break;
    case "capture":
    case "download":
      value === true ? target.push(attributeSeparator, name, attributeEmptyString) : value !== false && typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof value !== "function" && typeof value !== "symbol" && !isNaN(value) && 1 <= value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
      break;
    case "rowSpan":
    case "start":
      typeof value === "function" || typeof value === "symbol" || isNaN(value) || target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
      break;
    case "xlinkActuate":
      pushStringAttribute(target, "xlink:actuate", value);
      break;
    case "xlinkArcrole":
      pushStringAttribute(target, "xlink:arcrole", value);
      break;
    case "xlinkRole":
      pushStringAttribute(target, "xlink:role", value);
      break;
    case "xlinkShow":
      pushStringAttribute(target, "xlink:show", value);
      break;
    case "xlinkTitle":
      pushStringAttribute(target, "xlink:title", value);
      break;
    case "xlinkType":
      pushStringAttribute(target, "xlink:type", value);
      break;
    case "xmlBase":
      pushStringAttribute(target, "xml:base", value);
      break;
    case "xmlLang":
      pushStringAttribute(target, "xml:lang", value);
      break;
    case "xmlSpace":
      pushStringAttribute(target, "xml:space", value);
      break;
    default:
      if (!(2 < name.length) || name[0] !== "o" && name[0] !== "O" || name[1] !== "n" && name[1] !== "N") {
        if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var prefix = name.toLowerCase().slice(0, 5);
              if (prefix !== "data-" && prefix !== "aria-")
                return;
          }
          target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
        }
      }
  }
}
function pushInnerHTML(target, innerHTML, children) {
  if (innerHTML != null) {
    if (children != null)
      throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
    if (typeof innerHTML !== "object" || !("__html" in innerHTML))
      throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
    innerHTML = innerHTML.__html;
    innerHTML !== null && innerHTML !== undefined && (checkHtmlStringCoercion(innerHTML), target.push("" + innerHTML));
  }
}
function checkSelectProp(props, propName) {
  var value = props[propName];
  value != null && (value = isArrayImpl(value), props.multiple && !value ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && value && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName));
}
function flattenOptionChildren(children) {
  var content = "";
  React.Children.forEach(children, function(child) {
    child != null && (content += child, didWarnInvalidOptionChildren || typeof child === "string" || typeof child === "number" || typeof child === "bigint" || (didWarnInvalidOptionChildren = true, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
  });
  return content;
}
function injectFormReplayingRuntime(resumableState, renderState) {
  (resumableState.instructions & 16) === NothingSent && (resumableState.instructions |= 16, renderState.bootstrapChunks.unshift(renderState.startInlineScript, formReplayingRuntimeScript, "</script>"));
}
function pushLinkImpl(target, props) {
  target.push(startChunkForTag("link"));
  for (var propKey in props)
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];
      if (propValue != null)
        switch (propKey) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            pushAttribute(target, propKey, propValue);
        }
    }
  target.push(endOfStartTagSelfClosing);
  return null;
}
function escapeStyleTextContent(styleText) {
  checkHtmlStringCoercion(styleText);
  return ("" + styleText).replace(styleRegex, styleReplacer);
}
function styleReplacer(match, prefix, s, suffix) {
  return "" + prefix + (s === "s" ? "\\73 " : "\\53 ") + suffix;
}
function pushSelfClosing(target, props, tag) {
  target.push(startChunkForTag(tag));
  for (var propKey in props)
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];
      if (propValue != null)
        switch (propKey) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            pushAttribute(target, propKey, propValue);
        }
    }
  target.push(endOfStartTagSelfClosing);
  return null;
}
function pushTitleImpl(target, props) {
  target.push(startChunkForTag("title"));
  var children = null, innerHTML = null, propKey;
  for (propKey in props)
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];
      if (propValue != null)
        switch (propKey) {
          case "children":
            children = propValue;
            break;
          case "dangerouslySetInnerHTML":
            innerHTML = propValue;
            break;
          default:
            pushAttribute(target, propKey, propValue);
        }
    }
  target.push(endOfStartTag);
  props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
  typeof props !== "function" && typeof props !== "symbol" && props !== null && props !== undefined && target.push(escapeTextForBrowser("" + props));
  pushInnerHTML(target, innerHTML, children);
  target.push(endChunkForTag("title"));
  return null;
}
function pushScriptImpl(target, props) {
  target.push(startChunkForTag("script"));
  var children = null, innerHTML = null, propKey;
  for (propKey in props)
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];
      if (propValue != null)
        switch (propKey) {
          case "children":
            children = propValue;
            break;
          case "dangerouslySetInnerHTML":
            innerHTML = propValue;
            break;
          default:
            pushAttribute(target, propKey, propValue);
        }
    }
  target.push(endOfStartTag);
  children != null && typeof children !== "string" && (props = typeof children === "number" ? "a number for children" : Array.isArray(children) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", props));
  pushInnerHTML(target, innerHTML, children);
  typeof children === "string" && target.push(escapeEntireInlineScriptContent(children));
  target.push(endChunkForTag("script"));
  return null;
}
function pushStartGenericElement(target, props, tag) {
  target.push(startChunkForTag(tag));
  var innerHTML = tag = null, propKey;
  for (propKey in props)
    if (hasOwnProperty.call(props, propKey)) {
      var propValue = props[propKey];
      if (propValue != null)
        switch (propKey) {
          case "children":
            tag = propValue;
            break;
          case "dangerouslySetInnerHTML":
            innerHTML = propValue;
            break;
          default:
            pushAttribute(target, propKey, propValue);
        }
    }
  target.push(endOfStartTag);
  pushInnerHTML(target, innerHTML, tag);
  return typeof tag === "string" ? (target.push(escapeTextForBrowser(tag)), null) : tag;
}
function startChunkForTag(tag) {
  var tagStartChunk = validatedTagCache.get(tag);
  if (tagStartChunk === undefined) {
    if (!VALID_TAG_REGEX.test(tag))
      throw Error("Invalid tag: " + tag);
    tagStartChunk = "<" + tag;
    validatedTagCache.set(tag, tagStartChunk);
  }
  return tagStartChunk;
}
function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, hoistableState, formatContext, textEmbedded, isFallback) {
  validateProperties$2(type, props);
  type !== "input" && type !== "textarea" && type !== "select" || props == null || props.value !== null || didWarnValueNull || (didWarnValueNull = true, type === "select" && props.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
  b:
    if (type.indexOf("-") === -1)
      var JSCompiler_inline_result = false;
    else
      switch (type) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          JSCompiler_inline_result = false;
          break b;
        default:
          JSCompiler_inline_result = true;
      }
  JSCompiler_inline_result || typeof props.is === "string" || warnUnknownProperties(type, props, null);
  !props.suppressContentEditableWarning && props.contentEditable && props.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
  formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE && type.indexOf("-") === -1 && type.toLowerCase() !== type && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
  switch (type) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      target$jscomp$0.push(startChunkForTag("a"));
      var children = null, innerHTML = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (propValue != null)
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "href":
                propValue === "" ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
                break;
              default:
                pushAttribute(target$jscomp$0, propKey, propValue);
            }
        }
      target$jscomp$0.push(endOfStartTag);
      pushInnerHTML(target$jscomp$0, innerHTML, children);
      if (typeof children === "string") {
        target$jscomp$0.push(escapeTextForBrowser(children));
        var JSCompiler_inline_result$jscomp$0 = null;
      } else
        JSCompiler_inline_result$jscomp$0 = children;
      return JSCompiler_inline_result$jscomp$0;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      checkControlledValueProps("select", props);
      checkSelectProp(props, "value");
      checkSelectProp(props, "defaultValue");
      props.value === undefined || props.defaultValue === undefined || didWarnDefaultSelectValue || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultSelectValue = true);
      target$jscomp$0.push(startChunkForTag("select"));
      var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
      for (propKey$jscomp$0 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$0)) {
          var propValue$jscomp$0 = props[propKey$jscomp$0];
          if (propValue$jscomp$0 != null)
            switch (propKey$jscomp$0) {
              case "children":
                children$jscomp$0 = propValue$jscomp$0;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML$jscomp$0 = propValue$jscomp$0;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
            }
        }
      target$jscomp$0.push(endOfStartTag);
      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
      return children$jscomp$0;
    case "option":
      var selectedValue = formatContext.selectedValue;
      target$jscomp$0.push(startChunkForTag("option"));
      var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
      for (propKey$jscomp$1 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$1)) {
          var propValue$jscomp$1 = props[propKey$jscomp$1];
          if (propValue$jscomp$1 != null)
            switch (propKey$jscomp$1) {
              case "children":
                children$jscomp$1 = propValue$jscomp$1;
                break;
              case "selected":
                selected = propValue$jscomp$1;
                didWarnSelectedSetOnOption || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = true);
                break;
              case "dangerouslySetInnerHTML":
                innerHTML$jscomp$1 = propValue$jscomp$1;
                break;
              case "value":
                value = propValue$jscomp$1;
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
            }
        }
      if (selectedValue != null) {
        if (value !== null) {
          checkAttributeStringCoercion(value, "value");
          var stringValue = "" + value;
        } else
          innerHTML$jscomp$1 === null || didWarnInvalidOptionInnerHTML || (didWarnInvalidOptionInnerHTML = true, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), stringValue = flattenOptionChildren(children$jscomp$1);
        if (isArrayImpl(selectedValue))
          for (var i = 0;i < selectedValue.length; i++) {
            if (checkAttributeStringCoercion(selectedValue[i], "value"), "" + selectedValue[i] === stringValue) {
              target$jscomp$0.push(' selected=""');
              break;
            }
          }
        else
          checkAttributeStringCoercion(selectedValue, "select.value"), "" + selectedValue === stringValue && target$jscomp$0.push(' selected=""');
      } else
        selected && target$jscomp$0.push(' selected=""');
      target$jscomp$0.push(endOfStartTag);
      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
      return children$jscomp$1;
    case "textarea":
      checkControlledValueProps("textarea", props);
      props.value === undefined || props.defaultValue === undefined || didWarnDefaultTextareaValue || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultTextareaValue = true);
      target$jscomp$0.push(startChunkForTag("textarea"));
      var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
      for (propKey$jscomp$2 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$2)) {
          var propValue$jscomp$2 = props[propKey$jscomp$2];
          if (propValue$jscomp$2 != null)
            switch (propKey$jscomp$2) {
              case "children":
                children$jscomp$2 = propValue$jscomp$2;
                break;
              case "value":
                value$jscomp$0 = propValue$jscomp$2;
                break;
              case "defaultValue":
                defaultValue = propValue$jscomp$2;
                break;
              case "dangerouslySetInnerHTML":
                throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
            }
        }
      value$jscomp$0 === null && defaultValue !== null && (value$jscomp$0 = defaultValue);
      target$jscomp$0.push(endOfStartTag);
      if (children$jscomp$2 != null) {
        console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        if (value$jscomp$0 != null)
          throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (isArrayImpl(children$jscomp$2)) {
          if (1 < children$jscomp$2.length)
            throw Error("<textarea> can only have at most one child.");
          checkHtmlStringCoercion(children$jscomp$2[0]);
          value$jscomp$0 = "" + children$jscomp$2[0];
        }
        checkHtmlStringCoercion(children$jscomp$2);
        value$jscomp$0 = "" + children$jscomp$2;
      }
      typeof value$jscomp$0 === "string" && value$jscomp$0[0] === `
` && target$jscomp$0.push(`
`);
      value$jscomp$0 !== null && (checkAttributeStringCoercion(value$jscomp$0, "value"), target$jscomp$0.push(escapeTextForBrowser("" + value$jscomp$0)));
      return null;
    case "input":
      checkControlledValueProps("input", props);
      target$jscomp$0.push(startChunkForTag("input"));
      var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
      for (propKey$jscomp$3 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$3)) {
          var propValue$jscomp$3 = props[propKey$jscomp$3];
          if (propValue$jscomp$3 != null)
            switch (propKey$jscomp$3) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              case "name":
                name = propValue$jscomp$3;
                break;
              case "formAction":
                formAction = propValue$jscomp$3;
                break;
              case "formEncType":
                formEncType = propValue$jscomp$3;
                break;
              case "formMethod":
                formMethod = propValue$jscomp$3;
                break;
              case "formTarget":
                formTarget = propValue$jscomp$3;
                break;
              case "defaultChecked":
                defaultChecked = propValue$jscomp$3;
                break;
              case "defaultValue":
                defaultValue$jscomp$0 = propValue$jscomp$3;
                break;
              case "checked":
                checked = propValue$jscomp$3;
                break;
              case "value":
                value$jscomp$1 = propValue$jscomp$3;
                break;
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
            }
        }
      formAction === null || props.type === "image" || props.type === "submit" || didWarnFormActionType || (didWarnFormActionType = true, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
      var formData = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
      checked === null || defaultChecked === null || didWarnDefaultChecked || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultChecked = true);
      value$jscomp$1 === null || defaultValue$jscomp$0 === null || didWarnDefaultInputValue || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = true);
      checked !== null ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : defaultChecked !== null && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
      value$jscomp$1 !== null ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : defaultValue$jscomp$0 !== null && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
      target$jscomp$0.push(endOfStartTagSelfClosing);
      formData != null && formData.forEach(pushAdditionalFormField, target$jscomp$0);
      return null;
    case "button":
      target$jscomp$0.push(startChunkForTag("button"));
      var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
      for (propKey$jscomp$4 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$4)) {
          var propValue$jscomp$4 = props[propKey$jscomp$4];
          if (propValue$jscomp$4 != null)
            switch (propKey$jscomp$4) {
              case "children":
                children$jscomp$3 = propValue$jscomp$4;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML$jscomp$2 = propValue$jscomp$4;
                break;
              case "name":
                name$jscomp$0 = propValue$jscomp$4;
                break;
              case "formAction":
                formAction$jscomp$0 = propValue$jscomp$4;
                break;
              case "formEncType":
                formEncType$jscomp$0 = propValue$jscomp$4;
                break;
              case "formMethod":
                formMethod$jscomp$0 = propValue$jscomp$4;
                break;
              case "formTarget":
                formTarget$jscomp$0 = propValue$jscomp$4;
                break;
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
            }
        }
      formAction$jscomp$0 === null || props.type == null || props.type === "submit" || didWarnFormActionType || (didWarnFormActionType = true, console.error('A button can only specify a formAction along with type="submit" or no type.'));
      var formData$jscomp$0 = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
      target$jscomp$0.push(endOfStartTag);
      formData$jscomp$0 != null && formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
      if (typeof children$jscomp$3 === "string") {
        target$jscomp$0.push(escapeTextForBrowser(children$jscomp$3));
        var JSCompiler_inline_result$jscomp$1 = null;
      } else
        JSCompiler_inline_result$jscomp$1 = children$jscomp$3;
      return JSCompiler_inline_result$jscomp$1;
    case "form":
      target$jscomp$0.push(startChunkForTag("form"));
      var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
      for (propKey$jscomp$5 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$5)) {
          var propValue$jscomp$5 = props[propKey$jscomp$5];
          if (propValue$jscomp$5 != null)
            switch (propKey$jscomp$5) {
              case "children":
                children$jscomp$4 = propValue$jscomp$5;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML$jscomp$3 = propValue$jscomp$5;
                break;
              case "action":
                formAction$jscomp$1 = propValue$jscomp$5;
                break;
              case "encType":
                formEncType$jscomp$1 = propValue$jscomp$5;
                break;
              case "method":
                formMethod$jscomp$1 = propValue$jscomp$5;
                break;
              case "target":
                formTarget$jscomp$1 = propValue$jscomp$5;
                break;
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
            }
        }
      var formData$jscomp$1 = null, formActionName = null;
      if (typeof formAction$jscomp$1 === "function") {
        formEncType$jscomp$1 === null && formMethod$jscomp$1 === null || didWarnFormActionMethod || (didWarnFormActionMethod = true, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."));
        formTarget$jscomp$1 === null || didWarnFormActionTarget || (didWarnFormActionTarget = true, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
        var customFields = getCustomFormFields(resumableState, formAction$jscomp$1);
        customFields !== null ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(attributeSeparator, "action", attributeAssign, actionJavaScriptURL, attributeEnd), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
      }
      formAction$jscomp$1 != null && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
      formEncType$jscomp$1 != null && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
      formMethod$jscomp$1 != null && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
      formTarget$jscomp$1 != null && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
      target$jscomp$0.push(endOfStartTag);
      formActionName !== null && (target$jscomp$0.push('<input type="hidden"'), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing), formData$jscomp$1 != null && formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
      if (typeof children$jscomp$4 === "string") {
        target$jscomp$0.push(escapeTextForBrowser(children$jscomp$4));
        var JSCompiler_inline_result$jscomp$2 = null;
      } else
        JSCompiler_inline_result$jscomp$2 = children$jscomp$4;
      return JSCompiler_inline_result$jscomp$2;
    case "menuitem":
      target$jscomp$0.push(startChunkForTag("menuitem"));
      for (var propKey$jscomp$6 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$6)) {
          var propValue$jscomp$6 = props[propKey$jscomp$6];
          if (propValue$jscomp$6 != null)
            switch (propKey$jscomp$6) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
            }
        }
      target$jscomp$0.push(endOfStartTag);
      return null;
    case "object":
      target$jscomp$0.push(startChunkForTag("object"));
      var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
      for (propKey$jscomp$7 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$7)) {
          var propValue$jscomp$7 = props[propKey$jscomp$7];
          if (propValue$jscomp$7 != null)
            switch (propKey$jscomp$7) {
              case "children":
                children$jscomp$5 = propValue$jscomp$7;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML$jscomp$4 = propValue$jscomp$7;
                break;
              case "data":
                checkAttributeStringCoercion(propValue$jscomp$7, "data");
                var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
                if (sanitizedValue === "") {
                  console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', propKey$jscomp$7, propKey$jscomp$7);
                  break;
                }
                target$jscomp$0.push(attributeSeparator, "data", attributeAssign, escapeTextForBrowser(sanitizedValue), attributeEnd);
                break;
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
            }
        }
      target$jscomp$0.push(endOfStartTag);
      pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
      if (typeof children$jscomp$5 === "string") {
        target$jscomp$0.push(escapeTextForBrowser(children$jscomp$5));
        var JSCompiler_inline_result$jscomp$3 = null;
      } else
        JSCompiler_inline_result$jscomp$3 = children$jscomp$5;
      return JSCompiler_inline_result$jscomp$3;
    case "title":
      var insertionMode = formatContext.insertionMode, noscriptTagInScope = !!(formatContext.tagScope & 1);
      if (hasOwnProperty.call(props, "children")) {
        var children$jscomp$6 = props.children, child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
        Array.isArray(children$jscomp$6) && 1 < children$jscomp$6.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be commong to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", children$jscomp$6.length) : typeof child === "function" || typeof child === "symbol" ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", typeof child === "function" ? "a Function" : "a Sybmol") : child && child.toString === {}.toString && (child.$$typeof != null ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."));
      }
      if (insertionMode === SVG_MODE || noscriptTagInScope || props.itemProp != null)
        var JSCompiler_inline_result$jscomp$4 = pushTitleImpl(target$jscomp$0, props);
      else
        isFallback ? JSCompiler_inline_result$jscomp$4 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$4 = undefined);
      return JSCompiler_inline_result$jscomp$4;
    case "link":
      var { rel, href, precedence } = props;
      if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || props.itemProp != null || typeof rel !== "string" || typeof href !== "string" || href === "") {
        rel === "stylesheet" && typeof props.precedence === "string" && (typeof href === "string" && href || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', href === null ? "`null`" : href === undefined ? "`undefined`" : href === "" ? "an empty string" : 'something with type "' + typeof href + '"'));
        pushLinkImpl(target$jscomp$0, props);
        var JSCompiler_inline_result$jscomp$5 = null;
      } else if (props.rel === "stylesheet")
        if (typeof precedence !== "string" || props.disabled != null || props.onLoad || props.onError) {
          if (typeof precedence === "string") {
            if (props.disabled != null)
              console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
            else if (props.onLoad || props.onError) {
              var propDescription = props.onLoad && props.onError ? "`onLoad` and `onError` props" : props.onLoad ? "`onLoad` prop" : "`onError` prop";
              console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', propDescription, propDescription);
            }
          }
          JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props);
        } else {
          var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : undefined;
          if (resourceState !== EXISTS) {
            resumableState.styleResources[href] = EXISTS;
            styleQueue || (styleQueue = {
              precedence: escapeTextForBrowser(precedence),
              rules: [],
              hrefs: [],
              sheets: new Map
            }, renderState.styles.set(precedence, styleQueue));
            var resource = {
              state: PENDING$1,
              props: assign({}, props, {
                "data-precedence": props.precedence,
                precedence: null
              })
            };
            if (resourceState) {
              resourceState.length === 2 && adoptPreloadCredentials(resource.props, resourceState);
              var preloadResource = renderState.preloads.stylesheets.get(href);
              preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = PRELOADED;
            }
            styleQueue.sheets.set(href, resource);
            hoistableState && hoistableState.stylesheets.add(resource);
          } else if (styleQueue) {
            var _resource = styleQueue.sheets.get(href);
            _resource && hoistableState && hoistableState.stylesheets.add(_resource);
          }
          textEmbedded && target$jscomp$0.push("<!-- -->");
          JSCompiler_inline_result$jscomp$5 = null;
        }
      else
        props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$5 = isFallback ? null : pushLinkImpl(renderState.hoistableChunks, props));
      return JSCompiler_inline_result$jscomp$5;
    case "script":
      var asyncProp = props.async;
      if (typeof props.src !== "string" || !props.src || !asyncProp || typeof asyncProp === "function" || typeof asyncProp === "symbol" || props.onLoad || props.onError || formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || props.itemProp != null)
        var JSCompiler_inline_result$jscomp$6 = pushScriptImpl(target$jscomp$0, props);
      else {
        var key = props.src;
        if (props.type === "module") {
          var resources = resumableState.moduleScriptResources;
          var preloads = renderState.preloads.moduleScripts;
        } else
          resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
        var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : undefined;
        if (resourceState$jscomp$0 !== EXISTS) {
          resources[key] = EXISTS;
          var scriptProps = props;
          if (resourceState$jscomp$0) {
            resourceState$jscomp$0.length === 2 && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
            var preloadResource$jscomp$0 = preloads.get(key);
            preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
          }
          var resource$jscomp$0 = [];
          renderState.scripts.add(resource$jscomp$0);
          pushScriptImpl(resource$jscomp$0, scriptProps);
        }
        textEmbedded && target$jscomp$0.push("<!-- -->");
        JSCompiler_inline_result$jscomp$6 = null;
      }
      return JSCompiler_inline_result$jscomp$6;
    case "style":
      var insertionMode$jscomp$0 = formatContext.insertionMode, noscriptTagInScope$jscomp$0 = !!(formatContext.tagScope & 1);
      if (hasOwnProperty.call(props, "children")) {
        var children$jscomp$7 = props.children, child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
        (typeof child$jscomp$0 === "function" || typeof child$jscomp$0 === "symbol" || Array.isArray(child$jscomp$0)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", typeof child$jscomp$0 === "function" ? "a Function" : typeof child$jscomp$0 === "symbol" ? "a Sybmol" : "an Array");
      }
      var { precedence: precedence$jscomp$0, href: href$jscomp$0 } = props;
      if (insertionMode$jscomp$0 === SVG_MODE || noscriptTagInScope$jscomp$0 || props.itemProp != null || typeof precedence$jscomp$0 !== "string" || typeof href$jscomp$0 !== "string" || href$jscomp$0 === "") {
        target$jscomp$0.push(startChunkForTag("style"));
        var children$jscomp$8 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
        for (propKey$jscomp$8 in props)
          if (hasOwnProperty.call(props, propKey$jscomp$8)) {
            var propValue$jscomp$8 = props[propKey$jscomp$8];
            if (propValue$jscomp$8 != null)
              switch (propKey$jscomp$8) {
                case "children":
                  children$jscomp$8 = propValue$jscomp$8;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML$jscomp$5 = propValue$jscomp$8;
                  break;
                default:
                  pushAttribute(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
              }
          }
        target$jscomp$0.push(endOfStartTag);
        var child$jscomp$1 = Array.isArray(children$jscomp$8) ? 2 > children$jscomp$8.length ? children$jscomp$8[0] : null : children$jscomp$8;
        typeof child$jscomp$1 !== "function" && typeof child$jscomp$1 !== "symbol" && child$jscomp$1 !== null && child$jscomp$1 !== undefined && target$jscomp$0.push(escapeStyleTextContent(child$jscomp$1));
        pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$8);
        target$jscomp$0.push(endChunkForTag("style"));
        var JSCompiler_inline_result$jscomp$7 = null;
      } else {
        href$jscomp$0.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', href$jscomp$0);
        var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0), resourceState$jscomp$1 = resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : undefined;
        if (resourceState$jscomp$1 !== EXISTS) {
          resumableState.styleResources[href$jscomp$0] = EXISTS;
          resourceState$jscomp$1 && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', href$jscomp$0);
          styleQueue$jscomp$0 ? styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser(href$jscomp$0)) : (styleQueue$jscomp$0 = {
            precedence: escapeTextForBrowser(precedence$jscomp$0),
            rules: [],
            hrefs: [escapeTextForBrowser(href$jscomp$0)],
            sheets: new Map
          }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
          var target = styleQueue$jscomp$0.rules, children$jscomp$9 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
          for (propKey$jscomp$9 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$9)) {
              var propValue$jscomp$9 = props[propKey$jscomp$9];
              if (propValue$jscomp$9 != null)
                switch (propKey$jscomp$9) {
                  case "children":
                    children$jscomp$9 = propValue$jscomp$9;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$6 = propValue$jscomp$9;
                }
            }
          var child$jscomp$2 = Array.isArray(children$jscomp$9) ? 2 > children$jscomp$9.length ? children$jscomp$9[0] : null : children$jscomp$9;
          typeof child$jscomp$2 !== "function" && typeof child$jscomp$2 !== "symbol" && child$jscomp$2 !== null && child$jscomp$2 !== undefined && target.push(escapeStyleTextContent(child$jscomp$2));
          pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$9);
        }
        styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
        textEmbedded && target$jscomp$0.push("<!-- -->");
        JSCompiler_inline_result$jscomp$7 = undefined;
      }
      return JSCompiler_inline_result$jscomp$7;
    case "meta":
      if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || props.itemProp != null)
        var JSCompiler_inline_result$jscomp$8 = pushSelfClosing(target$jscomp$0, props, "meta");
      else
        textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$8 = isFallback ? null : typeof props.charSet === "string" ? pushSelfClosing(renderState.charsetChunks, props, "meta") : props.name === "viewport" ? pushSelfClosing(renderState.viewportChunks, props, "meta") : pushSelfClosing(renderState.hoistableChunks, props, "meta");
      return JSCompiler_inline_result$jscomp$8;
    case "listing":
    case "pre":
      target$jscomp$0.push(startChunkForTag(type));
      var children$jscomp$10 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
      for (propKey$jscomp$10 in props)
        if (hasOwnProperty.call(props, propKey$jscomp$10)) {
          var propValue$jscomp$10 = props[propKey$jscomp$10];
          if (propValue$jscomp$10 != null)
            switch (propKey$jscomp$10) {
              case "children":
                children$jscomp$10 = propValue$jscomp$10;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML$jscomp$7 = propValue$jscomp$10;
                break;
              default:
                pushAttribute(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
            }
        }
      target$jscomp$0.push(endOfStartTag);
      if (innerHTML$jscomp$7 != null) {
        if (children$jscomp$10 != null)
          throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof innerHTML$jscomp$7 !== "object" || !("__html" in innerHTML$jscomp$7))
          throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
        var html = innerHTML$jscomp$7.__html;
        html !== null && html !== undefined && (typeof html === "string" && 0 < html.length && html[0] === `
` ? target$jscomp$0.push(`
`, html) : (checkHtmlStringCoercion(html), target$jscomp$0.push("" + html)));
      }
      typeof children$jscomp$10 === "string" && children$jscomp$10[0] === `
` && target$jscomp$0.push(`
`);
      return children$jscomp$10;
    case "img":
      var { src, srcSet } = props;
      if (!(props.loading === "lazy" || !src && !srcSet || typeof src !== "string" && src != null || typeof srcSet !== "string" && srcSet != null) && props.fetchPriority !== "low" && !!(formatContext.tagScope & 3) === false && (typeof src !== "string" || src[4] !== ":" || src[0] !== "d" && src[0] !== "D" || src[1] !== "a" && src[1] !== "A" || src[2] !== "t" && src[2] !== "T" || src[3] !== "a" && src[3] !== "A") && (typeof srcSet !== "string" || srcSet[4] !== ":" || srcSet[0] !== "d" && srcSet[0] !== "D" || srcSet[1] !== "a" && srcSet[1] !== "A" || srcSet[2] !== "t" && srcSet[2] !== "T" || srcSet[3] !== "a" && srcSet[3] !== "A")) {
        var sizes = typeof props.sizes === "string" ? props.sizes : undefined, key$jscomp$0 = srcSet ? srcSet + `
` + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
        if (resource$jscomp$1) {
          if (props.fetchPriority === "high" || 10 > renderState.highImagePreloads.size)
            promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
        } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
          resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
          var input = props.crossOrigin;
          var crossOrigin = typeof input === "string" ? input === "use-credentials" ? input : "" : undefined;
          var headers = renderState.headers, header;
          headers && 0 < headers.remainingCapacity && (props.fetchPriority === "high" || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
            imageSrcSet: props.srcSet,
            imageSizes: props.sizes,
            crossOrigin,
            integrity: props.integrity,
            nonce: props.nonce,
            type: props.type,
            fetchPriority: props.fetchPriority,
            referrerPolicy: props.refererPolicy
          }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
            rel: "preload",
            as: "image",
            href: srcSet ? undefined : src,
            imageSrcSet: srcSet,
            imageSizes: sizes,
            crossOrigin,
            integrity: props.integrity,
            type: props.type,
            fetchPriority: props.fetchPriority,
            referrerPolicy: props.referrerPolicy
          }), props.fetchPriority === "high" || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
        }
      }
      return pushSelfClosing(target$jscomp$0, props, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return pushSelfClosing(target$jscomp$0, props, type);
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "head":
      if (formatContext.insertionMode < HTML_MODE && renderState.headChunks === null) {
        renderState.headChunks = [];
        var JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(renderState.headChunks, props, "head");
      } else
        JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(target$jscomp$0, props, "head");
      return JSCompiler_inline_result$jscomp$9;
    case "html":
      if (formatContext.insertionMode === ROOT_HTML_MODE && renderState.htmlChunks === null) {
        renderState.htmlChunks = ["<!DOCTYPE html>"];
        var JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(renderState.htmlChunks, props, "html");
      } else
        JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(target$jscomp$0, props, "html");
      return JSCompiler_inline_result$jscomp$10;
    default:
      if (type.indexOf("-") !== -1) {
        target$jscomp$0.push(startChunkForTag(type));
        var children$jscomp$11 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
        for (propKey$jscomp$11 in props)
          if (hasOwnProperty.call(props, propKey$jscomp$11)) {
            var propValue$jscomp$11 = props[propKey$jscomp$11];
            if (propValue$jscomp$11 != null) {
              var attributeName = propKey$jscomp$11;
              switch (propKey$jscomp$11) {
                case "children":
                  children$jscomp$11 = propValue$jscomp$11;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML$jscomp$8 = propValue$jscomp$11;
                  break;
                case "style":
                  pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  attributeName = "class";
                default:
                  if (isAttributeNameSafe(propKey$jscomp$11) && typeof propValue$jscomp$11 !== "function" && typeof propValue$jscomp$11 !== "symbol" && propValue$jscomp$11 !== false) {
                    if (propValue$jscomp$11 === true)
                      propValue$jscomp$11 = "";
                    else if (typeof propValue$jscomp$11 === "object")
                      continue;
                    target$jscomp$0.push(attributeSeparator, attributeName, attributeAssign, escapeTextForBrowser(propValue$jscomp$11), attributeEnd);
                  }
              }
            }
          }
        target$jscomp$0.push(endOfStartTag);
        pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$11);
        return children$jscomp$11;
      }
  }
  return pushStartGenericElement(target$jscomp$0, props, type);
}
function endChunkForTag(tag) {
  var chunk = endTagCache.get(tag);
  chunk === undefined && (chunk = "</" + tag + ">", endTagCache.set(tag, chunk));
  return chunk;
}
function writeBootstrap(destination, renderState) {
  renderState = renderState.bootstrapChunks;
  for (var i = 0;i < renderState.length - 1; i++)
    writeChunk(destination, renderState[i]);
  return i < renderState.length ? (i = renderState[i], renderState.length = 0, !!destination.write(i)) : true;
}
function writeStartPendingSuspenseBoundary(destination, renderState, id) {
  writeChunk(destination, startPendingSuspenseBoundary1);
  if (id === null)
    throw Error("An ID must have been assigned before we can complete the boundary.");
  writeChunk(destination, renderState.boundaryPrefix);
  writeChunk(destination, id.toString(16));
  return !!destination.write(startPendingSuspenseBoundary2);
}
function writeStartSegment(destination, renderState, formatContext, id) {
  switch (formatContext.insertionMode) {
    case ROOT_HTML_MODE:
    case HTML_HTML_MODE:
    case HTML_MODE:
      return writeChunk(destination, startSegmentHTML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), !!destination.write(startSegmentHTML2);
    case SVG_MODE:
      return writeChunk(destination, startSegmentSVG), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), !!destination.write(startSegmentSVG2);
    case MATHML_MODE:
      return writeChunk(destination, startSegmentMathML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), !!destination.write(startSegmentMathML2);
    case HTML_TABLE_MODE:
      return writeChunk(destination, startSegmentTable), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), !!destination.write(startSegmentTable2);
    case HTML_TABLE_BODY_MODE:
      return writeChunk(destination, startSegmentTableBody), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), !!destination.write(startSegmentTableBody2);
    case HTML_TABLE_ROW_MODE:
      return writeChunk(destination, startSegmentTableRow), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), !!destination.write(startSegmentTableRow2);
    case HTML_COLGROUP_MODE:
      return writeChunk(destination, startSegmentColGroup), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), !!destination.write(startSegmentColGroup2);
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
function writeEndSegment(destination, formatContext) {
  switch (formatContext.insertionMode) {
    case ROOT_HTML_MODE:
    case HTML_HTML_MODE:
    case HTML_MODE:
      return !!destination.write(endSegmentHTML);
    case SVG_MODE:
      return !!destination.write(endSegmentSVG);
    case MATHML_MODE:
      return !!destination.write(endSegmentMathML);
    case HTML_TABLE_MODE:
      return !!destination.write(endSegmentTable);
    case HTML_TABLE_BODY_MODE:
      return !!destination.write(endSegmentTableBody);
    case HTML_TABLE_ROW_MODE:
      return !!destination.write(endSegmentTableRow);
    case HTML_COLGROUP_MODE:
      return !!destination.write(endSegmentColGroup);
    default:
      throw Error("Unknown insertion mode. This is a bug in React.");
  }
}
function escapeJSStringsForInstructionScripts(input) {
  return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts, function(match) {
    switch (match) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function escapeJSObjectForInstructionScripts(input) {
  return JSON.stringify(input).replace(regexForJSStringsInScripts, function(match) {
    switch (match) {
      case "&":
        return "\\u0026";
      case ">":
        return "\\u003e";
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function flushStyleTagsLateForBoundary(styleQueue) {
  var { rules, hrefs } = styleQueue;
  0 < rules.length && hrefs.length === 0 && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
  var i = 0;
  if (hrefs.length) {
    writeChunk(this, lateStyleTagResourceOpen1);
    writeChunk(this, styleQueue.precedence);
    for (writeChunk(this, lateStyleTagResourceOpen2);i < hrefs.length - 1; i++)
      writeChunk(this, hrefs[i]), writeChunk(this, spaceSeparator);
    writeChunk(this, hrefs[i]);
    writeChunk(this, lateStyleTagResourceOpen3);
    for (i = 0;i < rules.length; i++)
      writeChunk(this, rules[i]);
    destinationHasCapacity = !!this.write(lateStyleTagTemplateClose);
    currentlyRenderingBoundaryHasStylesToHoist = true;
    rules.length = 0;
    hrefs.length = 0;
  }
}
function hasStylesToHoist(stylesheet) {
  return stylesheet.state !== PREAMBLE ? currentlyRenderingBoundaryHasStylesToHoist = true : false;
}
function writeHoistablesForBoundary(destination, hoistableState, renderState) {
  currentlyRenderingBoundaryHasStylesToHoist = false;
  destinationHasCapacity = true;
  hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
  hoistableState.stylesheets.forEach(hasStylesToHoist);
  currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = true);
  return destinationHasCapacity;
}
function flushResource(resource) {
  for (var i = 0;i < resource.length; i++)
    writeChunk(this, resource[i]);
  resource.length = 0;
}
function flushStyleInPreamble(stylesheet) {
  pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
  for (var i = 0;i < stylesheetFlushingQueue.length; i++)
    writeChunk(this, stylesheetFlushingQueue[i]);
  stylesheetFlushingQueue.length = 0;
  stylesheet.state = PREAMBLE;
}
function flushStylesInPreamble(styleQueue) {
  var hasStylesheets = 0 < styleQueue.sheets.size;
  styleQueue.sheets.forEach(flushStyleInPreamble, this);
  styleQueue.sheets.clear();
  var { rules, hrefs } = styleQueue;
  if (!hasStylesheets || hrefs.length) {
    writeChunk(this, styleTagResourceOpen1);
    writeChunk(this, styleQueue.precedence);
    styleQueue = 0;
    if (hrefs.length) {
      for (writeChunk(this, styleTagResourceOpen2);styleQueue < hrefs.length - 1; styleQueue++)
        writeChunk(this, hrefs[styleQueue]), writeChunk(this, spaceSeparator);
      writeChunk(this, hrefs[styleQueue]);
    }
    writeChunk(this, styleTagResourceOpen3);
    for (styleQueue = 0;styleQueue < rules.length; styleQueue++)
      writeChunk(this, rules[styleQueue]);
    writeChunk(this, styleTagResourceClose);
    rules.length = 0;
    hrefs.length = 0;
  }
}
function preloadLateStyle(stylesheet) {
  if (stylesheet.state === PENDING$1) {
    stylesheet.state = PRELOADED;
    var props = stylesheet.props;
    pushLinkImpl(stylesheetFlushingQueue, {
      rel: "preload",
      as: "style",
      href: stylesheet.props.href,
      crossOrigin: props.crossOrigin,
      fetchPriority: props.fetchPriority,
      integrity: props.integrity,
      media: props.media,
      hrefLang: props.hrefLang,
      referrerPolicy: props.referrerPolicy
    });
    for (stylesheet = 0;stylesheet < stylesheetFlushingQueue.length; stylesheet++)
      writeChunk(this, stylesheetFlushingQueue[stylesheet]);
    stylesheetFlushingQueue.length = 0;
  }
}
function preloadLateStyles(styleQueue) {
  styleQueue.sheets.forEach(preloadLateStyle, this);
  styleQueue.sheets.clear();
}
function writeStyleResourceDependenciesInJS(destination, hoistableState) {
  writeChunk(destination, arrayFirstOpenBracket);
  var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
  hoistableState.stylesheets.forEach(function(resource) {
    if (resource.state !== PREAMBLE)
      if (resource.state === LATE)
        writeChunk(destination, nextArrayOpenBrackChunk), resource = resource.props.href, checkAttributeStringCoercion(resource, "href"), writeChunk(destination, escapeJSObjectForInstructionScripts("" + resource)), writeChunk(destination, arrayCloseBracket), nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
      else {
        writeChunk(destination, nextArrayOpenBrackChunk);
        var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
        writeChunk(destination, escapeJSObjectForInstructionScripts(coercedHref));
        checkAttributeStringCoercion(precedence, "precedence");
        precedence = "" + precedence;
        writeChunk(destination, arrayInterstitial);
        writeChunk(destination, escapeJSObjectForInstructionScripts(precedence));
        for (var propKey in props)
          if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], precedence != null))
            switch (propKey) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                writeStyleResourceAttributeInJS(destination, propKey, precedence);
            }
        writeChunk(destination, arrayCloseBracket);
        nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
        resource.state = LATE;
      }
  });
  writeChunk(destination, arrayCloseBracket);
}
function writeStyleResourceAttributeInJS(destination, name, value) {
  var attributeName = name.toLowerCase();
  switch (typeof value) {
    case "function":
    case "symbol":
      return;
  }
  switch (name) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      attributeName = "class";
      checkAttributeStringCoercion(value, attributeName);
      name = "" + value;
      break;
    case "hidden":
      if (value === false)
        return;
      name = "";
      break;
    case "src":
    case "href":
      value = sanitizeURL(value);
      checkAttributeStringCoercion(value, attributeName);
      name = "" + value;
      break;
    default:
      if (2 < name.length && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N") || !isAttributeNameSafe(name))
        return;
      checkAttributeStringCoercion(value, attributeName);
      name = "" + value;
  }
  writeChunk(destination, arrayInterstitial);
  writeChunk(destination, escapeJSObjectForInstructionScripts(attributeName));
  writeChunk(destination, arrayInterstitial);
  writeChunk(destination, escapeJSObjectForInstructionScripts(name));
}
function createHoistableState() {
  return { styles: new Set, stylesheets: new Set };
}
function prefetchDNS(href) {
  var request = currentRequest ? currentRequest : null;
  if (request) {
    var { resumableState, renderState } = request;
    if (typeof href === "string" && href) {
      if (!resumableState.dnsResources.hasOwnProperty(href)) {
        resumableState.dnsResources[href] = EXISTS;
        resumableState = renderState.headers;
        var header, JSCompiler_temp;
        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity)
          JSCompiler_temp = (header = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
        JSCompiler_temp ? (renderState.resets.dns[href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, { href, rel: "dns-prefetch" }), renderState.preconnects.add(header));
      }
      enqueueFlush(request);
    }
  } else
    previousDispatcher.D(href);
}
function preconnect(href, crossOrigin) {
  var request = currentRequest ? currentRequest : null;
  if (request) {
    var { resumableState, renderState } = request;
    if (typeof href === "string" && href) {
      var bucket = crossOrigin === "use-credentials" ? "credentials" : typeof crossOrigin === "string" ? "anonymous" : "default";
      if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
        resumableState.connectResources[bucket][href] = EXISTS;
        resumableState = renderState.headers;
        var header, JSCompiler_temp;
        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
          JSCompiler_temp = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=preconnect";
          if (typeof crossOrigin === "string") {
            var escapedCrossOrigin = escapeStringForLinkHeaderQuotedParamValueContext(crossOrigin, "crossOrigin");
            JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
          }
          JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
        }
        JSCompiler_temp ? (renderState.resets.connect[bucket][href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
          rel: "preconnect",
          href,
          crossOrigin
        }), renderState.preconnects.add(bucket));
      }
      enqueueFlush(request);
    }
  } else
    previousDispatcher.C(href, crossOrigin);
}
function preload(href, as, options) {
  var request = currentRequest ? currentRequest : null;
  if (request) {
    var { resumableState, renderState } = request;
    if (as && href) {
      switch (as) {
        case "image":
          if (options) {
            var imageSrcSet = options.imageSrcSet;
            var imageSizes = options.imageSizes;
            var fetchPriority = options.fetchPriority;
          }
          var key = imageSrcSet ? imageSrcSet + `
` + (imageSizes || "") : href;
          if (resumableState.imageResources.hasOwnProperty(key))
            return;
          resumableState.imageResources[key] = PRELOAD_NO_CREDS;
          resumableState = renderState.headers;
          var header;
          resumableState && 0 < resumableState.remainingCapacity && fetchPriority === "high" && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(resumableState, assign({ rel: "preload", href: imageSrcSet ? undefined : href, as }, options)), fetchPriority === "high" ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
          break;
        case "style":
          if (resumableState.styleResources.hasOwnProperty(href))
            return;
          imageSrcSet = [];
          pushLinkImpl(imageSrcSet, assign({ rel: "preload", href, as }, options));
          resumableState.styleResources[href] = !options || typeof options.crossOrigin !== "string" && typeof options.integrity !== "string" ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
          renderState.preloads.stylesheets.set(href, imageSrcSet);
          renderState.bulkPreloads.add(imageSrcSet);
          break;
        case "script":
          if (resumableState.scriptResources.hasOwnProperty(href))
            return;
          imageSrcSet = [];
          renderState.preloads.scripts.set(href, imageSrcSet);
          renderState.bulkPreloads.add(imageSrcSet);
          pushLinkImpl(imageSrcSet, assign({ rel: "preload", href, as }, options));
          resumableState.scriptResources[href] = !options || typeof options.crossOrigin !== "string" && typeof options.integrity !== "string" ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
          break;
        default:
          if (resumableState.unknownResources.hasOwnProperty(as)) {
            if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href))
              return;
          } else
            imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
          imageSrcSet[href] = PRELOAD_NO_CREDS;
          if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && as === "font" && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2)))
            renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
          else
            switch (resumableState = [], href = assign({ rel: "preload", href, as }, options), pushLinkImpl(resumableState, href), as) {
              case "font":
                renderState.fontPreloads.add(resumableState);
                break;
              default:
                renderState.bulkPreloads.add(resumableState);
            }
      }
      enqueueFlush(request);
    }
  } else
    previousDispatcher.L(href, as, options);
}
function preloadModule(href, options) {
  var request = currentRequest ? currentRequest : null;
  if (request) {
    var { resumableState, renderState } = request;
    if (href) {
      var as = options && typeof options.as === "string" ? options.as : "script";
      switch (as) {
        case "script":
          if (resumableState.moduleScriptResources.hasOwnProperty(href))
            return;
          as = [];
          resumableState.moduleScriptResources[href] = !options || typeof options.crossOrigin !== "string" && typeof options.integrity !== "string" ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
          renderState.preloads.moduleScripts.set(href, as);
          break;
        default:
          if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
            var resources = resumableState.unknownResources[as];
            if (resources.hasOwnProperty(href))
              return;
          } else
            resources = {}, resumableState.moduleUnknownResources[as] = resources;
          as = [];
          resources[href] = PRELOAD_NO_CREDS;
      }
      pushLinkImpl(as, assign({ rel: "modulepreload", href }, options));
      renderState.bulkPreloads.add(as);
      enqueueFlush(request);
    }
  } else
    previousDispatcher.m(href, options);
}
function preinitStyle(href, precedence, options) {
  var request = currentRequest ? currentRequest : null;
  if (request) {
    var { resumableState, renderState } = request;
    if (href) {
      precedence = precedence || "default";
      var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : undefined;
      resourceState !== EXISTS && (resumableState.styleResources[href] = EXISTS, styleQueue || (styleQueue = {
        precedence: escapeTextForBrowser(precedence),
        rules: [],
        hrefs: [],
        sheets: new Map
      }, renderState.styles.set(precedence, styleQueue)), precedence = {
        state: PENDING$1,
        props: assign({ rel: "stylesheet", href, "data-precedence": precedence }, options)
      }, resourceState && (resourceState.length === 2 && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = PRELOADED), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
    }
  } else
    previousDispatcher.S(href, precedence, options);
}
function preinitScript(src, options) {
  var request = currentRequest ? currentRequest : null;
  if (request) {
    var { resumableState, renderState } = request;
    if (src) {
      var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : undefined;
      resourceState !== EXISTS && (resumableState.scriptResources[src] = EXISTS, options = assign({ src, async: true }, options), resourceState && (resourceState.length === 2 && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
    }
  } else
    previousDispatcher.X(src, options);
}
function preinitModuleScript(src, options) {
  var request = currentRequest ? currentRequest : null;
  if (request) {
    var { resumableState, renderState } = request;
    if (src) {
      var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : undefined;
      resourceState !== EXISTS && (resumableState.moduleScriptResources[src] = EXISTS, options = assign({ src, type: "module", async: true }, options), resourceState && (resourceState.length === 2 && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
    }
  } else
    previousDispatcher.M(src, options);
}
function preloadBootstrapScriptOrModule(resumableState, renderState, href, props) {
  (resumableState.scriptResources.hasOwnProperty(href) || resumableState.moduleScriptResources.hasOwnProperty(href)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', href);
  resumableState.scriptResources[href] = EXISTS;
  resumableState.moduleScriptResources[href] = EXISTS;
  resumableState = [];
  pushLinkImpl(resumableState, props);
  renderState.bootstrapScripts.add(resumableState);
}
function adoptPreloadCredentials(target, preloadState) {
  target.crossOrigin == null && (target.crossOrigin = preloadState[0]);
  target.integrity == null && (target.integrity = preloadState[1]);
}
function getPreloadAsHeader(href, as, params) {
  href = escapeHrefForLinkHeaderURLContext(href);
  as = escapeStringForLinkHeaderQuotedParamValueContext(as, "as");
  as = "<" + href + '>; rel=preload; as="' + as + '"';
  for (var paramName in params)
    hasOwnProperty.call(params, paramName) && (href = params[paramName], typeof href === "string" && (as += "; " + paramName.toLowerCase() + '="' + escapeStringForLinkHeaderQuotedParamValueContext(href, paramName) + '"'));
  return as;
}
function escapeHrefForLinkHeaderURLContext(hrefInput) {
  checkAttributeStringCoercion(hrefInput, "href");
  return ("" + hrefInput).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer);
}
function escapeHrefForLinkHeaderURLContextReplacer(match) {
  switch (match) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function escapeStringForLinkHeaderQuotedParamValueContext(value, name) {
  willCoercionThrow(value) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", name, typeName(value)), testStringCoercion(value));
  return ("" + value).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
}
function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
  switch (match) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function hoistStyleQueueDependency(styleQueue) {
  this.styles.add(styleQueue);
}
function hoistStylesheetDependency(stylesheet) {
  this.stylesheets.add(stylesheet);
}
function getComponentNameFromType(type) {
  if (type == null)
    return null;
  if (typeof type === "function")
    return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
  if (typeof type === "string")
    return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PORTAL_TYPE:
      return "Portal";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
  }
  if (typeof type === "object")
    switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return (type.displayName || "Context") + ".Provider";
      case REACT_CONSUMER_TYPE:
        return (type._context.displayName || "Context") + ".Consumer";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
        return type;
      case REACT_MEMO_TYPE:
        return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {
        }
    }
  return null;
}
function popToNearestCommonAncestor(prev, next) {
  if (prev !== next) {
    prev.context._currentValue = prev.parentValue;
    prev = prev.parent;
    var parentNext = next.parent;
    if (prev === null) {
      if (parentNext !== null)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
    } else {
      if (parentNext === null)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      popToNearestCommonAncestor(prev, parentNext);
    }
    next.context._currentValue = next.value;
  }
}
function popAllPrevious(prev) {
  prev.context._currentValue = prev.parentValue;
  prev = prev.parent;
  prev !== null && popAllPrevious(prev);
}
function pushAllNext(next) {
  var parentNext = next.parent;
  parentNext !== null && pushAllNext(parentNext);
  next.context._currentValue = next.value;
}
function popPreviousToCommonLevel(prev, next) {
  prev.context._currentValue = prev.parentValue;
  prev = prev.parent;
  if (prev === null)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
}
function popNextToCommonLevel(prev, next) {
  var parentNext = next.parent;
  if (parentNext === null)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
  next.context._currentValue = next.value;
}
function switchContext(newSnapshot) {
  var prev = currentActiveSnapshot;
  prev !== newSnapshot && (prev === null ? pushAllNext(newSnapshot) : newSnapshot === null ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
}
function warnOnInvalidCallback(callback) {
  if (callback !== null && typeof callback !== "function") {
    var key = String(callback);
    didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", callback));
  }
}
function warnNoop(publicInstance, callerName) {
  publicInstance = (publicInstance = publicInstance.constructor) && getComponentNameFromType(publicInstance) || "ReactClass";
  var warningKey = publicInstance + "." + callerName;
  didWarnAboutNoopUpdateForComponent[warningKey] || (console.error(`Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, callerName, publicInstance), didWarnAboutNoopUpdateForComponent[warningKey] = true);
}
function pushTreeContext(baseContext, totalChildren, index) {
  var baseIdWithLeadingBit = baseContext.id;
  baseContext = baseContext.overflow;
  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
  baseIdWithLeadingBit &= ~(1 << baseLength);
  index += 1;
  var length = 32 - clz32(totalChildren) + baseLength;
  if (30 < length) {
    var numberOfOverflowBits = baseLength - baseLength % 5;
    length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
    baseIdWithLeadingBit >>= numberOfOverflowBits;
    baseLength -= numberOfOverflowBits;
    return {
      id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
      overflow: length + baseContext
    };
  }
  return {
    id: 1 << length | index << baseLength | baseIdWithLeadingBit,
    overflow: baseContext
  };
}
function clz32Fallback(x) {
  x >>>= 0;
  return x === 0 ? 32 : 31 - (log(x) / LN2 | 0) | 0;
}
function noop$2() {
}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  index === undefined ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$2, noop$2), thenable = index);
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      typeof thenable.status === "string" ? thenable.then(noop$2, noop$2) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
        if (thenable.status === "pending") {
          var fulfilledThenable = thenable;
          fulfilledThenable.status = "fulfilled";
          fulfilledThenable.value = fulfilledValue;
        }
      }, function(error) {
        if (thenable.status === "pending") {
          var rejectedThenable = thenable;
          rejectedThenable.status = "rejected";
          rejectedThenable.reason = error;
        }
      }));
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
function getSuspendedThenable() {
  if (suspendedThenable === null)
    throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  var thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
function resolveCurrentlyRenderingComponent() {
  if (currentlyRenderingComponent === null)
    throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  isInHookUserCodeInDev && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
  return currentlyRenderingComponent;
}
function createHook() {
  if (0 < numberOfReRenders)
    throw Error("Rendered more hooks than during the previous render");
  return { memoizedState: null, queue: null, next: null };
}
function createWorkInProgressHook() {
  workInProgressHook === null ? firstWorkInProgressHook === null ? (isReRender = false, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = true, workInProgressHook = firstWorkInProgressHook) : workInProgressHook.next === null ? (isReRender = false, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = true, workInProgressHook = workInProgressHook.next);
  return workInProgressHook;
}
function getThenableStateAfterSuspending() {
  var state = thenableState;
  thenableState = null;
  return state;
}
function resetHooksState() {
  isInHookUserCodeInDev = false;
  currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  workInProgressHook = renderPhaseUpdates = null;
}
function readContext(context) {
  isInHookUserCodeInDev && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
  return context._currentValue;
}
function basicStateReducer(state, action) {
  return typeof action === "function" ? action(state) : action;
}
function useReducer(reducer, initialArg, init) {
  reducer !== basicStateReducer && (currentHookNameInDev = "useReducer");
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  if (isReRender) {
    init = workInProgressHook.queue;
    initialArg = init.dispatch;
    if (renderPhaseUpdates !== null) {
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(init);
      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(init);
        init = workInProgressHook.memoizedState;
        do {
          var action = firstRenderPhaseUpdate.action;
          isInHookUserCodeInDev = true;
          init = reducer(init, action);
          isInHookUserCodeInDev = false;
          firstRenderPhaseUpdate = firstRenderPhaseUpdate.next;
        } while (firstRenderPhaseUpdate !== null);
        workInProgressHook.memoizedState = init;
        return [init, initialArg];
      }
    }
    return [workInProgressHook.memoizedState, initialArg];
  }
  isInHookUserCodeInDev = true;
  reducer = reducer === basicStateReducer ? typeof initialArg === "function" ? initialArg() : initialArg : init !== undefined ? init(initialArg) : initialArg;
  isInHookUserCodeInDev = false;
  workInProgressHook.memoizedState = reducer;
  reducer = workInProgressHook.queue = { last: null, dispatch: null };
  reducer = reducer.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, reducer);
  return [workInProgressHook.memoizedState, reducer];
}
function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  deps = deps === undefined ? null : deps;
  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;
    if (prevState !== null && deps !== null) {
      a: {
        var JSCompiler_inline_result = prevState[1];
        if (JSCompiler_inline_result === null)
          console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), JSCompiler_inline_result = false;
        else {
          deps.length !== JSCompiler_inline_result.length && console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, currentHookNameInDev, "[" + deps.join(", ") + "]", "[" + JSCompiler_inline_result.join(", ") + "]");
          for (var i = 0;i < JSCompiler_inline_result.length && i < deps.length; i++)
            if (!objectIs(deps[i], JSCompiler_inline_result[i])) {
              JSCompiler_inline_result = false;
              break a;
            }
          JSCompiler_inline_result = true;
        }
      }
      if (JSCompiler_inline_result)
        return prevState[0];
    }
  }
  isInHookUserCodeInDev = true;
  nextCreate = nextCreate();
  isInHookUserCodeInDev = false;
  workInProgressHook.memoizedState = [nextCreate, deps];
  return nextCreate;
}
function dispatchAction(componentIdentity, queue, action) {
  if (25 <= numberOfReRenders)
    throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
  if (componentIdentity === currentlyRenderingComponent)
    if (didScheduleRenderPhaseUpdate = true, componentIdentity = { action, next: null }, renderPhaseUpdates === null && (renderPhaseUpdates = new Map), action = renderPhaseUpdates.get(queue), action === undefined)
      renderPhaseUpdates.set(queue, componentIdentity);
    else {
      for (queue = action;queue.next !== null; )
        queue = queue.next;
      queue.next = componentIdentity;
    }
}
function unsupportedStartTransition() {
  throw Error("startTransition cannot be called during server rendering.");
}
function unsupportedSetOptimisticState() {
  throw Error("Cannot update optimistic state while rendering.");
}
function useActionState(action, initialState, permalink) {
  resolveCurrentlyRenderingComponent();
  var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
  if (typeof action.$$FORM_ACTION === "function") {
    var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
    request = request.formState;
    var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
    if (request !== null && typeof isSignatureEqual === "function") {
      var postbackKey = request[1];
      isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = permalink !== undefined ? "p" + permalink : "k" + Bun.hash(JSON.stringify([componentKeyPath, null, actionStateHookIndex])), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
    }
    var boundAction = action.bind(null, initialState);
    action = function(payload) {
      boundAction(payload);
    };
    typeof boundAction.$$FORM_ACTION === "function" && (action.$$FORM_ACTION = function(prefix) {
      prefix = boundAction.$$FORM_ACTION(prefix);
      permalink !== undefined && (checkAttributeStringCoercion(permalink, "target"), permalink += "", prefix.action = permalink);
      var formData = prefix.data;
      formData && (nextPostbackStateKey === null && (nextPostbackStateKey = permalink !== undefined ? "p" + permalink : "k" + Bun.hash(JSON.stringify([
        componentKeyPath,
        null,
        actionStateHookIndex
      ]))), formData.append("$ACTION_KEY", nextPostbackStateKey));
      return prefix;
    });
    return [initialState, action, false];
  }
  var _boundAction = action.bind(null, initialState);
  return [
    initialState,
    function(payload) {
      _boundAction(payload);
    },
    false
  ];
}
function unwrapThenable(thenable) {
  var index = thenableIndexCounter;
  thenableIndexCounter += 1;
  thenableState === null && (thenableState = []);
  return trackUsedThenable(thenableState, thenable, index);
}
function unsupportedRefresh() {
  throw Error("Cache cannot be refreshed during server rendering.");
}
function noop$1() {
}
function disabledLog() {
}
function disableLogs() {
  if (disabledDepth === 0) {
    prevLog = console.log;
    prevInfo = console.info;
    prevWarn = console.warn;
    prevError = console.error;
    prevGroup = console.group;
    prevGroupCollapsed = console.groupCollapsed;
    prevGroupEnd = console.groupEnd;
    var props = {
      configurable: true,
      enumerable: true,
      value: disabledLog,
      writable: true
    };
    Object.defineProperties(console, {
      info: props,
      log: props,
      warn: props,
      error: props,
      group: props,
      groupCollapsed: props,
      groupEnd: props
    });
  }
  disabledDepth++;
}
function reenableLogs() {
  disabledDepth--;
  if (disabledDepth === 0) {
    var props = { configurable: true, enumerable: true, writable: true };
    Object.defineProperties(console, {
      log: assign({}, props, { value: prevLog }),
      info: assign({}, props, { value: prevInfo }),
      warn: assign({}, props, { value: prevWarn }),
      error: assign({}, props, { value: prevError }),
      group: assign({}, props, { value: prevGroup }),
      groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
      groupEnd: assign({}, props, { value: prevGroupEnd })
    });
  }
  0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
}
function describeBuiltInComponentFrame(name) {
  if (prefix === undefined)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = match && match[1] || "";
      suffix = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + prefix + name + suffix;
}
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry)
    return "";
  var frame = componentFrameCache.get(fn);
  if (frame !== undefined)
    return frame;
  reentry = true;
  frame = Error.prepareStackTrace;
  Error.prepareStackTrace = undefined;
  var previousDispatcher2 = null;
  previousDispatcher2 = ReactSharedInternals.H;
  ReactSharedInternals.H = null;
  disableLogs();
  try {
    var RunInRootFrame = {
      DetermineComponentFrameRoot: function() {
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                var control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x$0) {
                control = x$0;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x$1) {
              control = x$1;
            }
            (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {
            });
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string")
            return [sample.stack, control.stack];
        }
        return [null, null];
      }
    };
    RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
    namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
      for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
        namePropDescriptor++;
      for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
        _RunInRootFrame$Deter++;
      if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
        for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
          _RunInRootFrame$Deter--;
      for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
        if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
          if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
            do
              if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                typeof fn === "function" && componentFrameCache.set(fn, _frame);
                return _frame;
              }
            while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
          }
          break;
        }
    }
  } finally {
    reentry = false, ReactSharedInternals.H = previousDispatcher2, reenableLogs(), Error.prepareStackTrace = frame;
  }
  sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
  typeof fn === "function" && componentFrameCache.set(fn, sampleLines);
  return sampleLines;
}
function describeComponentStackByType(type) {
  if (typeof type === "string")
    return describeBuiltInComponentFrame(type);
  if (typeof type === "function")
    return type.prototype && type.prototype.isReactComponent ? (type = describeNativeComponentFrame(type, true), type) : describeNativeComponentFrame(type, false);
  if (typeof type === "object" && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeNativeComponentFrame(type.render, false);
      case REACT_MEMO_TYPE:
        return describeNativeComponentFrame(type.type, false);
      case REACT_LAZY_TYPE:
        var lazyComponent = type, payload = lazyComponent._payload;
        lazyComponent = lazyComponent._init;
        try {
          type = lazyComponent(payload);
        } catch (x) {
          return describeBuiltInComponentFrame("Lazy");
        }
        return describeComponentStackByType(type);
    }
    if (typeof type.name === "string")
      return payload = type.env, describeBuiltInComponentFrame(type.name + (payload ? " [" + payload + "]" : ""));
  }
  switch (type) {
    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame("SuspenseList");
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame("Suspense");
  }
  return "";
}
function getStackByComponentStackNode(componentStack) {
  try {
    var info = "";
    do
      info += describeComponentStackByType(componentStack.type), componentStack = componentStack.parent;
    while (componentStack);
    return info;
  } catch (x) {
    return `
Error generating stack: ` + x.message + `
` + x.stack;
  }
}
function defaultErrorHandler(error) {
  if (typeof error === "object" && error !== null && typeof error.environmentName === "string") {
    var JSCompiler_inline_result = error.environmentName;
    error = [error].slice(0);
    typeof error[0] === "string" ? error.splice(0, 1, "%c%s%c " + error[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "") : error.splice(0, 0, "%c%s%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "");
    error.unshift(console);
    JSCompiler_inline_result = bind.apply(console.error, error);
    JSCompiler_inline_result();
  } else
    console.error(error);
  return null;
}
function noop() {
}
function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
  var abortSet = new Set;
  this.destination = null;
  this.flushScheduled = false;
  this.resumableState = resumableState;
  this.renderState = renderState;
  this.rootFormatContext = rootFormatContext;
  this.progressiveChunkSize = progressiveChunkSize === undefined ? 12800 : progressiveChunkSize;
  this.status = 10;
  this.fatalError = null;
  this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
  this.completedRootSegment = null;
  this.abortableTasks = abortSet;
  this.pingedTasks = [];
  this.clientRenderedBoundaries = [];
  this.completedBoundaries = [];
  this.partialBoundaries = [];
  this.trackedPostpones = null;
  this.onError = onError === undefined ? defaultErrorHandler : onError;
  this.onPostpone = onPostpone === undefined ? noop : onPostpone;
  this.onAllReady = onAllReady === undefined ? noop : onAllReady;
  this.onShellReady = onShellReady === undefined ? noop : onShellReady;
  this.onShellError = onShellError === undefined ? noop : onShellError;
  this.onFatalError = onFatalError === undefined ? noop : onFatalError;
  this.formState = formState === undefined ? null : formState;
  this.didWarnForKey = null;
}
function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
  resumableState = new RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState);
  renderState = createPendingSegment(resumableState, 0, null, rootFormatContext, false, false);
  renderState.parentFlushed = true;
  children = createRenderTask(resumableState, null, children, -1, null, renderState, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext, null, false);
  pushComponentStack(children);
  resumableState.pingedTasks.push(children);
  return resumableState;
}
function pingTask(request, task) {
  request.pingedTasks.push(task);
  request.pingedTasks.length === 1 && (request.flushScheduled = request.destination !== null, request.trackedPostpones !== null || request.status === 10 ? scheduleMicrotask(function() {
    return performWork(request);
  }) : setTimeout(function() {
    return performWork(request);
  }, 0));
}
function createSuspenseBoundary(request, fallbackAbortableTasks) {
  return {
    status: PENDING,
    rootSegmentID: -1,
    parentFlushed: false,
    pendingTasks: 0,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks,
    errorDigest: null,
    contentState: createHoistableState(),
    fallbackState: createHoistableState(),
    trackedContentKeyPath: null,
    trackedFallbackNode: null,
    errorMessage: null,
    errorStack: null,
    errorComponentStack: null
  };
}
function createRenderTask(request, thenableState2, node, childIndex, blockedBoundary, blockedSegment, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
  request.allPendingTasks++;
  blockedBoundary === null ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
  var task = {
    replay: null,
    node,
    childIndex,
    ping: function() {
      return pingTask(request, task);
    },
    blockedBoundary,
    blockedSegment,
    hoistableState,
    abortSet,
    keyPath,
    formatContext,
    context,
    treeContext,
    componentStack,
    thenableState: thenableState2,
    isFallback
  };
  abortSet.add(task);
  return task;
}
function createReplayTask(request, thenableState2, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
  request.allPendingTasks++;
  blockedBoundary === null ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
  replay.pendingTasks++;
  var task = {
    replay,
    node,
    childIndex,
    ping: function() {
      return pingTask(request, task);
    },
    blockedBoundary,
    blockedSegment: null,
    hoistableState,
    abortSet,
    keyPath,
    formatContext,
    context,
    treeContext,
    componentStack,
    thenableState: thenableState2,
    isFallback
  };
  abortSet.add(task);
  return task;
}
function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
  return {
    status: PENDING,
    id: -1,
    index,
    parentFlushed: false,
    chunks: [],
    children: [],
    parentFormatContext,
    boundary,
    lastPushedText,
    textEmbedded
  };
}
function getCurrentStackInDEV() {
  return currentTaskInDEV === null || currentTaskInDEV.componentStack === null ? "" : getStackByComponentStackNode(currentTaskInDEV.componentStack);
}
function pushServerComponentStack(task, debugInfo) {
  if (debugInfo != null)
    for (var i = 0;i < debugInfo.length; i++) {
      var componentInfo = debugInfo[i];
      typeof componentInfo.name === "string" && (task.componentStack = {
        parent: task.componentStack,
        type: componentInfo,
        owner: componentInfo.owner,
        stack: null
      });
    }
}
function pushComponentStack(task) {
  var node = task.node;
  if (typeof node === "object" && node !== null)
    switch (node.$$typeof) {
      case REACT_ELEMENT_TYPE:
        var { type, _owner: owner } = node;
        pushServerComponentStack(task, node._debugInfo);
        task.componentStack = {
          parent: task.componentStack,
          type,
          owner,
          stack: null
        };
        break;
      case REACT_LAZY_TYPE:
        pushServerComponentStack(task, node._debugInfo);
        break;
      default:
        typeof node.then === "function" && pushServerComponentStack(task, node._debugInfo);
    }
}
function getThrownInfo(node) {
  var errorInfo = {};
  node && Object.defineProperty(errorInfo, "componentStack", {
    configurable: true,
    enumerable: true,
    get: function() {
      var stack = getStackByComponentStackNode(node);
      Object.defineProperty(errorInfo, "componentStack", { value: stack });
      return stack;
    }
  });
  return errorInfo;
}
function encodeErrorForBoundary(boundary, digest, error, thrownInfo, wasAborted) {
  boundary.errorDigest = digest;
  error instanceof Error ? (digest = String(error.message), error = String(error.stack)) : (digest = typeof error === "object" && error !== null ? describeObjectForErrorMessage(error) : String(error), error = null);
  wasAborted = wasAborted ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`;
  boundary.errorMessage = wasAborted + digest;
  boundary.errorStack = error !== null ? wasAborted + error : null;
  boundary.errorComponentStack = thrownInfo.componentStack;
}
function logRecoverableError(request, error, errorInfo) {
  request = request.onError;
  error = request(error, errorInfo);
  if (error != null && typeof error !== "string")
    console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof error);
  else
    return error;
}
function fatalError(request, error) {
  var { onShellError, onFatalError } = request;
  onShellError(error);
  onFatalError(error);
  request.destination !== null ? (request.status = CLOSED, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
}
function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
  var prevThenableState = task.thenableState;
  task.thenableState = null;
  currentlyRenderingComponent = {};
  currentlyRenderingTask = task;
  currentlyRenderingRequest = request;
  currentlyRenderingKeyPath = keyPath;
  isInHookUserCodeInDev = false;
  actionStateCounter = localIdCounter = 0;
  actionStateMatchingIndex = -1;
  thenableIndexCounter = 0;
  thenableState = prevThenableState;
  for (request = callComponentInDEV(Component, props, secondArg);didScheduleRenderPhaseUpdate; )
    didScheduleRenderPhaseUpdate = false, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
  resetHooksState();
  return request;
}
function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex2) {
  var didEmitActionStateMarkers = false;
  if (actionStateCount !== 0 && request.formState !== null) {
    var segment = task.blockedSegment;
    if (segment !== null) {
      didEmitActionStateMarkers = true;
      segment = segment.chunks;
      for (var i = 0;i < actionStateCount; i++)
        i === actionStateMatchingIndex2 ? segment.push("<!--F!-->") : segment.push("<!--F-->");
    }
  }
  actionStateCount = task.keyPath;
  task.keyPath = keyPath;
  hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
  task.keyPath = actionStateCount;
}
function renderElement(request, task, keyPath, type, props, ref) {
  if (typeof type === "function")
    if (type.prototype && type.prototype.isReactComponent) {
      var newProps = props;
      if ("ref" in props) {
        newProps = {};
        for (var propName in props)
          propName !== "ref" && (newProps[propName] = props[propName]);
      }
      var defaultProps = type.defaultProps;
      if (defaultProps) {
        newProps === props && (newProps = assign({}, newProps, props));
        for (var _propName in defaultProps)
          newProps[_propName] === undefined && (newProps[_propName] = defaultProps[_propName]);
      }
      var resolvedProps = newProps;
      var context = emptyContextObject, contextType = type.contextType;
      if ("contextType" in type && contextType !== null && (contextType === undefined || contextType.$$typeof !== REACT_CONTEXT_TYPE) && !didWarnAboutInvalidateContextType.has(type)) {
        didWarnAboutInvalidateContextType.add(type);
        var addendum = contextType === undefined ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof contextType !== "object" ? " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_CONSUMER_TYPE ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
        console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(type) || "Component", addendum);
      }
      typeof contextType === "object" && contextType !== null && (context = contextType._currentValue);
      var instance = new type(resolvedProps, context);
      if (typeof type.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === undefined)) {
        var componentName = getComponentNameFromType(type) || "Component";
        didWarnAboutUninitializedState.has(componentName) || (didWarnAboutUninitializedState.add(componentName), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName));
      }
      if (typeof type.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
        var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
        typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true ? foundWillMountName = "componentWillMount" : typeof instance.UNSAFE_componentWillMount === "function" && (foundWillMountName = "UNSAFE_componentWillMount");
        typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true ? foundWillReceivePropsName = "componentWillReceiveProps" : typeof instance.UNSAFE_componentWillReceiveProps === "function" && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps");
        typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true ? foundWillUpdateName = "componentWillUpdate" : typeof instance.UNSAFE_componentWillUpdate === "function" && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
        if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
          var _componentName = getComponentNameFromType(type) || "Component", newApiName = typeof type.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName), console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`, _componentName, newApiName, foundWillMountName !== null ? `
  ` + foundWillMountName : "", foundWillReceivePropsName !== null ? `
  ` + foundWillReceivePropsName : "", foundWillUpdateName !== null ? `
  ` + foundWillUpdateName : ""));
        }
      }
      var name = getComponentNameFromType(type) || "Component";
      instance.render || (type.prototype && typeof type.prototype.render === "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", name) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", name));
      !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
      instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
      instance.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
      type.childContextTypes && !didWarnAboutChildContextTypes.has(type) && (didWarnAboutChildContextTypes.add(type), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", name));
      type.contextTypes && !didWarnAboutContextTypes$1.has(type) && (didWarnAboutContextTypes$1.add(type), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", name));
      typeof instance.componentShouldUpdate === "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
      type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined" && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(type) || "A pure component");
      typeof instance.componentDidUnmount === "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
      typeof instance.componentDidReceiveProps === "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
      typeof instance.componentWillRecieveProps === "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
      typeof instance.UNSAFE_componentWillRecieveProps === "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
      var hasMutatedProps = instance.props !== resolvedProps;
      instance.props !== undefined && hasMutatedProps && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name);
      instance.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
      typeof instance.getSnapshotBeforeUpdate !== "function" || typeof instance.componentDidUpdate === "function" || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(type)));
      typeof instance.getDerivedStateFromProps === "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
      typeof instance.getDerivedStateFromError === "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
      typeof type.getSnapshotBeforeUpdate === "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
      var state = instance.state;
      state && (typeof state !== "object" || isArrayImpl(state)) && console.error("%s.state: must be set to an object or null", name);
      typeof instance.getChildContext === "function" && typeof type.childContextTypes !== "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
      var initialState = instance.state !== undefined ? instance.state : null;
      instance.updater = classComponentUpdater;
      instance.props = resolvedProps;
      instance.state = initialState;
      var internalInstance = { queue: [], replace: false };
      instance._reactInternals = internalInstance;
      var contextType$jscomp$0 = type.contextType;
      instance.context = typeof contextType$jscomp$0 === "object" && contextType$jscomp$0 !== null ? contextType$jscomp$0._currentValue : emptyContextObject;
      if (instance.state === resolvedProps) {
        var componentName$jscomp$0 = getComponentNameFromType(type) || "Component";
        didWarnAboutDirectlyAssigningPropsToState.has(componentName$jscomp$0) || (didWarnAboutDirectlyAssigningPropsToState.add(componentName$jscomp$0), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName$jscomp$0));
      }
      var getDerivedStateFromProps = type.getDerivedStateFromProps;
      if (typeof getDerivedStateFromProps === "function") {
        var partialState = getDerivedStateFromProps(resolvedProps, initialState);
        if (partialState === undefined) {
          var componentName$jscomp$1 = getComponentNameFromType(type) || "Component";
          didWarnAboutUndefinedDerivedState.has(componentName$jscomp$1) || (didWarnAboutUndefinedDerivedState.add(componentName$jscomp$1), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName$jscomp$1));
        }
        var JSCompiler_inline_result = partialState === null || partialState === undefined ? initialState : assign({}, initialState, partialState);
        instance.state = JSCompiler_inline_result;
      }
      if (typeof type.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount === "function") {
          if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
            var componentName$jscomp$2 = getComponentNameFromType(type) || "Unknown";
            didWarnAboutDeprecatedWillMount[componentName$jscomp$2] || (console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`, componentName$jscomp$2), didWarnAboutDeprecatedWillMount[componentName$jscomp$2] = true);
          }
          instance.componentWillMount();
        }
        typeof instance.UNSAFE_componentWillMount === "function" && instance.UNSAFE_componentWillMount();
        oldState !== instance.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component"), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
        if (internalInstance.queue !== null && 0 < internalInstance.queue.length) {
          var { queue: oldQueue, replace: oldReplace } = internalInstance;
          internalInstance.queue = null;
          internalInstance.replace = false;
          if (oldReplace && oldQueue.length === 1)
            instance.state = oldQueue[0];
          else {
            for (var nextState = oldReplace ? oldQueue[0] : instance.state, dontMutate = true, i = oldReplace ? 1 : 0;i < oldQueue.length; i++) {
              var partial = oldQueue[i], partialState$jscomp$0 = typeof partial === "function" ? partial.call(instance, nextState, resolvedProps, undefined) : partial;
              partialState$jscomp$0 != null && (dontMutate ? (dontMutate = false, nextState = assign({}, nextState, partialState$jscomp$0)) : assign(nextState, partialState$jscomp$0));
            }
            instance.state = nextState;
          }
        } else
          internalInstance.queue = null;
      }
      var nextChildren = callRenderInDEV(instance);
      if (request.status === 12)
        throw null;
      instance.props !== resolvedProps && (didWarnAboutReassigningProps || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(type) || "a component"), didWarnAboutReassigningProps = true);
      var prevKeyPath = task.keyPath;
      task.keyPath = keyPath;
      renderNodeDestructive(request, task, nextChildren, -1);
      task.keyPath = prevKeyPath;
    } else {
      if (type.prototype && typeof type.prototype.render === "function") {
        var componentName$jscomp$3 = getComponentNameFromType(type) || "Unknown";
        didWarnAboutBadClass[componentName$jscomp$3] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName$jscomp$3, componentName$jscomp$3), didWarnAboutBadClass[componentName$jscomp$3] = true);
      }
      var value = renderWithHooks(request, task, keyPath, type, props, undefined);
      if (request.status === 12)
        throw null;
      var hasId = localIdCounter !== 0, actionStateCount = actionStateCounter, actionStateMatchingIndex$jscomp$0 = actionStateMatchingIndex;
      if (type.contextTypes) {
        var _componentName$jscomp$0 = getComponentNameFromType(type) || "Unknown";
        didWarnAboutContextTypes[_componentName$jscomp$0] || (didWarnAboutContextTypes[_componentName$jscomp$0] = true, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", _componentName$jscomp$0));
      }
      type && type.childContextTypes && console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`, type.displayName || type.name || "Component");
      if (typeof type.getDerivedStateFromProps === "function") {
        var _componentName2 = getComponentNameFromType(type) || "Unknown";
        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] || (console.error("%s: Function components do not support getDerivedStateFromProps.", _componentName2), didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = true);
      }
      if (typeof type.contextType === "object" && type.contextType !== null) {
        var _componentName3 = getComponentNameFromType(type) || "Unknown";
        didWarnAboutContextTypeOnFunctionComponent[_componentName3] || (console.error("%s: Function components do not support contextType.", _componentName3), didWarnAboutContextTypeOnFunctionComponent[_componentName3] = true);
      }
      finishFunctionComponent(request, task, keyPath, value, hasId, actionStateCount, actionStateMatchingIndex$jscomp$0);
    }
  else if (typeof type === "string") {
    var segment = task.blockedSegment;
    if (segment === null) {
      var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
      task.formatContext = getChildFormatContext(prevContext, type, props);
      task.keyPath = keyPath;
      renderNode(request, task, children, -1);
      task.formatContext = prevContext;
      task.keyPath = prevKeyPath$jscomp$0;
    } else {
      var _children = pushStartInstance(segment.chunks, type, props, request.resumableState, request.renderState, task.hoistableState, task.formatContext, segment.lastPushedText, task.isFallback);
      segment.lastPushedText = false;
      var { formatContext: _prevContext, keyPath: _prevKeyPath2 } = task;
      task.formatContext = getChildFormatContext(_prevContext, type, props);
      task.keyPath = keyPath;
      renderNode(request, task, _children, -1);
      task.formatContext = _prevContext;
      task.keyPath = _prevKeyPath2;
      a: {
        var target = segment.chunks, resumableState = request.resumableState;
        switch (type) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break a;
          case "body":
            if (_prevContext.insertionMode <= HTML_HTML_MODE) {
              resumableState.hasBody = true;
              break a;
            }
            break;
          case "html":
            if (_prevContext.insertionMode === ROOT_HTML_MODE) {
              resumableState.hasHtml = true;
              break a;
            }
        }
        target.push(endChunkForTag(type));
      }
      segment.lastPushedText = false;
    }
  } else {
    switch (type) {
      case REACT_LEGACY_HIDDEN_TYPE:
      case REACT_DEBUG_TRACING_MODE_TYPE:
      case REACT_STRICT_MODE_TYPE:
      case REACT_PROFILER_TYPE:
      case REACT_FRAGMENT_TYPE:
        var prevKeyPath$jscomp$1 = task.keyPath;
        task.keyPath = keyPath;
        renderNodeDestructive(request, task, props.children, -1);
        task.keyPath = prevKeyPath$jscomp$1;
        return;
      case REACT_OFFSCREEN_TYPE:
        if (props.mode !== "hidden") {
          var prevKeyPath$jscomp$2 = task.keyPath;
          task.keyPath = keyPath;
          renderNodeDestructive(request, task, props.children, -1);
          task.keyPath = prevKeyPath$jscomp$2;
        }
        return;
      case REACT_SUSPENSE_LIST_TYPE:
        var _prevKeyPath3 = task.keyPath;
        task.keyPath = keyPath;
        renderNodeDestructive(request, task, props.children, -1);
        task.keyPath = _prevKeyPath3;
        return;
      case REACT_SCOPE_TYPE:
        throw Error("ReactDOMServer does not yet support scope components.");
      case REACT_SUSPENSE_TYPE:
        a:
          if (task.replay !== null) {
            var _prevKeyPath = task.keyPath;
            task.keyPath = keyPath;
            var _content = props.children;
            try {
              renderNode(request, task, _content, -1);
            } finally {
              task.keyPath = _prevKeyPath;
            }
          } else {
            var { keyPath: prevKeyPath$jscomp$3, blockedBoundary: parentBoundary, hoistableState: parentHoistableState, blockedSegment: parentSegment } = task, fallback = props.fallback, content = props.children, fallbackAbortSet = new Set, newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
            request.trackedPostpones !== null && (newBoundary.trackedContentKeyPath = keyPath);
            var boundarySegment = createPendingSegment(request, parentSegment.chunks.length, newBoundary, task.formatContext, false, false);
            parentSegment.children.push(boundarySegment);
            parentSegment.lastPushedText = false;
            var contentRootSegment = createPendingSegment(request, 0, null, task.formatContext, false, false);
            contentRootSegment.parentFlushed = true;
            if (request.trackedPostpones !== null) {
              var fallbackKeyPath = [keyPath[0], "Suspense Fallback", keyPath[2]], fallbackReplayNode = [
                fallbackKeyPath[1],
                fallbackKeyPath[2],
                [],
                null
              ];
              request.trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
              newBoundary.trackedFallbackNode = fallbackReplayNode;
              task.blockedSegment = boundarySegment;
              task.keyPath = fallbackKeyPath;
              boundarySegment.status = 6;
              try {
                renderNode(request, task, fallback, -1), boundarySegment.lastPushedText && boundarySegment.textEmbedded && boundarySegment.chunks.push("<!-- -->"), boundarySegment.status = COMPLETED;
              } catch (thrownValue) {
                throw boundarySegment.status = request.status === 12 ? 3 : 4, thrownValue;
              } finally {
                task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
              }
              var suspendedPrimaryTask = createRenderTask(request, null, content, -1, newBoundary, contentRootSegment, newBoundary.contentState, task.abortSet, keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
              pushComponentStack(suspendedPrimaryTask);
              request.pingedTasks.push(suspendedPrimaryTask);
            } else {
              task.blockedBoundary = newBoundary;
              task.hoistableState = newBoundary.contentState;
              task.blockedSegment = contentRootSegment;
              task.keyPath = keyPath;
              contentRootSegment.status = 6;
              try {
                if (renderNode(request, task, content, -1), contentRootSegment.lastPushedText && contentRootSegment.textEmbedded && contentRootSegment.chunks.push("<!-- -->"), contentRootSegment.status = COMPLETED, queueCompletedSegment(newBoundary, contentRootSegment), newBoundary.pendingTasks === 0 && newBoundary.status === PENDING) {
                  newBoundary.status = COMPLETED;
                  break a;
                }
              } catch (thrownValue$2) {
                newBoundary.status = CLIENT_RENDERED;
                if (request.status === 12) {
                  contentRootSegment.status = 3;
                  var error = request.fatalError;
                } else
                  contentRootSegment.status = 4, error = thrownValue$2;
                var thrownInfo = getThrownInfo(task.componentStack);
                var errorDigest = logRecoverableError(request, error, thrownInfo);
                encodeErrorForBoundary(newBoundary, errorDigest, error, thrownInfo, false);
                untrackBoundary(request, newBoundary);
              } finally {
                task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
              }
              var suspendedFallbackTask = createRenderTask(request, null, fallback, -1, parentBoundary, boundarySegment, newBoundary.fallbackState, fallbackAbortSet, [keyPath[0], "Suspense Fallback", keyPath[2]], task.formatContext, task.context, task.treeContext, task.componentStack, true);
              pushComponentStack(suspendedFallbackTask);
              request.pingedTasks.push(suspendedFallbackTask);
            }
          }
        return;
    }
    if (typeof type === "object" && type !== null)
      switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          if ("ref" in props) {
            var propsWithoutRef = {};
            for (var key in props)
              key !== "ref" && (propsWithoutRef[key] = props[key]);
          } else
            propsWithoutRef = props;
          var children$jscomp$0 = renderWithHooks(request, task, keyPath, type.render, propsWithoutRef, ref);
          finishFunctionComponent(request, task, keyPath, children$jscomp$0, localIdCounter !== 0, actionStateCounter, actionStateMatchingIndex);
          return;
        case REACT_MEMO_TYPE:
          renderElement(request, task, keyPath, type.type, props, ref);
          return;
        case REACT_PROVIDER_TYPE:
        case REACT_CONTEXT_TYPE:
          var { value: value$jscomp$0, children: children$jscomp$1 } = props;
          var prevSnapshot = task.context;
          var prevKeyPath$jscomp$4 = task.keyPath;
          var prevValue = type._currentValue;
          type._currentValue = value$jscomp$0;
          type._currentRenderer !== undefined && type._currentRenderer !== null && type._currentRenderer !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
          type._currentRenderer = rendererSigil;
          var prevNode = currentActiveSnapshot, newNode = {
            parent: prevNode,
            depth: prevNode === null ? 0 : prevNode.depth + 1,
            context: type,
            parentValue: prevValue,
            value: value$jscomp$0
          };
          currentActiveSnapshot = newNode;
          task.context = newNode;
          task.keyPath = keyPath;
          renderNodeDestructive(request, task, children$jscomp$1, -1);
          var prevSnapshot$jscomp$0 = currentActiveSnapshot;
          if (prevSnapshot$jscomp$0 === null)
            throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          prevSnapshot$jscomp$0.context !== type && console.error("The parent context is not the expected context. This is probably a bug in React.");
          prevSnapshot$jscomp$0.context._currentValue = prevSnapshot$jscomp$0.parentValue;
          type._currentRenderer !== undefined && type._currentRenderer !== null && type._currentRenderer !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
          type._currentRenderer = rendererSigil;
          var JSCompiler_inline_result$jscomp$0 = currentActiveSnapshot = prevSnapshot$jscomp$0.parent;
          task.context = JSCompiler_inline_result$jscomp$0;
          task.keyPath = prevKeyPath$jscomp$4;
          prevSnapshot !== task.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
          return;
        case REACT_CONSUMER_TYPE:
          var context$jscomp$0 = type._context, render = props.children;
          typeof render !== "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
          var newChildren = render(context$jscomp$0._currentValue), prevKeyPath$jscomp$5 = task.keyPath;
          task.keyPath = keyPath;
          renderNodeDestructive(request, task, newChildren, -1);
          task.keyPath = prevKeyPath$jscomp$5;
          return;
        case REACT_LAZY_TYPE:
          var Component = callLazyInitInDEV(type);
          if (request.status === 12)
            throw null;
          renderElement(request, task, keyPath, Component, props, ref);
          return;
      }
    var info = "";
    if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
      info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
    throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((type == null ? type : typeof type) + "." + info));
  }
}
function resumeNode(request, task, segmentId, node, childIndex) {
  var { replay: prevReplay, blockedBoundary } = task, resumedSegment = createPendingSegment(request, 0, null, task.formatContext, false, false);
  resumedSegment.id = segmentId;
  resumedSegment.parentFlushed = true;
  try {
    task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = COMPLETED, blockedBoundary === null ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
  } finally {
    task.replay = prevReplay, task.blockedSegment = null;
  }
}
function renderNodeDestructive(request, task, node, childIndex) {
  task.replay !== null && typeof task.replay.slots === "number" ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack(task), retryNode(request, task), task.componentStack = node);
}
function retryNode(request, task) {
  var { node, childIndex } = task;
  if (node !== null) {
    if (typeof node === "object") {
      switch (node.$$typeof) {
        case REACT_ELEMENT_TYPE:
          var { type, key, props } = node;
          node = props.ref;
          var ref = node !== undefined ? node : null, name = getComponentNameFromType(type), keyOrIndex = key == null ? childIndex === -1 ? 0 : childIndex : key, keyPath = [task.keyPath, name, keyOrIndex];
          if (task.replay !== null) {
            var replay = task.replay;
            childIndex = replay.nodes;
            for (node = 0;node < childIndex.length; node++)
              if (key = childIndex[node], keyOrIndex === key[1]) {
                if (key.length === 4) {
                  if (name !== null && name !== key[0])
                    throw Error("Expected the resume to render <" + key[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering.");
                  var childNodes = key[2];
                  key = key[3];
                  name = task.node;
                  task.replay = {
                    nodes: childNodes,
                    slots: key,
                    pendingTasks: 1
                  };
                  try {
                    renderElement(request, task, keyPath, type, props, ref);
                    if (task.replay.pendingTasks === 1 && 0 < task.replay.nodes.length)
                      throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                    task.replay.pendingTasks--;
                  } catch (x) {
                    if (typeof x === "object" && x !== null && (x === SuspenseException || typeof x.then === "function"))
                      throw task.node === name && (task.replay = replay), x;
                    task.replay.pendingTasks--;
                    props = getThrownInfo(task.componentStack);
                    erroredReplay(request, task.blockedBoundary, x, props, childNodes, key);
                  }
                  task.replay = replay;
                } else {
                  if (type !== REACT_SUSPENSE_TYPE)
                    throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                  a: {
                    type = undefined;
                    ref = key[5];
                    replay = key[2];
                    name = key[3];
                    keyOrIndex = key[4] === null ? [] : key[4][2];
                    key = key[4] === null ? null : key[4][3];
                    var { keyPath: prevKeyPath, replay: previousReplaySet, blockedBoundary: parentBoundary, hoistableState: parentHoistableState } = task, content = props.children;
                    props = props.fallback;
                    var fallbackAbortSet = new Set, resumedBoundary = createSuspenseBoundary(request, fallbackAbortSet);
                    resumedBoundary.parentFlushed = true;
                    resumedBoundary.rootSegmentID = ref;
                    task.blockedBoundary = resumedBoundary;
                    task.hoistableState = resumedBoundary.contentState;
                    task.keyPath = keyPath;
                    task.replay = {
                      nodes: replay,
                      slots: name,
                      pendingTasks: 1
                    };
                    try {
                      renderNode(request, task, content, -1);
                      if (task.replay.pendingTasks === 1 && 0 < task.replay.nodes.length)
                        throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                      task.replay.pendingTasks--;
                      if (resumedBoundary.pendingTasks === 0 && resumedBoundary.status === PENDING) {
                        resumedBoundary.status = COMPLETED;
                        request.completedBoundaries.push(resumedBoundary);
                        break a;
                      }
                    } catch (error) {
                      resumedBoundary.status = CLIENT_RENDERED, childNodes = getThrownInfo(task.componentStack), type = logRecoverableError(request, error, childNodes), encodeErrorForBoundary(resumedBoundary, type, error, childNodes, false), task.replay.pendingTasks--, request.clientRenderedBoundaries.push(resumedBoundary);
                    } finally {
                      task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath;
                    }
                    childNodes = createReplayTask(request, null, { nodes: keyOrIndex, slots: key, pendingTasks: 0 }, props, -1, parentBoundary, resumedBoundary.fallbackState, fallbackAbortSet, [keyPath[0], "Suspense Fallback", keyPath[2]], task.formatContext, task.context, task.treeContext, task.componentStack, true);
                    pushComponentStack(childNodes);
                    request.pingedTasks.push(childNodes);
                  }
                }
                childIndex.splice(node, 1);
                break;
              }
          } else
            renderElement(request, task, keyPath, type, props, ref);
          return;
        case REACT_PORTAL_TYPE:
          throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case REACT_LAZY_TYPE:
          node = callLazyInitInDEV(node);
          if (request.status === 12)
            throw null;
          renderNodeDestructive(request, task, node, childIndex);
          return;
      }
      if (isArrayImpl(node)) {
        renderChildrenArray(request, task, node, childIndex);
        return;
      }
      node === null || typeof node !== "object" ? props = null : (childNodes = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], props = typeof childNodes === "function" ? childNodes : null);
      if (props && (childNodes = props.call(node))) {
        if (childNodes === node) {
          if (childIndex !== -1 || task.componentStack === null || typeof task.componentStack.type !== "function" || Object.prototype.toString.call(task.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(childNodes) !== "[object Generator]")
            didWarnAboutGenerators || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), didWarnAboutGenerators = true;
        } else
          node.entries !== props || didWarnAboutMaps || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true);
        node = childNodes.next();
        if (!node.done) {
          props = [];
          do
            props.push(node.value), node = childNodes.next();
          while (!node.done);
          renderChildrenArray(request, task, props, childIndex);
        }
        return;
      }
      if (typeof node.then === "function")
        return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
      if (node.$$typeof === REACT_CONTEXT_TYPE)
        return renderNodeDestructive(request, task, node._currentValue, childIndex);
      childIndex = Object.prototype.toString.call(node);
      throw Error("Objects are not valid as a React child (found: " + (childIndex === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex) + "). If you meant to render a collection of children, use an array instead.");
    }
    typeof node === "string" ? (childIndex = task.blockedSegment, childIndex !== null && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, node, request.renderState, childIndex.lastPushedText))) : typeof node === "number" || typeof node === "bigint" ? (childIndex = task.blockedSegment, childIndex !== null && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, "" + node, request.renderState, childIndex.lastPushedText))) : (typeof node === "function" && (childIndex = node.displayName || node.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", childIndex, childIndex)), typeof node === "symbol" && console.error(`Symbols are not valid as a React child.
  %s`, String(node)));
  }
}
function renderChildrenArray(request$jscomp$0, task, children, childIndex) {
  var { keyPath: prevKeyPath, componentStack: previousComponentStack } = task;
  pushServerComponentStack(task, task.node._debugInfo);
  if (childIndex !== -1 && (task.keyPath = [task.keyPath, "Fragment", childIndex], task.replay !== null)) {
    for (var replay = task.replay, replayNodes = replay.nodes, j = 0;j < replayNodes.length; j++) {
      var node = replayNodes[j];
      if (node[1] === childIndex) {
        childIndex = node[2];
        node = node[3];
        task.replay = { nodes: childIndex, slots: node, pendingTasks: 1 };
        try {
          renderChildrenArray(request$jscomp$0, task, children, -1);
          if (task.replay.pendingTasks === 1 && 0 < task.replay.nodes.length)
            throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
          task.replay.pendingTasks--;
        } catch (x) {
          if (typeof x === "object" && x !== null && (x === SuspenseException || typeof x.then === "function"))
            throw x;
          task.replay.pendingTasks--;
          children = getThrownInfo(task.componentStack);
          erroredReplay(request$jscomp$0, task.blockedBoundary, x, children, childIndex, node);
        }
        task.replay = replay;
        replayNodes.splice(j, 1);
        break;
      }
    }
    task.keyPath = prevKeyPath;
    task.componentStack = previousComponentStack;
    return;
  }
  replay = task.treeContext;
  replayNodes = children.length;
  if (task.replay !== null && (j = task.replay.slots, j !== null && typeof j === "object")) {
    for (childIndex = 0;childIndex < replayNodes; childIndex++) {
      node = children[childIndex];
      task.treeContext = pushTreeContext(replay, replayNodes, childIndex);
      var resumeSegmentID = j[childIndex];
      typeof resumeSegmentID === "number" ? (resumeNode(request$jscomp$0, task, resumeSegmentID, node, childIndex), delete j[childIndex]) : renderNode(request$jscomp$0, task, node, childIndex);
    }
    task.treeContext = replay;
    task.keyPath = prevKeyPath;
    task.componentStack = previousComponentStack;
    return;
  }
  for (j = 0;j < replayNodes; j++) {
    childIndex = children[j];
    var request = request$jscomp$0;
    node = task;
    resumeSegmentID = childIndex;
    if (resumeSegmentID !== null && typeof resumeSegmentID === "object" && (resumeSegmentID.$$typeof === REACT_ELEMENT_TYPE || resumeSegmentID.$$typeof === REACT_PORTAL_TYPE) && resumeSegmentID._store && (!resumeSegmentID._store.validated && resumeSegmentID.key == null || resumeSegmentID._store.validated === 2)) {
      if (typeof resumeSegmentID._store !== "object")
        throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      resumeSegmentID._store.validated = 1;
      var didWarnForKey = request.didWarnForKey;
      didWarnForKey == null && (didWarnForKey = request.didWarnForKey = new WeakSet);
      request = node.componentStack;
      if (request !== null && !didWarnForKey.has(request)) {
        didWarnForKey.add(request);
        var componentName = getComponentNameFromType(resumeSegmentID.type);
        didWarnForKey = resumeSegmentID._owner;
        var parentOwner = request.owner;
        request = "";
        if (parentOwner && typeof parentOwner.type !== "undefined") {
          var name = getComponentNameFromType(parentOwner.type);
          name && (request = `

Check the render method of \`` + name + "`.");
        }
        request || componentName && (request = `

Check the top-level render call using <` + componentName + ">.");
        componentName = "";
        didWarnForKey != null && parentOwner !== didWarnForKey && (parentOwner = null, typeof didWarnForKey.type !== "undefined" ? parentOwner = getComponentNameFromType(didWarnForKey.type) : typeof didWarnForKey.name === "string" && (parentOwner = didWarnForKey.name), parentOwner && (componentName = " It was passed a child from " + parentOwner + "."));
        didWarnForKey = node.componentStack;
        node.componentStack = {
          parent: node.componentStack,
          type: resumeSegmentID.type,
          owner: resumeSegmentID._owner,
          stack: null
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', request, componentName);
        node.componentStack = didWarnForKey;
      }
    }
    task.treeContext = pushTreeContext(replay, replayNodes, j);
    renderNode(request$jscomp$0, task, childIndex, j);
  }
  task.treeContext = replay;
  task.keyPath = prevKeyPath;
  task.componentStack = previousComponentStack;
}
function untrackBoundary(request, boundary) {
  request = request.trackedPostpones;
  request !== null && (boundary = boundary.trackedContentKeyPath, boundary !== null && (boundary = request.workingMap.get(boundary), boundary !== undefined && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
}
function spawnNewSuspendedReplayTask(request, task, thenableState2) {
  return createReplayTask(request, thenableState2, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
}
function spawnNewSuspendedRenderTask(request, task, thenableState2) {
  var segment = task.blockedSegment, newSegment = createPendingSegment(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, true);
  segment.children.push(newSegment);
  segment.lastPushedText = false;
  return createRenderTask(request, thenableState2, task.node, task.childIndex, task.blockedBoundary, newSegment, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
}
function renderNode(request, task, node, childIndex) {
  var { formatContext: previousFormatContext, context: previousContext, keyPath: previousKeyPath, treeContext: previousTreeContext, componentStack: previousComponentStack, blockedSegment: segment } = task;
  if (segment === null)
    try {
      return renderNodeDestructive(request, task, node, childIndex);
    } catch (thrownValue) {
      if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, typeof node === "object" && node !== null) {
        if (typeof node.then === "function") {
          childIndex = getThenableStateAfterSuspending();
          request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
          node.then(request, request);
          task.formatContext = previousFormatContext;
          task.context = previousContext;
          task.keyPath = previousKeyPath;
          task.treeContext = previousTreeContext;
          task.componentStack = previousComponentStack;
          switchContext(previousContext);
          return;
        }
        if (node.message === "Maximum call stack size exceeded") {
          node = getThenableStateAfterSuspending();
          node = spawnNewSuspendedReplayTask(request, task, node);
          request.pingedTasks.push(node);
          task.formatContext = previousFormatContext;
          task.context = previousContext;
          task.keyPath = previousKeyPath;
          task.treeContext = previousTreeContext;
          task.componentStack = previousComponentStack;
          switchContext(previousContext);
          return;
        }
      }
    }
  else {
    var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
    try {
      return renderNodeDestructive(request, task, node, childIndex);
    } catch (thrownValue$3) {
      if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$3 === SuspenseException ? getSuspendedThenable() : thrownValue$3, typeof node === "object" && node !== null) {
        if (typeof node.then === "function") {
          childIndex = getThenableStateAfterSuspending();
          request = spawnNewSuspendedRenderTask(request, task, childIndex).ping;
          node.then(request, request);
          task.formatContext = previousFormatContext;
          task.context = previousContext;
          task.keyPath = previousKeyPath;
          task.treeContext = previousTreeContext;
          task.componentStack = previousComponentStack;
          switchContext(previousContext);
          return;
        }
        if (node.message === "Maximum call stack size exceeded") {
          node = getThenableStateAfterSuspending();
          node = spawnNewSuspendedRenderTask(request, task, node);
          request.pingedTasks.push(node);
          task.formatContext = previousFormatContext;
          task.context = previousContext;
          task.keyPath = previousKeyPath;
          task.treeContext = previousTreeContext;
          task.componentStack = previousComponentStack;
          switchContext(previousContext);
          return;
        }
      }
    }
  }
  task.formatContext = previousFormatContext;
  task.context = previousContext;
  task.keyPath = previousKeyPath;
  task.treeContext = previousTreeContext;
  switchContext(previousContext);
  throw node;
}
function erroredReplay(request, boundary, error, errorInfo, replayNodes, resumeSlots) {
  var errorDigest = logRecoverableError(request, error, errorInfo);
  abortRemainingReplayNodes(request, boundary, replayNodes, resumeSlots, error, errorDigest, errorInfo, false);
}
function abortTaskSoft(task) {
  var boundary = task.blockedBoundary;
  task = task.blockedSegment;
  task !== null && (task.status = 3, finishedTask(this, boundary, task));
}
function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted) {
  for (var i = 0;i < nodes.length; i++) {
    var node = nodes[i];
    if (node.length === 4)
      abortRemainingReplayNodes(request$jscomp$0, boundary, node[2], node[3], error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted);
    else {
      var request = request$jscomp$0;
      node = node[5];
      var error = error$jscomp$0, errorDigest = errorDigest$jscomp$0, errorInfo = errorInfo$jscomp$0, wasAborted = aborted, resumedBoundary = createSuspenseBoundary(request, new Set);
      resumedBoundary.parentFlushed = true;
      resumedBoundary.rootSegmentID = node;
      resumedBoundary.status = CLIENT_RENDERED;
      encodeErrorForBoundary(resumedBoundary, errorDigest, error, errorInfo, wasAborted);
      resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
    }
  }
  nodes.length = 0;
  if (slots !== null) {
    if (boundary === null)
      throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
    boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, errorDigest$jscomp$0, error$jscomp$0, errorInfo$jscomp$0, aborted), boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
    if (typeof slots === "object")
      for (var index in slots)
        delete slots[index];
  }
}
function abortTask(task, request, error) {
  var { blockedBoundary: boundary, blockedSegment: segment } = task;
  if (segment !== null) {
    if (segment.status === 6)
      return;
    segment.status = 3;
  }
  segment = getThrownInfo(task.componentStack);
  if (boundary === null) {
    if (request.status !== 13 && request.status !== CLOSED) {
      boundary = task.replay;
      if (boundary === null) {
        logRecoverableError(request, error, segment);
        fatalError(request, error);
        return;
      }
      boundary.pendingTasks--;
      boundary.pendingTasks === 0 && 0 < boundary.nodes.length && (task = logRecoverableError(request, error, segment), abortRemainingReplayNodes(request, null, boundary.nodes, boundary.slots, error, task, segment, true));
      request.pendingRootTasks--;
      request.pendingRootTasks === 0 && completeShell(request);
    }
  } else
    boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, task = logRecoverableError(request, error, segment), boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, task, error, segment, true), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
      return abortTask(fallbackTask, request, error);
    }), boundary.fallbackAbortableTasks.clear();
  request.allPendingTasks--;
  request.allPendingTasks === 0 && completeAll(request);
}
function safelyEmitEarlyPreloads(request, shellComplete) {
  try {
    var renderState = request.renderState, onHeaders = renderState.onHeaders;
    if (onHeaders) {
      var headers = renderState.headers;
      if (headers) {
        renderState.headers = null;
        var linkHeader = headers.preconnects;
        headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
        headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
        if (!shellComplete) {
          var queueIter = renderState.styles.values(), queueStep = queueIter.next();
          b:
            for (;0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())
              for (var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next();0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()) {
                var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props;
                var header = getPreloadAsHeader(props$jscomp$0.href, "style", {
                  crossOrigin: props$jscomp$0.crossOrigin,
                  integrity: props$jscomp$0.integrity,
                  nonce: props$jscomp$0.nonce,
                  type: props$jscomp$0.type,
                  fetchPriority: props$jscomp$0.fetchPriority,
                  referrerPolicy: props$jscomp$0.referrerPolicy,
                  media: props$jscomp$0.media
                });
                if (0 <= (headers.remainingCapacity -= header.length + 2))
                  renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = typeof props.crossOrigin === "string" || typeof props.integrity === "string" ? [props.crossOrigin, props.integrity] : PRELOAD_NO_CREDS;
                else
                  break b;
              }
        }
        linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
      }
    }
  } catch (error) {
    logRecoverableError(request, error, {});
  }
}
function completeShell(request) {
  request.trackedPostpones === null && safelyEmitEarlyPreloads(request, true);
  request.onShellError = noop;
  request = request.onShellReady;
  request();
}
function completeAll(request) {
  safelyEmitEarlyPreloads(request, request.trackedPostpones === null ? true : request.completedRootSegment === null || request.completedRootSegment.status !== POSTPONED);
  request = request.onAllReady;
  request();
}
function queueCompletedSegment(boundary, segment) {
  if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null && segment.children[0].id === -1) {
    var childSegment = segment.children[0];
    childSegment.id = segment.id;
    childSegment.parentFlushed = true;
    childSegment.status === COMPLETED && queueCompletedSegment(boundary, childSegment);
  } else
    boundary.completedSegments.push(segment);
}
function finishedTask(request, boundary, segment) {
  if (boundary === null) {
    if (segment !== null && segment.parentFlushed) {
      if (request.completedRootSegment !== null)
        throw Error("There can only be one root segment. This is a bug in React.");
      request.completedRootSegment = segment;
    }
    request.pendingRootTasks--;
    request.pendingRootTasks === 0 && completeShell(request);
  } else
    boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.pendingTasks === 0 ? (boundary.status === PENDING && (boundary.status = COMPLETED), segment !== null && segment.parentFlushed && segment.status === COMPLETED && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.status === COMPLETED && (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear())) : segment !== null && segment.parentFlushed && segment.status === COMPLETED && (queueCompletedSegment(boundary, segment), boundary.completedSegments.length === 1 && boundary.parentFlushed && request.partialBoundaries.push(boundary)));
  request.allPendingTasks--;
  request.allPendingTasks === 0 && completeAll(request);
}
function performWork(request$jscomp$1) {
  if (request$jscomp$1.status !== CLOSED && request$jscomp$1.status !== 13) {
    var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
    ReactSharedInternals.H = HooksDispatcher;
    var prevAsyncDispatcher = ReactSharedInternals.A;
    ReactSharedInternals.A = DefaultAsyncDispatcher;
    var prevRequest = currentRequest;
    currentRequest = request$jscomp$1;
    var prevGetCurrentStackImpl = ReactSharedInternals.getCurrentStack;
    ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
    var prevResumableState = currentResumableState;
    currentResumableState = request$jscomp$1.resumableState;
    try {
      var pingedTasks = request$jscomp$1.pingedTasks, i;
      for (i = 0;i < pingedTasks.length; i++) {
        var request = request$jscomp$1, task = pingedTasks[i], segment = task.blockedSegment;
        if (segment === null) {
          var prevTaskInDEV = undefined, request$jscomp$0 = request;
          request = task;
          if (request.replay.pendingTasks !== 0) {
            switchContext(request.context);
            prevTaskInDEV = currentTaskInDEV;
            currentTaskInDEV = request;
            try {
              typeof request.replay.slots === "number" ? resumeNode(request$jscomp$0, request, request.replay.slots, request.node, request.childIndex) : retryNode(request$jscomp$0, request);
              if (request.replay.pendingTasks === 1 && 0 < request.replay.nodes.length)
                throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
              request.replay.pendingTasks--;
              request.abortSet.delete(request);
              finishedTask(request$jscomp$0, request.blockedBoundary, null);
            } catch (thrownValue) {
              resetHooksState();
              var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
              if (typeof x === "object" && x !== null && typeof x.then === "function") {
                var ping = request.ping;
                x.then(ping, ping);
                request.thenableState = getThenableStateAfterSuspending();
              } else {
                request.replay.pendingTasks--;
                request.abortSet.delete(request);
                var errorInfo = getThrownInfo(request.componentStack);
                erroredReplay(request$jscomp$0, request.blockedBoundary, request$jscomp$0.status === 12 ? request$jscomp$0.fatalError : x, errorInfo, request.replay.nodes, request.replay.slots);
                request$jscomp$0.pendingRootTasks--;
                request$jscomp$0.pendingRootTasks === 0 && completeShell(request$jscomp$0);
                request$jscomp$0.allPendingTasks--;
                request$jscomp$0.allPendingTasks === 0 && completeAll(request$jscomp$0);
              }
            } finally {
              currentTaskInDEV = prevTaskInDEV;
            }
          }
        } else {
          request$jscomp$0 = prevTaskInDEV = undefined;
          var task$jscomp$0 = task, segment$jscomp$0 = segment;
          if (segment$jscomp$0.status === PENDING) {
            segment$jscomp$0.status = 6;
            switchContext(task$jscomp$0.context);
            request$jscomp$0 = currentTaskInDEV;
            currentTaskInDEV = task$jscomp$0;
            var childrenLength = segment$jscomp$0.children.length, chunkLength = segment$jscomp$0.chunks.length;
            try {
              retryNode(request, task$jscomp$0), segment$jscomp$0.lastPushedText && segment$jscomp$0.textEmbedded && segment$jscomp$0.chunks.push("<!-- -->"), task$jscomp$0.abortSet.delete(task$jscomp$0), segment$jscomp$0.status = COMPLETED, finishedTask(request, task$jscomp$0.blockedBoundary, segment$jscomp$0);
            } catch (thrownValue) {
              resetHooksState();
              segment$jscomp$0.children.length = childrenLength;
              segment$jscomp$0.chunks.length = chunkLength;
              var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : request.status === 12 ? request.fatalError : thrownValue;
              if (typeof x$jscomp$0 === "object" && x$jscomp$0 !== null && typeof x$jscomp$0.then === "function") {
                segment$jscomp$0.status = PENDING;
                task$jscomp$0.thenableState = getThenableStateAfterSuspending();
                var ping$jscomp$0 = task$jscomp$0.ping;
                x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
              } else {
                var errorInfo$jscomp$0 = getThrownInfo(task$jscomp$0.componentStack);
                task$jscomp$0.abortSet.delete(task$jscomp$0);
                segment$jscomp$0.status = 4;
                var boundary = task$jscomp$0.blockedBoundary;
                prevTaskInDEV = logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$0);
                boundary === null ? fatalError(request, x$jscomp$0) : (boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, prevTaskInDEV, x$jscomp$0, errorInfo$jscomp$0, false), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)));
                request.allPendingTasks--;
                request.allPendingTasks === 0 && completeAll(request);
              }
            } finally {
              currentTaskInDEV = request$jscomp$0;
            }
          }
        }
      }
      pingedTasks.splice(0, i);
      request$jscomp$1.destination !== null && flushCompletedQueues(request$jscomp$1, request$jscomp$1.destination);
    } catch (error) {
      logRecoverableError(request$jscomp$1, error, {}), fatalError(request$jscomp$1, error);
    } finally {
      currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, ReactSharedInternals.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
    }
  }
}
function flushSubtree(request, destination, segment, hoistableState) {
  segment.parentFlushed = true;
  switch (segment.status) {
    case PENDING:
      segment.id = request.nextSegmentId++;
    case POSTPONED:
      return hoistableState = segment.id, segment.lastPushedText = false, segment.textEmbedded = false, request = request.renderState, writeChunk(destination, placeholder1), writeChunk(destination, request.placeholderPrefix), request = hoistableState.toString(16), writeChunk(destination, request), !!destination.write(placeholder2);
    case COMPLETED:
      segment.status = FLUSHED;
      var r = true, chunks = segment.chunks, chunkIdx = 0;
      segment = segment.children;
      for (var childIdx = 0;childIdx < segment.length; childIdx++) {
        for (r = segment[childIdx];chunkIdx < r.index; chunkIdx++)
          writeChunk(destination, chunks[chunkIdx]);
        r = flushSegment(request, destination, r, hoistableState);
      }
      for (;chunkIdx < chunks.length - 1; chunkIdx++)
        writeChunk(destination, chunks[chunkIdx]);
      chunkIdx < chunks.length && (r = !!destination.write(chunks[chunkIdx]));
      return r;
    default:
      throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
  }
}
function flushSegment(request, destination, segment, hoistableState) {
  var boundary = segment.boundary;
  if (boundary === null)
    return flushSubtree(request, destination, segment, hoistableState);
  boundary.parentFlushed = true;
  if (boundary.status === CLIENT_RENDERED) {
    var { errorDigest, errorMessage, errorStack } = boundary;
    boundary = boundary.errorComponentStack;
    destination.write(startClientRenderedSuspenseBoundary);
    writeChunk(destination, clientRenderedSuspenseBoundaryError1);
    errorDigest && (writeChunk(destination, clientRenderedSuspenseBoundaryError1A), writeChunk(destination, escapeTextForBrowser(errorDigest)), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
    errorMessage && (writeChunk(destination, clientRenderedSuspenseBoundaryError1B), writeChunk(destination, escapeTextForBrowser(errorMessage)), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
    errorStack && (writeChunk(destination, clientRenderedSuspenseBoundaryError1C), writeChunk(destination, escapeTextForBrowser(errorStack)), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
    boundary && (writeChunk(destination, clientRenderedSuspenseBoundaryError1D), writeChunk(destination, escapeTextForBrowser(boundary)), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
    destination.write(clientRenderedSuspenseBoundaryError2);
    flushSubtree(request, destination, segment, hoistableState);
  } else if (boundary.status !== COMPLETED)
    boundary.status === PENDING && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), hoistableState && (boundary = boundary.fallbackState, boundary.styles.forEach(hoistStyleQueueDependency, hoistableState), boundary.stylesheets.forEach(hoistStylesheetDependency, hoistableState)), flushSubtree(request, destination, segment, hoistableState);
  else if (boundary.byteSize > request.progressiveChunkSize)
    boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), flushSubtree(request, destination, segment, hoistableState);
  else {
    hoistableState && (segment = boundary.contentState, segment.styles.forEach(hoistStyleQueueDependency, hoistableState), segment.stylesheets.forEach(hoistStylesheetDependency, hoistableState));
    destination.write(startCompletedSuspenseBoundary);
    segment = boundary.completedSegments;
    if (segment.length !== 1)
      throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
    flushSegment(request, destination, segment[0], hoistableState);
  }
  return !!destination.write(endSuspenseBoundary);
}
function flushSegmentContainer(request, destination, segment, hoistableState) {
  writeStartSegment(destination, request.renderState, segment.parentFormatContext, segment.id);
  flushSegment(request, destination, segment, hoistableState);
  return writeEndSegment(destination, segment.parentFormatContext);
}
function flushCompletedBoundary(request, destination, boundary) {
  for (var completedSegments = boundary.completedSegments, i = 0;i < completedSegments.length; i++)
    flushPartiallyCompletedSegment(request, destination, boundary, completedSegments[i]);
  completedSegments.length = 0;
  writeHoistablesForBoundary(destination, boundary.contentState, request.renderState);
  completedSegments = request.resumableState;
  request = request.renderState;
  i = boundary.rootSegmentID;
  boundary = boundary.contentState;
  var requiresStyleInsertion = request.stylesToHoist;
  request.stylesToHoist = false;
  writeChunk(destination, request.startInlineScript);
  requiresStyleInsertion ? (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions = completedSegments.instructions | SentStyleInsertionFunction | SentCompleteBoundaryFunction, writeChunk(destination, completeBoundaryWithStylesScript1FullBoth)) : (completedSegments.instructions & SentStyleInsertionFunction) === NothingSent ? (completedSegments.instructions |= SentStyleInsertionFunction, writeChunk(destination, completeBoundaryWithStylesScript1FullPartial)) : writeChunk(destination, completeBoundaryWithStylesScript1Partial) : (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions |= SentCompleteBoundaryFunction, writeChunk(destination, completeBoundaryScript1Full)) : writeChunk(destination, completeBoundaryScript1Partial);
  completedSegments = i.toString(16);
  writeChunk(destination, request.boundaryPrefix);
  writeChunk(destination, completedSegments);
  writeChunk(destination, completeBoundaryScript2);
  writeChunk(destination, request.segmentPrefix);
  writeChunk(destination, completedSegments);
  requiresStyleInsertion ? (writeChunk(destination, completeBoundaryScript3a), writeStyleResourceDependenciesInJS(destination, boundary)) : writeChunk(destination, completeBoundaryScript3b);
  boundary = !!destination.write(completeBoundaryScriptEnd);
  return writeBootstrap(destination, request) && boundary;
}
function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
  if (segment.status === FLUSHED)
    return true;
  var hoistableState = boundary.contentState, segmentID = segment.id;
  if (segmentID === -1) {
    if ((segment.id = boundary.rootSegmentID) === -1)
      throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
    return flushSegmentContainer(request, destination, segment, hoistableState);
  }
  if (segmentID === boundary.rootSegmentID)
    return flushSegmentContainer(request, destination, segment, hoistableState);
  flushSegmentContainer(request, destination, segment, hoistableState);
  boundary = request.resumableState;
  request = request.renderState;
  writeChunk(destination, request.startInlineScript);
  (boundary.instructions & SentCompleteSegmentFunction) === NothingSent ? (boundary.instructions |= SentCompleteSegmentFunction, writeChunk(destination, completeSegmentScript1Full)) : writeChunk(destination, completeSegmentScript1Partial);
  writeChunk(destination, request.segmentPrefix);
  segmentID = segmentID.toString(16);
  writeChunk(destination, segmentID);
  writeChunk(destination, completeSegmentScript2);
  writeChunk(destination, request.placeholderPrefix);
  writeChunk(destination, segmentID);
  destination = !!destination.write(completeSegmentScriptEnd);
  return destination;
}
function flushCompletedQueues(request, destination) {
  try {
    if (!(0 < request.pendingRootTasks)) {
      var i, completedRootSegment = request.completedRootSegment;
      if (completedRootSegment !== null) {
        if (completedRootSegment.status === POSTPONED)
          return;
        var renderState = request.renderState, htmlChunks = renderState.htmlChunks, headChunks = renderState.headChunks, i$jscomp$0;
        if (htmlChunks) {
          for (i$jscomp$0 = 0;i$jscomp$0 < htmlChunks.length; i$jscomp$0++)
            writeChunk(destination, htmlChunks[i$jscomp$0]);
          if (headChunks)
            for (i$jscomp$0 = 0;i$jscomp$0 < headChunks.length; i$jscomp$0++)
              writeChunk(destination, headChunks[i$jscomp$0]);
          else
            writeChunk(destination, startChunkForTag("head")), writeChunk(destination, endOfStartTag);
        } else if (headChunks)
          for (i$jscomp$0 = 0;i$jscomp$0 < headChunks.length; i$jscomp$0++)
            writeChunk(destination, headChunks[i$jscomp$0]);
        var charsetChunks = renderState.charsetChunks;
        for (i$jscomp$0 = 0;i$jscomp$0 < charsetChunks.length; i$jscomp$0++)
          writeChunk(destination, charsetChunks[i$jscomp$0]);
        charsetChunks.length = 0;
        renderState.preconnects.forEach(flushResource, destination);
        renderState.preconnects.clear();
        var viewportChunks = renderState.viewportChunks;
        for (i$jscomp$0 = 0;i$jscomp$0 < viewportChunks.length; i$jscomp$0++)
          writeChunk(destination, viewportChunks[i$jscomp$0]);
        viewportChunks.length = 0;
        renderState.fontPreloads.forEach(flushResource, destination);
        renderState.fontPreloads.clear();
        renderState.highImagePreloads.forEach(flushResource, destination);
        renderState.highImagePreloads.clear();
        renderState.styles.forEach(flushStylesInPreamble, destination);
        var importMapChunks = renderState.importMapChunks;
        for (i$jscomp$0 = 0;i$jscomp$0 < importMapChunks.length; i$jscomp$0++)
          writeChunk(destination, importMapChunks[i$jscomp$0]);
        importMapChunks.length = 0;
        renderState.bootstrapScripts.forEach(flushResource, destination);
        renderState.scripts.forEach(flushResource, destination);
        renderState.scripts.clear();
        renderState.bulkPreloads.forEach(flushResource, destination);
        renderState.bulkPreloads.clear();
        var hoistableChunks = renderState.hoistableChunks;
        for (i$jscomp$0 = 0;i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)
          writeChunk(destination, hoistableChunks[i$jscomp$0]);
        hoistableChunks.length = 0;
        htmlChunks && headChunks === null && writeChunk(destination, endChunkForTag("head"));
        flushSegment(request, destination, completedRootSegment, null);
        request.completedRootSegment = null;
        writeBootstrap(destination, request.renderState);
      }
      var renderState$jscomp$0 = request.renderState;
      completedRootSegment = 0;
      var viewportChunks$jscomp$0 = renderState$jscomp$0.viewportChunks;
      for (completedRootSegment = 0;completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)
        writeChunk(destination, viewportChunks$jscomp$0[completedRootSegment]);
      viewportChunks$jscomp$0.length = 0;
      renderState$jscomp$0.preconnects.forEach(flushResource, destination);
      renderState$jscomp$0.preconnects.clear();
      renderState$jscomp$0.fontPreloads.forEach(flushResource, destination);
      renderState$jscomp$0.fontPreloads.clear();
      renderState$jscomp$0.highImagePreloads.forEach(flushResource, destination);
      renderState$jscomp$0.highImagePreloads.clear();
      renderState$jscomp$0.styles.forEach(preloadLateStyles, destination);
      renderState$jscomp$0.scripts.forEach(flushResource, destination);
      renderState$jscomp$0.scripts.clear();
      renderState$jscomp$0.bulkPreloads.forEach(flushResource, destination);
      renderState$jscomp$0.bulkPreloads.clear();
      var hoistableChunks$jscomp$0 = renderState$jscomp$0.hoistableChunks;
      for (completedRootSegment = 0;completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)
        writeChunk(destination, hoistableChunks$jscomp$0[completedRootSegment]);
      hoistableChunks$jscomp$0.length = 0;
      var clientRenderedBoundaries = request.clientRenderedBoundaries;
      for (i = 0;i < clientRenderedBoundaries.length; i++) {
        var boundary = clientRenderedBoundaries[i];
        renderState$jscomp$0 = destination;
        var { resumableState, renderState: renderState$jscomp$1 } = request, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
        writeChunk(renderState$jscomp$0, renderState$jscomp$1.startInlineScript);
        (resumableState.instructions & SentClientRenderFunction) === NothingSent ? (resumableState.instructions |= SentClientRenderFunction, writeChunk(renderState$jscomp$0, clientRenderScript1Full)) : writeChunk(renderState$jscomp$0, clientRenderScript1Partial);
        writeChunk(renderState$jscomp$0, renderState$jscomp$1.boundaryPrefix);
        writeChunk(renderState$jscomp$0, id.toString(16));
        writeChunk(renderState$jscomp$0, clientRenderScript1A);
        if (errorDigest || errorMessage || errorStack || errorComponentStack)
          writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, escapeJSStringsForInstructionScripts(errorDigest || ""));
        if (errorMessage || errorStack || errorComponentStack)
          writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, escapeJSStringsForInstructionScripts(errorMessage || ""));
        if (errorStack || errorComponentStack)
          writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, escapeJSStringsForInstructionScripts(errorStack || ""));
        errorComponentStack && (writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, escapeJSStringsForInstructionScripts(errorComponentStack)));
        var JSCompiler_inline_result = !!renderState$jscomp$0.write(clientRenderScriptEnd);
        if (!JSCompiler_inline_result) {
          request.destination = null;
          i++;
          clientRenderedBoundaries.splice(0, i);
          return;
        }
      }
      clientRenderedBoundaries.splice(0, i);
      var completedBoundaries = request.completedBoundaries;
      for (i = 0;i < completedBoundaries.length; i++)
        if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
          request.destination = null;
          i++;
          completedBoundaries.splice(0, i);
          return;
        }
      completedBoundaries.splice(0, i);
      var partialBoundaries = request.partialBoundaries;
      for (i = 0;i < partialBoundaries.length; i++) {
        a: {
          clientRenderedBoundaries = request;
          boundary = destination;
          var boundary$jscomp$0 = partialBoundaries[i], completedSegments = boundary$jscomp$0.completedSegments;
          for (JSCompiler_inline_result = 0;JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)
            if (!flushPartiallyCompletedSegment(clientRenderedBoundaries, boundary, boundary$jscomp$0, completedSegments[JSCompiler_inline_result])) {
              JSCompiler_inline_result++;
              completedSegments.splice(0, JSCompiler_inline_result);
              var JSCompiler_inline_result$jscomp$0 = false;
              break a;
            }
          completedSegments.splice(0, JSCompiler_inline_result);
          JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(boundary, boundary$jscomp$0.contentState, clientRenderedBoundaries.renderState);
        }
        if (!JSCompiler_inline_result$jscomp$0) {
          request.destination = null;
          i++;
          partialBoundaries.splice(0, i);
          return;
        }
      }
      partialBoundaries.splice(0, i);
      var largeBoundaries = request.completedBoundaries;
      for (i = 0;i < largeBoundaries.length; i++)
        if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
          request.destination = null;
          i++;
          largeBoundaries.splice(0, i);
          return;
        }
      largeBoundaries.splice(0, i);
    }
  } finally {
    request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 ? (request.flushScheduled = false, i = request.resumableState, i.hasBody && writeChunk(destination, endChunkForTag("body")), i.hasHtml && writeChunk(destination, endChunkForTag("html")), flushBuffered(destination), request.abortableTasks.size !== 0 && console.error("There was still abortable task at the root when we closed. This is a bug in React."), request.status = CLOSED, destination.end(), request.destination = null) : flushBuffered(destination);
  }
}
function startWork(request) {
  request.flushScheduled = request.destination !== null;
  scheduleMicrotask(function() {
    return performWork(request);
  });
  setTimeout(function() {
    request.status === 10 && (request.status = 11);
    request.trackedPostpones === null && safelyEmitEarlyPreloads(request, request.pendingRootTasks === 0);
  }, 0);
}
function enqueueFlush(request) {
  request.flushScheduled === false && request.pingedTasks.length === 0 && request.destination !== null && (request.flushScheduled = true, setTimeout(function() {
    var destination = request.destination;
    destination ? flushCompletedQueues(request, destination) : request.flushScheduled = false;
  }, 0));
}
function abort(request, reason) {
  if (request.status === 11 || request.status === 10)
    request.status = 12;
  try {
    var abortableTasks = request.abortableTasks;
    if (0 < abortableTasks.size) {
      var error = reason === undefined ? Error("The render was aborted by the server without a reason.") : typeof reason === "object" && reason !== null && typeof reason.then === "function" ? Error("The render was aborted by the server with a promise.") : reason;
      request.fatalError = error;
      abortableTasks.forEach(function(task) {
        return abortTask(task, request, error);
      });
      abortableTasks.clear();
    }
    request.destination !== null && flushCompletedQueues(request, request.destination);
  } catch (error$4) {
    logRecoverableError(request, error$4, {}), fatalError(request, error$4);
  }
}
var React, ReactDOM, REACT_ELEMENT_TYPE, REACT_PORTAL_TYPE, REACT_FRAGMENT_TYPE, REACT_STRICT_MODE_TYPE, REACT_PROFILER_TYPE, REACT_PROVIDER_TYPE, REACT_CONSUMER_TYPE, REACT_CONTEXT_TYPE, REACT_FORWARD_REF_TYPE, REACT_SUSPENSE_TYPE, REACT_SUSPENSE_LIST_TYPE, REACT_MEMO_TYPE, REACT_LAZY_TYPE, REACT_SCOPE_TYPE, REACT_DEBUG_TRACING_MODE_TYPE, REACT_OFFSCREEN_TYPE, REACT_LEGACY_HIDDEN_TYPE, REACT_MEMO_CACHE_SENTINEL, MAYBE_ITERATOR_SYMBOL, isArrayImpl, jsxPropsParents, jsxChildrenParents, CLIENT_REFERENCE_TAG, scheduleMicrotask, assign, hasOwnProperty, VALID_ATTRIBUTE_NAME_REGEX, illegalAttributeNameCache, validatedAttributeNameCache, unitlessNumbers, aliases, hasReadOnlyValue, ariaProperties, warnedProperties$1, rARIA$1, rARIACamel$1, didWarnValueNull = false, possibleStandardNames, warnedProperties, EVENT_NAME_REGEX, INVALID_EVENT_NAME_REGEX, rARIA, rARIACamel, badVendoredStyleNamePattern, msPattern$1, hyphenPattern, badStyleValueWithSemicolonPattern, warnedStyleNames, warnedStyleValues, warnedForNaNValue = false, warnedForInfinityValue = false, matchHtmlRegExp, uppercasePattern, msPattern, isJavaScriptProtocol, ReactSharedInternals, ReactDOMSharedInternals, NotPending, previousDispatcher, NothingSent = 0, SentCompleteSegmentFunction = 1, SentCompleteBoundaryFunction = 2, SentClientRenderFunction = 4, SentStyleInsertionFunction = 8, EXISTS = null, PRELOAD_NO_CREDS, scriptRegex, didWarnForNewBooleanPropsWithEmptyValue, ROOT_HTML_MODE = 0, HTML_HTML_MODE = 1, HTML_MODE = 2, SVG_MODE = 3, MATHML_MODE = 4, HTML_TABLE_MODE = 5, HTML_TABLE_BODY_MODE = 6, HTML_TABLE_ROW_MODE = 7, HTML_COLGROUP_MODE = 8, styleNameCache, styleAttributeStart = ' style="', styleAssign = ":", styleSeparator = ";", attributeSeparator = " ", attributeAssign = '="', attributeEnd = '"', attributeEmptyString = '=""', actionJavaScriptURL, endOfStartTag = ">", endOfStartTagSelfClosing = "/>", didWarnDefaultInputValue = false, didWarnDefaultChecked = false, didWarnDefaultSelectValue = false, didWarnDefaultTextareaValue = false, didWarnInvalidOptionChildren = false, didWarnInvalidOptionInnerHTML = false, didWarnSelectedSetOnOption = false, didWarnFormActionType = false, didWarnFormActionName = false, didWarnFormActionTarget = false, didWarnFormActionMethod = false, formReplayingRuntimeScript = `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, styleRegex, VALID_TAG_REGEX, validatedTagCache, endTagCache, placeholder1 = '<template id="', placeholder2 = '"></template>', startCompletedSuspenseBoundary = "<!--$-->", startPendingSuspenseBoundary1 = '<!--$?--><template id="', startPendingSuspenseBoundary2 = '"></template>', startClientRenderedSuspenseBoundary = "<!--$!-->", endSuspenseBoundary = "<!--/$-->", clientRenderedSuspenseBoundaryError1 = "<template", clientRenderedSuspenseBoundaryErrorAttrInterstitial = '"', clientRenderedSuspenseBoundaryError1A = ' data-dgst="', clientRenderedSuspenseBoundaryError1B = ' data-msg="', clientRenderedSuspenseBoundaryError1C = ' data-stck="', clientRenderedSuspenseBoundaryError1D = ' data-cstck="', clientRenderedSuspenseBoundaryError2 = "></template>", startSegmentHTML = '<div hidden id="', startSegmentHTML2 = '">', endSegmentHTML = "</div>", startSegmentSVG = '<svg aria-hidden="true" style="display:none" id="', startSegmentSVG2 = '">', endSegmentSVG = "</svg>", startSegmentMathML = '<math aria-hidden="true" style="display:none" id="', startSegmentMathML2 = '">', endSegmentMathML = "</math>", startSegmentTable = '<table hidden id="', startSegmentTable2 = '">', endSegmentTable = "</table>", startSegmentTableBody = '<table hidden><tbody id="', startSegmentTableBody2 = '">', endSegmentTableBody = "</tbody></table>", startSegmentTableRow = '<table hidden><tr id="', startSegmentTableRow2 = '">', endSegmentTableRow = "</tr></table>", startSegmentColGroup = '<table hidden><colgroup id="', startSegmentColGroup2 = '">', endSegmentColGroup = "</colgroup></table>", completeSegmentScript1Full = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', completeSegmentScript1Partial = '$RS("', completeSegmentScript2 = '","', completeSegmentScriptEnd = '")</script>', completeBoundaryScript1Full = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("', completeBoundaryScript1Partial = '$RC("', completeBoundaryWithStylesScript1FullBoth = `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, completeBoundaryWithStylesScript1FullPartial = `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, completeBoundaryWithStylesScript1Partial = '$RR("', completeBoundaryScript2 = '","', completeBoundaryScript3a = '",', completeBoundaryScript3b = '"', completeBoundaryScriptEnd = ")</script>", clientRenderScript1Full = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', clientRenderScript1Partial = '$RX("', clientRenderScript1A = '"', clientRenderErrorScriptArgInterstitial = ",", clientRenderScriptEnd = ")</script>", regexForJSStringsInInstructionScripts, regexForJSStringsInScripts, lateStyleTagResourceOpen1 = '<style media="not all" data-precedence="', lateStyleTagResourceOpen2 = '" data-href="', lateStyleTagResourceOpen3 = '">', lateStyleTagTemplateClose = "</style>", currentlyRenderingBoundaryHasStylesToHoist = false, destinationHasCapacity = true, stylesheetFlushingQueue, styleTagResourceOpen1 = '<style data-precedence="', styleTagResourceOpen2 = '" data-href="', spaceSeparator = " ", styleTagResourceOpen3 = '">', styleTagResourceClose = "</style>", arrayFirstOpenBracket = "[", arraySubsequentOpenBracket = ",[", arrayInterstitial = ",", arrayCloseBracket = "]", PENDING$1 = 0, PRELOADED = 1, PREAMBLE = 2, LATE = 3, regexForHrefInLinkHeaderURLContext, regexForLinkHeaderQuotedParamValueContext, bind, REACT_CLIENT_REFERENCE, emptyContextObject, rendererSigil, currentActiveSnapshot = null, didWarnAboutNoopUpdateForComponent, didWarnAboutDeprecatedWillMount, didWarnAboutUninitializedState, didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate, didWarnAboutLegacyLifecyclesAndDerivedState, didWarnAboutUndefinedDerivedState, didWarnAboutDirectlyAssigningPropsToState, didWarnAboutContextTypes$1, didWarnAboutChildContextTypes, didWarnAboutInvalidateContextType, didWarnOnInvalidCallback, classComponentUpdater, emptyTreeContext, clz32, log, LN2, SuspenseException, suspendedThenable = null, objectIs, currentlyRenderingComponent = null, currentlyRenderingTask = null, currentlyRenderingRequest = null, currentlyRenderingKeyPath = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = false, didScheduleRenderPhaseUpdate = false, localIdCounter = 0, actionStateCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, thenableState = null, renderPhaseUpdates = null, numberOfReRenders = 0, isInHookUserCodeInDev = false, currentHookNameInDev, HooksDispatcher, currentResumableState = null, currentTaskInDEV = null, DefaultAsyncDispatcher, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd, prefix, suffix, reentry = false, componentFrameCache, callComponent, callComponentInDEV, callRender, callRenderInDEV, callLazyInit, callLazyInitInDEV, CLIENT_RENDERED = 4, PENDING = 0, COMPLETED = 1, FLUSHED = 2, POSTPONED = 5, CLOSED = 14, currentRequest = null, didWarnAboutBadClass, didWarnAboutContextTypes, didWarnAboutContextTypeOnFunctionComponent, didWarnAboutGetDerivedStateOnFunctionComponent, didWarnAboutReassigningProps = false, didWarnAboutGenerators = false, didWarnAboutMaps = false, isomorphicReactPackageVersion$jscomp$inline_702, $renderToReadableStream = function(children, options) {
  return new Promise(function(resolve, reject) {
    var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
      onAllReady = res;
      onFatalError = rej;
    }), onHeaders = options ? options.onHeaders : undefined, onHeadersImpl;
    onHeaders && (onHeadersImpl = function(headersDescriptor) {
      onHeaders(new Headers(headersDescriptor));
    });
    var resumableState = createResumableState(options ? options.identifierPrefix : undefined, options ? options.unstable_externalRuntimeSrc : undefined, options ? options.bootstrapScriptContent : undefined, options ? options.bootstrapScripts : undefined, options ? options.bootstrapModules : undefined), request$jscomp$0 = createRequest(children, resumableState, createRenderState(resumableState, options ? options.nonce : undefined, options ? options.unstable_externalRuntimeSrc : undefined, options ? options.importMap : undefined, onHeadersImpl, options ? options.maxHeadersLength : undefined), createRootFormatContext(options ? options.namespaceURI : undefined), options ? options.progressiveChunkSize : undefined, options ? options.onError : undefined, onAllReady, function() {
      var stream = new ReadableStream({
        type: "direct",
        pull: function(controller) {
          var request = request$jscomp$0;
          if (request.status === 13)
            request.status = CLOSED, closeWithError(controller, request.fatalError);
          else if (request.status !== CLOSED && request.destination === null) {
            request.destination = controller;
            try {
              flushCompletedQueues(request, controller);
            } catch (error) {
              logRecoverableError(request, error, {}), fatalError(request, error);
            }
          }
        },
        cancel: function(reason) {
          request$jscomp$0.destination = null;
          abort(request$jscomp$0, reason);
        }
      }, { highWaterMark: 2048 });
      stream.allReady = allReady;
      resolve(stream);
    }, function(error) {
      allReady.catch(function() {
      });
      reject(error);
    }, onFatalError, options ? options.onPostpone : undefined, options ? options.formState : undefined);
    if (options && options.signal) {
      var signal = options.signal;
      if (signal.aborted)
        abort(request$jscomp$0, signal.reason);
      else {
        var listener = function() {
          abort(request$jscomp$0, signal.reason);
          signal.removeEventListener("abort", listener);
        };
        signal.addEventListener("abort", listener);
      }
    }
    startWork(request$jscomp$0);
  });
}, $version = "19.0.0";
var init_react_dom_server_bun_development = __esm(() => {
  React = __toESM(require_react(), 1);
  ReactDOM = __toESM(require_react_dom(), 1);
  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
  REACT_PORTAL_TYPE = Symbol.for("react.portal");
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
  REACT_PROFILER_TYPE = Symbol.for("react.profiler");
  REACT_PROVIDER_TYPE = Symbol.for("react.provider");
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
  REACT_CONTEXT_TYPE = Symbol.for("react.context");
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
  REACT_MEMO_TYPE = Symbol.for("react.memo");
  REACT_LAZY_TYPE = Symbol.for("react.lazy");
  REACT_SCOPE_TYPE = Symbol.for("react.scope");
  REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
  REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
  REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
  REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
  isArrayImpl = Array.isArray;
  jsxPropsParents = new WeakMap;
  jsxChildrenParents = new WeakMap;
  CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference");
  scheduleMicrotask = queueMicrotask;
  assign = Object.assign;
  hasOwnProperty = Object.prototype.hasOwnProperty;
  VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
  illegalAttributeNameCache = {};
  validatedAttributeNameCache = {};
  unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  aliases = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]);
  hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };
  ariaProperties = {
    "aria-current": 0,
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    "aria-hidden": 0,
    "aria-invalid": 0,
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  };
  warnedProperties$1 = {};
  rARIA$1 = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
  rARIACamel$1 = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
  possibleStandardNames = {
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    fetchpriority: "fetchPriority",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    inert: "inert",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    popover: "popover",
    popovertarget: "popoverTarget",
    popovertargetaction: "popoverTargetAction",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    transformorigin: "transformOrigin",
    "transform-origin": "transformOrigin",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  };
  warnedProperties = {};
  EVENT_NAME_REGEX = /^on./;
  INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  rARIA = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
  rARIACamel = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
  badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  msPattern$1 = /^-ms-/;
  hyphenPattern = /-(.)/g;
  badStyleValueWithSemicolonPattern = /;\s*$/;
  warnedStyleNames = {};
  warnedStyleValues = {};
  matchHtmlRegExp = /["'&<>]/;
  uppercasePattern = /([A-Z])/g;
  msPattern = /^ms-/;
  isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  NotPending = Object.freeze({
    pending: false,
    data: null,
    method: null,
    action: null
  });
  previousDispatcher = ReactDOMSharedInternals.d;
  ReactDOMSharedInternals.d = {
    f: previousDispatcher.f,
    r: previousDispatcher.r,
    D: prefetchDNS,
    C: preconnect,
    L: preload,
    m: preloadModule,
    X: preinitScript,
    S: preinitStyle,
    M: preinitModuleScript
  };
  PRELOAD_NO_CREDS = [];
  Object.freeze(PRELOAD_NO_CREDS);
  scriptRegex = /(<\/|<)(s)(cript)/gi;
  didWarnForNewBooleanPropsWithEmptyValue = {};
  styleNameCache = new Map;
  actionJavaScriptURL = escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')");
  styleRegex = /(<\/|<)(s)(tyle)/gi;
  VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
  validatedTagCache = new Map;
  endTagCache = new Map;
  regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
  regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
  stylesheetFlushingQueue = [];
  regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g;
  regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g;
  bind = Function.prototype.bind;
  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
  emptyContextObject = {};
  Object.freeze(emptyContextObject);
  rendererSigil = {};
  didWarnAboutNoopUpdateForComponent = {};
  didWarnAboutDeprecatedWillMount = {};
  didWarnAboutUninitializedState = new Set;
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set;
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set;
  didWarnAboutDirectlyAssigningPropsToState = new Set;
  didWarnAboutUndefinedDerivedState = new Set;
  didWarnAboutContextTypes$1 = new Set;
  didWarnAboutChildContextTypes = new Set;
  didWarnAboutInvalidateContextType = new Set;
  didWarnOnInvalidCallback = new Set;
  classComponentUpdater = {
    isMounted: function() {
      return false;
    },
    enqueueSetState: function(inst, payload, callback) {
      var internals = inst._reactInternals;
      internals.queue === null ? warnNoop(inst, "setState") : (internals.queue.push(payload), callback !== undefined && callback !== null && warnOnInvalidCallback(callback));
    },
    enqueueReplaceState: function(inst, payload, callback) {
      inst = inst._reactInternals;
      inst.replace = true;
      inst.queue = [payload];
      callback !== undefined && callback !== null && warnOnInvalidCallback(callback);
    },
    enqueueForceUpdate: function(inst, callback) {
      inst._reactInternals.queue === null ? warnNoop(inst, "forceUpdate") : callback !== undefined && callback !== null && warnOnInvalidCallback(callback);
    }
  };
  emptyTreeContext = { id: 1, overflow: "" };
  clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
  log = Math.log;
  LN2 = Math.LN2;
  SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
  objectIs = typeof Object.is === "function" ? Object.is : is;
  HooksDispatcher = {
    readContext,
    use: function(usable) {
      if (usable !== null && typeof usable === "object") {
        if (typeof usable.then === "function")
          return unwrapThenable(usable);
        if (usable.$$typeof === REACT_CONTEXT_TYPE)
          return readContext(usable);
      }
      throw Error("An unsupported type was passed to use(): " + String(usable));
    },
    useContext: function(context) {
      currentHookNameInDev = "useContext";
      resolveCurrentlyRenderingComponent();
      return context._currentValue;
    },
    useMemo,
    useReducer,
    useRef: function(initialValue) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      var previousRef = workInProgressHook.memoizedState;
      return previousRef === null ? (initialValue = { current: initialValue }, Object.seal(initialValue), workInProgressHook.memoizedState = initialValue) : previousRef;
    },
    useState: function(initialState) {
      currentHookNameInDev = "useState";
      return useReducer(basicStateReducer, initialState);
    },
    useInsertionEffect: noop$1,
    useLayoutEffect: noop$1,
    useCallback: function(callback, deps) {
      return useMemo(function() {
        return callback;
      }, deps);
    },
    useImperativeHandle: noop$1,
    useEffect: noop$1,
    useDebugValue: noop$1,
    useDeferredValue: function(value, initialValue) {
      resolveCurrentlyRenderingComponent();
      return initialValue !== undefined ? initialValue : value;
    },
    useTransition: function() {
      resolveCurrentlyRenderingComponent();
      return [false, unsupportedStartTransition];
    },
    useId: function() {
      var treeId = currentlyRenderingTask.treeContext;
      var overflow = treeId.overflow;
      treeId = treeId.id;
      treeId = (treeId & ~(1 << 32 - clz32(treeId) - 1)).toString(32) + overflow;
      var resumableState = currentResumableState;
      if (resumableState === null)
        throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      overflow = localIdCounter++;
      treeId = ":" + resumableState.idPrefix + "R" + treeId;
      0 < overflow && (treeId += "H" + overflow.toString(32));
      return treeId + ":";
    },
    useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
      if (getServerSnapshot === undefined)
        throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return getServerSnapshot();
    },
    useCacheRefresh: function() {
      return unsupportedRefresh;
    },
    useMemoCache: function(size) {
      for (var data = Array(size), i = 0;i < size; i++)
        data[i] = REACT_MEMO_CACHE_SENTINEL;
      return data;
    },
    useHostTransitionStatus: function() {
      resolveCurrentlyRenderingComponent();
      return NotPending;
    },
    useOptimistic: function(passthrough) {
      resolveCurrentlyRenderingComponent();
      return [passthrough, unsupportedSetOptimisticState];
    }
  };
  HooksDispatcher.useFormState = useActionState;
  HooksDispatcher.useActionState = useActionState;
  DefaultAsyncDispatcher = {
    getCacheForType: function() {
      throw Error("Not implemented.");
    },
    getOwner: function() {
      return currentTaskInDEV === null ? null : currentTaskInDEV.componentStack;
    }
  };
  disabledLog.__reactDisabledLog = true;
  componentFrameCache = new (typeof WeakMap === "function" ? WeakMap : Map);
  callComponent = {
    "react-stack-bottom-frame": function(Component, props, secondArg) {
      return Component(props, secondArg);
    }
  };
  callComponentInDEV = callComponent["react-stack-bottom-frame"].bind(callComponent);
  callRender = {
    "react-stack-bottom-frame": function(instance) {
      return instance.render();
    }
  };
  callRenderInDEV = callRender["react-stack-bottom-frame"].bind(callRender);
  callLazyInit = {
    "react-stack-bottom-frame": function(lazy) {
      var init = lazy._init;
      return init(lazy._payload);
    }
  };
  callLazyInitInDEV = callLazyInit["react-stack-bottom-frame"].bind(callLazyInit);
  didWarnAboutBadClass = {};
  didWarnAboutContextTypes = {};
  didWarnAboutContextTypeOnFunctionComponent = {};
  didWarnAboutGetDerivedStateOnFunctionComponent = {};
  isomorphicReactPackageVersion$jscomp$inline_702 = React.version;
  if (isomorphicReactPackageVersion$jscomp$inline_702 !== "19.0.0")
    throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (isomorphicReactPackageVersion$jscomp$inline_702 + `
  - react-dom:  19.0.0
Learn more: https://react.dev/warnings/version-mismatch`));
});

// node_modules/react-dom/cjs/react-dom-server-legacy.browser.development.js
var require_react_dom_server_legacy_browser_development = __commonJS((exports) => {
  var React2 = __toESM(require_react(), 1);
  var ReactDOM2 = __toESM(require_react_dom(), 1);
  (function() {
    function styleReplacer2(match, prefix3, s, suffix3) {
      return "" + prefix3 + (s === "s" ? "\\73 " : "\\53 ") + suffix3;
    }
    function scriptReplacer2(match, prefix3, s, suffix3) {
      return "" + prefix3 + (s === "s" ? "\\u0073" : "\\u0053") + suffix3;
    }
    function objectName2(object) {
      return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
        return p0;
      });
    }
    function describeKeyForErrorMessage2(key) {
      var encodedKey = JSON.stringify(key);
      return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage2(value) {
      switch (typeof value) {
        case "string":
          return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
        case "object":
          if (isArrayImpl2(value))
            return "[...]";
          if (value !== null && value.$$typeof === CLIENT_REFERENCE_TAG2)
            return "client";
          value = objectName2(value);
          return value === "Object" ? "{...}" : value;
        case "function":
          return value.$$typeof === CLIENT_REFERENCE_TAG2 ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
        default:
          return String(value);
      }
    }
    function describeElementType2(type) {
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_SUSPENSE_TYPE2:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE2:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE2:
            return describeElementType2(type.render);
          case REACT_MEMO_TYPE2:
            return describeElementType2(type.type);
          case REACT_LAZY_TYPE2:
            var payload = type._payload;
            type = type._init;
            try {
              return describeElementType2(type(payload));
            } catch (x) {
            }
        }
      return "";
    }
    function describeObjectForErrorMessage2(objectOrArray, expandedName) {
      var objKind = objectName2(objectOrArray);
      if (objKind !== "Object" && objKind !== "Array")
        return objKind;
      var start = -1, length = 0;
      if (isArrayImpl2(objectOrArray))
        if (jsxChildrenParents2.has(objectOrArray)) {
          var type = jsxChildrenParents2.get(objectOrArray);
          objKind = "<" + describeElementType2(type) + ">";
          for (var i = 0;i < objectOrArray.length; i++) {
            var value = objectOrArray[i];
            value = typeof value === "string" ? value : typeof value === "object" && value !== null ? "{" + describeObjectForErrorMessage2(value) + "}" : "{" + describeValueForErrorMessage2(value) + "}";
            "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
          }
          objKind += "</" + describeElementType2(type) + ">";
        } else {
          objKind = "[";
          for (type = 0;type < objectOrArray.length; type++)
            0 < type && (objKind += ", "), i = objectOrArray[type], i = typeof i === "object" && i !== null ? describeObjectForErrorMessage2(i) : describeValueForErrorMessage2(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
          objKind += "]";
        }
      else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE2)
        objKind = "<" + describeElementType2(objectOrArray.type) + "/>";
      else {
        if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG2)
          return "client";
        if (jsxPropsParents2.has(objectOrArray)) {
          objKind = jsxPropsParents2.get(objectOrArray);
          objKind = "<" + (describeElementType2(objKind) || "...");
          type = Object.keys(objectOrArray);
          for (i = 0;i < type.length; i++) {
            objKind += " ";
            value = type[i];
            objKind += describeKeyForErrorMessage2(value) + "=";
            var _value2 = objectOrArray[value];
            var _substr2 = value === expandedName && typeof _value2 === "object" && _value2 !== null ? describeObjectForErrorMessage2(_value2) : describeValueForErrorMessage2(_value2);
            typeof _value2 !== "string" && (_substr2 = "{" + _substr2 + "}");
            value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
          }
          objKind += ">";
        } else {
          objKind = "{";
          type = Object.keys(objectOrArray);
          for (i = 0;i < type.length; i++)
            0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage2(value) + ": ", _value2 = objectOrArray[value], _value2 = typeof _value2 === "object" && _value2 !== null ? describeObjectForErrorMessage2(_value2) : describeValueForErrorMessage2(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
          objKind += "}";
        }
      }
      return expandedName === undefined ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), `
  ` + objKind + `
  ` + objectOrArray) : `
  ` + objKind;
    }
    function murmurhash3_32_gc(key, seed) {
      var remainder = key.length & 3;
      var bytes = key.length - remainder;
      var h1 = seed;
      for (seed = 0;seed < bytes; ) {
        var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
        ++seed;
        k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
      }
      k1 = 0;
      switch (remainder) {
        case 3:
          k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
        case 2:
          k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
        case 1:
          k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
      }
      h1 ^= key.length;
      h1 ^= h1 >>> 16;
      h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
      h1 ^= h1 >>> 13;
      h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
      return (h1 ^ h1 >>> 16) >>> 0;
    }
    function typeName2(value) {
      return typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
    }
    function willCoercionThrow2(value) {
      try {
        return testStringCoercion2(value), false;
      } catch (e) {
        return true;
      }
    }
    function testStringCoercion2(value) {
      return "" + value;
    }
    function checkAttributeStringCoercion2(value, attributeName) {
      if (willCoercionThrow2(value))
        return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", attributeName, typeName2(value)), testStringCoercion2(value);
    }
    function checkCSSPropertyStringCoercion2(value, propName) {
      if (willCoercionThrow2(value))
        return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", propName, typeName2(value)), testStringCoercion2(value);
    }
    function checkHtmlStringCoercion2(value) {
      if (willCoercionThrow2(value))
        return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", typeName2(value)), testStringCoercion2(value);
    }
    function isAttributeNameSafe2(attributeName) {
      if (hasOwnProperty2.call(validatedAttributeNameCache2, attributeName))
        return true;
      if (hasOwnProperty2.call(illegalAttributeNameCache2, attributeName))
        return false;
      if (VALID_ATTRIBUTE_NAME_REGEX2.test(attributeName))
        return validatedAttributeNameCache2[attributeName] = true;
      illegalAttributeNameCache2[attributeName] = true;
      console.error("Invalid attribute name: `%s`", attributeName);
      return false;
    }
    function checkControlledValueProps2(tagName, props) {
      hasReadOnlyValue2[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null || (tagName === "select" ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."));
      props.onChange || props.readOnly || props.disabled || props.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function validateProperty$12(tagName, name) {
      if (hasOwnProperty2.call(warnedProperties$12, name) && warnedProperties$12[name])
        return true;
      if (rARIACamel$12.test(name)) {
        tagName = "aria-" + name.slice(4).toLowerCase();
        tagName = ariaProperties2.hasOwnProperty(tagName) ? tagName : null;
        if (tagName == null)
          return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties$12[name] = true;
        if (name !== tagName)
          return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$12[name] = true;
      }
      if (rARIA$12.test(name)) {
        tagName = name.toLowerCase();
        tagName = ariaProperties2.hasOwnProperty(tagName) ? tagName : null;
        if (tagName == null)
          return warnedProperties$12[name] = true, false;
        name !== tagName && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$12[name] = true);
      }
      return true;
    }
    function validateProperties$22(type, props) {
      var invalidProps = [], key;
      for (key in props)
        validateProperty$12(type, key) || invalidProps.push(key);
      props = invalidProps.map(function(prop) {
        return "`" + prop + "`";
      }).join(", ");
      invalidProps.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type) : 1 < invalidProps.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type);
    }
    function validateProperty2(tagName, name, value, eventRegistry) {
      if (hasOwnProperty2.call(warnedProperties2, name) && warnedProperties2[name])
        return true;
      var lowerCasedName = name.toLowerCase();
      if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout")
        return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties2[name] = true;
      if (typeof value === "function" && (tagName === "form" && name === "action" || tagName === "input" && name === "formAction" || tagName === "button" && name === "formAction"))
        return true;
      if (eventRegistry != null) {
        tagName = eventRegistry.possibleRegistrationNames;
        if (eventRegistry.registrationNameDependencies.hasOwnProperty(name))
          return true;
        eventRegistry = tagName.hasOwnProperty(lowerCasedName) ? tagName[lowerCasedName] : null;
        if (eventRegistry != null)
          return console.error("Invalid event handler property `%s`. Did you mean `%s`?", name, eventRegistry), warnedProperties2[name] = true;
        if (EVENT_NAME_REGEX2.test(name))
          return console.error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties2[name] = true;
      } else if (EVENT_NAME_REGEX2.test(name))
        return INVALID_EVENT_NAME_REGEX2.test(name) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties2[name] = true;
      if (rARIA2.test(name) || rARIACamel2.test(name))
        return true;
      if (lowerCasedName === "innerhtml")
        return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties2[name] = true;
      if (lowerCasedName === "aria")
        return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties2[name] = true;
      if (lowerCasedName === "is" && value !== null && value !== undefined && typeof value !== "string")
        return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties2[name] = true;
      if (typeof value === "number" && isNaN(value))
        return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties2[name] = true;
      if (possibleStandardNames2.hasOwnProperty(lowerCasedName)) {
        if (lowerCasedName = possibleStandardNames2[lowerCasedName], lowerCasedName !== name)
          return console.error("Invalid DOM property `%s`. Did you mean `%s`?", name, lowerCasedName), warnedProperties2[name] = true;
      } else if (name !== lowerCasedName)
        return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties2[name] = true;
      switch (name) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return true;
        case "innerText":
        case "textContent":
          return true;
      }
      switch (typeof value) {
        case "boolean":
          switch (name) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return true;
            default:
              lowerCasedName = name.toLowerCase().slice(0, 5);
              if (lowerCasedName === "data-" || lowerCasedName === "aria-")
                return true;
              value ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              return warnedProperties2[name] = true;
          }
        case "function":
        case "symbol":
          return warnedProperties2[name] = true, false;
        case "string":
          if (value === "false" || value === "true") {
            switch (name) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return true;
            }
            console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
            warnedProperties2[name] = true;
          }
      }
      return true;
    }
    function warnUnknownProperties2(type, props, eventRegistry) {
      var unknownProps = [], key;
      for (key in props)
        validateProperty2(type, key, props[key], eventRegistry) || unknownProps.push(key);
      props = unknownProps.map(function(prop) {
        return "`" + prop + "`";
      }).join(", ");
      unknownProps.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type) : 1 < unknownProps.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type);
    }
    function camelize2(string) {
      return string.replace(hyphenPattern2, function(_, character) {
        return character.toUpperCase();
      });
    }
    function escapeTextForBrowser2(text) {
      if (typeof text === "boolean" || typeof text === "number" || typeof text === "bigint")
        return "" + text;
      checkHtmlStringCoercion2(text);
      text = "" + text;
      var match = matchHtmlRegExp2.exec(text);
      if (match) {
        var html = "", index, lastIndex = 0;
        for (index = match.index;index < text.length; index++) {
          switch (text.charCodeAt(index)) {
            case 34:
              match = "&quot;";
              break;
            case 38:
              match = "&amp;";
              break;
            case 39:
              match = "&#x27;";
              break;
            case 60:
              match = "&lt;";
              break;
            case 62:
              match = "&gt;";
              break;
            default:
              continue;
          }
          lastIndex !== index && (html += text.slice(lastIndex, index));
          lastIndex = index + 1;
          html += match;
        }
        text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
      }
      return text;
    }
    function sanitizeURL2(url) {
      return isJavaScriptProtocol2.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function escapeEntireInlineScriptContent2(scriptText) {
      checkHtmlStringCoercion2(scriptText);
      return ("" + scriptText).replace(scriptRegex2, scriptReplacer2);
    }
    function createResumableState2(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
      return {
        idPrefix: identifierPrefix === undefined ? "" : identifierPrefix,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent,
        bootstrapScripts,
        bootstrapModules,
        instructions: NothingSent2,
        hasBody: false,
        hasHtml: false,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function createFormatContext2(insertionMode, selectedValue, tagScope) {
      return {
        insertionMode,
        selectedValue,
        tagScope
      };
    }
    function getChildFormatContext2(parentContext, type, props) {
      switch (type) {
        case "noscript":
          return createFormatContext2(HTML_MODE2, null, parentContext.tagScope | 1);
        case "select":
          return createFormatContext2(HTML_MODE2, props.value != null ? props.value : props.defaultValue, parentContext.tagScope);
        case "svg":
          return createFormatContext2(SVG_MODE2, null, parentContext.tagScope);
        case "picture":
          return createFormatContext2(HTML_MODE2, null, parentContext.tagScope | 2);
        case "math":
          return createFormatContext2(MATHML_MODE2, null, parentContext.tagScope);
        case "foreignObject":
          return createFormatContext2(HTML_MODE2, null, parentContext.tagScope);
        case "table":
          return createFormatContext2(HTML_TABLE_MODE2, null, parentContext.tagScope);
        case "thead":
        case "tbody":
        case "tfoot":
          return createFormatContext2(HTML_TABLE_BODY_MODE2, null, parentContext.tagScope);
        case "colgroup":
          return createFormatContext2(HTML_COLGROUP_MODE2, null, parentContext.tagScope);
        case "tr":
          return createFormatContext2(HTML_TABLE_ROW_MODE2, null, parentContext.tagScope);
      }
      return parentContext.insertionMode >= HTML_TABLE_MODE2 ? createFormatContext2(HTML_MODE2, null, parentContext.tagScope) : parentContext.insertionMode === ROOT_HTML_MODE2 ? type === "html" ? createFormatContext2(HTML_HTML_MODE2, null, parentContext.tagScope) : createFormatContext2(HTML_MODE2, null, parentContext.tagScope) : parentContext.insertionMode === HTML_HTML_MODE2 ? createFormatContext2(HTML_MODE2, null, parentContext.tagScope) : parentContext;
    }
    function pushStyleAttribute2(target, style) {
      if (typeof style !== "object")
        throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var isFirst = true, styleName;
      for (styleName in style)
        if (hasOwnProperty2.call(style, styleName)) {
          var styleValue = style[styleName];
          if (styleValue != null && typeof styleValue !== "boolean" && styleValue !== "") {
            if (styleName.indexOf("--") === 0) {
              var nameChunk = escapeTextForBrowser2(styleName);
              checkCSSPropertyStringCoercion2(styleValue, styleName);
              styleValue = escapeTextForBrowser2(("" + styleValue).trim());
            } else {
              nameChunk = styleName;
              var value = styleValue;
              if (-1 < nameChunk.indexOf("-")) {
                var name = nameChunk;
                warnedStyleNames2.hasOwnProperty(name) && warnedStyleNames2[name] || (warnedStyleNames2[name] = true, console.error("Unsupported style property %s. Did you mean %s?", name, camelize2(name.replace(msPattern$12, "ms-"))));
              } else if (badVendoredStyleNamePattern2.test(nameChunk))
                name = nameChunk, warnedStyleNames2.hasOwnProperty(name) && warnedStyleNames2[name] || (warnedStyleNames2[name] = true, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
              else if (badStyleValueWithSemicolonPattern2.test(value)) {
                name = nameChunk;
                var value$jscomp$0 = value;
                warnedStyleValues2.hasOwnProperty(value$jscomp$0) && warnedStyleValues2[value$jscomp$0] || (warnedStyleValues2[value$jscomp$0] = true, console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value$jscomp$0.replace(badStyleValueWithSemicolonPattern2, "")));
              }
              typeof value === "number" && (isNaN(value) ? warnedForNaNValue2 || (warnedForNaNValue2 = true, console.error("`NaN` is an invalid value for the `%s` css style property.", nameChunk)) : isFinite(value) || warnedForInfinityValue2 || (warnedForInfinityValue2 = true, console.error("`Infinity` is an invalid value for the `%s` css style property.", nameChunk)));
              nameChunk = styleName;
              value = styleNameCache2.get(nameChunk);
              value !== undefined ? nameChunk = value : (value = escapeTextForBrowser2(nameChunk.replace(uppercasePattern2, "-$1").toLowerCase().replace(msPattern2, "-ms-")), styleNameCache2.set(nameChunk, value), nameChunk = value);
              typeof styleValue === "number" ? styleValue = styleValue === 0 || unitlessNumbers2.has(styleName) ? "" + styleValue : styleValue + "px" : (checkCSSPropertyStringCoercion2(styleValue, styleName), styleValue = escapeTextForBrowser2(("" + styleValue).trim()));
            }
            isFirst ? (isFirst = false, target.push(styleAttributeStart2, nameChunk, styleAssign2, styleValue)) : target.push(styleSeparator2, nameChunk, styleAssign2, styleValue);
          }
        }
      isFirst || target.push(attributeEnd2);
    }
    function pushBooleanAttribute2(target, name, value) {
      value && typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator2, name, attributeEmptyString2);
    }
    function pushStringAttribute2(target, name, value) {
      typeof value !== "function" && typeof value !== "symbol" && typeof value !== "boolean" && target.push(attributeSeparator2, name, attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
    }
    function pushAdditionalFormField2(value, key) {
      this.push('<input type="hidden"');
      validateAdditionalFormField2(value);
      pushStringAttribute2(this, "name", key);
      pushStringAttribute2(this, "value", value);
      this.push(endOfStartTagSelfClosing2);
    }
    function validateAdditionalFormField2(value) {
      if (typeof value !== "string")
        throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
    }
    function getCustomFormFields2(resumableState, formAction) {
      if (typeof formAction.$$FORM_ACTION === "function") {
        var id = resumableState.nextFormID++;
        resumableState = resumableState.idPrefix + id;
        try {
          var customFields = formAction.$$FORM_ACTION(resumableState);
          if (customFields) {
            var formData = customFields.data;
            formData != null && formData.forEach(validateAdditionalFormField2);
          }
          return customFields;
        } catch (x) {
          if (typeof x === "object" && x !== null && typeof x.then === "function")
            throw x;
          console.error(`Failed to serialize an action for progressive enhancement:
%s`, x);
        }
      }
      return null;
    }
    function pushFormActionAttribute2(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
      var formData = null;
      if (typeof formAction === "function") {
        name === null || didWarnFormActionName2 || (didWarnFormActionName2 = true, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'));
        formEncType === null && formMethod === null || didWarnFormActionMethod2 || (didWarnFormActionMethod2 = true, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."));
        formTarget === null || didWarnFormActionTarget2 || (didWarnFormActionTarget2 = true, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
        var customFields = getCustomFormFields2(resumableState, formAction);
        customFields !== null ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(attributeSeparator2, "formAction", attributeAssign2, actionJavaScriptURL2, attributeEnd2), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime2(resumableState, renderState));
      }
      name != null && pushAttribute2(target, "name", name);
      formAction != null && pushAttribute2(target, "formAction", formAction);
      formEncType != null && pushAttribute2(target, "formEncType", formEncType);
      formMethod != null && pushAttribute2(target, "formMethod", formMethod);
      formTarget != null && pushAttribute2(target, "formTarget", formTarget);
      return formData;
    }
    function pushAttribute2(target, name, value) {
      switch (name) {
        case "className":
          pushStringAttribute2(target, "class", value);
          break;
        case "tabIndex":
          pushStringAttribute2(target, "tabindex", value);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          pushStringAttribute2(target, name, value);
          break;
        case "style":
          pushStyleAttribute2(target, value);
          break;
        case "src":
        case "href":
          if (value === "") {
            name === "src" ? console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name) : console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name);
            break;
          }
        case "action":
        case "formAction":
          if (value == null || typeof value === "function" || typeof value === "symbol" || typeof value === "boolean")
            break;
          checkAttributeStringCoercion2(value, name);
          value = sanitizeURL2("" + value);
          target.push(attributeSeparator2, name, attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          pushBooleanAttribute2(target, name.toLowerCase(), value);
          break;
        case "xlinkHref":
          if (typeof value === "function" || typeof value === "symbol" || typeof value === "boolean")
            break;
          checkAttributeStringCoercion2(value, name);
          value = sanitizeURL2("" + value);
          target.push(attributeSeparator2, "xlink:href", attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator2, name, attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
          break;
        case "inert":
          value !== "" || didWarnForNewBooleanPropsWithEmptyValue2[name] || (didWarnForNewBooleanPropsWithEmptyValue2[name] = true, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", name));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          value && typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator2, name, attributeEmptyString2);
          break;
        case "capture":
        case "download":
          value === true ? target.push(attributeSeparator2, name, attributeEmptyString2) : value !== false && typeof value !== "function" && typeof value !== "symbol" && target.push(attributeSeparator2, name, attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof value !== "function" && typeof value !== "symbol" && !isNaN(value) && 1 <= value && target.push(attributeSeparator2, name, attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
          break;
        case "rowSpan":
        case "start":
          typeof value === "function" || typeof value === "symbol" || isNaN(value) || target.push(attributeSeparator2, name, attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
          break;
        case "xlinkActuate":
          pushStringAttribute2(target, "xlink:actuate", value);
          break;
        case "xlinkArcrole":
          pushStringAttribute2(target, "xlink:arcrole", value);
          break;
        case "xlinkRole":
          pushStringAttribute2(target, "xlink:role", value);
          break;
        case "xlinkShow":
          pushStringAttribute2(target, "xlink:show", value);
          break;
        case "xlinkTitle":
          pushStringAttribute2(target, "xlink:title", value);
          break;
        case "xlinkType":
          pushStringAttribute2(target, "xlink:type", value);
          break;
        case "xmlBase":
          pushStringAttribute2(target, "xml:base", value);
          break;
        case "xmlLang":
          pushStringAttribute2(target, "xml:lang", value);
          break;
        case "xmlSpace":
          pushStringAttribute2(target, "xml:space", value);
          break;
        default:
          if (!(2 < name.length) || name[0] !== "o" && name[0] !== "O" || name[1] !== "n" && name[1] !== "N") {
            if (name = aliases2.get(name) || name, isAttributeNameSafe2(name)) {
              switch (typeof value) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  var prefix3 = name.toLowerCase().slice(0, 5);
                  if (prefix3 !== "data-" && prefix3 !== "aria-")
                    return;
              }
              target.push(attributeSeparator2, name, attributeAssign2, escapeTextForBrowser2(value), attributeEnd2);
            }
          }
      }
    }
    function pushInnerHTML2(target, innerHTML, children) {
      if (innerHTML != null) {
        if (children != null)
          throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof innerHTML !== "object" || !("__html" in innerHTML))
          throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
        innerHTML = innerHTML.__html;
        innerHTML !== null && innerHTML !== undefined && (checkHtmlStringCoercion2(innerHTML), target.push("" + innerHTML));
      }
    }
    function checkSelectProp2(props, propName) {
      var value = props[propName];
      value != null && (value = isArrayImpl2(value), props.multiple && !value ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && value && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName));
    }
    function flattenOptionChildren2(children) {
      var content = "";
      React2.Children.forEach(children, function(child) {
        child != null && (content += child, didWarnInvalidOptionChildren2 || typeof child === "string" || typeof child === "number" || typeof child === "bigint" || (didWarnInvalidOptionChildren2 = true, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      });
      return content;
    }
    function injectFormReplayingRuntime2(resumableState, renderState) {
      (resumableState.instructions & 16) === NothingSent2 && (resumableState.instructions |= 16, renderState.bootstrapChunks.unshift(renderState.startInlineScript, formReplayingRuntimeScript2, "</script>"));
    }
    function pushLinkImpl2(target, props) {
      target.push(startChunkForTag2("link"));
      for (var propKey in props)
        if (hasOwnProperty2.call(props, propKey)) {
          var propValue = props[propKey];
          if (propValue != null)
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute2(target, propKey, propValue);
            }
        }
      target.push(endOfStartTagSelfClosing2);
      return null;
    }
    function escapeStyleTextContent2(styleText) {
      checkHtmlStringCoercion2(styleText);
      return ("" + styleText).replace(styleRegex2, styleReplacer2);
    }
    function pushSelfClosing2(target, props, tag) {
      target.push(startChunkForTag2(tag));
      for (var propKey in props)
        if (hasOwnProperty2.call(props, propKey)) {
          var propValue = props[propKey];
          if (propValue != null)
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute2(target, propKey, propValue);
            }
        }
      target.push(endOfStartTagSelfClosing2);
      return null;
    }
    function pushTitleImpl2(target, props) {
      target.push(startChunkForTag2("title"));
      var children = null, innerHTML = null, propKey;
      for (propKey in props)
        if (hasOwnProperty2.call(props, propKey)) {
          var propValue = props[propKey];
          if (propValue != null)
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute2(target, propKey, propValue);
            }
        }
      target.push(endOfStartTag2);
      props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
      typeof props !== "function" && typeof props !== "symbol" && props !== null && props !== undefined && target.push(escapeTextForBrowser2("" + props));
      pushInnerHTML2(target, innerHTML, children);
      target.push(endChunkForTag2("title"));
      return null;
    }
    function pushScriptImpl2(target, props) {
      target.push(startChunkForTag2("script"));
      var children = null, innerHTML = null, propKey;
      for (propKey in props)
        if (hasOwnProperty2.call(props, propKey)) {
          var propValue = props[propKey];
          if (propValue != null)
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute2(target, propKey, propValue);
            }
        }
      target.push(endOfStartTag2);
      children != null && typeof children !== "string" && (props = typeof children === "number" ? "a number for children" : Array.isArray(children) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", props));
      pushInnerHTML2(target, innerHTML, children);
      typeof children === "string" && target.push(escapeEntireInlineScriptContent2(children));
      target.push(endChunkForTag2("script"));
      return null;
    }
    function pushStartGenericElement2(target, props, tag) {
      target.push(startChunkForTag2(tag));
      var innerHTML = tag = null, propKey;
      for (propKey in props)
        if (hasOwnProperty2.call(props, propKey)) {
          var propValue = props[propKey];
          if (propValue != null)
            switch (propKey) {
              case "children":
                tag = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute2(target, propKey, propValue);
            }
        }
      target.push(endOfStartTag2);
      pushInnerHTML2(target, innerHTML, tag);
      return typeof tag === "string" ? (target.push(escapeTextForBrowser2(tag)), null) : tag;
    }
    function startChunkForTag2(tag) {
      var tagStartChunk = validatedTagCache2.get(tag);
      if (tagStartChunk === undefined) {
        if (!VALID_TAG_REGEX2.test(tag))
          throw Error("Invalid tag: " + tag);
        tagStartChunk = "<" + tag;
        validatedTagCache2.set(tag, tagStartChunk);
      }
      return tagStartChunk;
    }
    function pushStartInstance2(target$jscomp$0, type, props, resumableState, renderState, hoistableState, formatContext, textEmbedded, isFallback) {
      validateProperties$22(type, props);
      type !== "input" && type !== "textarea" && type !== "select" || props == null || props.value !== null || didWarnValueNull2 || (didWarnValueNull2 = true, type === "select" && props.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
      b:
        if (type.indexOf("-") === -1)
          var JSCompiler_inline_result = false;
        else
          switch (type) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              JSCompiler_inline_result = false;
              break b;
            default:
              JSCompiler_inline_result = true;
          }
      JSCompiler_inline_result || typeof props.is === "string" || warnUnknownProperties2(type, props, null);
      !props.suppressContentEditableWarning && props.contentEditable && props.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
      formatContext.insertionMode !== SVG_MODE2 && formatContext.insertionMode !== MATHML_MODE2 && type.indexOf("-") === -1 && type.toLowerCase() !== type && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
      switch (type) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          target$jscomp$0.push(startChunkForTag2("a"));
          var children = null, innerHTML = null, propKey;
          for (propKey in props)
            if (hasOwnProperty2.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue != null)
                switch (propKey) {
                  case "children":
                    children = propValue;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                  case "href":
                    propValue === "" ? pushStringAttribute2(target$jscomp$0, "href", "") : pushAttribute2(target$jscomp$0, propKey, propValue);
                    break;
                  default:
                    pushAttribute2(target$jscomp$0, propKey, propValue);
                }
            }
          target$jscomp$0.push(endOfStartTag2);
          pushInnerHTML2(target$jscomp$0, innerHTML, children);
          if (typeof children === "string") {
            target$jscomp$0.push(escapeTextForBrowser2(children));
            var JSCompiler_inline_result$jscomp$0 = null;
          } else
            JSCompiler_inline_result$jscomp$0 = children;
          return JSCompiler_inline_result$jscomp$0;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          checkControlledValueProps2("select", props);
          checkSelectProp2(props, "value");
          checkSelectProp2(props, "defaultValue");
          props.value === undefined || props.defaultValue === undefined || didWarnDefaultSelectValue2 || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultSelectValue2 = true);
          target$jscomp$0.push(startChunkForTag2("select"));
          var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
          for (propKey$jscomp$0 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$0)) {
              var propValue$jscomp$0 = props[propKey$jscomp$0];
              if (propValue$jscomp$0 != null)
                switch (propKey$jscomp$0) {
                  case "children":
                    children$jscomp$0 = propValue$jscomp$0;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$0 = propValue$jscomp$0;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
                }
            }
          target$jscomp$0.push(endOfStartTag2);
          pushInnerHTML2(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
          return children$jscomp$0;
        case "option":
          var selectedValue = formatContext.selectedValue;
          target$jscomp$0.push(startChunkForTag2("option"));
          var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
          for (propKey$jscomp$1 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$1)) {
              var propValue$jscomp$1 = props[propKey$jscomp$1];
              if (propValue$jscomp$1 != null)
                switch (propKey$jscomp$1) {
                  case "children":
                    children$jscomp$1 = propValue$jscomp$1;
                    break;
                  case "selected":
                    selected = propValue$jscomp$1;
                    didWarnSelectedSetOnOption2 || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption2 = true);
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$1 = propValue$jscomp$1;
                    break;
                  case "value":
                    value = propValue$jscomp$1;
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
                }
            }
          if (selectedValue != null) {
            if (value !== null) {
              checkAttributeStringCoercion2(value, "value");
              var stringValue = "" + value;
            } else
              innerHTML$jscomp$1 === null || didWarnInvalidOptionInnerHTML2 || (didWarnInvalidOptionInnerHTML2 = true, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), stringValue = flattenOptionChildren2(children$jscomp$1);
            if (isArrayImpl2(selectedValue))
              for (var i = 0;i < selectedValue.length; i++) {
                if (checkAttributeStringCoercion2(selectedValue[i], "value"), "" + selectedValue[i] === stringValue) {
                  target$jscomp$0.push(' selected=""');
                  break;
                }
              }
            else
              checkAttributeStringCoercion2(selectedValue, "select.value"), "" + selectedValue === stringValue && target$jscomp$0.push(' selected=""');
          } else
            selected && target$jscomp$0.push(' selected=""');
          target$jscomp$0.push(endOfStartTag2);
          pushInnerHTML2(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
          return children$jscomp$1;
        case "textarea":
          checkControlledValueProps2("textarea", props);
          props.value === undefined || props.defaultValue === undefined || didWarnDefaultTextareaValue2 || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultTextareaValue2 = true);
          target$jscomp$0.push(startChunkForTag2("textarea"));
          var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
          for (propKey$jscomp$2 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$2)) {
              var propValue$jscomp$2 = props[propKey$jscomp$2];
              if (propValue$jscomp$2 != null)
                switch (propKey$jscomp$2) {
                  case "children":
                    children$jscomp$2 = propValue$jscomp$2;
                    break;
                  case "value":
                    value$jscomp$0 = propValue$jscomp$2;
                    break;
                  case "defaultValue":
                    defaultValue = propValue$jscomp$2;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
                }
            }
          value$jscomp$0 === null && defaultValue !== null && (value$jscomp$0 = defaultValue);
          target$jscomp$0.push(endOfStartTag2);
          if (children$jscomp$2 != null) {
            console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            if (value$jscomp$0 != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (isArrayImpl2(children$jscomp$2)) {
              if (1 < children$jscomp$2.length)
                throw Error("<textarea> can only have at most one child.");
              checkHtmlStringCoercion2(children$jscomp$2[0]);
              value$jscomp$0 = "" + children$jscomp$2[0];
            }
            checkHtmlStringCoercion2(children$jscomp$2);
            value$jscomp$0 = "" + children$jscomp$2;
          }
          typeof value$jscomp$0 === "string" && value$jscomp$0[0] === `
` && target$jscomp$0.push(leadingNewline);
          value$jscomp$0 !== null && (checkAttributeStringCoercion2(value$jscomp$0, "value"), target$jscomp$0.push(escapeTextForBrowser2("" + value$jscomp$0)));
          return null;
        case "input":
          checkControlledValueProps2("input", props);
          target$jscomp$0.push(startChunkForTag2("input"));
          var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
          for (propKey$jscomp$3 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$3)) {
              var propValue$jscomp$3 = props[propKey$jscomp$3];
              if (propValue$jscomp$3 != null)
                switch (propKey$jscomp$3) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                  case "name":
                    name = propValue$jscomp$3;
                    break;
                  case "formAction":
                    formAction = propValue$jscomp$3;
                    break;
                  case "formEncType":
                    formEncType = propValue$jscomp$3;
                    break;
                  case "formMethod":
                    formMethod = propValue$jscomp$3;
                    break;
                  case "formTarget":
                    formTarget = propValue$jscomp$3;
                    break;
                  case "defaultChecked":
                    defaultChecked = propValue$jscomp$3;
                    break;
                  case "defaultValue":
                    defaultValue$jscomp$0 = propValue$jscomp$3;
                    break;
                  case "checked":
                    checked = propValue$jscomp$3;
                    break;
                  case "value":
                    value$jscomp$1 = propValue$jscomp$3;
                    break;
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
                }
            }
          formAction === null || props.type === "image" || props.type === "submit" || didWarnFormActionType2 || (didWarnFormActionType2 = true, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
          var formData = pushFormActionAttribute2(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
          checked === null || defaultChecked === null || didWarnDefaultChecked2 || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultChecked2 = true);
          value$jscomp$1 === null || defaultValue$jscomp$0 === null || didWarnDefaultInputValue2 || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultInputValue2 = true);
          checked !== null ? pushBooleanAttribute2(target$jscomp$0, "checked", checked) : defaultChecked !== null && pushBooleanAttribute2(target$jscomp$0, "checked", defaultChecked);
          value$jscomp$1 !== null ? pushAttribute2(target$jscomp$0, "value", value$jscomp$1) : defaultValue$jscomp$0 !== null && pushAttribute2(target$jscomp$0, "value", defaultValue$jscomp$0);
          target$jscomp$0.push(endOfStartTagSelfClosing2);
          formData != null && formData.forEach(pushAdditionalFormField2, target$jscomp$0);
          return null;
        case "button":
          target$jscomp$0.push(startChunkForTag2("button"));
          var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
          for (propKey$jscomp$4 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$4)) {
              var propValue$jscomp$4 = props[propKey$jscomp$4];
              if (propValue$jscomp$4 != null)
                switch (propKey$jscomp$4) {
                  case "children":
                    children$jscomp$3 = propValue$jscomp$4;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$2 = propValue$jscomp$4;
                    break;
                  case "name":
                    name$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formAction":
                    formAction$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formEncType":
                    formEncType$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formMethod":
                    formMethod$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formTarget":
                    formTarget$jscomp$0 = propValue$jscomp$4;
                    break;
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
                }
            }
          formAction$jscomp$0 === null || props.type == null || props.type === "submit" || didWarnFormActionType2 || (didWarnFormActionType2 = true, console.error('A button can only specify a formAction along with type="submit" or no type.'));
          var formData$jscomp$0 = pushFormActionAttribute2(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
          target$jscomp$0.push(endOfStartTag2);
          formData$jscomp$0 != null && formData$jscomp$0.forEach(pushAdditionalFormField2, target$jscomp$0);
          pushInnerHTML2(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
          if (typeof children$jscomp$3 === "string") {
            target$jscomp$0.push(escapeTextForBrowser2(children$jscomp$3));
            var JSCompiler_inline_result$jscomp$1 = null;
          } else
            JSCompiler_inline_result$jscomp$1 = children$jscomp$3;
          return JSCompiler_inline_result$jscomp$1;
        case "form":
          target$jscomp$0.push(startChunkForTag2("form"));
          var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
          for (propKey$jscomp$5 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$5)) {
              var propValue$jscomp$5 = props[propKey$jscomp$5];
              if (propValue$jscomp$5 != null)
                switch (propKey$jscomp$5) {
                  case "children":
                    children$jscomp$4 = propValue$jscomp$5;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$3 = propValue$jscomp$5;
                    break;
                  case "action":
                    formAction$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "encType":
                    formEncType$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "method":
                    formMethod$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "target":
                    formTarget$jscomp$1 = propValue$jscomp$5;
                    break;
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
                }
            }
          var formData$jscomp$1 = null, formActionName = null;
          if (typeof formAction$jscomp$1 === "function") {
            formEncType$jscomp$1 === null && formMethod$jscomp$1 === null || didWarnFormActionMethod2 || (didWarnFormActionMethod2 = true, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."));
            formTarget$jscomp$1 === null || didWarnFormActionTarget2 || (didWarnFormActionTarget2 = true, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
            var customFields = getCustomFormFields2(resumableState, formAction$jscomp$1);
            customFields !== null ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(attributeSeparator2, "action", attributeAssign2, actionJavaScriptURL2, attributeEnd2), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime2(resumableState, renderState));
          }
          formAction$jscomp$1 != null && pushAttribute2(target$jscomp$0, "action", formAction$jscomp$1);
          formEncType$jscomp$1 != null && pushAttribute2(target$jscomp$0, "encType", formEncType$jscomp$1);
          formMethod$jscomp$1 != null && pushAttribute2(target$jscomp$0, "method", formMethod$jscomp$1);
          formTarget$jscomp$1 != null && pushAttribute2(target$jscomp$0, "target", formTarget$jscomp$1);
          target$jscomp$0.push(endOfStartTag2);
          formActionName !== null && (target$jscomp$0.push('<input type="hidden"'), pushStringAttribute2(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing2), formData$jscomp$1 != null && formData$jscomp$1.forEach(pushAdditionalFormField2, target$jscomp$0));
          pushInnerHTML2(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
          if (typeof children$jscomp$4 === "string") {
            target$jscomp$0.push(escapeTextForBrowser2(children$jscomp$4));
            var JSCompiler_inline_result$jscomp$2 = null;
          } else
            JSCompiler_inline_result$jscomp$2 = children$jscomp$4;
          return JSCompiler_inline_result$jscomp$2;
        case "menuitem":
          target$jscomp$0.push(startChunkForTag2("menuitem"));
          for (var propKey$jscomp$6 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$6)) {
              var propValue$jscomp$6 = props[propKey$jscomp$6];
              if (propValue$jscomp$6 != null)
                switch (propKey$jscomp$6) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
                }
            }
          target$jscomp$0.push(endOfStartTag2);
          return null;
        case "object":
          target$jscomp$0.push(startChunkForTag2("object"));
          var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
          for (propKey$jscomp$7 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$7)) {
              var propValue$jscomp$7 = props[propKey$jscomp$7];
              if (propValue$jscomp$7 != null)
                switch (propKey$jscomp$7) {
                  case "children":
                    children$jscomp$5 = propValue$jscomp$7;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$4 = propValue$jscomp$7;
                    break;
                  case "data":
                    checkAttributeStringCoercion2(propValue$jscomp$7, "data");
                    var sanitizedValue = sanitizeURL2("" + propValue$jscomp$7);
                    if (sanitizedValue === "") {
                      console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', propKey$jscomp$7, propKey$jscomp$7);
                      break;
                    }
                    target$jscomp$0.push(attributeSeparator2, "data", attributeAssign2, escapeTextForBrowser2(sanitizedValue), attributeEnd2);
                    break;
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
                }
            }
          target$jscomp$0.push(endOfStartTag2);
          pushInnerHTML2(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
          if (typeof children$jscomp$5 === "string") {
            target$jscomp$0.push(escapeTextForBrowser2(children$jscomp$5));
            var JSCompiler_inline_result$jscomp$3 = null;
          } else
            JSCompiler_inline_result$jscomp$3 = children$jscomp$5;
          return JSCompiler_inline_result$jscomp$3;
        case "title":
          var insertionMode = formatContext.insertionMode, noscriptTagInScope = !!(formatContext.tagScope & 1);
          if (hasOwnProperty2.call(props, "children")) {
            var children$jscomp$6 = props.children, child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
            Array.isArray(children$jscomp$6) && 1 < children$jscomp$6.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be commong to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", children$jscomp$6.length) : typeof child === "function" || typeof child === "symbol" ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", typeof child === "function" ? "a Function" : "a Sybmol") : child && child.toString === {}.toString && (child.$$typeof != null ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."));
          }
          if (insertionMode === SVG_MODE2 || noscriptTagInScope || props.itemProp != null)
            var JSCompiler_inline_result$jscomp$4 = pushTitleImpl2(target$jscomp$0, props);
          else
            isFallback ? JSCompiler_inline_result$jscomp$4 = null : (pushTitleImpl2(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$4 = undefined);
          return JSCompiler_inline_result$jscomp$4;
        case "link":
          var { rel, href, precedence } = props;
          if (formatContext.insertionMode === SVG_MODE2 || formatContext.tagScope & 1 || props.itemProp != null || typeof rel !== "string" || typeof href !== "string" || href === "") {
            rel === "stylesheet" && typeof props.precedence === "string" && (typeof href === "string" && href || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', href === null ? "`null`" : href === undefined ? "`undefined`" : href === "" ? "an empty string" : 'something with type "' + typeof href + '"'));
            pushLinkImpl2(target$jscomp$0, props);
            var JSCompiler_inline_result$jscomp$5 = null;
          } else if (props.rel === "stylesheet")
            if (typeof precedence !== "string" || props.disabled != null || props.onLoad || props.onError) {
              if (typeof precedence === "string") {
                if (props.disabled != null)
                  console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
                else if (props.onLoad || props.onError) {
                  var propDescription = props.onLoad && props.onError ? "`onLoad` and `onError` props" : props.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', propDescription, propDescription);
                }
              }
              JSCompiler_inline_result$jscomp$5 = pushLinkImpl2(target$jscomp$0, props);
            } else {
              var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : undefined;
              if (resourceState !== EXISTS2) {
                resumableState.styleResources[href] = EXISTS2;
                styleQueue || (styleQueue = {
                  precedence: escapeTextForBrowser2(precedence),
                  rules: [],
                  hrefs: [],
                  sheets: new Map
                }, renderState.styles.set(precedence, styleQueue));
                var resource = {
                  state: PENDING$12,
                  props: assign2({}, props, {
                    "data-precedence": props.precedence,
                    precedence: null
                  })
                };
                if (resourceState) {
                  resourceState.length === 2 && adoptPreloadCredentials2(resource.props, resourceState);
                  var preloadResource = renderState.preloads.stylesheets.get(href);
                  preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = PRELOADED2;
                }
                styleQueue.sheets.set(href, resource);
                hoistableState && hoistableState.stylesheets.add(resource);
              } else if (styleQueue) {
                var _resource = styleQueue.sheets.get(href);
                _resource && hoistableState && hoistableState.stylesheets.add(_resource);
              }
              textEmbedded && target$jscomp$0.push("<!-- -->");
              JSCompiler_inline_result$jscomp$5 = null;
            }
          else
            props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$5 = pushLinkImpl2(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$5 = isFallback ? null : pushLinkImpl2(renderState.hoistableChunks, props));
          return JSCompiler_inline_result$jscomp$5;
        case "script":
          var asyncProp = props.async;
          if (typeof props.src !== "string" || !props.src || !asyncProp || typeof asyncProp === "function" || typeof asyncProp === "symbol" || props.onLoad || props.onError || formatContext.insertionMode === SVG_MODE2 || formatContext.tagScope & 1 || props.itemProp != null)
            var JSCompiler_inline_result$jscomp$6 = pushScriptImpl2(target$jscomp$0, props);
          else {
            var key = props.src;
            if (props.type === "module") {
              var resources = resumableState.moduleScriptResources;
              var preloads = renderState.preloads.moduleScripts;
            } else
              resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
            var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : undefined;
            if (resourceState$jscomp$0 !== EXISTS2) {
              resources[key] = EXISTS2;
              var scriptProps = props;
              if (resourceState$jscomp$0) {
                resourceState$jscomp$0.length === 2 && (scriptProps = assign2({}, props), adoptPreloadCredentials2(scriptProps, resourceState$jscomp$0));
                var preloadResource$jscomp$0 = preloads.get(key);
                preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
              }
              var resource$jscomp$0 = [];
              renderState.scripts.add(resource$jscomp$0);
              pushScriptImpl2(resource$jscomp$0, scriptProps);
            }
            textEmbedded && target$jscomp$0.push("<!-- -->");
            JSCompiler_inline_result$jscomp$6 = null;
          }
          return JSCompiler_inline_result$jscomp$6;
        case "style":
          var insertionMode$jscomp$0 = formatContext.insertionMode, noscriptTagInScope$jscomp$0 = !!(formatContext.tagScope & 1);
          if (hasOwnProperty2.call(props, "children")) {
            var children$jscomp$7 = props.children, child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
            (typeof child$jscomp$0 === "function" || typeof child$jscomp$0 === "symbol" || Array.isArray(child$jscomp$0)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", typeof child$jscomp$0 === "function" ? "a Function" : typeof child$jscomp$0 === "symbol" ? "a Sybmol" : "an Array");
          }
          var { precedence: precedence$jscomp$0, href: href$jscomp$0 } = props;
          if (insertionMode$jscomp$0 === SVG_MODE2 || noscriptTagInScope$jscomp$0 || props.itemProp != null || typeof precedence$jscomp$0 !== "string" || typeof href$jscomp$0 !== "string" || href$jscomp$0 === "") {
            target$jscomp$0.push(startChunkForTag2("style"));
            var children$jscomp$8 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
            for (propKey$jscomp$8 in props)
              if (hasOwnProperty2.call(props, propKey$jscomp$8)) {
                var propValue$jscomp$8 = props[propKey$jscomp$8];
                if (propValue$jscomp$8 != null)
                  switch (propKey$jscomp$8) {
                    case "children":
                      children$jscomp$8 = propValue$jscomp$8;
                      break;
                    case "dangerouslySetInnerHTML":
                      innerHTML$jscomp$5 = propValue$jscomp$8;
                      break;
                    default:
                      pushAttribute2(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
                  }
              }
            target$jscomp$0.push(endOfStartTag2);
            var child$jscomp$1 = Array.isArray(children$jscomp$8) ? 2 > children$jscomp$8.length ? children$jscomp$8[0] : null : children$jscomp$8;
            typeof child$jscomp$1 !== "function" && typeof child$jscomp$1 !== "symbol" && child$jscomp$1 !== null && child$jscomp$1 !== undefined && target$jscomp$0.push(escapeStyleTextContent2(child$jscomp$1));
            pushInnerHTML2(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$8);
            target$jscomp$0.push(endChunkForTag2("style"));
            var JSCompiler_inline_result$jscomp$7 = null;
          } else {
            href$jscomp$0.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', href$jscomp$0);
            var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0), resourceState$jscomp$1 = resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : undefined;
            if (resourceState$jscomp$1 !== EXISTS2) {
              resumableState.styleResources[href$jscomp$0] = EXISTS2;
              resourceState$jscomp$1 && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', href$jscomp$0);
              styleQueue$jscomp$0 ? styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser2(href$jscomp$0)) : (styleQueue$jscomp$0 = {
                precedence: escapeTextForBrowser2(precedence$jscomp$0),
                rules: [],
                hrefs: [escapeTextForBrowser2(href$jscomp$0)],
                sheets: new Map
              }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
              var target = styleQueue$jscomp$0.rules, children$jscomp$9 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
              for (propKey$jscomp$9 in props)
                if (hasOwnProperty2.call(props, propKey$jscomp$9)) {
                  var propValue$jscomp$9 = props[propKey$jscomp$9];
                  if (propValue$jscomp$9 != null)
                    switch (propKey$jscomp$9) {
                      case "children":
                        children$jscomp$9 = propValue$jscomp$9;
                        break;
                      case "dangerouslySetInnerHTML":
                        innerHTML$jscomp$6 = propValue$jscomp$9;
                    }
                }
              var child$jscomp$2 = Array.isArray(children$jscomp$9) ? 2 > children$jscomp$9.length ? children$jscomp$9[0] : null : children$jscomp$9;
              typeof child$jscomp$2 !== "function" && typeof child$jscomp$2 !== "symbol" && child$jscomp$2 !== null && child$jscomp$2 !== undefined && target.push(escapeStyleTextContent2(child$jscomp$2));
              pushInnerHTML2(target, innerHTML$jscomp$6, children$jscomp$9);
            }
            styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
            textEmbedded && target$jscomp$0.push("<!-- -->");
            JSCompiler_inline_result$jscomp$7 = undefined;
          }
          return JSCompiler_inline_result$jscomp$7;
        case "meta":
          if (formatContext.insertionMode === SVG_MODE2 || formatContext.tagScope & 1 || props.itemProp != null)
            var JSCompiler_inline_result$jscomp$8 = pushSelfClosing2(target$jscomp$0, props, "meta");
          else
            textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$8 = isFallback ? null : typeof props.charSet === "string" ? pushSelfClosing2(renderState.charsetChunks, props, "meta") : props.name === "viewport" ? pushSelfClosing2(renderState.viewportChunks, props, "meta") : pushSelfClosing2(renderState.hoistableChunks, props, "meta");
          return JSCompiler_inline_result$jscomp$8;
        case "listing":
        case "pre":
          target$jscomp$0.push(startChunkForTag2(type));
          var children$jscomp$10 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
          for (propKey$jscomp$10 in props)
            if (hasOwnProperty2.call(props, propKey$jscomp$10)) {
              var propValue$jscomp$10 = props[propKey$jscomp$10];
              if (propValue$jscomp$10 != null)
                switch (propKey$jscomp$10) {
                  case "children":
                    children$jscomp$10 = propValue$jscomp$10;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$7 = propValue$jscomp$10;
                    break;
                  default:
                    pushAttribute2(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
                }
            }
          target$jscomp$0.push(endOfStartTag2);
          if (innerHTML$jscomp$7 != null) {
            if (children$jscomp$10 != null)
              throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if (typeof innerHTML$jscomp$7 !== "object" || !("__html" in innerHTML$jscomp$7))
              throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
            var html = innerHTML$jscomp$7.__html;
            html !== null && html !== undefined && (typeof html === "string" && 0 < html.length && html[0] === `
` ? target$jscomp$0.push(leadingNewline, html) : (checkHtmlStringCoercion2(html), target$jscomp$0.push("" + html)));
          }
          typeof children$jscomp$10 === "string" && children$jscomp$10[0] === `
` && target$jscomp$0.push(leadingNewline);
          return children$jscomp$10;
        case "img":
          var { src, srcSet } = props;
          if (!(props.loading === "lazy" || !src && !srcSet || typeof src !== "string" && src != null || typeof srcSet !== "string" && srcSet != null) && props.fetchPriority !== "low" && !!(formatContext.tagScope & 3) === false && (typeof src !== "string" || src[4] !== ":" || src[0] !== "d" && src[0] !== "D" || src[1] !== "a" && src[1] !== "A" || src[2] !== "t" && src[2] !== "T" || src[3] !== "a" && src[3] !== "A") && (typeof srcSet !== "string" || srcSet[4] !== ":" || srcSet[0] !== "d" && srcSet[0] !== "D" || srcSet[1] !== "a" && srcSet[1] !== "A" || srcSet[2] !== "t" && srcSet[2] !== "T" || srcSet[3] !== "a" && srcSet[3] !== "A")) {
            var sizes = typeof props.sizes === "string" ? props.sizes : undefined, key$jscomp$0 = srcSet ? srcSet + `
` + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
            if (resource$jscomp$1) {
              if (props.fetchPriority === "high" || 10 > renderState.highImagePreloads.size)
                promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
            } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
              resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS2;
              var input = props.crossOrigin;
              var crossOrigin = typeof input === "string" ? input === "use-credentials" ? input : "" : undefined;
              var headers = renderState.headers, header;
              headers && 0 < headers.remainingCapacity && (props.fetchPriority === "high" || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader2(src, "image", {
                imageSrcSet: props.srcSet,
                imageSizes: props.sizes,
                crossOrigin,
                integrity: props.integrity,
                nonce: props.nonce,
                type: props.type,
                fetchPriority: props.fetchPriority,
                referrerPolicy: props.refererPolicy
              }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS2, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl2(resource$jscomp$1, {
                rel: "preload",
                as: "image",
                href: srcSet ? undefined : src,
                imageSrcSet: srcSet,
                imageSizes: sizes,
                crossOrigin,
                integrity: props.integrity,
                type: props.type,
                fetchPriority: props.fetchPriority,
                referrerPolicy: props.referrerPolicy
              }), props.fetchPriority === "high" || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
            }
          }
          return pushSelfClosing2(target$jscomp$0, props, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return pushSelfClosing2(target$jscomp$0, props, type);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (formatContext.insertionMode < HTML_MODE2 && renderState.headChunks === null) {
            renderState.headChunks = [];
            var JSCompiler_inline_result$jscomp$9 = pushStartGenericElement2(renderState.headChunks, props, "head");
          } else
            JSCompiler_inline_result$jscomp$9 = pushStartGenericElement2(target$jscomp$0, props, "head");
          return JSCompiler_inline_result$jscomp$9;
        case "html":
          if (formatContext.insertionMode === ROOT_HTML_MODE2 && renderState.htmlChunks === null) {
            renderState.htmlChunks = [doctypeChunk];
            var JSCompiler_inline_result$jscomp$10 = pushStartGenericElement2(renderState.htmlChunks, props, "html");
          } else
            JSCompiler_inline_result$jscomp$10 = pushStartGenericElement2(target$jscomp$0, props, "html");
          return JSCompiler_inline_result$jscomp$10;
        default:
          if (type.indexOf("-") !== -1) {
            target$jscomp$0.push(startChunkForTag2(type));
            var children$jscomp$11 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
            for (propKey$jscomp$11 in props)
              if (hasOwnProperty2.call(props, propKey$jscomp$11)) {
                var propValue$jscomp$11 = props[propKey$jscomp$11];
                if (propValue$jscomp$11 != null) {
                  var attributeName = propKey$jscomp$11;
                  switch (propKey$jscomp$11) {
                    case "children":
                      children$jscomp$11 = propValue$jscomp$11;
                      break;
                    case "dangerouslySetInnerHTML":
                      innerHTML$jscomp$8 = propValue$jscomp$11;
                      break;
                    case "style":
                      pushStyleAttribute2(target$jscomp$0, propValue$jscomp$11);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      attributeName = "class";
                    default:
                      if (isAttributeNameSafe2(propKey$jscomp$11) && typeof propValue$jscomp$11 !== "function" && typeof propValue$jscomp$11 !== "symbol" && propValue$jscomp$11 !== false) {
                        if (propValue$jscomp$11 === true)
                          propValue$jscomp$11 = "";
                        else if (typeof propValue$jscomp$11 === "object")
                          continue;
                        target$jscomp$0.push(attributeSeparator2, attributeName, attributeAssign2, escapeTextForBrowser2(propValue$jscomp$11), attributeEnd2);
                      }
                  }
                }
              }
            target$jscomp$0.push(endOfStartTag2);
            pushInnerHTML2(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$11);
            return children$jscomp$11;
          }
      }
      return pushStartGenericElement2(target$jscomp$0, props, type);
    }
    function endChunkForTag2(tag) {
      var chunk = endTagCache2.get(tag);
      chunk === undefined && (chunk = "</" + tag + ">", endTagCache2.set(tag, chunk));
      return chunk;
    }
    function writeBootstrap2(destination, renderState) {
      renderState = renderState.bootstrapChunks;
      for (var i = 0;i < renderState.length - 1; i++)
        destination.push(renderState[i]);
      return i < renderState.length ? (i = renderState[i], renderState.length = 0, destination.push(i)) : true;
    }
    function writeStartPendingSuspenseBoundary2(destination, renderState, id) {
      destination.push(startPendingSuspenseBoundary12);
      if (id === null)
        throw Error("An ID must have been assigned before we can complete the boundary.");
      destination.push(renderState.boundaryPrefix);
      renderState = id.toString(16);
      destination.push(renderState);
      return destination.push(startPendingSuspenseBoundary22);
    }
    function writeStartSegment2(destination, renderState, formatContext, id) {
      switch (formatContext.insertionMode) {
        case ROOT_HTML_MODE2:
        case HTML_HTML_MODE2:
        case HTML_MODE2:
          return destination.push(startSegmentHTML3), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentHTML22);
        case SVG_MODE2:
          return destination.push(startSegmentSVG3), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentSVG22);
        case MATHML_MODE2:
          return destination.push(startSegmentMathML3), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentMathML22);
        case HTML_TABLE_MODE2:
          return destination.push(startSegmentTable3), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTable22);
        case HTML_TABLE_BODY_MODE2:
          return destination.push(startSegmentTableBody3), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTableBody22);
        case HTML_TABLE_ROW_MODE2:
          return destination.push(startSegmentTableRow3), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTableRow22);
        case HTML_COLGROUP_MODE2:
          return destination.push(startSegmentColGroup3), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentColGroup22);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function writeEndSegment2(destination, formatContext) {
      switch (formatContext.insertionMode) {
        case ROOT_HTML_MODE2:
        case HTML_HTML_MODE2:
        case HTML_MODE2:
          return destination.push(endSegmentHTML2);
        case SVG_MODE2:
          return destination.push(endSegmentSVG2);
        case MATHML_MODE2:
          return destination.push(endSegmentMathML2);
        case HTML_TABLE_MODE2:
          return destination.push(endSegmentTable2);
        case HTML_TABLE_BODY_MODE2:
          return destination.push(endSegmentTableBody2);
        case HTML_TABLE_ROW_MODE2:
          return destination.push(endSegmentTableRow2);
        case HTML_COLGROUP_MODE2:
          return destination.push(endSegmentColGroup2);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function escapeJSStringsForInstructionScripts2(input) {
      return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts2, function(match) {
        switch (match) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function escapeJSObjectForInstructionScripts2(input) {
      return JSON.stringify(input).replace(regexForJSStringsInScripts2, function(match) {
        switch (match) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function flushStyleTagsLateForBoundary2(styleQueue) {
      var { rules, hrefs } = styleQueue;
      0 < rules.length && hrefs.length === 0 && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
      var i = 0;
      if (hrefs.length) {
        this.push(lateStyleTagResourceOpen12);
        this.push(styleQueue.precedence);
        for (this.push(lateStyleTagResourceOpen22);i < hrefs.length - 1; i++)
          this.push(hrefs[i]), this.push(spaceSeparator2);
        this.push(hrefs[i]);
        this.push(lateStyleTagResourceOpen32);
        for (i = 0;i < rules.length; i++)
          this.push(rules[i]);
        destinationHasCapacity2 = this.push(lateStyleTagTemplateClose2);
        currentlyRenderingBoundaryHasStylesToHoist2 = true;
        rules.length = 0;
        hrefs.length = 0;
      }
    }
    function hasStylesToHoist2(stylesheet) {
      return stylesheet.state !== PREAMBLE2 ? currentlyRenderingBoundaryHasStylesToHoist2 = true : false;
    }
    function writeHoistablesForBoundary2(destination, hoistableState, renderState) {
      currentlyRenderingBoundaryHasStylesToHoist2 = false;
      destinationHasCapacity2 = true;
      hoistableState.styles.forEach(flushStyleTagsLateForBoundary2, destination);
      hoistableState.stylesheets.forEach(hasStylesToHoist2);
      currentlyRenderingBoundaryHasStylesToHoist2 && (renderState.stylesToHoist = true);
      return destinationHasCapacity2;
    }
    function flushResource2(resource) {
      for (var i = 0;i < resource.length; i++)
        this.push(resource[i]);
      resource.length = 0;
    }
    function flushStyleInPreamble2(stylesheet) {
      pushLinkImpl2(stylesheetFlushingQueue2, stylesheet.props);
      for (var i = 0;i < stylesheetFlushingQueue2.length; i++)
        this.push(stylesheetFlushingQueue2[i]);
      stylesheetFlushingQueue2.length = 0;
      stylesheet.state = PREAMBLE2;
    }
    function flushStylesInPreamble2(styleQueue) {
      var hasStylesheets = 0 < styleQueue.sheets.size;
      styleQueue.sheets.forEach(flushStyleInPreamble2, this);
      styleQueue.sheets.clear();
      var { rules, hrefs } = styleQueue;
      if (!hasStylesheets || hrefs.length) {
        this.push(styleTagResourceOpen12);
        this.push(styleQueue.precedence);
        styleQueue = 0;
        if (hrefs.length) {
          for (this.push(styleTagResourceOpen22);styleQueue < hrefs.length - 1; styleQueue++)
            this.push(hrefs[styleQueue]), this.push(spaceSeparator2);
          this.push(hrefs[styleQueue]);
        }
        this.push(styleTagResourceOpen32);
        for (styleQueue = 0;styleQueue < rules.length; styleQueue++)
          this.push(rules[styleQueue]);
        this.push(styleTagResourceClose2);
        rules.length = 0;
        hrefs.length = 0;
      }
    }
    function preloadLateStyle2(stylesheet) {
      if (stylesheet.state === PENDING$12) {
        stylesheet.state = PRELOADED2;
        var props = stylesheet.props;
        pushLinkImpl2(stylesheetFlushingQueue2, {
          rel: "preload",
          as: "style",
          href: stylesheet.props.href,
          crossOrigin: props.crossOrigin,
          fetchPriority: props.fetchPriority,
          integrity: props.integrity,
          media: props.media,
          hrefLang: props.hrefLang,
          referrerPolicy: props.referrerPolicy
        });
        for (stylesheet = 0;stylesheet < stylesheetFlushingQueue2.length; stylesheet++)
          this.push(stylesheetFlushingQueue2[stylesheet]);
        stylesheetFlushingQueue2.length = 0;
      }
    }
    function preloadLateStyles2(styleQueue) {
      styleQueue.sheets.forEach(preloadLateStyle2, this);
      styleQueue.sheets.clear();
    }
    function writeStyleResourceDependenciesInJS2(destination, hoistableState) {
      destination.push(arrayFirstOpenBracket2);
      var nextArrayOpenBrackChunk = arrayFirstOpenBracket2;
      hoistableState.stylesheets.forEach(function(resource) {
        if (resource.state !== PREAMBLE2)
          if (resource.state === LATE2)
            destination.push(nextArrayOpenBrackChunk), resource = resource.props.href, checkAttributeStringCoercion2(resource, "href"), resource = escapeJSObjectForInstructionScripts2("" + resource), destination.push(resource), destination.push(arrayCloseBracket2), nextArrayOpenBrackChunk = arraySubsequentOpenBracket2;
          else {
            destination.push(nextArrayOpenBrackChunk);
            var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL2("" + resource.props.href);
            coercedHref = escapeJSObjectForInstructionScripts2(coercedHref);
            destination.push(coercedHref);
            checkAttributeStringCoercion2(precedence, "precedence");
            precedence = "" + precedence;
            destination.push(arrayInterstitial2);
            precedence = escapeJSObjectForInstructionScripts2(precedence);
            destination.push(precedence);
            for (var propKey in props)
              if (hasOwnProperty2.call(props, propKey) && (precedence = props[propKey], precedence != null))
                switch (propKey) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                  default:
                    writeStyleResourceAttributeInJS2(destination, propKey, precedence);
                }
            destination.push(arrayCloseBracket2);
            nextArrayOpenBrackChunk = arraySubsequentOpenBracket2;
            resource.state = LATE2;
          }
      });
      destination.push(arrayCloseBracket2);
    }
    function writeStyleResourceAttributeInJS2(destination, name, value) {
      var attributeName = name.toLowerCase();
      switch (typeof value) {
        case "function":
        case "symbol":
          return;
      }
      switch (name) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          attributeName = "class";
          checkAttributeStringCoercion2(value, attributeName);
          name = "" + value;
          break;
        case "hidden":
          if (value === false)
            return;
          name = "";
          break;
        case "src":
        case "href":
          value = sanitizeURL2(value);
          checkAttributeStringCoercion2(value, attributeName);
          name = "" + value;
          break;
        default:
          if (2 < name.length && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N") || !isAttributeNameSafe2(name))
            return;
          checkAttributeStringCoercion2(value, attributeName);
          name = "" + value;
      }
      destination.push(arrayInterstitial2);
      attributeName = escapeJSObjectForInstructionScripts2(attributeName);
      destination.push(attributeName);
      destination.push(arrayInterstitial2);
      attributeName = escapeJSObjectForInstructionScripts2(name);
      destination.push(attributeName);
    }
    function createHoistableState2() {
      return { styles: new Set, stylesheets: new Set };
    }
    function preloadBootstrapScriptOrModule2(resumableState, renderState, href, props) {
      (resumableState.scriptResources.hasOwnProperty(href) || resumableState.moduleScriptResources.hasOwnProperty(href)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', href);
      resumableState.scriptResources[href] = EXISTS2;
      resumableState.moduleScriptResources[href] = EXISTS2;
      resumableState = [];
      pushLinkImpl2(resumableState, props);
      renderState.bootstrapScripts.add(resumableState);
    }
    function adoptPreloadCredentials2(target, preloadState) {
      target.crossOrigin == null && (target.crossOrigin = preloadState[0]);
      target.integrity == null && (target.integrity = preloadState[1]);
    }
    function getPreloadAsHeader2(href, as, params) {
      href = escapeHrefForLinkHeaderURLContext2(href);
      as = escapeStringForLinkHeaderQuotedParamValueContext2(as, "as");
      as = "<" + href + '>; rel=preload; as="' + as + '"';
      for (var paramName in params)
        hasOwnProperty2.call(params, paramName) && (href = params[paramName], typeof href === "string" && (as += "; " + paramName.toLowerCase() + '="' + escapeStringForLinkHeaderQuotedParamValueContext2(href, paramName) + '"'));
      return as;
    }
    function escapeHrefForLinkHeaderURLContext2(hrefInput) {
      checkAttributeStringCoercion2(hrefInput, "href");
      return ("" + hrefInput).replace(regexForHrefInLinkHeaderURLContext2, escapeHrefForLinkHeaderURLContextReplacer2);
    }
    function escapeHrefForLinkHeaderURLContextReplacer2(match) {
      switch (match) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    }
    function escapeStringForLinkHeaderQuotedParamValueContext2(value, name) {
      willCoercionThrow2(value) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", name, typeName2(value)), testStringCoercion2(value));
      return ("" + value).replace(regexForLinkHeaderQuotedParamValueContext2, escapeStringForLinkHeaderQuotedParamValueContextReplacer2);
    }
    function escapeStringForLinkHeaderQuotedParamValueContextReplacer2(match) {
      switch (match) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    }
    function hoistStyleQueueDependency2(styleQueue) {
      this.styles.add(styleQueue);
    }
    function hoistStylesheetDependency2(stylesheet) {
      this.stylesheets.add(stylesheet);
    }
    function createRenderState2(resumableState, generateStaticMarkup) {
      var idPrefix = resumableState.idPrefix, bootstrapChunks = [], bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
      bootstrapScriptContent !== undefined && bootstrapChunks.push("<script>", escapeEntireInlineScriptContent2(bootstrapScriptContent), "</script>");
      idPrefix = {
        placeholderPrefix: idPrefix + "P:",
        segmentPrefix: idPrefix + "S:",
        boundaryPrefix: idPrefix + "B:",
        startInlineScript: "<script>",
        htmlChunks: null,
        headChunks: null,
        externalRuntimeScript: null,
        bootstrapChunks,
        importMapChunks: [],
        onHeaders: undefined,
        headers: null,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: new Set,
        fontPreloads: new Set,
        highImagePreloads: new Set,
        styles: new Map,
        bootstrapScripts: new Set,
        scripts: new Set,
        bulkPreloads: new Set,
        preloads: {
          images: new Map,
          stylesheets: new Map,
          scripts: new Map,
          moduleScripts: new Map
        },
        nonce: undefined,
        hoistableState: null,
        stylesToHoist: false
      };
      if (bootstrapScripts !== undefined)
        for (bootstrapScriptContent = 0;bootstrapScriptContent < bootstrapScripts.length; bootstrapScriptContent++) {
          var scriptConfig = bootstrapScripts[bootstrapScriptContent], src, crossOrigin = undefined, integrity = undefined, props = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: undefined
          };
          typeof scriptConfig === "string" ? props.href = src = scriptConfig : (props.href = src = scriptConfig.src, props.integrity = integrity = typeof scriptConfig.integrity === "string" ? scriptConfig.integrity : undefined, props.crossOrigin = crossOrigin = typeof scriptConfig === "string" || scriptConfig.crossOrigin == null ? undefined : scriptConfig.crossOrigin === "use-credentials" ? "use-credentials" : "");
          preloadBootstrapScriptOrModule2(resumableState, idPrefix, src, props);
          bootstrapChunks.push('<script src="', escapeTextForBrowser2(src));
          typeof integrity === "string" && bootstrapChunks.push('" integrity="', escapeTextForBrowser2(integrity));
          typeof crossOrigin === "string" && bootstrapChunks.push('" crossorigin="', escapeTextForBrowser2(crossOrigin));
          bootstrapChunks.push('" async=""></script>');
        }
      if (bootstrapModules !== undefined)
        for (bootstrapScripts = 0;bootstrapScripts < bootstrapModules.length; bootstrapScripts++)
          bootstrapScriptContent = bootstrapModules[bootstrapScripts], crossOrigin = src = undefined, integrity = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: undefined
          }, typeof bootstrapScriptContent === "string" ? integrity.href = scriptConfig = bootstrapScriptContent : (integrity.href = scriptConfig = bootstrapScriptContent.src, integrity.integrity = crossOrigin = typeof bootstrapScriptContent.integrity === "string" ? bootstrapScriptContent.integrity : undefined, integrity.crossOrigin = src = typeof bootstrapScriptContent === "string" || bootstrapScriptContent.crossOrigin == null ? undefined : bootstrapScriptContent.crossOrigin === "use-credentials" ? "use-credentials" : ""), preloadBootstrapScriptOrModule2(resumableState, idPrefix, scriptConfig, integrity), bootstrapChunks.push('<script type="module" src="', escapeTextForBrowser2(scriptConfig)), typeof crossOrigin === "string" && bootstrapChunks.push('" integrity="', escapeTextForBrowser2(crossOrigin)), typeof src === "string" && bootstrapChunks.push('" crossorigin="', escapeTextForBrowser2(src)), bootstrapChunks.push('" async=""></script>');
      return {
        placeholderPrefix: idPrefix.placeholderPrefix,
        segmentPrefix: idPrefix.segmentPrefix,
        boundaryPrefix: idPrefix.boundaryPrefix,
        startInlineScript: idPrefix.startInlineScript,
        htmlChunks: idPrefix.htmlChunks,
        headChunks: idPrefix.headChunks,
        externalRuntimeScript: idPrefix.externalRuntimeScript,
        bootstrapChunks: idPrefix.bootstrapChunks,
        importMapChunks: idPrefix.importMapChunks,
        onHeaders: idPrefix.onHeaders,
        headers: idPrefix.headers,
        resets: idPrefix.resets,
        charsetChunks: idPrefix.charsetChunks,
        viewportChunks: idPrefix.viewportChunks,
        hoistableChunks: idPrefix.hoistableChunks,
        preconnects: idPrefix.preconnects,
        fontPreloads: idPrefix.fontPreloads,
        highImagePreloads: idPrefix.highImagePreloads,
        styles: idPrefix.styles,
        bootstrapScripts: idPrefix.bootstrapScripts,
        scripts: idPrefix.scripts,
        bulkPreloads: idPrefix.bulkPreloads,
        preloads: idPrefix.preloads,
        stylesToHoist: idPrefix.stylesToHoist,
        generateStaticMarkup
      };
    }
    function pushTextInstance2(target, text, renderState, textEmbedded) {
      if (renderState.generateStaticMarkup)
        return target.push(escapeTextForBrowser2(text)), false;
      text === "" ? target = textEmbedded : (textEmbedded && target.push("<!-- -->"), target.push(escapeTextForBrowser2(text)), target = true);
      return target;
    }
    function pushSegmentFinale(target, renderState, lastPushedText, textEmbedded) {
      renderState.generateStaticMarkup || lastPushedText && textEmbedded && target.push("<!-- -->");
    }
    function getComponentNameFromType2(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE2 ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE2:
          return "Fragment";
        case REACT_PORTAL_TYPE2:
          return "Portal";
        case REACT_PROFILER_TYPE2:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE2:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE2:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE2:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_CONTEXT_TYPE2:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE2:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE2:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE2:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType2(type.type) || "Memo";
          case REACT_LAZY_TYPE2:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType2(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    function popToNearestCommonAncestor2(prev, next) {
      if (prev !== next) {
        prev.context._currentValue2 = prev.parentValue;
        prev = prev.parent;
        var parentNext = next.parent;
        if (prev === null) {
          if (parentNext !== null)
            throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (parentNext === null)
            throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          popToNearestCommonAncestor2(prev, parentNext);
        }
        next.context._currentValue2 = next.value;
      }
    }
    function popAllPrevious2(prev) {
      prev.context._currentValue2 = prev.parentValue;
      prev = prev.parent;
      prev !== null && popAllPrevious2(prev);
    }
    function pushAllNext2(next) {
      var parentNext = next.parent;
      parentNext !== null && pushAllNext2(parentNext);
      next.context._currentValue2 = next.value;
    }
    function popPreviousToCommonLevel2(prev, next) {
      prev.context._currentValue2 = prev.parentValue;
      prev = prev.parent;
      if (prev === null)
        throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      prev.depth === next.depth ? popToNearestCommonAncestor2(prev, next) : popPreviousToCommonLevel2(prev, next);
    }
    function popNextToCommonLevel2(prev, next) {
      var parentNext = next.parent;
      if (parentNext === null)
        throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      prev.depth === parentNext.depth ? popToNearestCommonAncestor2(prev, parentNext) : popNextToCommonLevel2(prev, parentNext);
      next.context._currentValue2 = next.value;
    }
    function switchContext2(newSnapshot) {
      var prev = currentActiveSnapshot2;
      prev !== newSnapshot && (prev === null ? pushAllNext2(newSnapshot) : newSnapshot === null ? popAllPrevious2(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor2(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel2(prev, newSnapshot) : popNextToCommonLevel2(prev, newSnapshot), currentActiveSnapshot2 = newSnapshot);
    }
    function warnOnInvalidCallback2(callback) {
      if (callback !== null && typeof callback !== "function") {
        var key = String(callback);
        didWarnOnInvalidCallback2.has(key) || (didWarnOnInvalidCallback2.add(key), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", callback));
      }
    }
    function warnNoop2(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && getComponentNameFromType2(publicInstance) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnAboutNoopUpdateForComponent2[warningKey] || (console.error(`Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, callerName, publicInstance), didWarnAboutNoopUpdateForComponent2[warningKey] = true);
    }
    function pushTreeContext2(baseContext, totalChildren, index) {
      var baseIdWithLeadingBit = baseContext.id;
      baseContext = baseContext.overflow;
      var baseLength = 32 - clz322(baseIdWithLeadingBit) - 1;
      baseIdWithLeadingBit &= ~(1 << baseLength);
      index += 1;
      var length = 32 - clz322(totalChildren) + baseLength;
      if (30 < length) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
        baseIdWithLeadingBit >>= numberOfOverflowBits;
        baseLength -= numberOfOverflowBits;
        return {
          id: 1 << 32 - clz322(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
          overflow: length + baseContext
        };
      }
      return {
        id: 1 << length | index << baseLength | baseIdWithLeadingBit,
        overflow: baseContext
      };
    }
    function clz32Fallback2(x) {
      x >>>= 0;
      return x === 0 ? 32 : 31 - (log2(x) / LN22 | 0) | 0;
    }
    function noop$22() {
    }
    function trackUsedThenable2(thenableState3, thenable, index) {
      index = thenableState3[index];
      index === undefined ? thenableState3.push(thenable) : index !== thenable && (thenable.then(noop$22, noop$22), thenable = index);
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          typeof thenable.status === "string" ? thenable.then(noop$22, noop$22) : (thenableState3 = thenable, thenableState3.status = "pending", thenableState3.then(function(fulfilledValue) {
            if (thenable.status === "pending") {
              var fulfilledThenable = thenable;
              fulfilledThenable.status = "fulfilled";
              fulfilledThenable.value = fulfilledValue;
            }
          }, function(error) {
            if (thenable.status === "pending") {
              var rejectedThenable = thenable;
              rejectedThenable.status = "rejected";
              rejectedThenable.reason = error;
            }
          }));
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
          suspendedThenable2 = thenable;
          throw SuspenseException2;
      }
    }
    function getSuspendedThenable2() {
      if (suspendedThenable2 === null)
        throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
      var thenable = suspendedThenable2;
      suspendedThenable2 = null;
      return thenable;
    }
    function is2(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function resolveCurrentlyRenderingComponent2() {
      if (currentlyRenderingComponent2 === null)
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      isInHookUserCodeInDev2 && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
      return currentlyRenderingComponent2;
    }
    function createHook2() {
      if (0 < numberOfReRenders2)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function createWorkInProgressHook2() {
      workInProgressHook2 === null ? firstWorkInProgressHook2 === null ? (isReRender2 = false, firstWorkInProgressHook2 = workInProgressHook2 = createHook2()) : (isReRender2 = true, workInProgressHook2 = firstWorkInProgressHook2) : workInProgressHook2.next === null ? (isReRender2 = false, workInProgressHook2 = workInProgressHook2.next = createHook2()) : (isReRender2 = true, workInProgressHook2 = workInProgressHook2.next);
      return workInProgressHook2;
    }
    function getThenableStateAfterSuspending2() {
      var state = thenableState2;
      thenableState2 = null;
      return state;
    }
    function resetHooksState2() {
      isInHookUserCodeInDev2 = false;
      currentlyRenderingKeyPath2 = currentlyRenderingRequest2 = currentlyRenderingTask2 = currentlyRenderingComponent2 = null;
      didScheduleRenderPhaseUpdate2 = false;
      firstWorkInProgressHook2 = null;
      numberOfReRenders2 = 0;
      workInProgressHook2 = renderPhaseUpdates2 = null;
    }
    function readContext2(context) {
      isInHookUserCodeInDev2 && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      return context._currentValue2;
    }
    function basicStateReducer2(state, action) {
      return typeof action === "function" ? action(state) : action;
    }
    function useReducer2(reducer, initialArg, init) {
      reducer !== basicStateReducer2 && (currentHookNameInDev2 = "useReducer");
      currentlyRenderingComponent2 = resolveCurrentlyRenderingComponent2();
      workInProgressHook2 = createWorkInProgressHook2();
      if (isReRender2) {
        init = workInProgressHook2.queue;
        initialArg = init.dispatch;
        if (renderPhaseUpdates2 !== null) {
          var firstRenderPhaseUpdate = renderPhaseUpdates2.get(init);
          if (firstRenderPhaseUpdate !== undefined) {
            renderPhaseUpdates2.delete(init);
            init = workInProgressHook2.memoizedState;
            do {
              var action = firstRenderPhaseUpdate.action;
              isInHookUserCodeInDev2 = true;
              init = reducer(init, action);
              isInHookUserCodeInDev2 = false;
              firstRenderPhaseUpdate = firstRenderPhaseUpdate.next;
            } while (firstRenderPhaseUpdate !== null);
            workInProgressHook2.memoizedState = init;
            return [init, initialArg];
          }
        }
        return [workInProgressHook2.memoizedState, initialArg];
      }
      isInHookUserCodeInDev2 = true;
      reducer = reducer === basicStateReducer2 ? typeof initialArg === "function" ? initialArg() : initialArg : init !== undefined ? init(initialArg) : initialArg;
      isInHookUserCodeInDev2 = false;
      workInProgressHook2.memoizedState = reducer;
      reducer = workInProgressHook2.queue = { last: null, dispatch: null };
      reducer = reducer.dispatch = dispatchAction2.bind(null, currentlyRenderingComponent2, reducer);
      return [workInProgressHook2.memoizedState, reducer];
    }
    function useMemo2(nextCreate, deps) {
      currentlyRenderingComponent2 = resolveCurrentlyRenderingComponent2();
      workInProgressHook2 = createWorkInProgressHook2();
      deps = deps === undefined ? null : deps;
      if (workInProgressHook2 !== null) {
        var prevState = workInProgressHook2.memoizedState;
        if (prevState !== null && deps !== null) {
          a: {
            var JSCompiler_inline_result = prevState[1];
            if (JSCompiler_inline_result === null)
              console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev2), JSCompiler_inline_result = false;
            else {
              deps.length !== JSCompiler_inline_result.length && console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, currentHookNameInDev2, "[" + deps.join(", ") + "]", "[" + JSCompiler_inline_result.join(", ") + "]");
              for (var i = 0;i < JSCompiler_inline_result.length && i < deps.length; i++)
                if (!objectIs2(deps[i], JSCompiler_inline_result[i])) {
                  JSCompiler_inline_result = false;
                  break a;
                }
              JSCompiler_inline_result = true;
            }
          }
          if (JSCompiler_inline_result)
            return prevState[0];
        }
      }
      isInHookUserCodeInDev2 = true;
      nextCreate = nextCreate();
      isInHookUserCodeInDev2 = false;
      workInProgressHook2.memoizedState = [nextCreate, deps];
      return nextCreate;
    }
    function dispatchAction2(componentIdentity, queue, action) {
      if (25 <= numberOfReRenders2)
        throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (componentIdentity === currentlyRenderingComponent2)
        if (didScheduleRenderPhaseUpdate2 = true, componentIdentity = { action, next: null }, renderPhaseUpdates2 === null && (renderPhaseUpdates2 = new Map), action = renderPhaseUpdates2.get(queue), action === undefined)
          renderPhaseUpdates2.set(queue, componentIdentity);
        else {
          for (queue = action;queue.next !== null; )
            queue = queue.next;
          queue.next = componentIdentity;
        }
    }
    function unsupportedStartTransition2() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function unsupportedSetOptimisticState2() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function useActionState2(action, initialState, permalink) {
      resolveCurrentlyRenderingComponent2();
      var actionStateHookIndex = actionStateCounter2++, request = currentlyRenderingRequest2;
      if (typeof action.$$FORM_ACTION === "function") {
        var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath2;
        request = request.formState;
        var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
        if (request !== null && typeof isSignatureEqual === "function") {
          var postbackKey = request[1];
          isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = permalink !== undefined ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
            componentKeyPath,
            null,
            actionStateHookIndex
          ]), 0), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex2 = actionStateHookIndex, initialState = request[0]));
        }
        var boundAction = action.bind(null, initialState);
        action = function(payload) {
          boundAction(payload);
        };
        typeof boundAction.$$FORM_ACTION === "function" && (action.$$FORM_ACTION = function(prefix3) {
          prefix3 = boundAction.$$FORM_ACTION(prefix3);
          permalink !== undefined && (checkAttributeStringCoercion2(permalink, "target"), permalink += "", prefix3.action = permalink);
          var formData = prefix3.data;
          formData && (nextPostbackStateKey === null && (nextPostbackStateKey = permalink !== undefined ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
            componentKeyPath,
            null,
            actionStateHookIndex
          ]), 0)), formData.append("$ACTION_KEY", nextPostbackStateKey));
          return prefix3;
        });
        return [initialState, action, false];
      }
      var _boundAction = action.bind(null, initialState);
      return [
        initialState,
        function(payload) {
          _boundAction(payload);
        },
        false
      ];
    }
    function unwrapThenable2(thenable) {
      var index = thenableIndexCounter2;
      thenableIndexCounter2 += 1;
      thenableState2 === null && (thenableState2 = []);
      return trackUsedThenable2(thenableState2, thenable, index);
    }
    function unsupportedRefresh2() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function noop$12() {
    }
    function disabledLog2() {
    }
    function disableLogs2() {
      if (disabledDepth2 === 0) {
        prevLog2 = console.log;
        prevInfo2 = console.info;
        prevWarn2 = console.warn;
        prevError2 = console.error;
        prevGroup2 = console.group;
        prevGroupCollapsed2 = console.groupCollapsed;
        prevGroupEnd2 = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog2,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth2++;
    }
    function reenableLogs2() {
      disabledDepth2--;
      if (disabledDepth2 === 0) {
        var props = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, {
          log: assign2({}, props, { value: prevLog2 }),
          info: assign2({}, props, { value: prevInfo2 }),
          warn: assign2({}, props, { value: prevWarn2 }),
          error: assign2({}, props, { value: prevError2 }),
          group: assign2({}, props, { value: prevGroup2 }),
          groupCollapsed: assign2({}, props, { value: prevGroupCollapsed2 }),
          groupEnd: assign2({}, props, { value: prevGroupEnd2 })
        });
      }
      0 > disabledDepth2 && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame2(name) {
      if (prefix2 === undefined)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix2 = match && match[1] || "";
          suffix2 = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + prefix2 + name + suffix2;
    }
    function describeNativeComponentFrame2(fn, construct) {
      if (!fn || reentry2)
        return "";
      var frame = componentFrameCache2.get(fn);
      if (frame !== undefined)
        return frame;
      reentry2 = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher3 = null;
      previousDispatcher3 = ReactSharedInternals2.H;
      ReactSharedInternals2.H = null;
      disableLogs2();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string")
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
          for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
            namePropDescriptor++;
          for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
            _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
            for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
              _RunInRootFrame$Deter--;
          for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
            if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
                do
                  if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                    fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                    typeof fn === "function" && componentFrameCache2.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        reentry2 = false, ReactSharedInternals2.H = previousDispatcher3, reenableLogs2(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame2(sampleLines) : "";
      typeof fn === "function" && componentFrameCache2.set(fn, sampleLines);
      return sampleLines;
    }
    function describeComponentStackByType2(type) {
      if (typeof type === "string")
        return describeBuiltInComponentFrame2(type);
      if (typeof type === "function")
        return type.prototype && type.prototype.isReactComponent ? (type = describeNativeComponentFrame2(type, true), type) : describeNativeComponentFrame2(type, false);
      if (typeof type === "object" && type !== null) {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE2:
            return describeNativeComponentFrame2(type.render, false);
          case REACT_MEMO_TYPE2:
            return describeNativeComponentFrame2(type.type, false);
          case REACT_LAZY_TYPE2:
            var lazyComponent = type, payload = lazyComponent._payload;
            lazyComponent = lazyComponent._init;
            try {
              type = lazyComponent(payload);
            } catch (x) {
              return describeBuiltInComponentFrame2("Lazy");
            }
            return describeComponentStackByType2(type);
        }
        if (typeof type.name === "string")
          return payload = type.env, describeBuiltInComponentFrame2(type.name + (payload ? " [" + payload + "]" : ""));
      }
      switch (type) {
        case REACT_SUSPENSE_LIST_TYPE2:
          return describeBuiltInComponentFrame2("SuspenseList");
        case REACT_SUSPENSE_TYPE2:
          return describeBuiltInComponentFrame2("Suspense");
      }
      return "";
    }
    function getStackByComponentStackNode2(componentStack) {
      try {
        var info = "";
        do
          info += describeComponentStackByType2(componentStack.type), componentStack = componentStack.parent;
        while (componentStack);
        return info;
      } catch (x) {
        return `
Error generating stack: ` + x.message + `
` + x.stack;
      }
    }
    function defaultErrorHandler2(error) {
      if (typeof error === "object" && error !== null && typeof error.environmentName === "string") {
        var JSCompiler_inline_result = error.environmentName;
        error = [error].slice(0);
        typeof error[0] === "string" ? error.splice(0, 1, "[%s] " + error[0], " " + JSCompiler_inline_result + " ") : error.splice(0, 0, "[%s] ", " " + JSCompiler_inline_result + " ");
        error.unshift(console);
        JSCompiler_inline_result = bind2.apply(console.error, error);
        JSCompiler_inline_result();
      } else
        console.error(error);
      return null;
    }
    function noop2() {
    }
    function RequestInstance2(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
      var abortSet = new Set;
      this.destination = null;
      this.flushScheduled = false;
      this.resumableState = resumableState;
      this.renderState = renderState;
      this.rootFormatContext = rootFormatContext;
      this.progressiveChunkSize = progressiveChunkSize === undefined ? 12800 : progressiveChunkSize;
      this.status = 10;
      this.fatalError = null;
      this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
      this.completedRootSegment = null;
      this.abortableTasks = abortSet;
      this.pingedTasks = [];
      this.clientRenderedBoundaries = [];
      this.completedBoundaries = [];
      this.partialBoundaries = [];
      this.trackedPostpones = null;
      this.onError = onError2 === undefined ? defaultErrorHandler2 : onError2;
      this.onPostpone = onPostpone === undefined ? noop2 : onPostpone;
      this.onAllReady = onAllReady === undefined ? noop2 : onAllReady;
      this.onShellReady = onShellReady === undefined ? noop2 : onShellReady;
      this.onShellError = onShellError === undefined ? noop2 : onShellError;
      this.onFatalError = onFatalError === undefined ? noop2 : onFatalError;
      this.formState = formState === undefined ? null : formState;
      this.didWarnForKey = null;
    }
    function createRequest2(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
      resumableState = new RequestInstance2(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState);
      renderState = createPendingSegment2(resumableState, 0, null, rootFormatContext, false, false);
      renderState.parentFlushed = true;
      children = createRenderTask2(resumableState, null, children, -1, null, renderState, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext2, null, false);
      pushComponentStack2(children);
      resumableState.pingedTasks.push(children);
      return resumableState;
    }
    function pingTask2(request, task) {
      request.pingedTasks.push(task);
      request.pingedTasks.length === 1 && (request.flushScheduled = request.destination !== null, performWork2(request));
    }
    function createSuspenseBoundary2(request, fallbackAbortableTasks) {
      return {
        status: PENDING2,
        rootSegmentID: -1,
        parentFlushed: false,
        pendingTasks: 0,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks,
        errorDigest: null,
        contentState: createHoistableState2(),
        fallbackState: createHoistableState2(),
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      };
    }
    function createRenderTask2(request, thenableState3, node, childIndex, blockedBoundary, blockedSegment, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
      request.allPendingTasks++;
      blockedBoundary === null ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
      var task = {
        replay: null,
        node,
        childIndex,
        ping: function() {
          return pingTask2(request, task);
        },
        blockedBoundary,
        blockedSegment,
        hoistableState,
        abortSet,
        keyPath,
        formatContext,
        context,
        treeContext,
        componentStack,
        thenableState: thenableState3,
        isFallback
      };
      abortSet.add(task);
      return task;
    }
    function createReplayTask2(request, thenableState3, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
      request.allPendingTasks++;
      blockedBoundary === null ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
      replay.pendingTasks++;
      var task = {
        replay,
        node,
        childIndex,
        ping: function() {
          return pingTask2(request, task);
        },
        blockedBoundary,
        blockedSegment: null,
        hoistableState,
        abortSet,
        keyPath,
        formatContext,
        context,
        treeContext,
        componentStack,
        thenableState: thenableState3,
        isFallback
      };
      abortSet.add(task);
      return task;
    }
    function createPendingSegment2(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
      return {
        status: PENDING2,
        id: -1,
        index,
        parentFlushed: false,
        chunks: [],
        children: [],
        parentFormatContext,
        boundary,
        lastPushedText,
        textEmbedded
      };
    }
    function getCurrentStackInDEV2() {
      return currentTaskInDEV2 === null || currentTaskInDEV2.componentStack === null ? "" : getStackByComponentStackNode2(currentTaskInDEV2.componentStack);
    }
    function pushServerComponentStack2(task, debugInfo) {
      if (debugInfo != null)
        for (var i = 0;i < debugInfo.length; i++) {
          var componentInfo = debugInfo[i];
          typeof componentInfo.name === "string" && (task.componentStack = {
            parent: task.componentStack,
            type: componentInfo,
            owner: componentInfo.owner,
            stack: null
          });
        }
    }
    function pushComponentStack2(task) {
      var node = task.node;
      if (typeof node === "object" && node !== null)
        switch (node.$$typeof) {
          case REACT_ELEMENT_TYPE2:
            var { type, _owner: owner } = node;
            pushServerComponentStack2(task, node._debugInfo);
            task.componentStack = {
              parent: task.componentStack,
              type,
              owner,
              stack: null
            };
            break;
          case REACT_LAZY_TYPE2:
            pushServerComponentStack2(task, node._debugInfo);
            break;
          default:
            typeof node.then === "function" && pushServerComponentStack2(task, node._debugInfo);
        }
    }
    function getThrownInfo2(node) {
      var errorInfo = {};
      node && Object.defineProperty(errorInfo, "componentStack", {
        configurable: true,
        enumerable: true,
        get: function() {
          var stack = getStackByComponentStackNode2(node);
          Object.defineProperty(errorInfo, "componentStack", {
            value: stack
          });
          return stack;
        }
      });
      return errorInfo;
    }
    function encodeErrorForBoundary2(boundary, digest, error, thrownInfo, wasAborted) {
      boundary.errorDigest = digest;
      error instanceof Error ? (digest = String(error.message), error = String(error.stack)) : (digest = typeof error === "object" && error !== null ? describeObjectForErrorMessage2(error) : String(error), error = null);
      wasAborted = wasAborted ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`;
      boundary.errorMessage = wasAborted + digest;
      boundary.errorStack = error !== null ? wasAborted + error : null;
      boundary.errorComponentStack = thrownInfo.componentStack;
    }
    function logRecoverableError2(request, error, errorInfo) {
      request = request.onError;
      error = request(error, errorInfo);
      if (error != null && typeof error !== "string")
        console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof error);
      else
        return error;
    }
    function fatalError2(request, error) {
      var { onShellError, onFatalError } = request;
      onShellError(error);
      onFatalError(error);
      request.destination !== null ? (request.status = CLOSED2, request.destination.destroy(error)) : (request.status = 13, request.fatalError = error);
    }
    function renderWithHooks2(request, task, keyPath, Component, props, secondArg) {
      var prevThenableState = task.thenableState;
      task.thenableState = null;
      currentlyRenderingComponent2 = {};
      currentlyRenderingTask2 = task;
      currentlyRenderingRequest2 = request;
      currentlyRenderingKeyPath2 = keyPath;
      isInHookUserCodeInDev2 = false;
      actionStateCounter2 = localIdCounter2 = 0;
      actionStateMatchingIndex2 = -1;
      thenableIndexCounter2 = 0;
      thenableState2 = prevThenableState;
      for (request = callComponentInDEV2(Component, props, secondArg);didScheduleRenderPhaseUpdate2; )
        didScheduleRenderPhaseUpdate2 = false, actionStateCounter2 = localIdCounter2 = 0, actionStateMatchingIndex2 = -1, thenableIndexCounter2 = 0, numberOfReRenders2 += 1, workInProgressHook2 = null, request = Component(props, secondArg);
      resetHooksState2();
      return request;
    }
    function finishFunctionComponent2(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex3) {
      var didEmitActionStateMarkers = false;
      if (actionStateCount !== 0 && request.formState !== null) {
        var segment = task.blockedSegment;
        if (segment !== null) {
          didEmitActionStateMarkers = true;
          segment = segment.chunks;
          for (var i = 0;i < actionStateCount; i++)
            i === actionStateMatchingIndex3 ? segment.push("<!--F!-->") : segment.push("<!--F-->");
        }
      }
      actionStateCount = task.keyPath;
      task.keyPath = keyPath;
      hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext2(keyPath, 1, 0), renderNode2(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode2(request, task, children, -1) : renderNodeDestructive2(request, task, children, -1);
      task.keyPath = actionStateCount;
    }
    function renderElement2(request, task, keyPath, type, props, ref) {
      if (typeof type === "function")
        if (type.prototype && type.prototype.isReactComponent) {
          var newProps = props;
          if ("ref" in props) {
            newProps = {};
            for (var propName in props)
              propName !== "ref" && (newProps[propName] = props[propName]);
          }
          var defaultProps = type.defaultProps;
          if (defaultProps) {
            newProps === props && (newProps = assign2({}, newProps, props));
            for (var _propName in defaultProps)
              newProps[_propName] === undefined && (newProps[_propName] = defaultProps[_propName]);
          }
          var resolvedProps = newProps;
          var context = emptyContextObject2, contextType = type.contextType;
          if ("contextType" in type && contextType !== null && (contextType === undefined || contextType.$$typeof !== REACT_CONTEXT_TYPE2) && !didWarnAboutInvalidateContextType2.has(type)) {
            didWarnAboutInvalidateContextType2.add(type);
            var addendum = contextType === undefined ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof contextType !== "object" ? " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_CONSUMER_TYPE2 ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
            console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType2(type) || "Component", addendum);
          }
          typeof contextType === "object" && contextType !== null && (context = contextType._currentValue2);
          var instance = new type(resolvedProps, context);
          if (typeof type.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === undefined)) {
            var componentName = getComponentNameFromType2(type) || "Component";
            didWarnAboutUninitializedState2.has(componentName) || (didWarnAboutUninitializedState2.add(componentName), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName));
          }
          if (typeof type.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
            var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
            typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true ? foundWillMountName = "componentWillMount" : typeof instance.UNSAFE_componentWillMount === "function" && (foundWillMountName = "UNSAFE_componentWillMount");
            typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true ? foundWillReceivePropsName = "componentWillReceiveProps" : typeof instance.UNSAFE_componentWillReceiveProps === "function" && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps");
            typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true ? foundWillUpdateName = "componentWillUpdate" : typeof instance.UNSAFE_componentWillUpdate === "function" && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
            if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentNameFromType2(type) || "Component", newApiName = typeof type.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              didWarnAboutLegacyLifecyclesAndDerivedState2.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState2.add(_componentName), console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`, _componentName, newApiName, foundWillMountName !== null ? `
  ` + foundWillMountName : "", foundWillReceivePropsName !== null ? `
  ` + foundWillReceivePropsName : "", foundWillUpdateName !== null ? `
  ` + foundWillUpdateName : ""));
            }
          }
          var name = getComponentNameFromType2(type) || "Component";
          instance.render || (type.prototype && typeof type.prototype.render === "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", name) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", name));
          !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
          instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
          instance.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
          type.childContextTypes && !didWarnAboutChildContextTypes2.has(type) && (didWarnAboutChildContextTypes2.add(type), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", name));
          type.contextTypes && !didWarnAboutContextTypes$12.has(type) && (didWarnAboutContextTypes$12.add(type), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", name));
          typeof instance.componentShouldUpdate === "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
          type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined" && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType2(type) || "A pure component");
          typeof instance.componentDidUnmount === "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
          typeof instance.componentDidReceiveProps === "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
          typeof instance.componentWillRecieveProps === "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
          typeof instance.UNSAFE_componentWillRecieveProps === "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
          var hasMutatedProps = instance.props !== resolvedProps;
          instance.props !== undefined && hasMutatedProps && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name);
          instance.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
          typeof instance.getSnapshotBeforeUpdate !== "function" || typeof instance.componentDidUpdate === "function" || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate2.has(type) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate2.add(type), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType2(type)));
          typeof instance.getDerivedStateFromProps === "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          typeof instance.getDerivedStateFromError === "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          typeof type.getSnapshotBeforeUpdate === "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
          var state = instance.state;
          state && (typeof state !== "object" || isArrayImpl2(state)) && console.error("%s.state: must be set to an object or null", name);
          typeof instance.getChildContext === "function" && typeof type.childContextTypes !== "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
          var initialState = instance.state !== undefined ? instance.state : null;
          instance.updater = classComponentUpdater2;
          instance.props = resolvedProps;
          instance.state = initialState;
          var internalInstance = { queue: [], replace: false };
          instance._reactInternals = internalInstance;
          var contextType$jscomp$0 = type.contextType;
          instance.context = typeof contextType$jscomp$0 === "object" && contextType$jscomp$0 !== null ? contextType$jscomp$0._currentValue2 : emptyContextObject2;
          if (instance.state === resolvedProps) {
            var componentName$jscomp$0 = getComponentNameFromType2(type) || "Component";
            didWarnAboutDirectlyAssigningPropsToState2.has(componentName$jscomp$0) || (didWarnAboutDirectlyAssigningPropsToState2.add(componentName$jscomp$0), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName$jscomp$0));
          }
          var getDerivedStateFromProps = type.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            var partialState = getDerivedStateFromProps(resolvedProps, initialState);
            if (partialState === undefined) {
              var componentName$jscomp$1 = getComponentNameFromType2(type) || "Component";
              didWarnAboutUndefinedDerivedState2.has(componentName$jscomp$1) || (didWarnAboutUndefinedDerivedState2.add(componentName$jscomp$1), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName$jscomp$1));
            }
            var JSCompiler_inline_result = partialState === null || partialState === undefined ? initialState : assign2({}, initialState, partialState);
            instance.state = JSCompiler_inline_result;
          }
          if (typeof type.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            var oldState = instance.state;
            if (typeof instance.componentWillMount === "function") {
              if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                var componentName$jscomp$2 = getComponentNameFromType2(type) || "Unknown";
                didWarnAboutDeprecatedWillMount2[componentName$jscomp$2] || (console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`, componentName$jscomp$2), didWarnAboutDeprecatedWillMount2[componentName$jscomp$2] = true);
              }
              instance.componentWillMount();
            }
            typeof instance.UNSAFE_componentWillMount === "function" && instance.UNSAFE_componentWillMount();
            oldState !== instance.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType2(type) || "Component"), classComponentUpdater2.enqueueReplaceState(instance, instance.state, null));
            if (internalInstance.queue !== null && 0 < internalInstance.queue.length) {
              var { queue: oldQueue, replace: oldReplace } = internalInstance;
              internalInstance.queue = null;
              internalInstance.replace = false;
              if (oldReplace && oldQueue.length === 1)
                instance.state = oldQueue[0];
              else {
                for (var nextState = oldReplace ? oldQueue[0] : instance.state, dontMutate = true, i = oldReplace ? 1 : 0;i < oldQueue.length; i++) {
                  var partial = oldQueue[i], partialState$jscomp$0 = typeof partial === "function" ? partial.call(instance, nextState, resolvedProps, undefined) : partial;
                  partialState$jscomp$0 != null && (dontMutate ? (dontMutate = false, nextState = assign2({}, nextState, partialState$jscomp$0)) : assign2(nextState, partialState$jscomp$0));
                }
                instance.state = nextState;
              }
            } else
              internalInstance.queue = null;
          }
          var nextChildren = callRenderInDEV2(instance);
          if (request.status === 12)
            throw null;
          instance.props !== resolvedProps && (didWarnAboutReassigningProps2 || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType2(type) || "a component"), didWarnAboutReassigningProps2 = true);
          var prevKeyPath = task.keyPath;
          task.keyPath = keyPath;
          renderNodeDestructive2(request, task, nextChildren, -1);
          task.keyPath = prevKeyPath;
        } else {
          if (type.prototype && typeof type.prototype.render === "function") {
            var componentName$jscomp$3 = getComponentNameFromType2(type) || "Unknown";
            didWarnAboutBadClass2[componentName$jscomp$3] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName$jscomp$3, componentName$jscomp$3), didWarnAboutBadClass2[componentName$jscomp$3] = true);
          }
          var value = renderWithHooks2(request, task, keyPath, type, props, undefined);
          if (request.status === 12)
            throw null;
          var hasId = localIdCounter2 !== 0, actionStateCount = actionStateCounter2, actionStateMatchingIndex$jscomp$0 = actionStateMatchingIndex2;
          if (type.contextTypes) {
            var _componentName$jscomp$0 = getComponentNameFromType2(type) || "Unknown";
            didWarnAboutContextTypes2[_componentName$jscomp$0] || (didWarnAboutContextTypes2[_componentName$jscomp$0] = true, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", _componentName$jscomp$0));
          }
          type && type.childContextTypes && console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`, type.displayName || type.name || "Component");
          if (typeof type.getDerivedStateFromProps === "function") {
            var _componentName2 = getComponentNameFromType2(type) || "Unknown";
            didWarnAboutGetDerivedStateOnFunctionComponent2[_componentName2] || (console.error("%s: Function components do not support getDerivedStateFromProps.", _componentName2), didWarnAboutGetDerivedStateOnFunctionComponent2[_componentName2] = true);
          }
          if (typeof type.contextType === "object" && type.contextType !== null) {
            var _componentName3 = getComponentNameFromType2(type) || "Unknown";
            didWarnAboutContextTypeOnFunctionComponent2[_componentName3] || (console.error("%s: Function components do not support contextType.", _componentName3), didWarnAboutContextTypeOnFunctionComponent2[_componentName3] = true);
          }
          finishFunctionComponent2(request, task, keyPath, value, hasId, actionStateCount, actionStateMatchingIndex$jscomp$0);
        }
      else if (typeof type === "string") {
        var segment = task.blockedSegment;
        if (segment === null) {
          var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
          task.formatContext = getChildFormatContext2(prevContext, type, props);
          task.keyPath = keyPath;
          renderNode2(request, task, children, -1);
          task.formatContext = prevContext;
          task.keyPath = prevKeyPath$jscomp$0;
        } else {
          var _children = pushStartInstance2(segment.chunks, type, props, request.resumableState, request.renderState, task.hoistableState, task.formatContext, segment.lastPushedText, task.isFallback);
          segment.lastPushedText = false;
          var { formatContext: _prevContext, keyPath: _prevKeyPath2 } = task;
          task.formatContext = getChildFormatContext2(_prevContext, type, props);
          task.keyPath = keyPath;
          renderNode2(request, task, _children, -1);
          task.formatContext = _prevContext;
          task.keyPath = _prevKeyPath2;
          a: {
            var target = segment.chunks, resumableState = request.resumableState;
            switch (type) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break a;
              case "body":
                if (_prevContext.insertionMode <= HTML_HTML_MODE2) {
                  resumableState.hasBody = true;
                  break a;
                }
                break;
              case "html":
                if (_prevContext.insertionMode === ROOT_HTML_MODE2) {
                  resumableState.hasHtml = true;
                  break a;
                }
            }
            target.push(endChunkForTag2(type));
          }
          segment.lastPushedText = false;
        }
      } else {
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE2:
          case REACT_DEBUG_TRACING_MODE_TYPE2:
          case REACT_STRICT_MODE_TYPE2:
          case REACT_PROFILER_TYPE2:
          case REACT_FRAGMENT_TYPE2:
            var prevKeyPath$jscomp$1 = task.keyPath;
            task.keyPath = keyPath;
            renderNodeDestructive2(request, task, props.children, -1);
            task.keyPath = prevKeyPath$jscomp$1;
            return;
          case REACT_OFFSCREEN_TYPE2:
            if (props.mode !== "hidden") {
              var prevKeyPath$jscomp$2 = task.keyPath;
              task.keyPath = keyPath;
              renderNodeDestructive2(request, task, props.children, -1);
              task.keyPath = prevKeyPath$jscomp$2;
            }
            return;
          case REACT_SUSPENSE_LIST_TYPE2:
            var _prevKeyPath3 = task.keyPath;
            task.keyPath = keyPath;
            renderNodeDestructive2(request, task, props.children, -1);
            task.keyPath = _prevKeyPath3;
            return;
          case REACT_SCOPE_TYPE2:
            throw Error("ReactDOMServer does not yet support scope components.");
          case REACT_SUSPENSE_TYPE2:
            a:
              if (task.replay !== null) {
                var _prevKeyPath = task.keyPath;
                task.keyPath = keyPath;
                var _content = props.children;
                try {
                  renderNode2(request, task, _content, -1);
                } finally {
                  task.keyPath = _prevKeyPath;
                }
              } else {
                var { keyPath: prevKeyPath$jscomp$3, blockedBoundary: parentBoundary, hoistableState: parentHoistableState, blockedSegment: parentSegment } = task, fallback = props.fallback, content = props.children, fallbackAbortSet = new Set, newBoundary = createSuspenseBoundary2(request, fallbackAbortSet);
                request.trackedPostpones !== null && (newBoundary.trackedContentKeyPath = keyPath);
                var boundarySegment = createPendingSegment2(request, parentSegment.chunks.length, newBoundary, task.formatContext, false, false);
                parentSegment.children.push(boundarySegment);
                parentSegment.lastPushedText = false;
                var contentRootSegment = createPendingSegment2(request, 0, null, task.formatContext, false, false);
                contentRootSegment.parentFlushed = true;
                if (request.trackedPostpones !== null) {
                  var fallbackKeyPath = [
                    keyPath[0],
                    "Suspense Fallback",
                    keyPath[2]
                  ], fallbackReplayNode = [
                    fallbackKeyPath[1],
                    fallbackKeyPath[2],
                    [],
                    null
                  ];
                  request.trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
                  newBoundary.trackedFallbackNode = fallbackReplayNode;
                  task.blockedSegment = boundarySegment;
                  task.keyPath = fallbackKeyPath;
                  boundarySegment.status = 6;
                  try {
                    renderNode2(request, task, fallback, -1), pushSegmentFinale(boundarySegment.chunks, request.renderState, boundarySegment.lastPushedText, boundarySegment.textEmbedded), boundarySegment.status = COMPLETED2;
                  } catch (thrownValue) {
                    throw boundarySegment.status = request.status === 12 ? 3 : 4, thrownValue;
                  } finally {
                    task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                  }
                  var suspendedPrimaryTask = createRenderTask2(request, null, content, -1, newBoundary, contentRootSegment, newBoundary.contentState, task.abortSet, keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
                  pushComponentStack2(suspendedPrimaryTask);
                  request.pingedTasks.push(suspendedPrimaryTask);
                } else {
                  task.blockedBoundary = newBoundary;
                  task.hoistableState = newBoundary.contentState;
                  task.blockedSegment = contentRootSegment;
                  task.keyPath = keyPath;
                  contentRootSegment.status = 6;
                  try {
                    if (renderNode2(request, task, content, -1), pushSegmentFinale(contentRootSegment.chunks, request.renderState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded), contentRootSegment.status = COMPLETED2, queueCompletedSegment2(newBoundary, contentRootSegment), newBoundary.pendingTasks === 0 && newBoundary.status === PENDING2) {
                      newBoundary.status = COMPLETED2;
                      break a;
                    }
                  } catch (thrownValue$2) {
                    newBoundary.status = CLIENT_RENDERED2;
                    if (request.status === 12) {
                      contentRootSegment.status = 3;
                      var error = request.fatalError;
                    } else
                      contentRootSegment.status = 4, error = thrownValue$2;
                    var thrownInfo = getThrownInfo2(task.componentStack);
                    var errorDigest = logRecoverableError2(request, error, thrownInfo);
                    encodeErrorForBoundary2(newBoundary, errorDigest, error, thrownInfo, false);
                    untrackBoundary2(request, newBoundary);
                  } finally {
                    task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                  }
                  var suspendedFallbackTask = createRenderTask2(request, null, fallback, -1, parentBoundary, boundarySegment, newBoundary.fallbackState, fallbackAbortSet, [keyPath[0], "Suspense Fallback", keyPath[2]], task.formatContext, task.context, task.treeContext, task.componentStack, true);
                  pushComponentStack2(suspendedFallbackTask);
                  request.pingedTasks.push(suspendedFallbackTask);
                }
              }
            return;
        }
        if (typeof type === "object" && type !== null)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE2:
              if ("ref" in props) {
                var propsWithoutRef = {};
                for (var key in props)
                  key !== "ref" && (propsWithoutRef[key] = props[key]);
              } else
                propsWithoutRef = props;
              var children$jscomp$0 = renderWithHooks2(request, task, keyPath, type.render, propsWithoutRef, ref);
              finishFunctionComponent2(request, task, keyPath, children$jscomp$0, localIdCounter2 !== 0, actionStateCounter2, actionStateMatchingIndex2);
              return;
            case REACT_MEMO_TYPE2:
              renderElement2(request, task, keyPath, type.type, props, ref);
              return;
            case REACT_PROVIDER_TYPE2:
            case REACT_CONTEXT_TYPE2:
              var { value: value$jscomp$0, children: children$jscomp$1 } = props;
              var prevSnapshot = task.context;
              var prevKeyPath$jscomp$4 = task.keyPath;
              var prevValue = type._currentValue2;
              type._currentValue2 = value$jscomp$0;
              type._currentRenderer2 !== undefined && type._currentRenderer2 !== null && type._currentRenderer2 !== rendererSigil2 && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              type._currentRenderer2 = rendererSigil2;
              var prevNode = currentActiveSnapshot2, newNode = {
                parent: prevNode,
                depth: prevNode === null ? 0 : prevNode.depth + 1,
                context: type,
                parentValue: prevValue,
                value: value$jscomp$0
              };
              currentActiveSnapshot2 = newNode;
              task.context = newNode;
              task.keyPath = keyPath;
              renderNodeDestructive2(request, task, children$jscomp$1, -1);
              var prevSnapshot$jscomp$0 = currentActiveSnapshot2;
              if (prevSnapshot$jscomp$0 === null)
                throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
              prevSnapshot$jscomp$0.context !== type && console.error("The parent context is not the expected context. This is probably a bug in React.");
              prevSnapshot$jscomp$0.context._currentValue2 = prevSnapshot$jscomp$0.parentValue;
              type._currentRenderer2 !== undefined && type._currentRenderer2 !== null && type._currentRenderer2 !== rendererSigil2 && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              type._currentRenderer2 = rendererSigil2;
              var JSCompiler_inline_result$jscomp$0 = currentActiveSnapshot2 = prevSnapshot$jscomp$0.parent;
              task.context = JSCompiler_inline_result$jscomp$0;
              task.keyPath = prevKeyPath$jscomp$4;
              prevSnapshot !== task.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
              return;
            case REACT_CONSUMER_TYPE2:
              var context$jscomp$0 = type._context, render = props.children;
              typeof render !== "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
              var newChildren = render(context$jscomp$0._currentValue2), prevKeyPath$jscomp$5 = task.keyPath;
              task.keyPath = keyPath;
              renderNodeDestructive2(request, task, newChildren, -1);
              task.keyPath = prevKeyPath$jscomp$5;
              return;
            case REACT_LAZY_TYPE2:
              var Component = callLazyInitInDEV2(type);
              if (request.status === 12)
                throw null;
              renderElement2(request, task, keyPath, Component, props, ref);
              return;
          }
        var info = "";
        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
          info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((type == null ? type : typeof type) + "." + info));
      }
    }
    function resumeNode2(request, task, segmentId, node, childIndex) {
      var { replay: prevReplay, blockedBoundary } = task, resumedSegment = createPendingSegment2(request, 0, null, task.formatContext, false, false);
      resumedSegment.id = segmentId;
      resumedSegment.parentFlushed = true;
      try {
        task.replay = null, task.blockedSegment = resumedSegment, renderNode2(request, task, node, childIndex), resumedSegment.status = COMPLETED2, blockedBoundary === null ? request.completedRootSegment = resumedSegment : (queueCompletedSegment2(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
      } finally {
        task.replay = prevReplay, task.blockedSegment = null;
      }
    }
    function renderNodeDestructive2(request, task, node, childIndex) {
      task.replay !== null && typeof task.replay.slots === "number" ? resumeNode2(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack2(task), retryNode2(request, task), task.componentStack = node);
    }
    function retryNode2(request, task) {
      var { node, childIndex } = task;
      if (node !== null) {
        if (typeof node === "object") {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE2:
              var { type, key, props } = node;
              node = props.ref;
              var ref = node !== undefined ? node : null, name = getComponentNameFromType2(type), keyOrIndex = key == null ? childIndex === -1 ? 0 : childIndex : key, keyPath = [task.keyPath, name, keyOrIndex];
              if (task.replay !== null) {
                var replay = task.replay;
                childIndex = replay.nodes;
                for (node = 0;node < childIndex.length; node++)
                  if (key = childIndex[node], keyOrIndex === key[1]) {
                    if (key.length === 4) {
                      if (name !== null && name !== key[0])
                        throw Error("Expected the resume to render <" + key[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering.");
                      var childNodes = key[2];
                      key = key[3];
                      name = task.node;
                      task.replay = {
                        nodes: childNodes,
                        slots: key,
                        pendingTasks: 1
                      };
                      try {
                        renderElement2(request, task, keyPath, type, props, ref);
                        if (task.replay.pendingTasks === 1 && 0 < task.replay.nodes.length)
                          throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        task.replay.pendingTasks--;
                      } catch (x) {
                        if (typeof x === "object" && x !== null && (x === SuspenseException2 || typeof x.then === "function"))
                          throw task.node === name && (task.replay = replay), x;
                        task.replay.pendingTasks--;
                        props = getThrownInfo2(task.componentStack);
                        erroredReplay2(request, task.blockedBoundary, x, props, childNodes, key);
                      }
                      task.replay = replay;
                    } else {
                      if (type !== REACT_SUSPENSE_TYPE2)
                        throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType2(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                      a: {
                        type = undefined;
                        ref = key[5];
                        replay = key[2];
                        name = key[3];
                        keyOrIndex = key[4] === null ? [] : key[4][2];
                        key = key[4] === null ? null : key[4][3];
                        var { keyPath: prevKeyPath, replay: previousReplaySet, blockedBoundary: parentBoundary, hoistableState: parentHoistableState } = task, content = props.children;
                        props = props.fallback;
                        var fallbackAbortSet = new Set, resumedBoundary = createSuspenseBoundary2(request, fallbackAbortSet);
                        resumedBoundary.parentFlushed = true;
                        resumedBoundary.rootSegmentID = ref;
                        task.blockedBoundary = resumedBoundary;
                        task.hoistableState = resumedBoundary.contentState;
                        task.keyPath = keyPath;
                        task.replay = {
                          nodes: replay,
                          slots: name,
                          pendingTasks: 1
                        };
                        try {
                          renderNode2(request, task, content, -1);
                          if (task.replay.pendingTasks === 1 && 0 < task.replay.nodes.length)
                            throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                          task.replay.pendingTasks--;
                          if (resumedBoundary.pendingTasks === 0 && resumedBoundary.status === PENDING2) {
                            resumedBoundary.status = COMPLETED2;
                            request.completedBoundaries.push(resumedBoundary);
                            break a;
                          }
                        } catch (error) {
                          resumedBoundary.status = CLIENT_RENDERED2, childNodes = getThrownInfo2(task.componentStack), type = logRecoverableError2(request, error, childNodes), encodeErrorForBoundary2(resumedBoundary, type, error, childNodes, false), task.replay.pendingTasks--, request.clientRenderedBoundaries.push(resumedBoundary);
                        } finally {
                          task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath;
                        }
                        childNodes = createReplayTask2(request, null, { nodes: keyOrIndex, slots: key, pendingTasks: 0 }, props, -1, parentBoundary, resumedBoundary.fallbackState, fallbackAbortSet, [keyPath[0], "Suspense Fallback", keyPath[2]], task.formatContext, task.context, task.treeContext, task.componentStack, true);
                        pushComponentStack2(childNodes);
                        request.pingedTasks.push(childNodes);
                      }
                    }
                    childIndex.splice(node, 1);
                    break;
                  }
              } else
                renderElement2(request, task, keyPath, type, props, ref);
              return;
            case REACT_PORTAL_TYPE2:
              throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            case REACT_LAZY_TYPE2:
              node = callLazyInitInDEV2(node);
              if (request.status === 12)
                throw null;
              renderNodeDestructive2(request, task, node, childIndex);
              return;
          }
          if (isArrayImpl2(node)) {
            renderChildrenArray2(request, task, node, childIndex);
            return;
          }
          node === null || typeof node !== "object" ? props = null : (childNodes = MAYBE_ITERATOR_SYMBOL2 && node[MAYBE_ITERATOR_SYMBOL2] || node["@@iterator"], props = typeof childNodes === "function" ? childNodes : null);
          if (props && (childNodes = props.call(node))) {
            if (childNodes === node) {
              if (childIndex !== -1 || task.componentStack === null || typeof task.componentStack.type !== "function" || Object.prototype.toString.call(task.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(childNodes) !== "[object Generator]")
                didWarnAboutGenerators2 || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), didWarnAboutGenerators2 = true;
            } else
              node.entries !== props || didWarnAboutMaps2 || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps2 = true);
            node = childNodes.next();
            if (!node.done) {
              props = [];
              do
                props.push(node.value), node = childNodes.next();
              while (!node.done);
              renderChildrenArray2(request, task, props, childIndex);
            }
            return;
          }
          if (typeof node.then === "function")
            return task.thenableState = null, renderNodeDestructive2(request, task, unwrapThenable2(node), childIndex);
          if (node.$$typeof === REACT_CONTEXT_TYPE2)
            return renderNodeDestructive2(request, task, node._currentValue2, childIndex);
          childIndex = Object.prototype.toString.call(node);
          throw Error("Objects are not valid as a React child (found: " + (childIndex === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex) + "). If you meant to render a collection of children, use an array instead.");
        }
        typeof node === "string" ? (childIndex = task.blockedSegment, childIndex !== null && (childIndex.lastPushedText = pushTextInstance2(childIndex.chunks, node, request.renderState, childIndex.lastPushedText))) : typeof node === "number" || typeof node === "bigint" ? (childIndex = task.blockedSegment, childIndex !== null && (childIndex.lastPushedText = pushTextInstance2(childIndex.chunks, "" + node, request.renderState, childIndex.lastPushedText))) : (typeof node === "function" && (childIndex = node.displayName || node.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", childIndex, childIndex)), typeof node === "symbol" && console.error(`Symbols are not valid as a React child.
  %s`, String(node)));
      }
    }
    function renderChildrenArray2(request$jscomp$0, task, children, childIndex) {
      var { keyPath: prevKeyPath, componentStack: previousComponentStack } = task;
      pushServerComponentStack2(task, task.node._debugInfo);
      if (childIndex !== -1 && (task.keyPath = [task.keyPath, "Fragment", childIndex], task.replay !== null)) {
        for (var replay = task.replay, replayNodes = replay.nodes, j = 0;j < replayNodes.length; j++) {
          var node = replayNodes[j];
          if (node[1] === childIndex) {
            childIndex = node[2];
            node = node[3];
            task.replay = { nodes: childIndex, slots: node, pendingTasks: 1 };
            try {
              renderChildrenArray2(request$jscomp$0, task, children, -1);
              if (task.replay.pendingTasks === 1 && 0 < task.replay.nodes.length)
                throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
              task.replay.pendingTasks--;
            } catch (x) {
              if (typeof x === "object" && x !== null && (x === SuspenseException2 || typeof x.then === "function"))
                throw x;
              task.replay.pendingTasks--;
              children = getThrownInfo2(task.componentStack);
              erroredReplay2(request$jscomp$0, task.blockedBoundary, x, children, childIndex, node);
            }
            task.replay = replay;
            replayNodes.splice(j, 1);
            break;
          }
        }
        task.keyPath = prevKeyPath;
        task.componentStack = previousComponentStack;
        return;
      }
      replay = task.treeContext;
      replayNodes = children.length;
      if (task.replay !== null && (j = task.replay.slots, j !== null && typeof j === "object")) {
        for (childIndex = 0;childIndex < replayNodes; childIndex++) {
          node = children[childIndex];
          task.treeContext = pushTreeContext2(replay, replayNodes, childIndex);
          var resumeSegmentID = j[childIndex];
          typeof resumeSegmentID === "number" ? (resumeNode2(request$jscomp$0, task, resumeSegmentID, node, childIndex), delete j[childIndex]) : renderNode2(request$jscomp$0, task, node, childIndex);
        }
        task.treeContext = replay;
        task.keyPath = prevKeyPath;
        task.componentStack = previousComponentStack;
        return;
      }
      for (j = 0;j < replayNodes; j++) {
        childIndex = children[j];
        var request = request$jscomp$0;
        node = task;
        resumeSegmentID = childIndex;
        if (resumeSegmentID !== null && typeof resumeSegmentID === "object" && (resumeSegmentID.$$typeof === REACT_ELEMENT_TYPE2 || resumeSegmentID.$$typeof === REACT_PORTAL_TYPE2) && resumeSegmentID._store && (!resumeSegmentID._store.validated && resumeSegmentID.key == null || resumeSegmentID._store.validated === 2)) {
          if (typeof resumeSegmentID._store !== "object")
            throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
          resumeSegmentID._store.validated = 1;
          var didWarnForKey = request.didWarnForKey;
          didWarnForKey == null && (didWarnForKey = request.didWarnForKey = new WeakSet);
          request = node.componentStack;
          if (request !== null && !didWarnForKey.has(request)) {
            didWarnForKey.add(request);
            var componentName = getComponentNameFromType2(resumeSegmentID.type);
            didWarnForKey = resumeSegmentID._owner;
            var parentOwner = request.owner;
            request = "";
            if (parentOwner && typeof parentOwner.type !== "undefined") {
              var name = getComponentNameFromType2(parentOwner.type);
              name && (request = `

Check the render method of \`` + name + "`.");
            }
            request || componentName && (request = `

Check the top-level render call using <` + componentName + ">.");
            componentName = "";
            didWarnForKey != null && parentOwner !== didWarnForKey && (parentOwner = null, typeof didWarnForKey.type !== "undefined" ? parentOwner = getComponentNameFromType2(didWarnForKey.type) : typeof didWarnForKey.name === "string" && (parentOwner = didWarnForKey.name), parentOwner && (componentName = " It was passed a child from " + parentOwner + "."));
            didWarnForKey = node.componentStack;
            node.componentStack = {
              parent: node.componentStack,
              type: resumeSegmentID.type,
              owner: resumeSegmentID._owner,
              stack: null
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', request, componentName);
            node.componentStack = didWarnForKey;
          }
        }
        task.treeContext = pushTreeContext2(replay, replayNodes, j);
        renderNode2(request$jscomp$0, task, childIndex, j);
      }
      task.treeContext = replay;
      task.keyPath = prevKeyPath;
      task.componentStack = previousComponentStack;
    }
    function untrackBoundary2(request, boundary) {
      request = request.trackedPostpones;
      request !== null && (boundary = boundary.trackedContentKeyPath, boundary !== null && (boundary = request.workingMap.get(boundary), boundary !== undefined && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
    }
    function spawnNewSuspendedReplayTask2(request, task, thenableState3) {
      return createReplayTask2(request, thenableState3, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
    }
    function spawnNewSuspendedRenderTask2(request, task, thenableState3) {
      var segment = task.blockedSegment, newSegment = createPendingSegment2(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, true);
      segment.children.push(newSegment);
      segment.lastPushedText = false;
      return createRenderTask2(request, thenableState3, task.node, task.childIndex, task.blockedBoundary, newSegment, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
    }
    function renderNode2(request, task, node, childIndex) {
      var { formatContext: previousFormatContext, context: previousContext, keyPath: previousKeyPath, treeContext: previousTreeContext, componentStack: previousComponentStack, blockedSegment: segment } = task;
      if (segment === null)
        try {
          return renderNodeDestructive2(request, task, node, childIndex);
        } catch (thrownValue) {
          if (resetHooksState2(), node = thrownValue === SuspenseException2 ? getSuspendedThenable2() : thrownValue, typeof node === "object" && node !== null) {
            if (typeof node.then === "function") {
              childIndex = getThenableStateAfterSuspending2();
              request = spawnNewSuspendedReplayTask2(request, task, childIndex).ping;
              node.then(request, request);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext2(previousContext);
              return;
            }
            if (node.message === "Maximum call stack size exceeded") {
              node = getThenableStateAfterSuspending2();
              node = spawnNewSuspendedReplayTask2(request, task, node);
              request.pingedTasks.push(node);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext2(previousContext);
              return;
            }
          }
        }
      else {
        var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
        try {
          return renderNodeDestructive2(request, task, node, childIndex);
        } catch (thrownValue$3) {
          if (resetHooksState2(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$3 === SuspenseException2 ? getSuspendedThenable2() : thrownValue$3, typeof node === "object" && node !== null) {
            if (typeof node.then === "function") {
              childIndex = getThenableStateAfterSuspending2();
              request = spawnNewSuspendedRenderTask2(request, task, childIndex).ping;
              node.then(request, request);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext2(previousContext);
              return;
            }
            if (node.message === "Maximum call stack size exceeded") {
              node = getThenableStateAfterSuspending2();
              node = spawnNewSuspendedRenderTask2(request, task, node);
              request.pingedTasks.push(node);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext2(previousContext);
              return;
            }
          }
        }
      }
      task.formatContext = previousFormatContext;
      task.context = previousContext;
      task.keyPath = previousKeyPath;
      task.treeContext = previousTreeContext;
      switchContext2(previousContext);
      throw node;
    }
    function erroredReplay2(request, boundary, error, errorInfo, replayNodes, resumeSlots) {
      var errorDigest = logRecoverableError2(request, error, errorInfo);
      abortRemainingReplayNodes2(request, boundary, replayNodes, resumeSlots, error, errorDigest, errorInfo, false);
    }
    function abortTaskSoft2(task) {
      var boundary = task.blockedBoundary;
      task = task.blockedSegment;
      task !== null && (task.status = 3, finishedTask2(this, boundary, task));
    }
    function abortRemainingReplayNodes2(request$jscomp$0, boundary, nodes, slots, error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted) {
      for (var i = 0;i < nodes.length; i++) {
        var node = nodes[i];
        if (node.length === 4)
          abortRemainingReplayNodes2(request$jscomp$0, boundary, node[2], node[3], error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted);
        else {
          var request = request$jscomp$0;
          node = node[5];
          var error = error$jscomp$0, errorDigest = errorDigest$jscomp$0, errorInfo = errorInfo$jscomp$0, wasAborted = aborted, resumedBoundary = createSuspenseBoundary2(request, new Set);
          resumedBoundary.parentFlushed = true;
          resumedBoundary.rootSegmentID = node;
          resumedBoundary.status = CLIENT_RENDERED2;
          encodeErrorForBoundary2(resumedBoundary, errorDigest, error, errorInfo, wasAborted);
          resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
        }
      }
      nodes.length = 0;
      if (slots !== null) {
        if (boundary === null)
          throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
        boundary.status !== CLIENT_RENDERED2 && (boundary.status = CLIENT_RENDERED2, encodeErrorForBoundary2(boundary, errorDigest$jscomp$0, error$jscomp$0, errorInfo$jscomp$0, aborted), boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
        if (typeof slots === "object")
          for (var index in slots)
            delete slots[index];
      }
    }
    function abortTask2(task, request, error) {
      var { blockedBoundary: boundary, blockedSegment: segment } = task;
      if (segment !== null) {
        if (segment.status === 6)
          return;
        segment.status = 3;
      }
      segment = getThrownInfo2(task.componentStack);
      if (boundary === null) {
        if (request.status !== 13 && request.status !== CLOSED2) {
          boundary = task.replay;
          if (boundary === null) {
            logRecoverableError2(request, error, segment);
            fatalError2(request, error);
            return;
          }
          boundary.pendingTasks--;
          boundary.pendingTasks === 0 && 0 < boundary.nodes.length && (task = logRecoverableError2(request, error, segment), abortRemainingReplayNodes2(request, null, boundary.nodes, boundary.slots, error, task, segment, true));
          request.pendingRootTasks--;
          request.pendingRootTasks === 0 && completeShell2(request);
        }
      } else
        boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED2 && (boundary.status = CLIENT_RENDERED2, task = logRecoverableError2(request, error, segment), boundary.status = CLIENT_RENDERED2, encodeErrorForBoundary2(boundary, task, error, segment, true), untrackBoundary2(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
          return abortTask2(fallbackTask, request, error);
        }), boundary.fallbackAbortableTasks.clear();
      request.allPendingTasks--;
      request.allPendingTasks === 0 && completeAll2(request);
    }
    function safelyEmitEarlyPreloads2(request, shellComplete) {
      try {
        var renderState = request.renderState, onHeaders = renderState.onHeaders;
        if (onHeaders) {
          var headers = renderState.headers;
          if (headers) {
            renderState.headers = null;
            var linkHeader = headers.preconnects;
            headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
            headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
            if (!shellComplete) {
              var queueIter = renderState.styles.values(), queueStep = queueIter.next();
              b:
                for (;0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())
                  for (var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next();0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()) {
                    var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props;
                    var header = getPreloadAsHeader2(props$jscomp$0.href, "style", {
                      crossOrigin: props$jscomp$0.crossOrigin,
                      integrity: props$jscomp$0.integrity,
                      nonce: props$jscomp$0.nonce,
                      type: props$jscomp$0.type,
                      fetchPriority: props$jscomp$0.fetchPriority,
                      referrerPolicy: props$jscomp$0.referrerPolicy,
                      media: props$jscomp$0.media
                    });
                    if (0 <= (headers.remainingCapacity -= header.length + 2))
                      renderState.resets.style[key] = PRELOAD_NO_CREDS2, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = typeof props.crossOrigin === "string" || typeof props.integrity === "string" ? [props.crossOrigin, props.integrity] : PRELOAD_NO_CREDS2;
                    else
                      break b;
                  }
            }
            linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
          }
        }
      } catch (error) {
        logRecoverableError2(request, error, {});
      }
    }
    function completeShell2(request) {
      request.trackedPostpones === null && safelyEmitEarlyPreloads2(request, true);
      request.onShellError = noop2;
      request = request.onShellReady;
      request();
    }
    function completeAll2(request) {
      safelyEmitEarlyPreloads2(request, request.trackedPostpones === null ? true : request.completedRootSegment === null || request.completedRootSegment.status !== POSTPONED2);
      request = request.onAllReady;
      request();
    }
    function queueCompletedSegment2(boundary, segment) {
      if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null && segment.children[0].id === -1) {
        var childSegment = segment.children[0];
        childSegment.id = segment.id;
        childSegment.parentFlushed = true;
        childSegment.status === COMPLETED2 && queueCompletedSegment2(boundary, childSegment);
      } else
        boundary.completedSegments.push(segment);
    }
    function finishedTask2(request, boundary, segment) {
      if (boundary === null) {
        if (segment !== null && segment.parentFlushed) {
          if (request.completedRootSegment !== null)
            throw Error("There can only be one root segment. This is a bug in React.");
          request.completedRootSegment = segment;
        }
        request.pendingRootTasks--;
        request.pendingRootTasks === 0 && completeShell2(request);
      } else
        boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED2 && (boundary.pendingTasks === 0 ? (boundary.status === PENDING2 && (boundary.status = COMPLETED2), segment !== null && segment.parentFlushed && segment.status === COMPLETED2 && queueCompletedSegment2(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.status === COMPLETED2 && (boundary.fallbackAbortableTasks.forEach(abortTaskSoft2, request), boundary.fallbackAbortableTasks.clear())) : segment !== null && segment.parentFlushed && segment.status === COMPLETED2 && (queueCompletedSegment2(boundary, segment), boundary.completedSegments.length === 1 && boundary.parentFlushed && request.partialBoundaries.push(boundary)));
      request.allPendingTasks--;
      request.allPendingTasks === 0 && completeAll2(request);
    }
    function performWork2(request$jscomp$1) {
      if (request$jscomp$1.status !== CLOSED2 && request$jscomp$1.status !== 13) {
        var prevContext = currentActiveSnapshot2, prevDispatcher = ReactSharedInternals2.H;
        ReactSharedInternals2.H = HooksDispatcher2;
        var prevAsyncDispatcher = ReactSharedInternals2.A;
        ReactSharedInternals2.A = DefaultAsyncDispatcher2;
        var prevRequest = currentRequest2;
        currentRequest2 = request$jscomp$1;
        var prevGetCurrentStackImpl = ReactSharedInternals2.getCurrentStack;
        ReactSharedInternals2.getCurrentStack = getCurrentStackInDEV2;
        var prevResumableState = currentResumableState2;
        currentResumableState2 = request$jscomp$1.resumableState;
        try {
          var pingedTasks = request$jscomp$1.pingedTasks, i;
          for (i = 0;i < pingedTasks.length; i++) {
            var request = request$jscomp$1, task = pingedTasks[i], segment = task.blockedSegment;
            if (segment === null) {
              var prevTaskInDEV = undefined, request$jscomp$0 = request;
              request = task;
              if (request.replay.pendingTasks !== 0) {
                switchContext2(request.context);
                prevTaskInDEV = currentTaskInDEV2;
                currentTaskInDEV2 = request;
                try {
                  typeof request.replay.slots === "number" ? resumeNode2(request$jscomp$0, request, request.replay.slots, request.node, request.childIndex) : retryNode2(request$jscomp$0, request);
                  if (request.replay.pendingTasks === 1 && 0 < request.replay.nodes.length)
                    throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                  request.replay.pendingTasks--;
                  request.abortSet.delete(request);
                  finishedTask2(request$jscomp$0, request.blockedBoundary, null);
                } catch (thrownValue) {
                  resetHooksState2();
                  var x = thrownValue === SuspenseException2 ? getSuspendedThenable2() : thrownValue;
                  if (typeof x === "object" && x !== null && typeof x.then === "function") {
                    var ping = request.ping;
                    x.then(ping, ping);
                    request.thenableState = getThenableStateAfterSuspending2();
                  } else {
                    request.replay.pendingTasks--;
                    request.abortSet.delete(request);
                    var errorInfo = getThrownInfo2(request.componentStack);
                    erroredReplay2(request$jscomp$0, request.blockedBoundary, request$jscomp$0.status === 12 ? request$jscomp$0.fatalError : x, errorInfo, request.replay.nodes, request.replay.slots);
                    request$jscomp$0.pendingRootTasks--;
                    request$jscomp$0.pendingRootTasks === 0 && completeShell2(request$jscomp$0);
                    request$jscomp$0.allPendingTasks--;
                    request$jscomp$0.allPendingTasks === 0 && completeAll2(request$jscomp$0);
                  }
                } finally {
                  currentTaskInDEV2 = prevTaskInDEV;
                }
              }
            } else {
              request$jscomp$0 = prevTaskInDEV = undefined;
              var task$jscomp$0 = task, segment$jscomp$0 = segment;
              if (segment$jscomp$0.status === PENDING2) {
                segment$jscomp$0.status = 6;
                switchContext2(task$jscomp$0.context);
                request$jscomp$0 = currentTaskInDEV2;
                currentTaskInDEV2 = task$jscomp$0;
                var childrenLength = segment$jscomp$0.children.length, chunkLength = segment$jscomp$0.chunks.length;
                try {
                  retryNode2(request, task$jscomp$0), pushSegmentFinale(segment$jscomp$0.chunks, request.renderState, segment$jscomp$0.lastPushedText, segment$jscomp$0.textEmbedded), task$jscomp$0.abortSet.delete(task$jscomp$0), segment$jscomp$0.status = COMPLETED2, finishedTask2(request, task$jscomp$0.blockedBoundary, segment$jscomp$0);
                } catch (thrownValue) {
                  resetHooksState2();
                  segment$jscomp$0.children.length = childrenLength;
                  segment$jscomp$0.chunks.length = chunkLength;
                  var x$jscomp$0 = thrownValue === SuspenseException2 ? getSuspendedThenable2() : request.status === 12 ? request.fatalError : thrownValue;
                  if (typeof x$jscomp$0 === "object" && x$jscomp$0 !== null && typeof x$jscomp$0.then === "function") {
                    segment$jscomp$0.status = PENDING2;
                    task$jscomp$0.thenableState = getThenableStateAfterSuspending2();
                    var ping$jscomp$0 = task$jscomp$0.ping;
                    x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
                  } else {
                    var errorInfo$jscomp$0 = getThrownInfo2(task$jscomp$0.componentStack);
                    task$jscomp$0.abortSet.delete(task$jscomp$0);
                    segment$jscomp$0.status = 4;
                    var boundary = task$jscomp$0.blockedBoundary;
                    prevTaskInDEV = logRecoverableError2(request, x$jscomp$0, errorInfo$jscomp$0);
                    boundary === null ? fatalError2(request, x$jscomp$0) : (boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED2 && (boundary.status = CLIENT_RENDERED2, encodeErrorForBoundary2(boundary, prevTaskInDEV, x$jscomp$0, errorInfo$jscomp$0, false), untrackBoundary2(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)));
                    request.allPendingTasks--;
                    request.allPendingTasks === 0 && completeAll2(request);
                  }
                } finally {
                  currentTaskInDEV2 = request$jscomp$0;
                }
              }
            }
          }
          pingedTasks.splice(0, i);
          request$jscomp$1.destination !== null && flushCompletedQueues2(request$jscomp$1, request$jscomp$1.destination);
        } catch (error) {
          logRecoverableError2(request$jscomp$1, error, {}), fatalError2(request$jscomp$1, error);
        } finally {
          currentResumableState2 = prevResumableState, ReactSharedInternals2.H = prevDispatcher, ReactSharedInternals2.A = prevAsyncDispatcher, ReactSharedInternals2.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === HooksDispatcher2 && switchContext2(prevContext), currentRequest2 = prevRequest;
        }
      }
    }
    function flushSubtree2(request, destination, segment, hoistableState) {
      segment.parentFlushed = true;
      switch (segment.status) {
        case PENDING2:
          segment.id = request.nextSegmentId++;
        case POSTPONED2:
          return hoistableState = segment.id, segment.lastPushedText = false, segment.textEmbedded = false, request = request.renderState, destination.push(placeholder12), destination.push(request.placeholderPrefix), request = hoistableState.toString(16), destination.push(request), destination.push(placeholder22);
        case COMPLETED2:
          segment.status = FLUSHED2;
          var r = true, chunks = segment.chunks, chunkIdx = 0;
          segment = segment.children;
          for (var childIdx = 0;childIdx < segment.length; childIdx++) {
            for (r = segment[childIdx];chunkIdx < r.index; chunkIdx++)
              destination.push(chunks[chunkIdx]);
            r = flushSegment2(request, destination, r, hoistableState);
          }
          for (;chunkIdx < chunks.length - 1; chunkIdx++)
            destination.push(chunks[chunkIdx]);
          chunkIdx < chunks.length && (r = destination.push(chunks[chunkIdx]));
          return r;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function flushSegment2(request, destination, segment, hoistableState) {
      var boundary = segment.boundary;
      if (boundary === null)
        return flushSubtree2(request, destination, segment, hoistableState);
      boundary.parentFlushed = true;
      if (boundary.status === CLIENT_RENDERED2) {
        if (!request.renderState.generateStaticMarkup) {
          var { errorDigest, errorMessage, errorStack } = boundary;
          boundary = boundary.errorComponentStack;
          destination.push(startClientRenderedSuspenseBoundary2);
          destination.push(clientRenderedSuspenseBoundaryError12);
          errorDigest && (destination.push(clientRenderedSuspenseBoundaryError1A2), errorDigest = escapeTextForBrowser2(errorDigest), destination.push(errorDigest), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial2));
          errorMessage && (destination.push(clientRenderedSuspenseBoundaryError1B2), errorMessage = escapeTextForBrowser2(errorMessage), destination.push(errorMessage), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial2));
          errorStack && (destination.push(clientRenderedSuspenseBoundaryError1C2), errorStack = escapeTextForBrowser2(errorStack), destination.push(errorStack), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial2));
          boundary && (destination.push(clientRenderedSuspenseBoundaryError1D2), errorStack = escapeTextForBrowser2(boundary), destination.push(errorStack), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial2));
          destination.push(clientRenderedSuspenseBoundaryError22);
        }
        flushSubtree2(request, destination, segment, hoistableState);
        request = request.renderState.generateStaticMarkup ? true : destination.push(endSuspenseBoundary2);
        return request;
      }
      if (boundary.status !== COMPLETED2)
        return boundary.status === PENDING2 && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary2(destination, request.renderState, boundary.rootSegmentID), hoistableState && (errorStack = boundary.fallbackState, errorStack.styles.forEach(hoistStyleQueueDependency2, hoistableState), errorStack.stylesheets.forEach(hoistStylesheetDependency2, hoistableState)), flushSubtree2(request, destination, segment, hoistableState), destination.push(endSuspenseBoundary2);
      if (boundary.byteSize > request.progressiveChunkSize)
        return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary2(destination, request.renderState, boundary.rootSegmentID), flushSubtree2(request, destination, segment, hoistableState), destination.push(endSuspenseBoundary2);
      hoistableState && (segment = boundary.contentState, segment.styles.forEach(hoistStyleQueueDependency2, hoistableState), segment.stylesheets.forEach(hoistStylesheetDependency2, hoistableState));
      request.renderState.generateStaticMarkup || destination.push(startCompletedSuspenseBoundary2);
      segment = boundary.completedSegments;
      if (segment.length !== 1)
        throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      flushSegment2(request, destination, segment[0], hoistableState);
      request = request.renderState.generateStaticMarkup ? true : destination.push(endSuspenseBoundary2);
      return request;
    }
    function flushSegmentContainer2(request, destination, segment, hoistableState) {
      writeStartSegment2(destination, request.renderState, segment.parentFormatContext, segment.id);
      flushSegment2(request, destination, segment, hoistableState);
      return writeEndSegment2(destination, segment.parentFormatContext);
    }
    function flushCompletedBoundary2(request, destination, boundary) {
      for (var completedSegments = boundary.completedSegments, i = 0;i < completedSegments.length; i++)
        flushPartiallyCompletedSegment2(request, destination, boundary, completedSegments[i]);
      completedSegments.length = 0;
      writeHoistablesForBoundary2(destination, boundary.contentState, request.renderState);
      completedSegments = request.resumableState;
      request = request.renderState;
      i = boundary.rootSegmentID;
      boundary = boundary.contentState;
      var requiresStyleInsertion = request.stylesToHoist;
      request.stylesToHoist = false;
      destination.push(request.startInlineScript);
      requiresStyleInsertion ? (completedSegments.instructions & SentCompleteBoundaryFunction2) === NothingSent2 ? (completedSegments.instructions = completedSegments.instructions | SentStyleInsertionFunction2 | SentCompleteBoundaryFunction2, destination.push(completeBoundaryWithStylesScript1FullBoth2)) : (completedSegments.instructions & SentStyleInsertionFunction2) === NothingSent2 ? (completedSegments.instructions |= SentStyleInsertionFunction2, destination.push(completeBoundaryWithStylesScript1FullPartial2)) : destination.push(completeBoundaryWithStylesScript1Partial2) : (completedSegments.instructions & SentCompleteBoundaryFunction2) === NothingSent2 ? (completedSegments.instructions |= SentCompleteBoundaryFunction2, destination.push(completeBoundaryScript1Full2)) : destination.push(completeBoundaryScript1Partial2);
      completedSegments = i.toString(16);
      destination.push(request.boundaryPrefix);
      destination.push(completedSegments);
      destination.push(completeBoundaryScript22);
      destination.push(request.segmentPrefix);
      destination.push(completedSegments);
      requiresStyleInsertion ? (destination.push(completeBoundaryScript3a2), writeStyleResourceDependenciesInJS2(destination, boundary)) : destination.push(completeBoundaryScript3b2);
      boundary = destination.push(completeBoundaryScriptEnd2);
      return writeBootstrap2(destination, request) && boundary;
    }
    function flushPartiallyCompletedSegment2(request, destination, boundary, segment) {
      if (segment.status === FLUSHED2)
        return true;
      var hoistableState = boundary.contentState, segmentID = segment.id;
      if (segmentID === -1) {
        if ((segment.id = boundary.rootSegmentID) === -1)
          throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return flushSegmentContainer2(request, destination, segment, hoistableState);
      }
      if (segmentID === boundary.rootSegmentID)
        return flushSegmentContainer2(request, destination, segment, hoistableState);
      flushSegmentContainer2(request, destination, segment, hoistableState);
      boundary = request.resumableState;
      request = request.renderState;
      destination.push(request.startInlineScript);
      (boundary.instructions & SentCompleteSegmentFunction2) === NothingSent2 ? (boundary.instructions |= SentCompleteSegmentFunction2, destination.push(completeSegmentScript1Full2)) : destination.push(completeSegmentScript1Partial2);
      destination.push(request.segmentPrefix);
      segmentID = segmentID.toString(16);
      destination.push(segmentID);
      destination.push(completeSegmentScript22);
      destination.push(request.placeholderPrefix);
      destination.push(segmentID);
      destination = destination.push(completeSegmentScriptEnd2);
      return destination;
    }
    function flushCompletedQueues2(request, destination) {
      try {
        if (!(0 < request.pendingRootTasks)) {
          var i, completedRootSegment = request.completedRootSegment;
          if (completedRootSegment !== null) {
            if (completedRootSegment.status === POSTPONED2)
              return;
            var renderState = request.renderState, htmlChunks = renderState.htmlChunks, headChunks = renderState.headChunks, i$jscomp$0;
            if (htmlChunks) {
              for (i$jscomp$0 = 0;i$jscomp$0 < htmlChunks.length; i$jscomp$0++)
                destination.push(htmlChunks[i$jscomp$0]);
              if (headChunks)
                for (i$jscomp$0 = 0;i$jscomp$0 < headChunks.length; i$jscomp$0++)
                  destination.push(headChunks[i$jscomp$0]);
              else {
                var chunk = startChunkForTag2("head");
                destination.push(chunk);
                destination.push(endOfStartTag2);
              }
            } else if (headChunks)
              for (i$jscomp$0 = 0;i$jscomp$0 < headChunks.length; i$jscomp$0++)
                destination.push(headChunks[i$jscomp$0]);
            var charsetChunks = renderState.charsetChunks;
            for (i$jscomp$0 = 0;i$jscomp$0 < charsetChunks.length; i$jscomp$0++)
              destination.push(charsetChunks[i$jscomp$0]);
            charsetChunks.length = 0;
            renderState.preconnects.forEach(flushResource2, destination);
            renderState.preconnects.clear();
            var viewportChunks = renderState.viewportChunks;
            for (i$jscomp$0 = 0;i$jscomp$0 < viewportChunks.length; i$jscomp$0++)
              destination.push(viewportChunks[i$jscomp$0]);
            viewportChunks.length = 0;
            renderState.fontPreloads.forEach(flushResource2, destination);
            renderState.fontPreloads.clear();
            renderState.highImagePreloads.forEach(flushResource2, destination);
            renderState.highImagePreloads.clear();
            renderState.styles.forEach(flushStylesInPreamble2, destination);
            var importMapChunks = renderState.importMapChunks;
            for (i$jscomp$0 = 0;i$jscomp$0 < importMapChunks.length; i$jscomp$0++)
              destination.push(importMapChunks[i$jscomp$0]);
            importMapChunks.length = 0;
            renderState.bootstrapScripts.forEach(flushResource2, destination);
            renderState.scripts.forEach(flushResource2, destination);
            renderState.scripts.clear();
            renderState.bulkPreloads.forEach(flushResource2, destination);
            renderState.bulkPreloads.clear();
            var hoistableChunks = renderState.hoistableChunks;
            for (i$jscomp$0 = 0;i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)
              destination.push(hoistableChunks[i$jscomp$0]);
            hoistableChunks.length = 0;
            if (htmlChunks && headChunks === null) {
              var chunk$jscomp$0 = endChunkForTag2("head");
              destination.push(chunk$jscomp$0);
            }
            flushSegment2(request, destination, completedRootSegment, null);
            request.completedRootSegment = null;
            writeBootstrap2(destination, request.renderState);
          }
          var renderState$jscomp$0 = request.renderState;
          completedRootSegment = 0;
          var viewportChunks$jscomp$0 = renderState$jscomp$0.viewportChunks;
          for (completedRootSegment = 0;completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)
            destination.push(viewportChunks$jscomp$0[completedRootSegment]);
          viewportChunks$jscomp$0.length = 0;
          renderState$jscomp$0.preconnects.forEach(flushResource2, destination);
          renderState$jscomp$0.preconnects.clear();
          renderState$jscomp$0.fontPreloads.forEach(flushResource2, destination);
          renderState$jscomp$0.fontPreloads.clear();
          renderState$jscomp$0.highImagePreloads.forEach(flushResource2, destination);
          renderState$jscomp$0.highImagePreloads.clear();
          renderState$jscomp$0.styles.forEach(preloadLateStyles2, destination);
          renderState$jscomp$0.scripts.forEach(flushResource2, destination);
          renderState$jscomp$0.scripts.clear();
          renderState$jscomp$0.bulkPreloads.forEach(flushResource2, destination);
          renderState$jscomp$0.bulkPreloads.clear();
          var hoistableChunks$jscomp$0 = renderState$jscomp$0.hoistableChunks;
          for (completedRootSegment = 0;completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)
            destination.push(hoistableChunks$jscomp$0[completedRootSegment]);
          hoistableChunks$jscomp$0.length = 0;
          var clientRenderedBoundaries = request.clientRenderedBoundaries;
          for (i = 0;i < clientRenderedBoundaries.length; i++) {
            var boundary = clientRenderedBoundaries[i];
            renderState$jscomp$0 = destination;
            var { resumableState, renderState: renderState$jscomp$1 } = request, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
            renderState$jscomp$0.push(renderState$jscomp$1.startInlineScript);
            (resumableState.instructions & SentClientRenderFunction2) === NothingSent2 ? (resumableState.instructions |= SentClientRenderFunction2, renderState$jscomp$0.push(clientRenderScript1Full2)) : renderState$jscomp$0.push(clientRenderScript1Partial2);
            renderState$jscomp$0.push(renderState$jscomp$1.boundaryPrefix);
            var chunk$jscomp$1 = id.toString(16);
            renderState$jscomp$0.push(chunk$jscomp$1);
            renderState$jscomp$0.push(clientRenderScript1A2);
            if (errorDigest || errorMessage || errorStack || errorComponentStack) {
              renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial2);
              var chunk$jscomp$2 = escapeJSStringsForInstructionScripts2(errorDigest || "");
              renderState$jscomp$0.push(chunk$jscomp$2);
            }
            if (errorMessage || errorStack || errorComponentStack) {
              renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial2);
              var chunk$jscomp$3 = escapeJSStringsForInstructionScripts2(errorMessage || "");
              renderState$jscomp$0.push(chunk$jscomp$3);
            }
            if (errorStack || errorComponentStack) {
              renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial2);
              var chunk$jscomp$4 = escapeJSStringsForInstructionScripts2(errorStack || "");
              renderState$jscomp$0.push(chunk$jscomp$4);
            }
            if (errorComponentStack) {
              renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial2);
              var chunk$jscomp$5 = escapeJSStringsForInstructionScripts2(errorComponentStack);
              renderState$jscomp$0.push(chunk$jscomp$5);
            }
            var JSCompiler_inline_result = renderState$jscomp$0.push(clientRenderScriptEnd2);
            if (!JSCompiler_inline_result) {
              request.destination = null;
              i++;
              clientRenderedBoundaries.splice(0, i);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i);
          var completedBoundaries = request.completedBoundaries;
          for (i = 0;i < completedBoundaries.length; i++)
            if (!flushCompletedBoundary2(request, destination, completedBoundaries[i])) {
              request.destination = null;
              i++;
              completedBoundaries.splice(0, i);
              return;
            }
          completedBoundaries.splice(0, i);
          var partialBoundaries = request.partialBoundaries;
          for (i = 0;i < partialBoundaries.length; i++) {
            a: {
              clientRenderedBoundaries = request;
              boundary = destination;
              var boundary$jscomp$0 = partialBoundaries[i], completedSegments = boundary$jscomp$0.completedSegments;
              for (JSCompiler_inline_result = 0;JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)
                if (!flushPartiallyCompletedSegment2(clientRenderedBoundaries, boundary, boundary$jscomp$0, completedSegments[JSCompiler_inline_result])) {
                  JSCompiler_inline_result++;
                  completedSegments.splice(0, JSCompiler_inline_result);
                  var JSCompiler_inline_result$jscomp$0 = false;
                  break a;
                }
              completedSegments.splice(0, JSCompiler_inline_result);
              JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary2(boundary, boundary$jscomp$0.contentState, clientRenderedBoundaries.renderState);
            }
            if (!JSCompiler_inline_result$jscomp$0) {
              request.destination = null;
              i++;
              partialBoundaries.splice(0, i);
              return;
            }
          }
          partialBoundaries.splice(0, i);
          var largeBoundaries = request.completedBoundaries;
          for (i = 0;i < largeBoundaries.length; i++)
            if (!flushCompletedBoundary2(request, destination, largeBoundaries[i])) {
              request.destination = null;
              i++;
              largeBoundaries.splice(0, i);
              return;
            }
          largeBoundaries.splice(0, i);
        }
      } finally {
        request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0 && (request.flushScheduled = false, i = request.resumableState, i.hasBody && (partialBoundaries = endChunkForTag2("body"), destination.push(partialBoundaries)), i.hasHtml && (i = endChunkForTag2("html"), destination.push(i)), request.abortableTasks.size !== 0 && console.error("There was still abortable task at the root when we closed. This is a bug in React."), request.status = CLOSED2, destination.push(null), request.destination = null);
      }
    }
    function startWork2(request) {
      request.flushScheduled = request.destination !== null;
      performWork2(request);
      request.status === 10 && (request.status = 11);
      request.trackedPostpones === null && safelyEmitEarlyPreloads2(request, request.pendingRootTasks === 0);
    }
    function enqueueFlush2(request) {
      if (request.flushScheduled === false && request.pingedTasks.length === 0 && request.destination !== null) {
        request.flushScheduled = true;
        var destination = request.destination;
        destination ? flushCompletedQueues2(request, destination) : request.flushScheduled = false;
      }
    }
    function startFlowing(request, destination) {
      if (request.status === 13)
        request.status = CLOSED2, destination.destroy(request.fatalError);
      else if (request.status !== CLOSED2 && request.destination === null) {
        request.destination = destination;
        try {
          flushCompletedQueues2(request, destination);
        } catch (error) {
          logRecoverableError2(request, error, {}), fatalError2(request, error);
        }
      }
    }
    function abort2(request, reason) {
      if (request.status === 11 || request.status === 10)
        request.status = 12;
      try {
        var abortableTasks = request.abortableTasks;
        if (0 < abortableTasks.size) {
          var error = reason === undefined ? Error("The render was aborted by the server without a reason.") : typeof reason === "object" && reason !== null && typeof reason.then === "function" ? Error("The render was aborted by the server with a promise.") : reason;
          request.fatalError = error;
          abortableTasks.forEach(function(task) {
            return abortTask2(task, request, error);
          });
          abortableTasks.clear();
        }
        request.destination !== null && flushCompletedQueues2(request, request.destination);
      } catch (error$4) {
        logRecoverableError2(request, error$4, {}), fatalError2(request, error$4);
      }
    }
    function onError() {
    }
    function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
      var didFatal = false, fatalError3 = null, result = "", readyToStream = false;
      options = createResumableState2(options ? options.identifierPrefix : undefined);
      children = createRequest2(children, options, createRenderState2(options, generateStaticMarkup), createFormatContext2(ROOT_HTML_MODE2, null, 0), Infinity, onError, undefined, function() {
        readyToStream = true;
      }, undefined, undefined, undefined);
      startWork2(children);
      abort2(children, abortReason);
      startFlowing(children, {
        push: function(chunk) {
          chunk !== null && (result += chunk);
          return true;
        },
        destroy: function(error) {
          didFatal = true;
          fatalError3 = error;
        }
      });
      if (didFatal && fatalError3 !== abortReason)
        throw fatalError3;
      if (!readyToStream)
        throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return result;
    }
    var REACT_ELEMENT_TYPE2 = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE2 = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE2 = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE2 = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE2 = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE2 = Symbol.for("react.provider"), REACT_CONSUMER_TYPE2 = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE2 = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE2 = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE2 = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE2 = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE2 = Symbol.for("react.memo"), REACT_LAZY_TYPE2 = Symbol.for("react.lazy"), REACT_SCOPE_TYPE2 = Symbol.for("react.scope"), REACT_DEBUG_TRACING_MODE_TYPE2 = Symbol.for("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE2 = Symbol.for("react.offscreen"), REACT_LEGACY_HIDDEN_TYPE2 = Symbol.for("react.legacy_hidden"), REACT_MEMO_CACHE_SENTINEL2 = Symbol.for("react.memo_cache_sentinel"), MAYBE_ITERATOR_SYMBOL2 = Symbol.iterator, isArrayImpl2 = Array.isArray, jsxPropsParents2 = new WeakMap, jsxChildrenParents2 = new WeakMap, CLIENT_REFERENCE_TAG2 = Symbol.for("react.client.reference"), assign2 = Object.assign, hasOwnProperty2 = Object.prototype.hasOwnProperty, VALID_ATTRIBUTE_NAME_REGEX2 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), illegalAttributeNameCache2 = {}, validatedAttributeNameCache2 = {}, unitlessNumbers2 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), aliases2 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), hasReadOnlyValue2 = {
      button: true,
      checkbox: true,
      image: true,
      hidden: true,
      radio: true,
      reset: true,
      submit: true
    }, ariaProperties2 = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, warnedProperties$12 = {}, rARIA$12 = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel$12 = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), didWarnValueNull2 = false, possibleStandardNames2 = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, warnedProperties2 = {}, EVENT_NAME_REGEX2 = /^on./, INVALID_EVENT_NAME_REGEX2 = /^on[^A-Z]/, rARIA2 = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel2 = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), badVendoredStyleNamePattern2 = /^(?:webkit|moz|o)[A-Z]/, msPattern$12 = /^-ms-/, hyphenPattern2 = /-(.)/g, badStyleValueWithSemicolonPattern2 = /;\s*$/, warnedStyleNames2 = {}, warnedStyleValues2 = {}, warnedForNaNValue2 = false, warnedForInfinityValue2 = false, matchHtmlRegExp2 = /["'&<>]/, uppercasePattern2 = /([A-Z])/g, msPattern2 = /^ms-/, isJavaScriptProtocol2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, ReactSharedInternals2 = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals2 = ReactDOM2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, NotPending2 = Object.freeze({
      pending: false,
      data: null,
      method: null,
      action: null
    }), previousDispatcher2 = ReactDOMSharedInternals2.d;
    ReactDOMSharedInternals2.d = {
      f: previousDispatcher2.f,
      r: previousDispatcher2.r,
      D: function(href) {
        var request = currentRequest2 ? currentRequest2 : null;
        if (request) {
          var { resumableState, renderState } = request;
          if (typeof href === "string" && href) {
            if (!resumableState.dnsResources.hasOwnProperty(href)) {
              resumableState.dnsResources[href] = EXISTS2;
              resumableState = renderState.headers;
              var header, JSCompiler_temp;
              if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity)
                JSCompiler_temp = (header = "<" + escapeHrefForLinkHeaderURLContext2(href) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
              JSCompiler_temp ? (renderState.resets.dns[href] = EXISTS2, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl2(header, { href, rel: "dns-prefetch" }), renderState.preconnects.add(header));
            }
            enqueueFlush2(request);
          }
        } else
          previousDispatcher2.D(href);
      },
      C: function(href, crossOrigin) {
        var request = currentRequest2 ? currentRequest2 : null;
        if (request) {
          var { resumableState, renderState } = request;
          if (typeof href === "string" && href) {
            var bucket = crossOrigin === "use-credentials" ? "credentials" : typeof crossOrigin === "string" ? "anonymous" : "default";
            if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
              resumableState.connectResources[bucket][href] = EXISTS2;
              resumableState = renderState.headers;
              var header, JSCompiler_temp;
              if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
                JSCompiler_temp = "<" + escapeHrefForLinkHeaderURLContext2(href) + ">; rel=preconnect";
                if (typeof crossOrigin === "string") {
                  var escapedCrossOrigin = escapeStringForLinkHeaderQuotedParamValueContext2(crossOrigin, "crossOrigin");
                  JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
                }
                JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
              }
              JSCompiler_temp ? (renderState.resets.connect[bucket][href] = EXISTS2, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl2(bucket, {
                rel: "preconnect",
                href,
                crossOrigin
              }), renderState.preconnects.add(bucket));
            }
            enqueueFlush2(request);
          }
        } else
          previousDispatcher2.C(href, crossOrigin);
      },
      L: function(href, as, options) {
        var request = currentRequest2 ? currentRequest2 : null;
        if (request) {
          var { resumableState, renderState } = request;
          if (as && href) {
            switch (as) {
              case "image":
                if (options) {
                  var imageSrcSet = options.imageSrcSet;
                  var imageSizes = options.imageSizes;
                  var fetchPriority = options.fetchPriority;
                }
                var key = imageSrcSet ? imageSrcSet + `
` + (imageSizes || "") : href;
                if (resumableState.imageResources.hasOwnProperty(key))
                  return;
                resumableState.imageResources[key] = PRELOAD_NO_CREDS2;
                resumableState = renderState.headers;
                var header;
                resumableState && 0 < resumableState.remainingCapacity && fetchPriority === "high" && (header = getPreloadAsHeader2(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS2, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl2(resumableState, assign2({
                  rel: "preload",
                  href: imageSrcSet ? undefined : href,
                  as
                }, options)), fetchPriority === "high" ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
                break;
              case "style":
                if (resumableState.styleResources.hasOwnProperty(href))
                  return;
                imageSrcSet = [];
                pushLinkImpl2(imageSrcSet, assign2({ rel: "preload", href, as }, options));
                resumableState.styleResources[href] = !options || typeof options.crossOrigin !== "string" && typeof options.integrity !== "string" ? PRELOAD_NO_CREDS2 : [options.crossOrigin, options.integrity];
                renderState.preloads.stylesheets.set(href, imageSrcSet);
                renderState.bulkPreloads.add(imageSrcSet);
                break;
              case "script":
                if (resumableState.scriptResources.hasOwnProperty(href))
                  return;
                imageSrcSet = [];
                renderState.preloads.scripts.set(href, imageSrcSet);
                renderState.bulkPreloads.add(imageSrcSet);
                pushLinkImpl2(imageSrcSet, assign2({ rel: "preload", href, as }, options));
                resumableState.scriptResources[href] = !options || typeof options.crossOrigin !== "string" && typeof options.integrity !== "string" ? PRELOAD_NO_CREDS2 : [options.crossOrigin, options.integrity];
                break;
              default:
                if (resumableState.unknownResources.hasOwnProperty(as)) {
                  if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href))
                    return;
                } else
                  imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
                imageSrcSet[href] = PRELOAD_NO_CREDS2;
                if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && as === "font" && (key = getPreloadAsHeader2(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2)))
                  renderState.resets.font[href] = PRELOAD_NO_CREDS2, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
                else
                  switch (resumableState = [], href = assign2({ rel: "preload", href, as }, options), pushLinkImpl2(resumableState, href), as) {
                    case "font":
                      renderState.fontPreloads.add(resumableState);
                      break;
                    default:
                      renderState.bulkPreloads.add(resumableState);
                  }
            }
            enqueueFlush2(request);
          }
        } else
          previousDispatcher2.L(href, as, options);
      },
      m: function(href, options) {
        var request = currentRequest2 ? currentRequest2 : null;
        if (request) {
          var { resumableState, renderState } = request;
          if (href) {
            var as = options && typeof options.as === "string" ? options.as : "script";
            switch (as) {
              case "script":
                if (resumableState.moduleScriptResources.hasOwnProperty(href))
                  return;
                as = [];
                resumableState.moduleScriptResources[href] = !options || typeof options.crossOrigin !== "string" && typeof options.integrity !== "string" ? PRELOAD_NO_CREDS2 : [options.crossOrigin, options.integrity];
                renderState.preloads.moduleScripts.set(href, as);
                break;
              default:
                if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
                  var resources = resumableState.unknownResources[as];
                  if (resources.hasOwnProperty(href))
                    return;
                } else
                  resources = {}, resumableState.moduleUnknownResources[as] = resources;
                as = [];
                resources[href] = PRELOAD_NO_CREDS2;
            }
            pushLinkImpl2(as, assign2({ rel: "modulepreload", href }, options));
            renderState.bulkPreloads.add(as);
            enqueueFlush2(request);
          }
        } else
          previousDispatcher2.m(href, options);
      },
      X: function(src, options) {
        var request = currentRequest2 ? currentRequest2 : null;
        if (request) {
          var { resumableState, renderState } = request;
          if (src) {
            var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : undefined;
            resourceState !== EXISTS2 && (resumableState.scriptResources[src] = EXISTS2, options = assign2({ src, async: true }, options), resourceState && (resourceState.length === 2 && adoptPreloadCredentials2(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl2(src, options), enqueueFlush2(request));
          }
        } else
          previousDispatcher2.X(src, options);
      },
      S: function(href, precedence, options) {
        var request = currentRequest2 ? currentRequest2 : null;
        if (request) {
          var { resumableState, renderState } = request;
          if (href) {
            precedence = precedence || "default";
            var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : undefined;
            resourceState !== EXISTS2 && (resumableState.styleResources[href] = EXISTS2, styleQueue || (styleQueue = {
              precedence: escapeTextForBrowser2(precedence),
              rules: [],
              hrefs: [],
              sheets: new Map
            }, renderState.styles.set(precedence, styleQueue)), precedence = {
              state: PENDING$12,
              props: assign2({
                rel: "stylesheet",
                href,
                "data-precedence": precedence
              }, options)
            }, resourceState && (resourceState.length === 2 && adoptPreloadCredentials2(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = PRELOADED2), styleQueue.sheets.set(href, precedence), enqueueFlush2(request));
          }
        } else
          previousDispatcher2.S(href, precedence, options);
      },
      M: function(src, options) {
        var request = currentRequest2 ? currentRequest2 : null;
        if (request) {
          var { resumableState, renderState } = request;
          if (src) {
            var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : undefined;
            resourceState !== EXISTS2 && (resumableState.moduleScriptResources[src] = EXISTS2, options = assign2({ src, type: "module", async: true }, options), resourceState && (resourceState.length === 2 && adoptPreloadCredentials2(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl2(src, options), enqueueFlush2(request));
          }
        } else
          previousDispatcher2.M(src, options);
      }
    };
    var NothingSent2 = 0, SentCompleteSegmentFunction2 = 1, SentCompleteBoundaryFunction2 = 2, SentClientRenderFunction2 = 4, SentStyleInsertionFunction2 = 8, EXISTS2 = null, PRELOAD_NO_CREDS2 = [];
    Object.freeze(PRELOAD_NO_CREDS2);
    var scriptRegex2 = /(<\/|<)(s)(cript)/gi;
    var didWarnForNewBooleanPropsWithEmptyValue2 = {};
    var ROOT_HTML_MODE2 = 0, HTML_HTML_MODE2 = 1, HTML_MODE2 = 2, SVG_MODE2 = 3, MATHML_MODE2 = 4, HTML_TABLE_MODE2 = 5, HTML_TABLE_BODY_MODE2 = 6, HTML_TABLE_ROW_MODE2 = 7, HTML_COLGROUP_MODE2 = 8, styleNameCache2 = new Map, styleAttributeStart2 = ' style="', styleAssign2 = ":", styleSeparator2 = ";", attributeSeparator2 = " ", attributeAssign2 = '="', attributeEnd2 = '"', attributeEmptyString2 = '=""', actionJavaScriptURL2 = escapeTextForBrowser2("javascript:throw new Error('React form unexpectedly submitted.')"), endOfStartTag2 = ">", endOfStartTagSelfClosing2 = "/>", didWarnDefaultInputValue2 = false, didWarnDefaultChecked2 = false, didWarnDefaultSelectValue2 = false, didWarnDefaultTextareaValue2 = false, didWarnInvalidOptionChildren2 = false, didWarnInvalidOptionInnerHTML2 = false, didWarnSelectedSetOnOption2 = false, didWarnFormActionType2 = false, didWarnFormActionName2 = false, didWarnFormActionTarget2 = false, didWarnFormActionMethod2 = false, formReplayingRuntimeScript2 = `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, styleRegex2 = /(<\/|<)(s)(tyle)/gi, leadingNewline = `
`, VALID_TAG_REGEX2 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache2 = new Map, endTagCache2 = new Map, placeholder12 = '<template id="', placeholder22 = '"></template>', startCompletedSuspenseBoundary2 = "<!--$-->", startPendingSuspenseBoundary12 = '<!--$?--><template id="', startPendingSuspenseBoundary22 = '"></template>', startClientRenderedSuspenseBoundary2 = "<!--$!-->", endSuspenseBoundary2 = "<!--/$-->", clientRenderedSuspenseBoundaryError12 = "<template", clientRenderedSuspenseBoundaryErrorAttrInterstitial2 = '"', clientRenderedSuspenseBoundaryError1A2 = ' data-dgst="', clientRenderedSuspenseBoundaryError1B2 = ' data-msg="', clientRenderedSuspenseBoundaryError1C2 = ' data-stck="', clientRenderedSuspenseBoundaryError1D2 = ' data-cstck="', clientRenderedSuspenseBoundaryError22 = "></template>", startSegmentHTML3 = '<div hidden id="', startSegmentHTML22 = '">', endSegmentHTML2 = "</div>", startSegmentSVG3 = '<svg aria-hidden="true" style="display:none" id="', startSegmentSVG22 = '">', endSegmentSVG2 = "</svg>", startSegmentMathML3 = '<math aria-hidden="true" style="display:none" id="', startSegmentMathML22 = '">', endSegmentMathML2 = "</math>", startSegmentTable3 = '<table hidden id="', startSegmentTable22 = '">', endSegmentTable2 = "</table>", startSegmentTableBody3 = '<table hidden><tbody id="', startSegmentTableBody22 = '">', endSegmentTableBody2 = "</tbody></table>", startSegmentTableRow3 = '<table hidden><tr id="', startSegmentTableRow22 = '">', endSegmentTableRow2 = "</tr></table>", startSegmentColGroup3 = '<table hidden><colgroup id="', startSegmentColGroup22 = '">', endSegmentColGroup2 = "</colgroup></table>", completeSegmentScript1Full2 = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', completeSegmentScript1Partial2 = '$RS("', completeSegmentScript22 = '","', completeSegmentScriptEnd2 = '")</script>', completeBoundaryScript1Full2 = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("', completeBoundaryScript1Partial2 = '$RC("', completeBoundaryWithStylesScript1FullBoth2 = `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, completeBoundaryWithStylesScript1FullPartial2 = `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, completeBoundaryWithStylesScript1Partial2 = '$RR("', completeBoundaryScript22 = '","', completeBoundaryScript3a2 = '",', completeBoundaryScript3b2 = '"', completeBoundaryScriptEnd2 = ")</script>", clientRenderScript1Full2 = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', clientRenderScript1Partial2 = '$RX("', clientRenderScript1A2 = '"', clientRenderErrorScriptArgInterstitial2 = ",", clientRenderScriptEnd2 = ")</script>", regexForJSStringsInInstructionScripts2 = /[<\u2028\u2029]/g, regexForJSStringsInScripts2 = /[&><\u2028\u2029]/g, lateStyleTagResourceOpen12 = '<style media="not all" data-precedence="', lateStyleTagResourceOpen22 = '" data-href="', lateStyleTagResourceOpen32 = '">', lateStyleTagTemplateClose2 = "</style>", currentlyRenderingBoundaryHasStylesToHoist2 = false, destinationHasCapacity2 = true, stylesheetFlushingQueue2 = [], styleTagResourceOpen12 = '<style data-precedence="', styleTagResourceOpen22 = '" data-href="', spaceSeparator2 = " ", styleTagResourceOpen32 = '">', styleTagResourceClose2 = "</style>", arrayFirstOpenBracket2 = "[", arraySubsequentOpenBracket2 = ",[", arrayInterstitial2 = ",", arrayCloseBracket2 = "]", PENDING$12 = 0, PRELOADED2 = 1, PREAMBLE2 = 2, LATE2 = 3, regexForHrefInLinkHeaderURLContext2 = /[<>\r\n]/g, regexForLinkHeaderQuotedParamValueContext2 = /["';,\r\n]/g, doctypeChunk = "", bind2 = Function.prototype.bind, REACT_CLIENT_REFERENCE2 = Symbol.for("react.client.reference"), emptyContextObject2 = {};
    Object.freeze(emptyContextObject2);
    var rendererSigil2 = {};
    var currentActiveSnapshot2 = null, didWarnAboutNoopUpdateForComponent2 = {}, didWarnAboutDeprecatedWillMount2 = {};
    var didWarnAboutUninitializedState2 = new Set;
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate2 = new Set;
    var didWarnAboutLegacyLifecyclesAndDerivedState2 = new Set;
    var didWarnAboutDirectlyAssigningPropsToState2 = new Set;
    var didWarnAboutUndefinedDerivedState2 = new Set;
    var didWarnAboutContextTypes$12 = new Set;
    var didWarnAboutChildContextTypes2 = new Set;
    var didWarnAboutInvalidateContextType2 = new Set;
    var didWarnOnInvalidCallback2 = new Set;
    var classComponentUpdater2 = {
      isMounted: function() {
        return false;
      },
      enqueueSetState: function(inst, payload, callback) {
        var internals = inst._reactInternals;
        internals.queue === null ? warnNoop2(inst, "setState") : (internals.queue.push(payload), callback !== undefined && callback !== null && warnOnInvalidCallback2(callback));
      },
      enqueueReplaceState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        inst.replace = true;
        inst.queue = [payload];
        callback !== undefined && callback !== null && warnOnInvalidCallback2(callback);
      },
      enqueueForceUpdate: function(inst, callback) {
        inst._reactInternals.queue === null ? warnNoop2(inst, "forceUpdate") : callback !== undefined && callback !== null && warnOnInvalidCallback2(callback);
      }
    }, emptyTreeContext2 = { id: 1, overflow: "" }, clz322 = Math.clz32 ? Math.clz32 : clz32Fallback2, log2 = Math.log, LN22 = Math.LN2, SuspenseException2 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"), suspendedThenable2 = null, objectIs2 = typeof Object.is === "function" ? Object.is : is2, currentlyRenderingComponent2 = null, currentlyRenderingTask2 = null, currentlyRenderingRequest2 = null, currentlyRenderingKeyPath2 = null, firstWorkInProgressHook2 = null, workInProgressHook2 = null, isReRender2 = false, didScheduleRenderPhaseUpdate2 = false, localIdCounter2 = 0, actionStateCounter2 = 0, actionStateMatchingIndex2 = -1, thenableIndexCounter2 = 0, thenableState2 = null, renderPhaseUpdates2 = null, numberOfReRenders2 = 0, isInHookUserCodeInDev2 = false, currentHookNameInDev2, HooksDispatcher2 = {
      readContext: readContext2,
      use: function(usable) {
        if (usable !== null && typeof usable === "object") {
          if (typeof usable.then === "function")
            return unwrapThenable2(usable);
          if (usable.$$typeof === REACT_CONTEXT_TYPE2)
            return readContext2(usable);
        }
        throw Error("An unsupported type was passed to use(): " + String(usable));
      },
      useContext: function(context) {
        currentHookNameInDev2 = "useContext";
        resolveCurrentlyRenderingComponent2();
        return context._currentValue2;
      },
      useMemo: useMemo2,
      useReducer: useReducer2,
      useRef: function(initialValue) {
        currentlyRenderingComponent2 = resolveCurrentlyRenderingComponent2();
        workInProgressHook2 = createWorkInProgressHook2();
        var previousRef = workInProgressHook2.memoizedState;
        return previousRef === null ? (initialValue = { current: initialValue }, Object.seal(initialValue), workInProgressHook2.memoizedState = initialValue) : previousRef;
      },
      useState: function(initialState) {
        currentHookNameInDev2 = "useState";
        return useReducer2(basicStateReducer2, initialState);
      },
      useInsertionEffect: noop$12,
      useLayoutEffect: noop$12,
      useCallback: function(callback, deps) {
        return useMemo2(function() {
          return callback;
        }, deps);
      },
      useImperativeHandle: noop$12,
      useEffect: noop$12,
      useDebugValue: noop$12,
      useDeferredValue: function(value, initialValue) {
        resolveCurrentlyRenderingComponent2();
        return initialValue !== undefined ? initialValue : value;
      },
      useTransition: function() {
        resolveCurrentlyRenderingComponent2();
        return [false, unsupportedStartTransition2];
      },
      useId: function() {
        var treeId = currentlyRenderingTask2.treeContext;
        var overflow = treeId.overflow;
        treeId = treeId.id;
        treeId = (treeId & ~(1 << 32 - clz322(treeId) - 1)).toString(32) + overflow;
        var resumableState = currentResumableState2;
        if (resumableState === null)
          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        overflow = localIdCounter2++;
        treeId = ":" + resumableState.idPrefix + "R" + treeId;
        0 < overflow && (treeId += "H" + overflow.toString(32));
        return treeId + ":";
      },
      useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
        if (getServerSnapshot === undefined)
          throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        return getServerSnapshot();
      },
      useCacheRefresh: function() {
        return unsupportedRefresh2;
      },
      useMemoCache: function(size) {
        for (var data = Array(size), i = 0;i < size; i++)
          data[i] = REACT_MEMO_CACHE_SENTINEL2;
        return data;
      },
      useHostTransitionStatus: function() {
        resolveCurrentlyRenderingComponent2();
        return NotPending2;
      },
      useOptimistic: function(passthrough) {
        resolveCurrentlyRenderingComponent2();
        return [passthrough, unsupportedSetOptimisticState2];
      }
    };
    HooksDispatcher2.useFormState = useActionState2;
    HooksDispatcher2.useActionState = useActionState2;
    var currentResumableState2 = null, currentTaskInDEV2 = null, DefaultAsyncDispatcher2 = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return currentTaskInDEV2 === null ? null : currentTaskInDEV2.componentStack;
      }
    }, disabledDepth2 = 0, prevLog2, prevInfo2, prevWarn2, prevError2, prevGroup2, prevGroupCollapsed2, prevGroupEnd2;
    disabledLog2.__reactDisabledLog = true;
    var prefix2, suffix2, reentry2 = false;
    var componentFrameCache2 = new (typeof WeakMap === "function" ? WeakMap : Map);
    var callComponent2 = {
      "react-stack-bottom-frame": function(Component, props, secondArg) {
        return Component(props, secondArg);
      }
    }, callComponentInDEV2 = callComponent2["react-stack-bottom-frame"].bind(callComponent2), callRender2 = {
      "react-stack-bottom-frame": function(instance) {
        return instance.render();
      }
    }, callRenderInDEV2 = callRender2["react-stack-bottom-frame"].bind(callRender2), callLazyInit2 = {
      "react-stack-bottom-frame": function(lazy) {
        var init = lazy._init;
        return init(lazy._payload);
      }
    }, callLazyInitInDEV2 = callLazyInit2["react-stack-bottom-frame"].bind(callLazyInit2), CLIENT_RENDERED2 = 4, PENDING2 = 0, COMPLETED2 = 1, FLUSHED2 = 2, POSTPONED2 = 5, CLOSED2 = 14, currentRequest2 = null, didWarnAboutBadClass2 = {}, didWarnAboutContextTypes2 = {}, didWarnAboutContextTypeOnFunctionComponent2 = {}, didWarnAboutGetDerivedStateOnFunctionComponent2 = {}, didWarnAboutReassigningProps2 = false, didWarnAboutGenerators2 = false, didWarnAboutMaps2 = false;
    exports.renderToStaticMarkup = function(children, options) {
      return renderToStringImpl(children, options, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.renderToString = function(children, options) {
      return renderToStringImpl(children, options, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.version = "19.0.0";
  })();
});

// node_modules/react-dom/server.bun.js
var require_server_bun = __commonJS((exports) => {
  init_react_dom_server_bun_development();
  var react_dom_server_legacy_browser_development = __toESM(require_react_dom_server_legacy_browser_development(), 1);
  var b;
  var l;
  if (false) {
  } else {
    b = exports_react_dom_server_bun_development;
    l = react_dom_server_legacy_browser_development;
  }
  exports.version = b.version;
  exports.renderToReadableStream = b.renderToReadableStream;
  if (b.resume) {
    exports.resume = b.resume;
  }
  exports.renderToString = l.renderToString;
  exports.renderToStaticMarkup = l.renderToStaticMarkup;
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React2 = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType2(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE2:
          return "Fragment";
        case REACT_PORTAL_TYPE2:
          return "Portal";
        case REACT_PROFILER_TYPE2:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE2:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE2:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE2:
          return "SuspenseList";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_CONTEXT_TYPE2:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE2:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE2:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE2:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType2(type.type) || "Memo";
          case REACT_LAZY_TYPE2:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType2(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    function testStringCoercion2(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion2(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion2(value);
      }
    }
    function disabledLog2() {
    }
    function disableLogs2() {
      if (disabledDepth2 === 0) {
        prevLog2 = console.log;
        prevInfo2 = console.info;
        prevWarn2 = console.warn;
        prevError2 = console.error;
        prevGroup2 = console.group;
        prevGroupCollapsed2 = console.groupCollapsed;
        prevGroupEnd2 = console.groupEnd;
        var props = {
          configurable: true,
          enumerable: true,
          value: disabledLog2,
          writable: true
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth2++;
    }
    function reenableLogs2() {
      disabledDepth2--;
      if (disabledDepth2 === 0) {
        var props = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, {
          log: assign2({}, props, { value: prevLog2 }),
          info: assign2({}, props, { value: prevInfo2 }),
          warn: assign2({}, props, { value: prevWarn2 }),
          error: assign2({}, props, { value: prevError2 }),
          group: assign2({}, props, { value: prevGroup2 }),
          groupCollapsed: assign2({}, props, { value: prevGroupCollapsed2 }),
          groupEnd: assign2({}, props, { value: prevGroupEnd2 })
        });
      }
      0 > disabledDepth2 && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame2(name) {
      if (prefix2 === undefined)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix2 = match && match[1] || "";
          suffix2 = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + prefix2 + name + suffix2;
    }
    function describeNativeComponentFrame2(fn, construct) {
      if (!fn || reentry2)
        return "";
      var frame = componentFrameCache2.get(fn);
      if (frame !== undefined)
        return frame;
      reentry2 = true;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      var previousDispatcher2 = null;
      previousDispatcher2 = ReactSharedInternals2.H;
      ReactSharedInternals2.H = null;
      disableLogs2();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && typeof Fake.catch === "function" && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string")
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split(`
`), controlLines = controlStack.split(`
`);
          for (_RunInRootFrame$Deter = namePropDescriptor = 0;namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot"); )
            namePropDescriptor++;
          for (;_RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot"); )
            _RunInRootFrame$Deter++;
          if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
            for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
              _RunInRootFrame$Deter--;
          for (;1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
            if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
              if (namePropDescriptor !== 1 || _RunInRootFrame$Deter !== 1) {
                do
                  if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    var _frame = `
` + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                    fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                    typeof fn === "function" && componentFrameCache2.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        reentry2 = false, ReactSharedInternals2.H = previousDispatcher2, reenableLogs2(), Error.prepareStackTrace = frame;
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame2(sampleLines) : "";
      typeof fn === "function" && componentFrameCache2.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (type == null)
        return "";
      if (typeof type === "function") {
        var prototype = type.prototype;
        return describeNativeComponentFrame2(type, !(!prototype || !prototype.isReactComponent));
      }
      if (typeof type === "string")
        return describeBuiltInComponentFrame2(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE2:
          return describeBuiltInComponentFrame2("Suspense");
        case REACT_SUSPENSE_LIST_TYPE2:
          return describeBuiltInComponentFrame2("SuspenseList");
      }
      if (typeof type === "object")
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE2:
            return type = describeNativeComponentFrame2(type.render, false), type;
          case REACT_MEMO_TYPE2:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE2:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {
            }
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals2.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty2.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType2(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE2,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
      if (typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE2 || type === REACT_PROFILER_TYPE2 || type === REACT_STRICT_MODE_TYPE2 || type === REACT_SUSPENSE_TYPE2 || type === REACT_SUSPENSE_LIST_TYPE2 || type === REACT_OFFSCREEN_TYPE2 || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE2 || type.$$typeof === REACT_MEMO_TYPE2 || type.$$typeof === REACT_CONTEXT_TYPE2 || type.$$typeof === REACT_CONSUMER_TYPE2 || type.$$typeof === REACT_FORWARD_REF_TYPE2 || type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined)) {
        var children = config.children;
        if (children !== undefined)
          if (isStaticChildren)
            if (isArrayImpl2(children)) {
              for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren], type);
              Object.freeze && Object.freeze(children);
            } else
              console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            validateChildKeys(children, type);
      } else {
        children = "";
        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0)
          children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        type === null ? isStaticChildren = "null" : isArrayImpl2(type) ? isStaticChildren = "array" : type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE2 ? (isStaticChildren = "<" + (getComponentNameFromType2(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
        console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
      }
      if (hasOwnProperty2.call(config, "key")) {
        children = getComponentNameFromType2(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
      if (typeof node === "object" && node && node.$$typeof !== REACT_CLIENT_REFERENCE2) {
        if (isArrayImpl2(node))
          for (var i = 0;i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (node === null || typeof node !== "object" ? i = null : (i = MAYBE_ITERATOR_SYMBOL2 && node[MAYBE_ITERATOR_SYMBOL2] || node["@@iterator"], i = typeof i === "function" ? i : null), typeof i === "function" && i !== node.entries && (i = i.call(node), i !== node))
          for (;!(node = i.next()).done; )
            isValidElement(node.value) && validateExplicitKey(node.value, parentType);
      }
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE2;
    }
    function validateExplicitKey(element, parentType) {
      if (element._store && !element._store.validated && element.key == null && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
        ownerHasKeyUseWarning[parentType] = true;
        var childOwner = "";
        element && element._owner != null && element._owner !== getOwner() && (childOwner = null, typeof element._owner.tag === "number" ? childOwner = getComponentNameFromType2(element._owner.type) : typeof element._owner.name === "string" && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
        var prevGetCurrentStack = ReactSharedInternals2.getCurrentStack;
        ReactSharedInternals2.getCurrentStack = function() {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
        ReactSharedInternals2.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "", owner = getOwner();
      owner && (owner = getComponentNameFromType2(owner.type)) && (info = `

Check the render method of \`` + owner + "`.");
      info || (parentType = getComponentNameFromType2(parentType)) && (info = `

Check the top-level render call using <` + parentType + ">.");
      return info;
    }
    var REACT_ELEMENT_TYPE2 = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE2 = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE2 = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE2 = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE2 = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE2 = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE2 = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE2 = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE2 = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE2 = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE2 = Symbol.for("react.memo"), REACT_LAZY_TYPE2 = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE2 = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL2 = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals2 = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty2 = Object.prototype.hasOwnProperty, assign2 = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl2 = Array.isArray, disabledDepth2 = 0, prevLog2, prevInfo2, prevWarn2, prevError2, prevGroup2, prevGroupCollapsed2, prevGroupEnd2;
    disabledLog2.__reactDisabledLog = true;
    var prefix2, suffix2, reentry2 = false;
    var componentFrameCache2 = new (typeof WeakMap === "function" ? WeakMap : Map);
    var REACT_CLIENT_REFERENCE2 = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE2;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
  })();
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS((exports, module) => {
  var react_jsx_dev_runtime_development = __toESM(require_react_jsx_dev_runtime_development(), 1);
  if (false) {
  } else {
    module.exports = react_jsx_dev_runtime_development;
  }
});

// server.js
var import_server = __toESM(require_server_bun(), 1);
var {serve, readableStreamToJSON, readableStreamToText, escapeHTML } = globalThis.Bun;

// test/fixtures/tab.js
var React2 = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Component = ({ tabs }) => {
  let list = tabs ?? [];
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    className: "tab",
    children: list.map((tab, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
      className: "tab-item",
      children: tab
    }, undefined, false, undefined, this))
  }, undefined, false, undefined, this);
};

// server.js
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var __comMap = {};
__comMap["tab"] = Component;
var { COMPONENT_BASE, BUN_ENV } = process.env;
var isDev = BUN_ENV === "development";
var server = serve({
  development: isDev,
  async fetch(req) {
    try {
      let bodyStream = req.body;
      if (isDev) {
        const [t1, t2] = bodyStream.tee();
        const bodyText = await readableStreamToText(t2);
        console.log("Request: ", req.method, req.url, bodyText);
        bodyStream = t1;
      }
      const { url } = req;
      const uri = new URL(url);
      const { pathname } = uri;
      if (pathname.startsWith("/stop")) {
        setImmediate(() => server.stop());
        return new Response('{"message":"ok"}', {
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
      if (pathname.startsWith("/static_markup/")) {
        const props = await readableStreamToJSON(bodyStream);
        const fileName = pathname.replace(/^\/static_markup\//, "");
        const Component2 = __comMap[fileName];
        if (!Component2) {
          return new Response(`Not Found, component not found.`, {
            status: 404,
            headers: {
              "Content-Type": "text/html"
            }
          });
        }
        const jsxNode = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Component2, {
          ...props
        }, undefined, false, undefined, this);
        const html = import_server.renderToStaticMarkup(jsxNode);
        return new Response(html, {
          headers: {
            "Content-Type": "text/html"
          }
        });
      }
      if (pathname.startsWith("/component/")) {
        const props = await readableStreamToJSON(bodyStream);
        const fileName = pathname.replace(/^\/component\//, "");
        const Component2 = __comMap[fileName];
        const jsxNode = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Component2, {
          ...props
        }, undefined, false, undefined, this);
        const html = import_server.renderToString(jsxNode);
        return new Response(html, {
          headers: {
            "Content-Type": "text/html"
          }
        });
      }
      if (pathname.startsWith("/readable_stream/")) {
        const props = await readableStreamToJSON(bodyStream);
        const fileName = pathname.replace(/^\/readable_stream\//, "");
        const Component2 = __comMap[fileName];
        const jsxNode = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Component2, {
          ...props
        }, undefined, false, undefined, this);
        const stream = await import_server.renderToReadableStream(jsxNode);
        return new Response(stream, {
          headers: {
            "Content-Type": "text/html"
          }
        });
      }
      return new Response(`Not Found, not matched request.`, {
        status: 404,
        headers: {
          "Content-Type": "text/html"
        }
      });
    } catch (error) {
      throw error;
    }
  },
  error(error) {
    const html = `
    <div role="alert" class="alert alert-error">
      <div>
        <div class="font-bold">${escapeHTML(error)}</div>
        <pre style="white-space: pre-wrap;">${escapeHTML(error.stack)}</pre>
      </div>
    </div>
    `;
    return new Response(html, {
      status: 500,
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
});
console.log(`Server started at http://localhost:${server.port}`);
console.log(`COMPONENT_BASE`, COMPONENT_BASE);
console.log(`BUN_ENV`, BUN_ENV);
var ppid = process.ppid;
setInterval(() => {
  if (process.ppid !== ppid) {
    console.log("Parent process exited. Shutting down server...");
    server.stop();
    process.exit(0);
  }
}, 1000);
(async () => {
  for await (const line of console) {
    console.log(`stdin > ${line}`);
  }
  console.log("stdin closed");
  await server.stop();
  console.log("Cleanup done. Exiting.");
  process.exit(0);
})();
var shutdown = async (signal) => {
  console.log(`
Received ${signal}. Cleaning up...`);
  await server.stop();
  console.log("Cleanup done. Exiting.");
  process.exit(0);
};
process.on("SIGINT", () => {
  shutdown("SIGINT");
});
process.on("SIGTERM", () => {
  shutdown("SIGTERM");
});
process.on("exit", () => {
  console.log("Parent process exited. Shutting down server...");
  shutdown("exit");
});
process.stdin.on("close", () => {
  console.log("Parent process closed stdin. Exiting...");
  shutdown("close");
});
