System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Controls/panel.obs'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, openBlock, createElementBlock, createCommentVNode, createVNode, unref, withCtx, toDisplayString, useConfigurationValues, useInvokeBlockAction, useReloadBlock, onConfigurationValuesChanged, RockButton, RockCodeEditor, BtnType, BtnSize, Panel;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useReloadBlock = module.useReloadBlock;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockCodeEditor = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      Panel = module["default"];
    }],
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }

      var _hoisted_1 = createTextVNode(" Run ");
      var script = exports('default', defineComponent({
        name: 'obsidianBoilerplate',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var reloadBlock = useReloadBlock();
          var isRunning = ref(false);
          var runResult = ref("");
          var errorMessage = ref("");
          var lavaTemplate = ref(config.message);
          function runLava() {
            return _runLava.apply(this, arguments);
          }
          function _runLava() {
            _runLava = _asyncToGenerator(function* () {
              try {
                isRunning.value = true;
                runResult.value = "";
                errorMessage.value = "";
                var bag = {
                  Lava: lavaTemplate.value
                };
                var result = yield invokeBlockAction("RunLava", {
                  runLavaBag: bag
                });
                if (result !== null && result !== void 0 && result.isSuccess) {
                  isRunning.value = false;
                  runResult.value = result.data || "";
                } else {
                  errorMessage.value = (result === null || result === void 0 ? void 0 : result.errorMessage) || "An unexpected error occurred while saving.";
                }
              } finally {
                isRunning.value = false;
              }
            });
            return _runLava.apply(this, arguments);
          }
          onConfigurationValuesChanged(reloadBlock);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createCommentVNode(" <NotificationBox v-if=\"blockError\" alertType=\"warning\">{{ blockError }}</NotificationBox>\r\n        <NotificationBox v-if=\"errorMessage\" alertType=\"danger\">{{ errorMessage }}</NotificationBox> "), createVNode(unref(Panel), {
              title: "Lava Runner",
              "title-icon-css-class": "fa fa-signal",
              type: "block"
            }, {
              footerActions: withCtx(() => [createVNode(unref(RockButton), {
                btnSize: unref(BtnSize).Default,
                btnType: unref(BtnType).Primary,
                onClick: runLava
              }, {
                default: withCtx(() => [_hoisted_1]),
                _: 1
              }, 8, ["btnSize", "btnType"])]),
              default: withCtx(() => [createTextVNode(toDisplayString(runResult.value || unref(config).message) + " ", 1), createVNode(unref(RockCodeEditor), {
                mode: "lava",
                modelValue: lavaTemplate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => lavaTemplate.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            })]);
          };
        }
      }));

      script.__file = "src/obsidianBoilerplate.obs";

    })
  };
}));
//# sourceMappingURL=obsidianBoilerplate.obs.js.map
