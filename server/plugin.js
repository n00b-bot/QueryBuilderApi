"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestPlugin = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _routes = require("./routes");

class TestPlugin {
  constructor(initializerContext) {
    (0, _defineProperty2.default)(this, "logger", void 0);
    this.logger = initializerContext.logger.get();
  }

  setup(core) {
    this.logger.debug('test: Setup');
    const router = core.http.createRouter(); // Register server side APIs

    (0, _routes.defineRoutes)(router);
    return {};
  }

  start(core) {
    this.logger.debug('test: Started');
    return {};
  }

  stop() {}

}

exports.TestPlugin = TestPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi50cyJdLCJuYW1lcyI6WyJUZXN0UGx1Z2luIiwiY29uc3RydWN0b3IiLCJpbml0aWFsaXplckNvbnRleHQiLCJsb2dnZXIiLCJnZXQiLCJzZXR1cCIsImNvcmUiLCJkZWJ1ZyIsInJvdXRlciIsImh0dHAiLCJjcmVhdGVSb3V0ZXIiLCJzdGFydCIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0E7O0FBRU8sTUFBTUEsVUFBTixDQUFxRTtBQUcxRUMsRUFBQUEsV0FBVyxDQUFDQyxrQkFBRCxFQUErQztBQUFBO0FBQ3hELFNBQUtDLE1BQUwsR0FBY0Qsa0JBQWtCLENBQUNDLE1BQW5CLENBQTBCQyxHQUExQixFQUFkO0FBQ0Q7O0FBRU1DLEVBQUFBLEtBQUssQ0FBQ0MsSUFBRCxFQUFrQjtBQUM1QixTQUFLSCxNQUFMLENBQVlJLEtBQVosQ0FBa0IsYUFBbEI7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxZQUFWLEVBQWYsQ0FGNEIsQ0FJNUI7O0FBQ0EsOEJBQWFGLE1BQWI7QUFFQSxXQUFPLEVBQVA7QUFDRDs7QUFFTUcsRUFBQUEsS0FBSyxDQUFDTCxJQUFELEVBQWtCO0FBQzVCLFNBQUtILE1BQUwsQ0FBWUksS0FBWixDQUFrQixlQUFsQjtBQUNBLFdBQU8sRUFBUDtBQUNEOztBQUVNSyxFQUFBQSxJQUFJLEdBQUcsQ0FBRTs7QUF0QjBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUGx1Z2luSW5pdGlhbGl6ZXJDb250ZXh0LFxuICBDb3JlU2V0dXAsXG4gIENvcmVTdGFydCxcbiAgUGx1Z2luLFxuICBMb2dnZXIsXG59IGZyb20gJy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZlcic7XG5cbmltcG9ydCB7IFRlc3RQbHVnaW5TZXR1cCwgVGVzdFBsdWdpblN0YXJ0IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkZWZpbmVSb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0UGx1Z2luIGltcGxlbWVudHMgUGx1Z2luPFRlc3RQbHVnaW5TZXR1cCwgVGVzdFBsdWdpblN0YXJ0PiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgY29uc3RydWN0b3IoaW5pdGlhbGl6ZXJDb250ZXh0OiBQbHVnaW5Jbml0aWFsaXplckNvbnRleHQpIHtcbiAgICB0aGlzLmxvZ2dlciA9IGluaXRpYWxpemVyQ29udGV4dC5sb2dnZXIuZ2V0KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0dXAoY29yZTogQ29yZVNldHVwKSB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ3Rlc3Q6IFNldHVwJyk7XG4gICAgY29uc3Qgcm91dGVyID0gY29yZS5odHRwLmNyZWF0ZVJvdXRlcigpO1xuXG4gICAgLy8gUmVnaXN0ZXIgc2VydmVyIHNpZGUgQVBJc1xuICAgIGRlZmluZVJvdXRlcyhyb3V0ZXIpO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KGNvcmU6IENvcmVTdGFydCkge1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCd0ZXN0OiBTdGFydGVkJyk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHVibGljIHN0b3AoKSB7fVxufVxuIl19