"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.causes_accidents = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let causes_accidents = class causes_accidents extends sequelize_typescript_1.Model {
};
exports.causes_accidents = causes_accidents;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    (0, sequelize_typescript_1.Index)({
        name: "PRIMARY",
        using: "BTREE",
        order: "ASC",
        unique: true
    }),
    __metadata("design:type", Number)
], causes_accidents.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(255),
        comment: "ชื่อสาเหตุ"
    }),
    __metadata("design:type", String)
], causes_accidents.prototype, "name", void 0);
exports.causes_accidents = causes_accidents = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "causes_accidents",
        timestamps: false,
        comment: "ตารางเก็บสาเหตุที่เกิดความเสี่ยงในการใช้รถ"
    })
], causes_accidents);
