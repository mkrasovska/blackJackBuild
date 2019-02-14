(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _game_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/sidebar/sidebar.component */ "./src/app/game/sidebar/sidebar.component.ts");
/* harmony import */ var _game_field_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/field/field.component */ "./src/app/game/field/field.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game-multi/game-multi.component */ "./src/app/game-multi/game-multi.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./playroom/playroom.component */ "./src/app/playroom/playroom.component.ts");
/* harmony import */ var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./multiplayer/multiplayer.component */ "./src/app/multiplayer/multiplayer.component.ts");
/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/login-guard.guard */ "./src/app/guards/login-guard.guard.ts");
/* harmony import */ var _guards_room_guard_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/room-guard.guard */ "./src/app/guards/room-guard.guard.ts");
/* harmony import */ var _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./closed-room/closed-room.component */ "./src/app/closed-room/closed-room.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./records/records.component */ "./src/app/records/records.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _game_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _game_field_field_component__WEBPACK_IMPORTED_MODULE_13__["FieldComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundPageComponent"],
                _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_15__["GameMultiComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_17__["PlayroomComponent"],
                _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_18__["MultiplayerComponent"],
                _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_21__["ClosedRoomComponent"],
                _records_records_component__WEBPACK_IMPORTED_MODULE_22__["RecordsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'firabase-test'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_8__["MyFirstServiceService"], _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_19__["LoginGuardGuard"], _guards_room_guard_guard__WEBPACK_IMPORTED_MODULE_20__["RoomGuardGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/closed-room/closed-room.component.css":
/*!*******************************************************!*\
  !*** ./src/app/closed-room/closed-room.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NlZC1yb29tL2Nsb3NlZC1yb29tLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/closed-room/closed-room.component.html":
/*!********************************************************!*\
  !*** ./src/app/closed-room/closed-room.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n  Oops!! You are not allowed in this room.\n  This could happen for the following reasons:\n  -there no such a a room\n  -player limit is exceeded\n  -game is already im progress.\n  Please thy another room.\n\n</pre>\n<a class=\"menu-button\" routerLink=\"/game-multi\">Select other room</a>\n"

/***/ }),

/***/ "./src/app/closed-room/closed-room.component.ts":
/*!******************************************************!*\
  !*** ./src/app/closed-room/closed-room.component.ts ***!
  \******************************************************/
/*! exports provided: ClosedRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedRoomComponent", function() { return ClosedRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClosedRoomComponent = /** @class */ (function () {
    function ClosedRoomComponent() {
    }
    ClosedRoomComponent.prototype.ngOnInit = function () {
    };
    ClosedRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closed-room',
            template: __webpack_require__(/*! ./closed-room.component.html */ "./src/app/closed-room/closed-room.component.html"),
            styles: [__webpack_require__(/*! ./closed-room.component.css */ "./src/app/closed-room/closed-room.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClosedRoomComponent);
    return ClosedRoomComponent;
}());



/***/ }),

/***/ "./src/app/game-multi/game-multi.component.css":
/*!*****************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".existing-rooms {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n\n}\n\n.room {\n  background-color: burlywood;\n  /* width: 250px;\n  height: 200px; */\n  border: 2px solid;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 120px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n  margin: 0 10px 10px 10px;\n  text-align: center;\n}\n\n.menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n  }\n\n.add-room-controls {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 500px\n  }\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    }\n\n.number-of-players {\n    width: 90px;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1tdWx0aS9nYW1lLW11bHRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDRCQUE0Qjs7Q0FFN0I7O0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUI7bUJBQ2lCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtDQUNwQjs7QUFFQztJQUNFLG9DQUFvQztJQUNwQywrQkFBK0I7R0FDaEM7O0FBRUQ7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixZQUFZO0dBQ2I7O0FBRUQ7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0tBQ1o7O0FBRUg7SUFDRSxZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9nYW1lLW11bHRpL2dhbWUtbXVsdGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGlzdGluZy1yb29tcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxufVxuXG4ucm9vbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcbiAgLyogd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDIwMHB4OyAqL1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgMTI4LCAyMjMpO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4gIC5tZW51LWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYmFja2dyb3VuZDogcmdiKDEwMywgMTUyLCAyMzgpO1xuICB9XG5cbiAgLmFkZC1yb29tLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiA1MDBweFxuICB9XG5cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAubnVtYmVyLW9mLXBsYXllcnMge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game-multi/game-multi.component.html":
/*!******************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=main-container>\n<div class=add-room-controls>\n  <button type=\"submit\"\n    (click)=addRoom(roomName.value,+maxPlayers.value)>\n    Add room\n  </button>\n\n  <input #roomName\n    placeholder=\"room name\">\n\n  <input #maxPlayers\n    type=number\n    class=number-of-players\n    placeholder=\"max players\">\n</div>\n\n<div class=\"existing-rooms\">\n\n<div class=\"room\"\n  *ngFor=\"let room of rooms\">\n  <p>{{room.id}}\n  {{room.name}}</p>\n  <p>Counter: {{room.counter}} of {{room.maxPlayers}}</p>\n\n  <a class=\"menu-button\" [routerLink]=\"['/playroom', room.id]\"> Enter room </a>\n\n  <button (click)=\"deleteRoom(room.id)\"\n  class=\"menu-button\"\n   [disabled]=\"room.players\" >\n    Delete\n  </button>\n</div>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/game-multi/game-multi.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.ts ***!
  \****************************************************/
/*! exports provided: GameMultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMultiComponent", function() { return GameMultiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameMultiComponent = /** @class */ (function () {
    function GameMultiComponent(_myService, db, router) {
        this._myService = _myService;
        this.db = db;
        this.router = router;
        this.rooms = [];
        this.roomCounter = 0;
    }
    GameMultiComponent.prototype.addRoom = function (roomName, maxPlayers) {
        var roomId = new Date().getUTCMilliseconds();
        var blackJackData = this._myService.getMyData() || this._myService.randomUserData;
        this.db.object('/rooms/room' + roomId).update({
            name: roomName,
            maxPlayers: maxPlayers || 2,
            id: roomId,
            // counter: 0,
            masterId: blackJackData.userId,
            deck: this._myService.createDeck(),
            players: {},
            gameInProgress: false
        });
        this.router.navigate(['/playroom', roomId]);
    };
    GameMultiComponent.prototype.deleteRoom = function (roomId) {
        this.db.list('/rooms').remove('room' + roomId);
    };
    GameMultiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myService.getRoomData().subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.rooms.forEach(function (myroom) { myroom.counter = myroom.players ? Object.keys(myroom.players).length : 0; });
        });
    };
    GameMultiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-multi',
            template: __webpack_require__(/*! ./game-multi.component.html */ "./src/app/game-multi/game-multi.component.html"),
            styles: [__webpack_require__(/*! ./game-multi.component.css */ "./src/app/game-multi/game-multi.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameMultiComponent);
    return GameMultiComponent;
}());



/***/ }),

/***/ "./src/app/game/field/field.component.css":
/*!************************************************!*\
  !*** ./src/app/game/field/field.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.cards img {\n  display: block;\n  width: 90px;\n  height: 120px;\n  background-color: white;\n  z-index: 100;\n  margin: 10px;\n  border-radius: 10px;\n  border: 2px solid grey;\n}\n\n.turn-arrow {\n  background-color: green;\n  width: 60px;\n  height: 40px;\n}\n\n.player-field{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.decision-buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.next-card,\n.stop-game {\n  width: 150px;\n  height: 30px;\n  margin: 10px;\n  border-radius: 20px;\n  background-color: rgb(73, 128, 223);\n}\n\n.next-card:hover,\n.stop-game:hover {\n  background-color: rgb(103, 152, 238);\n}\n\n.next-card:active,\n.stop-game:active {\n  background-color: rgb(16, 95, 231);\n}\n\n.game-field {\n  text-align: center;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjs7QUFFRDs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsb0NBQW9DO0NBQ3JDOztBQUVEOztFQUVFLHFDQUFxQztDQUN0Qzs7QUFFRDs7RUFFRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmRzIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xufVxuXG4udHVybi1hcnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucGxheWVyLWZpZWxke1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZWNpc2lvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5leHQtY2FyZCxcbi5zdG9wLWdhbWUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDEyOCwgMjIzKTtcbn1cblxuLm5leHQtY2FyZDpob3Zlcixcbi5zdG9wLWdhbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG59XG5cbi5uZXh0LWNhcmQ6YWN0aXZlLFxuLnN0b3AtZ2FtZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDk1LCAyMzEpO1xufVxuXG4uZ2FtZS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/field/field.component.html":
/*!*************************************************!*\
  !*** ./src/app/game/field/field.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"game-field\">\n  <div class=\"decision-buttons\">\n    <button class=\"next-card\"\n     *ngIf=\"gameInProgress\"\n     (click)=\"cardTaken.emit()\"\n     [disabled]=\"!isActive || !isMyTurn\">\n      Pick a card\n    </button>\n\n    <button class=\"stop-game\"\n     *ngIf=\"gameInProgress\"\n     (click)=\"gameStopped.emit()\"\n     [disabled]=\"!isActive || !isMyTurn \">\n      Stop\n    </button>\n  </div>\n\n <div *ngFor=\"let player of players\"\n  class=\"player-field\">\n  <div class=\"cards\">\n    <img *ngFor=\"let card of player.cards\"\n         [src]=\"!gameInProgress ? card.face : player.id === blackJackData.userId ? card.face : card.back\" />\n  </div>\n  <img class=\"turn-arrow\" *ngIf=\"player.isMyTurn && thisRoom.gameInProgress\" src=\"./assets/img/arrow-31182_960_720.png\" />\n\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/game/field/field.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/field/field.component.ts ***!
  \***********************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FieldComponent = /** @class */ (function () {
    function FieldComponent(_myService) {
        this._myService = _myService;
        this.cardTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameStopped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // public blackJackData: TLocalData = this._myService.blackJackData;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isActive = false;
        this.isMyTurn = false;
        this.playersObj = {};
        this.thisRoom = {};
    }
    FieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subRoom = this._myService
            .getThisRoomData(this._myService.roomId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$$))
            .subscribe(function (room) {
            _this.thisRoom = room;
            if (room.players) {
                _this.players = Object.values(room.players);
                _this.playersObj = room.players;
                // console.log(this.playersObj);
                _this.isActive = _this.players.every(function (player) { return player.ready; });
                _this.isMyTurn = _this.playersObj[_this.blackJackData.userId].isMyTurn;
                // console.log(this.isActive);
            }
        });
    };
    FieldComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldComponent.prototype, "cardTaken", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldComponent.prototype, "gameStopped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldComponent.prototype, "gameInProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FieldComponent.prototype, "players", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "blackJackData", void 0);
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/game/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/game/field/field.component.css")],
            host: { class: 'game-field' }
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.side-bar {\n  padding-top: 40px;\n  background-color: rgb(200, 150, 100);\n  width: 20%;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.game-field {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGUtYmFyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDE1MCwgMTAwKTtcbiAgd2lkdGg6IDIwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lLWZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-sidebar [allMessages]=\"allMessages\"\n               [players]=\"players\"\n               [gameInProgress]=\"gameInProgress\"\n               (gameStarted)=\"blackJackInit()\">\n  </app-sidebar>\n\n  <app-field (cardTaken)=\"nextRound()\"\n             [players]=\"players\"\n             [gameInProgress]=\"gameInProgress\"\n             (gameStopped)=\"stopGame()\">\n  </app-field>\n</div>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(_myService) {
        this._myService = _myService;
        this.players = this.createPlayers(3, 1);
        this.gameInProgress = false;
        this.allMessages = [];
        this._newDeck = this._myService.createDeck();
        this._myDeck = this._myService.shuffleDeck(this._newDeck);
    }
    GameComponent.prototype.Player = function (name, isBot, id) {
        var player = {
            name: name,
            isBot: isBot,
            id: id,
            isWinner: false,
            isFinished: false,
            score: 0,
            cards: [],
            ready: false,
            isMyTurn: false
        };
        return player;
    };
    GameComponent.prototype.createPlayers = function (playersNumber, humansNumber) {
        var players = [];
        var id = 0;
        for (var i = 0; i < playersNumber; i++, id++) {
            var isBot = i < humansNumber ? false : true;
            var newPlayer = this.Player("Vasya" + i, isBot, id);
            players.push(newPlayer);
        }
        return players;
    };
    GameComponent.prototype.blackJackInit = function () {
        this.gameInProgress = true;
        this.startNewGame();
    };
    GameComponent.prototype.startNewGame = function () {
        var _this = this;
        this._refillDeck();
        console.log(this._myDeck);
        this._myDeck = this._myService.shuffleDeck(this._myDeck);
        this._clearBoard();
        this.players.forEach(function (player) {
            player.cards = [];
            player.isFinished = false;
            player.isWinner = false;
            player.score = 0;
        });
        this.players.forEach(function (player) { return _this._takeNewCard(player); });
        console.log(this._myDeck);
    };
    GameComponent.prototype.stopGame = function () {
        this.players[0].isFinished = true;
        this._writeMessage(this.players[0].name + " stopped the game");
        this.nextRound();
    };
    GameComponent.prototype.nextRound = function () {
        var _this = this;
        this.players.forEach(function (player) {
            if (!player.isFinished) {
                _this.nextTurn(player);
            }
        });
        if (this.players.every(function (player) { return player.isFinished; })) {
            if (!this.players.some(function (player) { return player.isWinner; })) {
                var winner = this._myService.evaluateWinner(this.players);
                this._writeMessage(winner.name + " has won");
            }
            this._showNewGameButton();
        }
    };
    GameComponent.prototype.nextTurn = function (player) {
        if (player.isBot && player.score >= 15) {
            player.isFinished = true;
            this._writeMessage(player.name + " stopped the game");
        }
        if (!player.isFinished) {
            var takenCard = this._takeNewCard(player);
            this._writeMessage(player.name + " took " + takenCard.name + " " + takenCard.symbol);
            if (player.score > 21) {
                player.isFinished = true;
                this._writeMessage(player.name + " has too much! Looser!");
            }
            if (player.score === 21) {
                this._finishGame(player);
                this._writeMessage(player.name + " has won! Cheers!");
            }
        }
    };
    GameComponent.prototype._clearBoard = function () {
        this.gameInProgress = true;
        this.allMessages = [];
    };
    GameComponent.prototype._takeNewCard = function (player) {
        var takenCard = this._myDeck.pop();
        player.cards.push(takenCard);
        player.score = this._myService.scoreSum(player);
        return takenCard;
    };
    GameComponent.prototype._showNewGameButton = function () {
        this.gameInProgress = false;
    };
    GameComponent.prototype._refillDeck = function () {
        var _this = this;
        this.players.forEach(function (player) { _this._myDeck = _this._myDeck.concat(player.cards); });
    };
    GameComponent.prototype._finishGame = function (winner) {
        this.players.forEach(function (player) { return (player.isFinished = true); });
        winner.isWinner = true;
    };
    GameComponent.prototype._writeMessage = function (message) {
        this.messageText = message;
        this.allMessages.push(message);
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/sidebar/sidebar.component.css":
/*!****************************************************!*\
  !*** ./src/app/game/sidebar/sidebar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-game  {\n  width: 80px;\n  height: 30px;\n  margin: 10px;\n  border-radius: 20px;\n  background-color: rgb(73, 128, 223);\n}\n\n.go-to-menu {\n  border: 2px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 55px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  text-decoration: none;\n  font-weight: 100;\n  padding:3px 15px;\n}\n\n.go-to-menu:hover {\n  box-shadow: 0 0 5px rgba(0,0,0,0.3);\n  background: rgb(103, 152, 238);\n}\n\n.master {\n  color: red;\n}\n\n.is-finished {\n  opacity: 0.5;\n}\n\n.bot-number{\n  width: 30px;\n}\n\n.is-bot {\n  background-image: url('bot.png');\n  background-position-x: 95%;\n  background-repeat: no-repeat;\n  background-size: 20px;\n}\n\n.is-human {\n  background-image: url('human.png');\n  background-position-x: 95%;\n  background-repeat: no-repeat;\n  background-size: 25px;\n}\n\n.player-name {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG9DQUFvQztFQUNwQywrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQ0FBbUQ7RUFDbkQsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxtQ0FBcUQ7RUFDckQsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSwyQ0FBMkM7Q0FDNUMiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1nYW1lICB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG59XG5cbi5nby10by1tZW51IHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOjNweCAxNXB4O1xufVxuXG4uZ28tdG8tbWVudTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG59XG5cbi5tYXN0ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaXMtZmluaXNoZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ib3QtbnVtYmVye1xuICB3aWR0aDogMzBweDtcbn1cblxuLmlzLWJvdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2JvdC5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDk1JTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xufVxuXG4uaXMtaHVtYW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9odW1hbi5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDk1JTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xufVxuXG4ucGxheWVyLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/game/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/game/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"side-bar\">\n  <!-- <button class=\"new-game\"\n   (click)=\"gameStarted.emit()\"\n   *ngIf=\"!gameInProgress\">\n    New game\n  </button> -->\n  <a class=\"go-to-menu\"\n   routerLink=\"/menu\"\n   *ngIf=\"!gameInProgress\">\n   Menu\n  </a>\n\n  <p *ngIf=\"!gameInProgress\">\n    Players: {{players ? players.length : 0}} of {{thisRoom ? thisRoom.maxPlayers : 0}}\n  </p>\n\n  <div class=\"master-comtrols\"\n      *ngIf=\"thisRoom ? thisRoom.masterId === blackJackData.userId && !gameInProgress : false\">\n\n  <button class=\"new-game\"\n    *ngIf=\"thisRoom ? thisRoom.masterId === blackJackData.userId && !gameInProgress : false\"\n    (click)=\"addBot()\">\n    Add bot\n  </button>\n\n  <button class=\"new-game\" *ngIf=\"thisRoom ? thisRoom.masterId === blackJackData.userId && !gameInProgress : false\"\n    (click)=\"deleteBot()\">\n    Delete bot\n  </button>\n\n  <!-- <p>\n    Add\n     <input class=\"bot-number\"\n      placeholder=\"0\"\n      #numberOfBots>\n    bots\n  </p> -->\n\n  <button class=\"new-game\"\n   (click)=\"gameStarted.emit()\">\n    New game\n  </button>\n</div>\n\n  <div class=\"game-log\">\n    <p *ngFor=\"let message of allMessages\">\n      {{ message }}\n    </p>\n  </div>\n\n  <div class=\"game-score\">\n\n    <h2>\n      <span *ngIf=\"!gameInProgress\">Game score:</span>\n      <span *ngIf=\"gameInProgress\">Players:</span>\n    </h2>\n\n    <p *ngFor=\"let player of players\"\n    [class.player-name]=\"player.isMyTurn && gameInProgress\"\n    [class.master]=\"thisRoom ? thisRoom.masterId === player.id : false\"\n    [class.is-finished]=\"player.isFinished && gameInProgress\"\n    [class.is-human]=\"!player.isBot\"\n    [class.is-bot]=\"player.isBot\">\n\n    {{player.name}}<span *ngIf=\"!gameInProgress\">: {{player.score}}</span>\n    </p>\n\n  </div>\n\n  <!-- <div *ngIf=\"!gameInProgress\" class=\"game-players\">\n\n    <h2>Players</h2>\n\n    <p *ngFor=\"let player of players\">{{player.name}}<span *ngIf=\"player.ready\">: ready</span></p>\n\n  </div> -->\n\n</section>\n"

/***/ }),

/***/ "./src/app/game/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/game/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
var SidebarComponent = /** @class */ (function () {
    // public blackJackData: TLocalData = this._myService.blackJackData;
    function SidebarComponent(_myService) {
        this._myService = _myService;
        this.gameStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidebarComponent.prototype.addBot = function () {
        var newBot = this._myService.createPlayer(this._myService.randomNick(), true, this._myService.getRandom() + 100000);
        this.players.push(newBot);
        console.log(this.players);
        this._myService.updatePlayer(newBot, this.thisRoom.id);
    };
    SidebarComponent.prototype.deleteBot = function () {
        if (this.players[this.players.length - 1].isBot) {
            var deletedBot = this.players.pop();
            console.log(this.players);
            this._myService.removePlayer(deletedBot.id, this.thisRoom.id);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "allMessages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "players", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidebarComponent.prototype, "gameInProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "thisRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "blackJackData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidebarComponent.prototype, "gameStarted", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/game/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/game/sidebar/sidebar.component.css")],
            host: { class: 'side-bar' }
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/guards/login-guard.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/login-guard.guard.ts ***!
  \*********************************************/
/*! exports provided: LoginGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return LoginGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuardGuard = /** @class */ (function () {
    function LoginGuardGuard(router, _myService) {
        this.router = router;
        this._myService = _myService;
    }
    LoginGuardGuard.prototype.canActivate = function (next, state) {
        if (this._myService.getMyData()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    LoginGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_2__["MyFirstServiceService"]])
    ], LoginGuardGuard);
    return LoginGuardGuard;
}());



/***/ }),

/***/ "./src/app/guards/room-guard.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/room-guard.guard.ts ***!
  \********************************************/
/*! exports provided: RoomGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuardGuard", function() { return RoomGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomGuardGuard = /** @class */ (function () {
    function RoomGuardGuard(_myService, router, route) {
        this._myService = _myService;
        this.router = router;
        this.route = route;
    }
    RoomGuardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (params) { return console.log(params); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (roomId) { console.log(roomId); return _this._myService.getThisRoomData(roomId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (room) {
            if (!room) {
                _this.router.navigate(['menu']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Boolean));
    };
    RoomGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoomGuardGuard);
    return RoomGuardGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100px;\n  height: 25px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n}\n\n  .menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n  }\n\n  .enter-username{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    width: 400px;\n    height: 200px;\n    align-items: center;\n  }\n\n  .enter-username input{\n    width: 200px;\n    height: 25px;\n  }\n\n  main {\n    position: absolute;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    padding-top: 50px;\n    width: 100%;\n    height: 100%;\n    background-image: url('login-background.jpg');\n    background-repeat: no-repeat;\n    background-size: 100%;\n  }\n\n  .login-box {\n   width: 400px;\n    height: 200px;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    border: 2px solid grey;\n    align-items: center;\n    background-color: white;\n  }\n\n  .login-box p {\n    font-size: 30px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtDQUNuQjs7RUFFQztJQUNFLG9DQUFvQztJQUNwQywrQkFBK0I7R0FDaEM7O0VBRUQ7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtHQUNyQjs7RUFFQztJQUNBLGFBQWE7SUFDYixhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOENBQTZEO0lBQzdELDZCQUE2QjtJQUM3QixzQkFBc0I7R0FDdkI7O0VBRUQ7R0FDQyxhQUFhO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsd0JBQXdCO0dBQ3pCOztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgMTI4LCAyMjMpO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbiAgLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG4gIH1cblxuICAuZW50ZXItdXNlcm5hbWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAgIC5lbnRlci11c2VybmFtZSBpbnB1dHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgbWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi1iYWNrZ3JvdW5kLmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cblxuICAubG9naW4tYm94IHtcbiAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmxvZ2luLWJveCBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\n<div class=login-box>\n<p *ngIf=\"userName\">\n  Hi {{userName}}!\n</p>\n\n<p *ngIf=\"!userName\">\n  Hi, unknown user!\n</p>\n\n<div *ngIf=\"!userName\"\n  class=enter-username>\n  <input placeholder=\"Please introduce yourself\" #nameInput>\n\n  <button type=\"submit\"\n    (click)=saveUserName(nameInput.value)\n    class=\"menu-button\">\n    Save\n  </button>\n</div>\n\n<div *ngIf=\"userName\" class=enter-username>\n  <a class=\"menu-button\"\n   routerLink=\"/menu\">\n   To menu\n  </a>\n</div>\n</div>\n</main>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_myService) {
        this._myService = _myService;
        this.blackJackData = this._myService.getMyData() || {};
        this.userName = this.blackJackData.userName;
    }
    LoginComponent.prototype.saveUserName = function (name) {
        console.log(name);
        var userId = new Date().getUTCMilliseconds();
        this.blackJackData.userName = name;
        if (!this.blackJackData.userId) {
            this.blackJackData.userId = userId;
        }
        this.userName = name;
        var stringblackJackData = JSON.stringify(this.blackJackData);
        localStorage.setItem('blackJackData', stringblackJackData);
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: green;\n  text-align: center;\n  padding-top: 200px;\n}\n\n.menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVDO0lBQ0Usb0NBQW9DO0lBQ3BDLCtCQUErQjtHQUNoQyIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4ubWVudS1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLm1lbnUtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiAgLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container\">\n  <h1>Wellcome to Black Jack!</h1>\n\n  <h2>Select your game</h2>\n\n  <a class=\"menu-button\" routerLink=\"/game\">Single player</a>\n\n  <a class=\"menu-button\" routerLink=\"/game-multi\">Multi player</a>\n\n  <a class=\"menu-button\" routerLink=\"/hall-of-fame\">Hall of Fame</a>\n\n  </main>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/multiplayer/multiplayer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/multiplayer/multiplayer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* height: 100%; */\n  width: 100%;\n}\n\n.side-bar {\n  padding-top: 40px;\n  background-color: rgb(200, 150, 100);\n  width: 20%;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.game-field {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlLWJhciB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAxNTAsIDEwMCk7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZS1maWVsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/multiplayer/multiplayer.component.html":
/*!********************************************************!*\
  !*** ./src/app/multiplayer/multiplayer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-sidebar [allMessages]=\"allMessages\"\n    [thisRoom]=\"thisRoom\"\n    [players]=\"players\"\n    [blackJackData]=\"blackJackData\"\n    [gameInProgress]=\"gameInProgress\"\n    (gameStarted)=\"blackJackInit()\">\n  </app-sidebar>\n\n  <app-field (cardTaken)=\"nextRound()\"\n    [blackJackData]=\"blackJackData\"\n    [players]=\"players\"\n    [gameInProgress]=\"gameInProgress\"\n    (gameStopped)=\"stopGame()\">\n  </app-field>\n</div>\n"

/***/ }),

/***/ "./src/app/multiplayer/multiplayer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/multiplayer/multiplayer.component.ts ***!
  \******************************************************/
/*! exports provided: MultiplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplayerComponent", function() { return MultiplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { getPlayers } from '@angular/core/src/render3/players';
var MultiplayerComponent = /** @class */ (function () {
    function MultiplayerComponent(_myService) {
        this._myService = _myService;
        this.players = [];
        this.gameInProgress = false;
        this.allMessages = [];
        this.playersObj = {};
        this.records = {};
        this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._newDeck = this._myService.createDeck();
        this._myDeck = this._myService.shuffleDeck(this._newDeck);
    }
    MultiplayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
        // this.players.forEach((player: TPlayer) =>
        //   this._myService.updatePlayer(player, this._myService.roomId)
        // );
        this._myService.getRecords().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (records) {
            _this.records = records || {};
            console.log("subscribe");
            console.log(_this.records);
        });
        this.subRoom = this._myService
            .getThisRoomData(this._myService.roomId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$$))
            .subscribe(function (room) {
            _this.thisRoom = room;
            _this._myDeck = room.deck;
            _this.gameInProgress = _this.thisRoom.gameInProgress;
            _this.allMessages = room.messages ? room.messages : [];
            if (room.players) {
                _this.players = Object.values(room.players);
                _this.playersObj = room.players;
            }
            // this.gameInProgress = this.players
            //   ? Object.keys(this.players).length === this.thisRoom.maxPlayers &&
            //     this.players.every((player: TPlayer) => player.ready) &&
            //     !this.players.every((player: TPlayer) => player.isFinished)
            //   : false;
            // if (
            //   this.gameInProgress &&
            //   this.players &&
            //   this.players.every((player: TPlayer) => player.score === 0)
            // ) {
            //   this.players[0].isMyTurn = true;
            //   this._myService.updatePlayer(this.players[0], this.thisRoom.id);
            // }
            // this._myService.changeInProgress(this.gameInProgress, this._myService.roomId);
            _this.myIndex = _this.players.findIndex(function (player) { return player.id === _this.blackJackData.userId; });
        });
    };
    MultiplayerComponent.prototype.ngOnDestroy = function () {
        this._findNewMaster(this.thisRoom);
        this._destroy$$.next();
    };
    MultiplayerComponent.prototype.createBots = function (botsNumber) {
        var bots = [];
        var id = this._myService.getRandom();
        for (var i = 0; i < botsNumber; i++, id += 100000) {
            var newBot = this._myService.createPlayer(this._myService.randomNick(), true, id);
            bots.push(newBot);
        }
        return bots;
    };
    MultiplayerComponent.prototype.blackJackInit = function () {
        // if (numberOfBots) {
        //   this.addBots(numberOfBots);
        // }
        this._myService.changeMaxPlayers(this.players.length, this.thisRoom.id);
        this.startNewGame();
    };
    // public addBots(numberOfBots: number): TPlayer[] {
    //   const bots: TPlayer[] = this.createBots(numberOfBots);
    //   bots.forEach((bot: TPlayer) => {
    //     this._myService.updatePlayer(bot, this.thisRoom.id);
    //     this.players.push(bot);
    //   });
    //   return bots;
    // }
    MultiplayerComponent.prototype.startNewGame = function () {
        var _this = this;
        this._myService.changeInProgress(true, this._myService.roomId);
        this._myDeck = this._myService.shuffleDeck(this._newDeck);
        this._clearBoard();
        this.players.forEach(function (player) {
            player.cards = [];
            player.isFinished = false;
            player.isWinner = false;
            player.score = 0;
            player.isMyTurn = false;
            player.ready = true;
        });
        this.players[0].isMyTurn = true;
        if (this.blackJackData.userId === this.thisRoom.masterId) {
            this.players.forEach(function (player) {
                var takenCard = _this._takeNewCard(player);
                // this._writeMessage(`${player.name} took ${takenCard.name} ${takenCard.symbol}`);
                _this._myService.updatePlayer(player, _this._myService.roomId);
            });
        }
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        this._myService.removeMessages(this._myService.roomId);
    };
    MultiplayerComponent.prototype.stopGame = function () {
        if (!this.players[this.myIndex].isFinished) {
            this._writeMessage(this.blackJackData.userName + " stopped the game");
        }
        this.players[this.myIndex].isFinished = true;
        this.nextRound();
    };
    MultiplayerComponent.prototype.nextRound = function () {
        this.nextTurn(this.players[this.myIndex]);
        // this._myService.updatePlayer(this.players[this.myIndex], this._myService.roomId);
        var nextIndex = this.findNextIndex(this.myIndex);
        if (!this.players.every(function (player) { return player.isFinished; })) {
            while (this.players[nextIndex].isFinished === true || this.players[nextIndex].isBot) {
                if (this.players[nextIndex].isBot) {
                    this.nextTurn(this.players[nextIndex]);
                    this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
                }
                nextIndex = this.findNextIndex(nextIndex);
                if (nextIndex === this.myIndex) {
                    break;
                }
            }
        }
        this.players[this.myIndex].isMyTurn = false;
        this.players[nextIndex].isMyTurn = true;
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        this._myService.updatePlayer(this.players[this.myIndex], this._myService.roomId);
        this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
    };
    MultiplayerComponent.prototype.findNextIndex = function (myNumber) {
        return myNumber < this.players.length - 1 ? myNumber + 1 : 0;
    };
    MultiplayerComponent.prototype.nextTurn = function (player) {
        console.log('Next Turn');
        if (player.isBot && player.score >= 15 && !player.isFinished) {
            this._writeMessage(player.name + " stopped the game");
            player.isFinished = true;
        }
        if (!player.isFinished) {
            if (!player.cards) {
                player.cards = [];
            }
            var takenCard = this._takeNewCard(player);
            // this._writeMessage(`${player.name} took ${takenCard.name} ${takenCard.symbol}`);
            if (player.score > 21) {
                player.isFinished = true;
                this._writeMessage(player.name + " has too much! Looser!");
                var bustCounter_1 = 0;
                var potentialWinner_1;
                this.players.forEach(function (_player) {
                    if (_player.score <= 21) {
                        potentialWinner_1 = _player;
                    }
                    else {
                        bustCounter_1++;
                    }
                });
                if (bustCounter_1 === this.players.length - 1) {
                    this._finishGame(potentialWinner_1);
                }
            }
            if (player.score === 21) {
                this._finishGame(player);
            }
        }
        this._myService.updatePlayer(player, this._myService.roomId);
        if (this.players.every(function (_player) { return _player.isFinished; })) {
            var winner = this._myService.evaluateWinner(this.players);
            this._myService.changeInProgress(false, this._myService.roomId);
            this._writeMessage(winner.name + " has won");
            this._myService.updateRecords(this.players, this.records);
            console.log("update");
            console.log(this.records);
        }
    };
    MultiplayerComponent.prototype._clearBoard = function () {
        this.allMessages = [];
        this._myService.updateMessages(this.allMessages, this._myService.roomId);
    };
    MultiplayerComponent.prototype._takeNewCard = function (player) {
        var takenCard = this._myDeck.pop();
        if (!player.cards) {
            player.cards = [];
        }
        player.cards.push(takenCard);
        player.score = this._myService.scoreSum(player);
        return takenCard;
    };
    MultiplayerComponent.prototype._finishGame = function (winner) {
        var _this = this;
        winner.isWinner = true;
        this.players.forEach(function (player) {
            player.isFinished = true;
            _this._myService.updatePlayer(player, _this._myService.roomId);
        });
    };
    MultiplayerComponent.prototype._writeMessage = function (message) {
        this.messageText = message;
        this.allMessages.push(message);
        this._myService.updateMessages(this.allMessages, this._myService.roomId);
    };
    MultiplayerComponent.prototype._findNewMaster = function (room) {
        if (room.masterId === this.blackJackData.userId) {
            var nextMasterIndex = this.findNextIndex(this.myIndex);
            while (this.players[nextMasterIndex].isBot) {
                nextMasterIndex = this.findNextIndex(nextMasterIndex);
                if (nextMasterIndex === this.myIndex) {
                    break;
                }
            }
            var nextMasterId = this.players[nextMasterIndex].id;
            this._myService.changeMaster(nextMasterId, this.thisRoom.id);
            console.log(this.players);
        }
    };
    MultiplayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiplayer',
            template: __webpack_require__(/*! ./multiplayer.component.html */ "./src/app/multiplayer/multiplayer.component.html"),
            styles: [__webpack_require__(/*! ./multiplayer.component.css */ "./src/app/multiplayer/multiplayer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], MultiplayerComponent);
    return MultiplayerComponent;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-alert {\n  color: wheat;\n  font-size:50px;\n  font-weight: 600;\n}\n\n.main-container {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: url('not-found-background.jpg') no-repeat;\n  background-size: 100%;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0VBQ1osc0RBQXFFO0VBQ3JFLHNCQUFzQjtFQUN0QixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1hbGVydCB7XG4gIGNvbG9yOiB3aGVhdDtcbiAgZm9udC1zaXplOjUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL25vdC1mb3VuZC1iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container\">\n  <p class=\"not-found-alert\">\n    We are looking for your page everywhere...\n    <br> but we cannot find it!\n  </p>\n</main>\n"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/playroom/playroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/playroom/playroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheXJvb20vcGxheXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVDO0lBQ0Usb0NBQW9DO0lBQ3BDLCtCQUErQjtHQUNoQyIsImZpbGUiOiJzcmMvYXBwL3BsYXlyb29tL3BsYXlyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLm1lbnUtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiAgLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/playroom/playroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/playroom/playroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!mayIComeIn\">\n  <!-- Sorry, your there is no space for you in the room number {{id}}\n  Please -->\n  <img src=\"./assets/img/spinner.gif\">\n\n</div>\n\n<app-multiplayer *ngIf=mayIComeIn></app-multiplayer>\n\n<!-- <app-multiplayer></app-multiplayer> -->\n\n"

/***/ }),

/***/ "./src/app/playroom/playroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/playroom/playroom.component.ts ***!
  \************************************************/
/*! exports provided: PlayroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayroomComponent", function() { return PlayroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlayroomComponent = /** @class */ (function () {
    function PlayroomComponent(route, db, _myService, router) {
        this.route = route;
        this.db = db;
        this._myService = _myService;
        this.router = router;
        this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
        this.players = {};
        // public playersArr: TPlayer[] = [];
        this.playerNumber = 0;
        this.mayIComeIn = false;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newPlayer = this._myService.createPlayer(this.blackJackData.userName, false, this.blackJackData.userId);
    }
    PlayroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pluck"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (roomId) {
            _this._myService.roomId = roomId;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (roomId) { return _this._myService.getThisRoomData(roomId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (room) {
            if (!room) {
                _this.router.navigate(['closed-room']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (room) {
            _this.thisRoom = room;
            _this.players = room.players;
            // this.playersArr = room.players ? Object.values(room.players) : [];
            _this.playerNumber = _this.players ? Object.keys(_this.players).length : 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (room) {
            if (room.gameInProgress && !room.players[_this.blackJackData.userId]) {
                _this.router.navigate(['closed-room']);
            }
            if (room.maxPlayers <= _this.playerNumber &&
                !room.players[_this.blackJackData.userId]) {
                _this.router.navigate(['closed-room']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (room) {
            return room.maxPlayers > _this.playerNumber ||
                !!room.players[_this.blackJackData.userId];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (room) {
            return !room.gameInProgress || !!room.players[_this.blackJackData.userId];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.mayIComeIn = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (room) {
            return room.players ? !room.players[_this.blackJackData.userId] : true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this._myService.updatePlayer(_this.newPlayer, _this._myService.roomId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$$))
            .subscribe(function () { });
    };
    PlayroomComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
        this.db
            .object('/rooms/room' + this._myService.roomId + ("/players/" + this.blackJackData.userId))
            .remove();
        this._myService.deleteEmptyRoom(Object.values(this.players), this.thisRoom.id);
    };
    PlayroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playroom',
            template: __webpack_require__(/*! ./playroom.component.html */ "./src/app/playroom/playroom.component.html"),
            styles: [__webpack_require__(/*! ./playroom.component.css */ "./src/app/playroom/playroom.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_3__["MyFirstServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PlayroomComponent);
    return PlayroomComponent;
}());



/***/ }),

/***/ "./src/app/records/records.component.css":
/*!***********************************************!*\
  !*** ./src/app/records/records.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hall-of-fame td {\nwidth: 100px;\nheight: 30px;\nfont-size: 20px;\nfont-weight: bold;\ntext-align: center;\n\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  text-align: center;\n  color: white;\n  padding-top: 50px;\n  background-image: url('hall-of-fame.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  width: 100%;\n  height: 100%;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9yZWNvcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsbUJBQW1COztDQUVsQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBeUQ7RUFDekQsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVjb3Jkcy9yZWNvcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFsbC1vZi1mYW1lIHRkIHtcbndpZHRoOiAxMDBweDtcbmhlaWdodDogMzBweDtcbmZvbnQtc2l6ZTogMjBweDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaGFsbC1vZi1mYW1lLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/records/records.component.html":
/*!************************************************!*\
  !*** ./src/app/records/records.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<h1>\n  Black Jack Hall of fame\n</h1>\n\n<table class=hall-of-fame>\n  <thead>\n    <td>Rating<td>\n    <td>ID</td>\n    <td>Name</td>\n    <td>Victories</td>\n    <td>Games</td>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let record of recordsArr\">\n      <td><td>\n      <td>{{record.id}}</td>\n      <td>{{record.name}}</td>\n      <td>{{record.victories}}</td>\n      <td>{{record.games}}</td>\n    </tr>\n  </tbody>\n</table>\n\n</body>\n\n"

/***/ }),

/***/ "./src/app/records/records.component.ts":
/*!**********************************************!*\
  !*** ./src/app/records/records.component.ts ***!
  \**********************************************/
/*! exports provided: RecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsComponent", function() { return RecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(_myService) {
        this._myService = _myService;
        this.records = {};
        this.recordsArr = [];
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myService
            .getRecords()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$$))
            .subscribe(function (records) {
            _this.recordsArr = records ? Object.values(records) : [];
            _this.recordsArr.sort(function (a, b) { return b.victories - a.victories; });
            console.log("subscribe");
            console.log(_this.records);
            console.log(_this.recordsArr);
        });
    };
    RecordsComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
    };
    RecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-records',
            template: __webpack_require__(/*! ./records.component.html */ "./src/app/records/records.component.html"),
            styles: [__webpack_require__(/*! ./records.component.css */ "./src/app/records/records.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], RecordsComponent);
    return RecordsComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-multi/game-multi.component */ "./src/app/game-multi/game-multi.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playroom/playroom.component */ "./src/app/playroom/playroom.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closed-room/closed-room.component */ "./src/app/closed-room/closed-room.component.ts");
/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/login-guard.guard */ "./src/app/guards/login-guard.guard.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./records/records.component */ "./src/app/records/records.component.ts");









var appRoutes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full',
    },
    {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardGuard"]]
    },
    {
        path: 'hall-of-fame',
        component: _records_records_component__WEBPACK_IMPORTED_MODULE_8__["RecordsComponent"],
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardGuard"]]
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_0__["GameComponent"],
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'game-multi',
        component: _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_2__["GameMultiComponent"],
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuardGuard"]]
    },
    {
        path: 'playroom/:id',
        component: _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_4__["PlayroomComponent"],
    },
    {
        path: 'closed-room',
        component: _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_6__["ClosedRoomComponent"],
    },
    {
        path: '**',
        component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageComponent"]
    },
];


/***/ }),

/***/ "./src/app/services/my-first-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/my-first-service.service.ts ***!
  \******************************************************/
/*! exports provided: MyFirstServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFirstServiceService", function() { return MyFirstServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyFirstServiceService = /** @class */ (function () {
    function MyFirstServiceService(db) {
        this.db = db;
        this.randomUserData = {
            userName: this.randomNickHuman(),
            userId: this.getRandom()
        };
        // public randomUserNumber: number = this.getRandom();
        this.blackJackData = this.getMyData() || this.randomUserData;
        this.roomId = 0;
    }
    MyFirstServiceService.prototype.getRoomData = function () {
        return this.db.list('rooms').valueChanges();
    };
    MyFirstServiceService.prototype.getRecords = function () {
        return this.db.object('records').valueChanges();
    };
    MyFirstServiceService.prototype.getRandom = function () {
        return Math.ceil(Math.random() * 1000);
    };
    MyFirstServiceService.prototype.getThisRoomData = function (id) {
        return this.db.object('rooms/room' + id).valueChanges();
    };
    MyFirstServiceService.prototype.removePlayer = function (playerId, roomId) {
        this.db.object('/rooms/room' + roomId + ("/players/" + playerId)).remove();
    };
    MyFirstServiceService.prototype.changeInProgress = function (gameInProgress, roomId) {
        this.db.object('/rooms/room' + roomId + "/gameInProgress").set(gameInProgress);
    };
    MyFirstServiceService.prototype.changeMaxPlayers = function (newMaxPlayers, roomId) {
        this.db.object('/rooms/room' + roomId + "/maxPlayers").set(newMaxPlayers);
    };
    MyFirstServiceService.prototype.changeMaster = function (newMaterId, roomId) {
        this.db.object('/rooms/room' + roomId + "/masterId").set(newMaterId);
    };
    MyFirstServiceService.prototype.updatePlayer = function (player, roomId) {
        // debugger;
        this.db.object('/rooms/room' + roomId + ("/players/" + player.id)).update(player);
    };
    MyFirstServiceService.prototype.createPlayer = function (name, isBot, id) {
        var player = {
            name: name,
            isBot: isBot,
            id: id,
            isWinner: false,
            isFinished: false,
            score: 0,
            cards: [],
            ready: true,
            isMyTurn: false
        };
        return player;
    };
    MyFirstServiceService.prototype.randomNick = function () {
        var nicks = ['Крот', 'Бот', 'Кот'];
        var character = ['Жёваный', 'Нежёваный', 'Недожёваный'];
        var nickNames = [];
        nicks.forEach(function (name) {
            character.forEach(function (char) {
                nickNames.push(char + " " + name);
            });
        });
        var randomName = nickNames[Math.ceil(Math.random() * nickNames.length)];
        // console.log(nickNames);
        return randomName;
    };
    MyFirstServiceService.prototype.randomNickHuman = function () {
        var nickNames = [
            'Штирлиц',
            'Бабайка',
            'Балалайка',
            'Cool Hacker',
            'Чиполино',
            'Шапокляк',
            'Сепулька'
        ];
        var randomName = nickNames[Math.ceil(Math.random() * nickNames.length)];
        return randomName;
    };
    // public nameGenerator(): string {
    //   let nicks = ['крот', 'бот', 'кот'];
    //   let character = ['жёваный', 'нёжеваный', 'недожёваный', 'просто'];
    //   let nickNames = [];
    //   nicks.forEach(name => {
    //     character.forEach(char => { nickNames.push(`${char} ${name}`) });
    //   });
    //   (nickNames);
    // }
    // public updatePlayers(players: TPlayer[], roomId: number): void {
    //   this.db.object('/rooms/room' + roomId + `/players`).update(players);
    // }
    // public sayReady(playerId: number, roomId: number): void {
    //   let isReady = {[playerId] : true};
    //   this.db.object('/rooms/room' + roomId + `/ready`).update(isReady);
    //   console.log('updated');
    // }
    MyFirstServiceService.prototype.updateDeck = function (deck, roomId) {
        this.db.object('/rooms/room' + roomId + "/deck").set(deck);
    };
    MyFirstServiceService.prototype.updateMessages = function (messages, roomId) {
        this.db.object('/rooms/room' + roomId + "/messages").update(messages);
    };
    MyFirstServiceService.prototype.removeMessages = function (roomId) {
        this.db.object('/rooms/room' + roomId + "/messages").remove();
    };
    MyFirstServiceService.prototype.deleteEmptyRoom = function (players, roomId) {
        var _this = this;
        if (players.every(function (player) { return player.id === _this.blackJackData.userId || player.isBot; })) {
            this.db.object('/rooms/room' + roomId).remove();
        }
    };
    MyFirstServiceService.prototype.updateRecords = function (players, records) {
        var _this = this;
        players.forEach(function (player) {
            if (!player.isBot) {
                records[player.id] = records[player.id]
                    ? {
                        victories: records[player.id].victories,
                        games: records[player.id].games + 1,
                        name: player.name,
                        id: player.id
                    }
                    : {
                        victories: 0,
                        games: 1,
                        name: player.name,
                        id: player.id
                    };
                if (player.isWinner) {
                    records[player.id].victories++;
                }
                // console.log(records);
                _this.db.object("/records").update(records);
            }
        });
    };
    MyFirstServiceService.prototype.scoreSum = function (player) {
        var sum = 0;
        player.cards.forEach(function (card) {
            sum += card.value;
        });
        return sum;
    };
    MyFirstServiceService.prototype.getMyData = function () {
        var blackJackData = JSON.parse(localStorage.getItem('blackJackData'));
        return blackJackData;
    };
    MyFirstServiceService.prototype.createDeck = function () {
        var newDeck = [];
        var suits = [
            { name: 'club', symbol: '♣' },
            { name: 'spade', symbol: '♠' },
            { name: 'diamond', symbol: '♦' },
            { name: 'heart', symbol: '♥' }
        ];
        var cards = [
            { name: '6', value: 6 },
            { name: '7', value: 7 },
            { name: '8', value: 8 },
            { name: '9', value: 9 },
            { name: '10', value: 10 },
            { name: 'J', value: 2 },
            { name: 'Q', value: 3 },
            { name: 'K', value: 4 },
            { name: 'A', value: 11 }
        ];
        suits.forEach(function (suit) {
            cards.forEach(function (card) {
                var newCardObj = {
                    name: card.name,
                    suit: suit.name,
                    symbol: suit.symbol,
                    value: card.value,
                    face: "./assets/img/" + suit.name + "_" + card.name + ".svg",
                    back: "./assets/img/back.png"
                };
                newDeck.push(newCardObj);
            });
        });
        return newDeck;
    };
    MyFirstServiceService.prototype.shuffleDeck = function (myDeck) {
        myDeck.forEach(function (card, i, deck) {
            var randomNumber = Math.floor(Math.random() * myDeck.length);
            var changeCard = card;
            deck[i] = deck[randomNumber];
            deck[randomNumber] = changeCard;
        });
        return myDeck;
    };
    MyFirstServiceService.prototype.evaluateWinner = function (players) {
        var winner = players.reduce(function (win, player) {
            if (player.score > win.score && player.score <= 21) {
                win = player;
            }
            win.isWinner = true;
            return win;
        }, this.createPlayer('', false, 1));
        return winner;
    };
    MyFirstServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], MyFirstServiceService);
    return MyFirstServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDf0Z8gcvhgEf1UmxE0VvJWgzzyeS08urs',
        authDomain: 'fir-test-fc111.firebaseapp.com',
        databaseURL: 'https://fir-test-fc111.firebaseio.com',
        projectId: 'fir-test-fc111',
        storageBucket: 'fir-test-fc111.appspot.com',
        messagingSenderId: '672179703934'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/MyJS/AngularProjects/blackJackRooms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
