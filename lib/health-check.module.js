"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckModule = void 0;
var common_1 = require("@nestjs/common");
var health_check_controller_1 = require("./health-check.controller");
var terminus_1 = require("@nestjs/terminus");
var HealthCheckModule = /** @class */ (function () {
    function HealthCheckModule() {
    }
    HealthCheckModule_1 = HealthCheckModule;
    HealthCheckModule.forRoot = function (keyName, endpoint) {
        return {
            imports: [terminus_1.TerminusModule],
            module: HealthCheckModule_1,
            controllers: [health_check_controller_1.HealthController],
            providers: [
                {
                    provide: 'KEY_NAME',
                    useValue: keyName
                },
                {
                    provide: 'ENDPOINT',
                    useValue: endpoint
                }
            ],
        };
    };
    var HealthCheckModule_1;
    HealthCheckModule = HealthCheckModule_1 = __decorate([
        (0, common_1.Module)({})
    ], HealthCheckModule);
    return HealthCheckModule;
}());
exports.HealthCheckModule = HealthCheckModule;