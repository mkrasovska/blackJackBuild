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
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game-multi/game-multi.component */ "./src/app/game-multi/game-multi.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./playroom/playroom.component */ "./src/app/playroom/playroom.component.ts");
/* harmony import */ var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./multiplayer/multiplayer.component */ "./src/app/multiplayer/multiplayer.component.ts");
/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/login-guard.guard */ "./src/app/guards/login-guard.guard.ts");
/* harmony import */ var _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./closed-room/closed-room.component */ "./src/app/closed-room/closed-room.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./records/records.component */ "./src/app/records/records.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { GameComponent } from './game/game.component';









// import { RoomGuardGuard } from './guards/room-guard.guard';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                // GameComponent,
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_12__["FieldComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundPageComponent"],
                _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_14__["GameMultiComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_16__["PlayroomComponent"],
                _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_17__["MultiplayerComponent"],
                _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_19__["ClosedRoomComponent"],
                _records_records_component__WEBPACK_IMPORTED_MODULE_20__["RecordsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'firabase-test'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_8__["MyFirstServiceService"], _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuardGuard"]],
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

module.exports = ".menu-button {\n  min-width: 150px;\n  border-radius: 5px;\n  border: none;\n  padding: 15px 25px;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 20px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n  cursor: pointer;\n}\n\n* {\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvc2VkLXJvb20vY2xvc2VkLXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NlZC1yb29tL2Nsb3NlZC1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1idXR0b24ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjM0M5M0Q1O1xufVxuXG4ubWVudS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkZDNkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbioge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/closed-room/closed-room.component.html":
/*!********************************************************!*\
  !*** ./src/app/closed-room/closed-room.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre>\n  Oops!! You are not allowed in this room.\n\n  This could happen for the following reasons:\n\n  -there no such a a room\n  -player limit is exceeded\n  -game is already im progress.\n  \n  Please thy another room.\n\n</pre>\n\n<a class=\"menu-button\" routerLink=\"/game-multi\">Select other room</a>\n"

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

/***/ "./src/app/field/field.component.css":
/*!*******************************************!*\
  !*** ./src/app/field/field.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.cards img {\n  display: block;\n  width: 90px;\n  height: 120px;\n  background-color: white;\n  z-index: 100;\n  margin: 10px;\n  border-radius: 10px;\n  border: 2px solid grey;\n}\n\n.turn-arrow {\n  background-color: green;\n  width: 60px;\n  height: 40px;\n}\n\n.player-field{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.menu-button {\n  min-width: 150px;\n  border-radius: 5px;\n  border: none;\n  padding: 15px 25px;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 20px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n  cursor: pointer;\n}\n\n.next-card:hover,\n.stop-game:hover {\n  background-color: rgb(103, 152, 238);\n}\n\n.next-card:active,\n.stop-game:active {\n  background-color: rgb(16, 95, 231);\n}\n\n.game-field {\n  text-align: center;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCOztBQUVEOztFQUVFLHFDQUFxQztDQUN0Qzs7QUFFRDs7RUFFRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkcyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbn1cblxuLnR1cm4tYXJyb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnBsYXllci1maWVsZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1idXR0b24ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjM0M5M0Q1O1xufVxuXG4ubWVudS1idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZGQzZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV4dC1jYXJkOmhvdmVyLFxuLnN0b3AtZ2FtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDE1MiwgMjM4KTtcbn1cblxuLm5leHQtY2FyZDphY3RpdmUsXG4uc3RvcC1nYW1lOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgOTUsIDIzMSk7XG59XG5cbi5nYW1lLWZpZWxkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/field/field.component.html":
/*!********************************************!*\
  !*** ./src/app/field/field.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"game-field\">\n  <div class=\"decision-buttons\">\n    <button class=\"menu-button\"\n     *ngIf=\"gameInProgress\"\n     (click)=\"cardTaken.emit()\"\n     [disabled]=\"!isActive || !isMyTurn\">\n      Pick a card\n    </button>\n\n    <button class=\"menu-button\"\n     *ngIf=\"gameInProgress\"\n     (click)=\"gameStopped.emit()\"\n     [disabled]=\"!isActive || !isMyTurn \">\n      Stop\n    </button>\n  </div>\n\n  <div *ngFor=\"let player of players\"\n    class=\"player-field\">\n    <div class=\"cards\">\n      <img *ngFor=\"let card of player.cards\"\n        [src]=\"!gameInProgress ? card.face : player.id === blackJackData.userId ? card.face : card.back\" />\n    </div>\n\n    <img class=\"turn-arrow\"\n      *ngIf=\"player.isMyTurn && thisRoom.gameInProgress\"\n      src=\"./assets/img/arrow-31182_960_720.png\" />\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/field/field.component.ts":
/*!******************************************!*\
  !*** ./src/app/field/field.component.ts ***!
  \******************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
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




var FieldComponent = /** @class */ (function () {
    function FieldComponent(_myService) {
        this._myService = _myService;
        this.cardTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameStopped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
                _this.isActive = _this.players.every(function (player) { return player.ready; });
                _this.isMyTurn = _this.playersObj[_this.blackJackData.userId].isMyTurn;
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
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/field/field.component.css")],
            host: { class: 'game-field' }
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"]])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/game-multi/game-multi.component.css":
/*!*****************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".existing-rooms {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.room {\n  background-color: burlywood;\n  border: 2px solid;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  font-weight: 600;\n  padding: 3px;\n}\n\n.menu-button {\n  border-radius: 5px;\n  border: none;\n  padding: 5px 5px;\n  min-width: 120px;\n  font-size: 18px;\n  text-decoration: none;\n  margin: 20px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n}\n\n.add-room-controls {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 500px\n}\n\n.search-room-controls {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 500px\n}\n\n.room-controls {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.add-room-controls input,\n.search-room-controls input {\n  width: 150px;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 14px;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('doors.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.number-of-players {\n  width: 90px;\n}\n\n.hidden {\n  display: none;\n}\n\n.room-id {\n  border-radius: 50%;\n  background-color: white;\n  border: 2px solid black;\n  padding: 3px;\n}\n\n.closed-room {\n  background-color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1tdWx0aS9nYW1lLW11bHRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtDQUMvQjs7QUFFRDs7RUFFRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUNBQWtEO0VBQ2xELDZCQUE2QjtFQUM3QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9nYW1lLW11bHRpL2dhbWUtbXVsdGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGlzdGluZy1yb29tcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnJvb20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjM0M5M0Q1O1xufVxuXG4ubWVudS1idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZGQzZGRjtcbn1cblxuLmFkZC1yb29tLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwMHB4XG59XG5cbi5zZWFyY2gtcm9vbS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MDBweFxufVxuXG4ucm9vbS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYWRkLXJvb20tY29udHJvbHMgaW5wdXQsXG4uc2VhcmNoLXJvb20tY29udHJvbHMgaW5wdXQge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9kb29ycy5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5udW1iZXItb2YtcGxheWVycyB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJvb20taWQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uY2xvc2VkLXJvb20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/game-multi/game-multi.component.html":
/*!******************************************************!*\
  !*** ./src/app/game-multi/game-multi.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"room-controls\">\n    <div class=add-room-controls>\n      <input #roomName placeholder=\"room name\">\n\n      <input #maxPlayers type=number class=number-of-players placeholder=\"max players\">\n\n      <button type=\"submit\"\n        class=\"menu-button\"\n        (click)=addRoom(roomName.value,+maxPlayers.value)>\n        New room\n      </button>\n    </div>\n\n    <div class=search-room-controls>\n      <input #searchQuery placeholder=\"Enter query\">\n\n      <button type=\"submit\"\n        class=\"menu-button\"\n        (click)=searchByQuery(searchQuery.value);>\n        Search\n      </button>\n\n      <button type=\"submit\"\n        class=\"menu-button\"\n        (click)=\"searchQuery.value=''\">\n        Clear\n      </button>\n    </div>\n  </div>\n\n  <button class=\"menu-button\"\n    routerLink=\"/menu\">\n    Menu\n  </button>\n\n  <div *ngIf=\"!searchQuery.value\"\n    class=\"existing-rooms\">\n    <div class=\"room\"\n      *ngFor=\"let room of rooms\"\n      [class.closed-room]=\"(room.counter >= room.maxPlayers || room.gameInProgress)\"\n      [class.hidden]=\"(room.maxPlayers === 1)\">\n\n      <div class=room-id>\n        {{room.id}}\n      </div>\n\n      <div>\n        {{room.name}}\n      </div>\n\n      <p>\n        Players: {{room.counter}} of {{room.maxPlayers}}\n      </p>\n\n      <button class=\"menu-button\"\n        [disabled]=\"room.counter >= room.maxPlayers || room.gameInProgress === true\"\n        [routerLink]=\"['/playroom', room.id]\">\n        Enter room\n      </button>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"searchQuery.value\" class=\"filtered-rooms\">\n    <div class=\"room\"\n      *ngFor=\"let room of roomsFiltered\"\n      [class.closed-room]=\"(room.counter >= room.maxPlayers || room.gameInProgress)\"\n      [class.hidden]=\"(room.maxPlayers === 1)\">\n      <div class=room-id>\n        {{room.id}}\n      </div>\n\n      <div>\n        {{room.name}}\n      </div>\n\n      <p>\n        Players: {{room.counter}} of {{room.maxPlayers}}\n      </p>\n\n      <button class=\"menu-button\"\n        [disabled]=\"room.counter >= room.maxPlayers || room.gameInProgress === true\"\n        [routerLink]=\"['/playroom', room.id]\">\n        Enter room\n      </button>\n\n      <!-- <button (click)=\"deleteRoom(room.id)\"\n        class=\"menu-button\"\n        [disabled]=\"room.players\" >\n        Delete\n      </button> -->\n    </div>\n  </div>\n</div>\n"

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
    function GameMultiComponent(_myService, db) {
        this._myService = _myService;
        this.db = db;
        this.rooms = [];
        this.roomsFiltered = [];
        this.roomCounter = 0;
        this.numberOfHumans = 0;
        this.numberOfBots = 0;
    }
    GameMultiComponent.prototype.addRoom = function (roomName, maxPlayers) {
        if (maxPlayers > 6 || maxPlayers < 1 || Math.floor(maxPlayers) !== maxPlayers) {
            alert('The number of players should be a an integer from 1 to 6');
            return;
        }
        else {
            this._myService.addRoom(roomName, maxPlayers);
        }
    };
    GameMultiComponent.prototype.deleteRoom = function (roomId) {
        this.db.list('/rooms').remove('room' + roomId);
    };
    GameMultiComponent.prototype.searchByQuery = function (searchQuery) {
        this.roomsFiltered = this.rooms.filter(function (room) { return room.id === +searchQuery || room.name === searchQuery
            || Object.values(room.players).some(function (player) { return player.name === searchQuery; }); });
    };
    GameMultiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myService.getRoomData().subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.rooms.forEach(function (myroom) {
                myroom.counter = myroom.players ? Object.keys(myroom.players).length : 0;
            });
        });
    };
    GameMultiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-multi',
            template: __webpack_require__(/*! ./game-multi.component.html */ "./src/app/game-multi/game-multi.component.html"),
            styles: [__webpack_require__(/*! ./game-multi.component.css */ "./src/app/game-multi/game-multi.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], GameMultiComponent);
    return GameMultiComponent;
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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-button {\n  border-radius: 5px;\n  border: none;\n  padding: 15px 25px;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 20px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n}\n\n.enter-username{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 400px;\n  height: 200px;\n  align-items: center;\n}\n\n.enter-username input{\n  width: 200px;\n  height: 25px;\n}\n\nmain {\n  position: absolute;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  padding-top: 50px;\n  width: 100%;\n  height: 100%;\n  background-image: url('login-background.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.login-box {\n  width: 400px;\n  height: 200px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  border: 2px solid grey;\n  align-items: center;\n  background-color: white;\n}\n\n.login-box p {\n  font-size: 30px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOENBQTZEO0VBQzdELDZCQUE2QjtFQUM3QixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMzQzkzRDU7XG59XG5cbi5tZW51LWJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWVudS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkZDNkZGO1xufVxuXG4uZW50ZXItdXNlcm5hbWV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbnRlci11c2VybmFtZSBpbnB1dHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi1iYWNrZ3JvdW5kLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuLmxvZ2luLWJveCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLWJveCBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=login-box>\n\n    <p *ngIf=\"userName\">\n      Hi {{userName}}!\n    </p>\n\n    <p *ngIf=\"!userName\">\n      Hi, unknown user!\n    </p>\n\n    <div *ngIf=\"!userName\"\n      class=enter-username>\n\n      <input placeholder=\"Please introduce yourself\"\n        #nameInput>\n\n      <button type=\"submit\"\n        (click)=saveUserName(nameInput.value)\n        class=\"menu-button\">\n        Save\n      </button>\n    </div>\n\n    <div *ngIf=\"userName\" class=enter-username>\n      <a class=\"menu-button\"\n        routerLink=\"/menu\">\n        Menu\n      </a>\n\n      <button class=\"menu-button\"\n        (click)=\"userName=''\">\n        Change name\n      </button>\n    </div>\n  </div>\n</main>\n"

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
        var userId = new Date().getUTCMilliseconds();
        this.blackJackData.userName = name;
        if (!this.blackJackData.userId) {
            this.blackJackData.userId = userId;
        }
        this.userName = name;
        var stringblackJackData = JSON.stringify(this.blackJackData);
        localStorage.setItem('blackJackData', stringblackJackData);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
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

module.exports = ".main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-image: url('intro-background2.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  text-align: center;\n}\n\nh1 {\n  color: white;\n  font-size: 80px;\n  font-weight: bold;\n}\n\nh1:hover {\n  color: black;\n  transition: 3s;\n}\n\n.menu-button {\n  border-radius: 5px;\n  border: none;\n  padding: 15px 25px;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 20px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWiwrQ0FBOEQ7RUFDOUQsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLG9DQUFvQzs7Q0FFckM7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaW50cm8tYmFja2dyb3VuZDIuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogM3M7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMzQzkzRDU7XG5cbn1cblxuLm1lbnUtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tZW51LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RkM2RkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container\">\n  <h1>Wellcome to\n     <br>\n     Black Jack\n  </h1>\n\n  <div>\n    <button class=\"menu-button\"\n      (click)=\"addRoom('single',1)\">\n      Single Player\n    </button>\n\n    <button class=\"menu-button\"\n      routerLink=\"/game-multi\">\n      Multi player\n    </button>\n\n    <button class=\"menu-button\"\n      routerLink=\"/hall-of-fame\">\n      Hall of Fame\n    </button>\n  </div>\n</main>\n"

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
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(_myService, router) {
        this._myService = _myService;
        this.router = router;
    }
    MenuComponent.prototype.addRoom = function (roomName, maxPlayers) {
        this._myService.addRoom(roomName, maxPlayers);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".main-container {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n}\n\n.side-bar {\n  padding-top: 40px;\n  background-color: rgb(200, 150, 100);\n  width: 25%;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.game-field {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 75%;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZS1iYXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMTUwLCAxMDApO1xuICB3aWR0aDogMjUlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdhbWUtZmllbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3NSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/multiplayer/multiplayer.component.html":
/*!********************************************************!*\
  !*** ./src/app/multiplayer/multiplayer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-sidebar [allMessages]=\"allMessages\"\n    [thisRoom]=\"thisRoom\"\n    [players]=\"players\"\n    [blackJackData]=\"blackJackData\"\n    [gameInProgress]=\"gameInProgress\"\n    (gameStarted)=\"blackJackInit()\">\n  </app-sidebar>\n\n  <app-field (cardTaken)=\"continueGame()\"\n    [blackJackData]=\"blackJackData\"\n    [players]=\"players\"\n    [gameInProgress]=\"gameInProgress\"\n    (gameStopped)=\"stopGame()\">\n  </app-field>\n</div>\n"

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




var MultiplayerComponent = /** @class */ (function () {
    function MultiplayerComponent(_myService) {
        this._myService = _myService;
        this.players = [];
        this.gameInProgress = false;
        this.allMessages = [];
        this.playersObj = {};
        this.records = {};
        this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
        // public turnTimer;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MultiplayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blackJackData = this._myService.getMyData() || this._myService.randomUserData;
        this._myService
            .getRecords()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$$))
            .subscribe(function (records) {
            _this.records = records || {};
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
        this.startNewGame();
    };
    MultiplayerComponent.prototype.startNewGame = function () {
        var _this = this;
        this._myService.changeInProgress(true, this._myService.roomId);
        this._myDeck = this._myService.shuffleDeck(this._myService.createDeck());
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
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
                _this._takeNewCard(player);
                _this._myService.updatePlayer(player, _this._myService.roomId);
            });
        }
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        this._myService.removeMessages(this._myService.roomId);
    };
    MultiplayerComponent.prototype.stopGame = function () {
        this.players[this.myIndex].isFinished = true;
        this.continueGame();
    };
    MultiplayerComponent.prototype.switchTurn = function (thisIndex) {
        var nextIndex = this.findNextIndex(thisIndex);
        if (!this.players.every(function (player) { return player.isFinished; })) {
            while (this.players[nextIndex].isFinished === true || this.players[nextIndex].isBot) {
                if (this.players[nextIndex].isBot) {
                    this.nextTurn(this.players[nextIndex]);
                }
                nextIndex = this.findNextIndex(nextIndex);
                if (nextIndex === thisIndex && !this.players.some(function (player) { return player.isBot && !player.isFinished; })) {
                    break;
                }
            }
        }
        this.players[thisIndex].isMyTurn = false;
        this.players[nextIndex].isMyTurn = true;
        return nextIndex;
    };
    MultiplayerComponent.prototype.continueGame = function () {
        this.nextTurn(this.players[this.myIndex]);
        var nextIndex = this.switchTurn(this.myIndex);
        // clearTimeout(this.turnTimer);
        // this.turnTimer = setTimeout(() => {this.players[nextIndex].isFinished=true;
        // const nextNextIndex: number = this.switchTurn(nextIndex);
        // this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
        // this._myService.updatePlayer(this.players[nextNextIndex], this._myService.roomId);
        // }, 60000);
        this._myService.updatePlayer(this.players[this.myIndex], this._myService.roomId);
        this._myService.updatePlayer(this.players[nextIndex], this._myService.roomId);
    };
    MultiplayerComponent.prototype.findNextIndex = function (myNumber) {
        return myNumber < this.players.length - 1 ? myNumber + 1 : 0;
    };
    MultiplayerComponent.prototype.nextTurn = function (player) {
        var _this = this;
        if (player.isBot && player.score >= 15 && !player.isFinished) {
            player.isFinished = true;
        }
        if (!player.isFinished) {
            if (!player.cards) {
                player.cards = [];
            }
            this._takeNewCard(player);
            if (player.score > 21) {
                player.isFinished = true;
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
        this._myService.updateDeck(this._myDeck, this._myService.roomId);
        if (this.players.every(function (_player) { return _player.isFinished; })) {
            var winners = this._myService.evaluateWinner(this.players);
            // clearTimeout(this.turnTimer);
            winners.forEach(function (winner) {
                winner.isWinner = true;
                _this._myService.updatePlayer(winner, _this._myService.roomId);
            });
            this._myService.changeInProgress(false, this._myService.roomId);
            this._myService.updateRecords(this.players, this.records);
            this._myService.updatePlayer(player, this._myService.roomId);
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
    // private _writeMessage(message: string): void {
    //   this.messageText = message;
    //   this.allMessages.push(message);
    //   this._myService.updateMessages(this.allMessages, this._myService.roomId);
    // }
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

module.exports = ".not-found-alert {\n  color: wheat;\n  font-size:50px;\n  font-weight: 600;\n}\n\n.main-container {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: url('not-found-background.jpg') no-repeat;\n  background-size: 100%;\n  text-align: center;\n}\n\n.menu-button {\n  min-width: 150px;\n  border-radius: 5px;\n  border: none;\n  padding: 15px 25px;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 20px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0VBQ1osc0RBQXFFO0VBQ3JFLHNCQUFzQjtFQUN0QixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQtcGFnZS9ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1hbGVydCB7XG4gIGNvbG9yOiB3aGVhdDtcbiAgZm9udC1zaXplOjUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL25vdC1mb3VuZC1iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDBweCAwcHggIzNDOTNENTtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZGQzZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-container\">\n  <p class=\"not-found-alert\">\n    We are looking for your page everywhere...\n    <br>\n    but we cannot find it!\n  </p>\n\n  <a class=\"menu-button\"\n    routerLink=\"/menu\">\n    Menu\n  </a>\n</main>\n"

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

module.exports = ".menu-button {\n  border: 1px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 100px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 5px 15px;\n}\n\n.menu-button:not(:last-child) {\n  margin-right: 20px;\n}\n\n.menu-button:hover {\n    box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    background: rgb(103, 152, 238);\n}\n\n.main-container {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheXJvb20vcGxheXJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0lBQ0ksb0NBQW9DO0lBQ3BDLCtCQUErQjtDQUNsQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsOEJBQThCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvcGxheXJvb20vcGxheXJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDEyOCwgMjIzKTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG4ubWVudS1idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/playroom/playroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/playroom/playroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-container\">\n  <div *ngIf=\"!mayIComeIn\"\n    class=\"spinner\">\n    <img src=\"./assets/img/spinner.gif\">\n  </div>\n\n  <app-multiplayer *ngIf=mayIComeIn></app-multiplayer>\n</div>\n\n\n"

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
        this.playerNumber = 0;
        // public humansNumber: number = 0;
        this.mayIComeIn = false;
        this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newPlayer = this._myService.createPlayer(this.blackJackData.userName, false, this.blackJackData.userId);
    }
    PlayroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._myService.getMyData()) {
            this.blackJackData = this._myService.getMyData();
        }
        else {
            this.blackJackData = this._myService.randomUserData;
            var stringblackJackData = JSON.stringify(this.blackJackData);
            localStorage.setItem('blackJackData', stringblackJackData);
        }
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
            _this.playerNumber = _this.players ? Object.keys(_this.players).length : 0;
            // this.humansNumber = this.players
            //   ? Object.keys(this.playersArr.filter((player: TPlayer) => player.isBot)).length
            //   : 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (room) {
            if (room.gameInProgress && !room.players[_this.blackJackData.userId]) {
                _this.router.navigate(['closed-room']);
            }
            if (room.maxPlayers <= _this.playerNumber &&
                !room.players[_this.blackJackData.userId]) {
                _this.router.navigate(['closed-room']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (room) {
            return room.maxPlayers > _this.playerNumber || !!room.players[_this.blackJackData.userId];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (room) { return !room.gameInProgress || !!room.players[_this.blackJackData.userId]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.mayIComeIn = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (room) {
            return room.players ? !room.players[_this.blackJackData.userId] : true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (room) {
            _this._myService.updatePlayer(_this.newPlayer, _this._myService.roomId);
            if (room.maxPlayers === 1) {
                _this._myService.addBot();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$$))
            .subscribe(function () { });
    };
    PlayroomComponent.prototype.ngOnDestroy = function () {
        this._destroy$$.next();
        this.db
            .object('/rooms/room' + this._myService.roomId + ("/players/" + this.blackJackData.userId))
            .remove();
        if (this.thisRoom) {
            this._myService.deleteEmptyRoom(Object.values(this.players), this.thisRoom.id);
        }
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

module.exports = ".hall-of-fame td {\nwidth: 150px;\nheight: 30px;\nfont-size: 20px;\nfont-weight: bold;\ntext-align: center;\n\n}\n\n.hall-of-fame {\n  background-color: rgb(0,0,0, 0.3)\n}\n\nh1 {\n  background-color: rgb(0,0,0, 0.3);\n  font-size: 40px;\n}\n\n.hall-of-fame thead td {\n  font-size: 30px;\n  height: 50px;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  text-align: center;\n  color: white;\n  padding-top: 50px;\n  background-image: url('hall-of-fame.jpg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  width: 100%;\n  height: 100%;\n}\n\n.menu-button {\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  border-radius: 5px;\n  border: none;\n  padding: 15px 25px;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 20px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n  cursor: pointer;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3Jkcy9yZWNvcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsbUJBQW1COztDQUVsQjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUF5RDtFQUN6RCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZHMvcmVjb3Jkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGwtb2YtZmFtZSB0ZCB7XG53aWR0aDogMTUwcHg7XG5oZWlnaHQ6IDMwcHg7XG5mb250LXNpemU6IDIwcHg7XG5mb250LXdlaWdodDogYm9sZDtcbnRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uaGFsbC1vZi1mYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLCAwLjMpXG59XG5cbmgxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLCAwLjMpO1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5oYWxsLW9mLWZhbWUgdGhlYWQgdGQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9oYWxsLW9mLWZhbWUuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggMHB4ICMzQzkzRDU7XG59XG5cbi5tZW51LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RkM2RkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/records/records.component.html":
/*!************************************************!*\
  !*** ./src/app/records/records.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h1>\n    Black Jack Hall of fame\n  </h1>\n\n  <table class=hall-of-fame>\n    <thead>\n      <tr>\n        <td>Rating</td>\n        <td>ID</td>\n        <td>Name</td>\n        <td>Victories</td>\n        <td>Games</td>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let record of recordsArr; let ind = index\">\n        <td>{{ind + 1}}</td>\n        <td>{{record.id}}</td>\n        <td>{{record.name}}</td>\n        <td>{{record.victories}}</td>\n        <td>{{record.games}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <button class=\"menu-button\"\n    routerLink=\"/menu\">\n    Menu\n  </button>\n</main>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function RecordsComponent(_myService, router) {
        this._myService = _myService;
        this.router = router;
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
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-multi/game-multi.component */ "./src/app/game-multi/game-multi.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playroom/playroom.component */ "./src/app/playroom/playroom.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closed-room/closed-room.component */ "./src/app/closed-room/closed-room.component.ts");
/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/login-guard.guard */ "./src/app/guards/login-guard.guard.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./records/records.component */ "./src/app/records/records.component.ts");
// import { GameComponent } from './game/game.component';








var appRoutes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full',
    },
    {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuardGuard"]]
    },
    {
        path: 'hall-of-fame',
        component: _records_records_component__WEBPACK_IMPORTED_MODULE_7__["RecordsComponent"],
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuardGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'game-multi',
        component: _game_multi_game_multi_component__WEBPACK_IMPORTED_MODULE_1__["GameMultiComponent"],
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_6__["LoginGuardGuard"]]
    },
    {
        path: 'playroom/:id',
        component: _playroom_playroom_component__WEBPACK_IMPORTED_MODULE_3__["PlayroomComponent"],
    },
    {
        path: 'closed-room',
        component: _closed_room_closed_room_component__WEBPACK_IMPORTED_MODULE_5__["ClosedRoomComponent"],
    },
    {
        path: '**',
        component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function MyFirstServiceService(db, router) {
        this.db = db;
        this.router = router;
        this.randomUserData = {
            userName: this.randomNickHuman(),
            userId: this.getRandom()
        };
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
        var randomName = nickNames[Math.floor(Math.random() * nickNames.length)];
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
            return win;
        }, this.createPlayer('', false, 1));
        var winners = [winner];
        players.forEach(function (player) {
            if (player.score === winner.score) {
                winners.push(player);
            }
        });
        return winners;
    };
    MyFirstServiceService.prototype.addRoom = function (roomName, maxPlayers) {
        var roomId = new Date().getUTCMilliseconds();
        var blackJackData = this.getMyData() || this.randomUserData;
        this.db.object('/rooms/room' + roomId).update({
            name: roomName,
            maxPlayers: maxPlayers || 2,
            id: roomId,
            masterId: blackJackData.userId,
            deck: this.createDeck(),
            players: {},
            gameInProgress: false
        });
        this.router.navigate(['/playroom', roomId]);
    };
    MyFirstServiceService.prototype.addBot = function () {
        var newBot = this.createPlayer(this.randomNick(), true, this.getRandom() + 100000);
        this.updatePlayer(newBot, this.roomId);
    };
    MyFirstServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyFirstServiceService);
    return MyFirstServiceService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-game  {\n  width: 80px;\n  height: 30px;\n  margin: 10px;\n  border-radius: 20px;\n  background-color: rgb(73, 128, 223);\n}\n\n.menu-button {\n  min-width: 100px;\n  border-radius: 5px;\n  border: none;\n  padding: 5px 5px;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 10px;\n  color: #fff;\n  position: relative;\n  display: inline-block;\n  background-color: #55acee;\n  box-shadow: 0px 5px 0px 0px #3C93D5;\n}\n\n.menu-button:hover {\n  background-color: #6FC6FF;\n  cursor: pointer;\n}\n\n.go-to-menu {\n  border: 2px solid gray;\n  border-radius: 20px;\n  display: inline-block;\n  width: 55px;\n  background-color: rgb(73, 128, 223);\n  color: black;\n  text-decoration: none;\n  font-weight: 100;\n  padding:3px 15px;\n}\n\n.go-to-menu:hover {\n  box-shadow: 0 0 5px rgba(0,0,0,0.3);\n  background: rgb(103, 152, 238);\n}\n\n.master {\n  color: red;\n}\n\n.is-finished {\n  opacity: 0.5;\n}\n\n.bot-number{\n  width: 30px;\n}\n\n.is-bot {\n  background-image: url('bot.png');\n  background-position-x: 5%;\n  background-repeat: no-repeat;\n  background-size: 20px;\n}\n\n.is-human {\n  background-image: url('human.png');\n  background-position-x: 5%;\n  background-repeat: no-repeat;\n  background-size: 25px;\n}\n\n.player-name {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.player-list img {\n  width: 20px;\n}\n\n.player-list {\nvertical-align: middle;\nfont-size: 16px;\nline-height: 20px;\n}\n\n.player-list span:not(:last-child)  {\npadding-right: 10px;\n}\n\n.bust {\n  display: inline-block;\n  background-color: white;\n  color: red;\n  font-weight: 700;\n  font-size: 12px;\n  border: 2px solid red;\n  border-radius: 5px;\n  padding: 3px;\n}\n\n.winner {\n  display: inline-block;\n  background-color: white;\n  color: blue;\n  font-weight: 700;\n  font-size: 12px;\n  border: 2px solid blue;\n  border-radius: 5px;\n  padding: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxvQ0FBb0M7RUFDcEMsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsaUNBQWdEO0VBQ2hELDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsbUNBQWtEO0VBQ2xELDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsMkNBQTJDO0NBQzVDOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0FBQ0EsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixrQkFBa0I7Q0FDakI7O0FBRUQ7QUFDQSxvQkFBb0I7Q0FDbkI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1nYW1lICB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMHB4IDBweCAjM0M5M0Q1O1xufVxuXG4ubWVudS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkZDNkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nby10by1tZW51IHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxMjgsIDIyMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOjNweCAxNXB4O1xufVxuXG4uZ28tdG8tbWVudTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxNTIsIDIzOCk7XG59XG5cbi5tYXN0ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaXMtZmluaXNoZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ib3QtbnVtYmVye1xuICB3aWR0aDogMzBweDtcbn1cblxuLmlzLWJvdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2JvdC5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDUlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XG59XG5cbi5pcy1odW1hbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2h1bWFuLnBuZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogNSU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbn1cblxuLnBsYXllci1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4ucGxheWVyLWxpc3QgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5wbGF5ZXItbGlzdCB7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuZm9udC1zaXplOiAxNnB4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5wbGF5ZXItbGlzdCBzcGFuOm5vdCg6bGFzdC1jaGlsZCkgIHtcbnBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5idXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ud2lubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"side-bar\">\n  <button class=\"menu-button\"\n    routerLink=\"/menu\">\n    Menu\n  </button>\n\n  <p *ngIf=\"!gameInProgress\">\n    Players: {{players ? players.length : 0}} of {{thisRoom ? thisRoom.maxPlayers : 0}}\n  </p>\n\n  <div class=\"master-comtrols\"\n      *ngIf=\"thisRoom ? thisRoom.masterId === blackJackData.userId && !gameInProgress : false\">\n\n    <button class=\"menu-button\"\n      (click)=\"increaseRoom()\">\n      Increase room\n    </button>\n\n    <button class=\"menu-button\"\n      (click)=\"decreaseRoom()\">\n      Decrease room\n    </button>\n\n    <button class=\"menu-button\"\n      *ngIf=\"thisRoom ? thisRoom.masterId === blackJackData.userId && !gameInProgress : false\"\n      (click)=\"addBot()\">\n      Add bot\n    </button>\n\n    <button class=\"menu-button\"\n      *ngIf=\"thisRoom ? thisRoom.masterId === blackJackData.userId && !gameInProgress : false\"\n      (click)=\"deleteBot()\">\n      Delete bot\n    </button>\n\n    <button class=\"menu-button\"\n      (click)=\"gameStarted.emit()\">\n      Start game\n    </button>\n  </div>\n\n  <div class=\"game-log\">\n    <p *ngFor=\"let message of allMessages\">\n      {{ message }}\n    </p>\n  </div>\n\n  <div class=\"game-score\">\n\n    <h2>\n      <span *ngIf=\"!gameInProgress\">Game score:</span>\n      <span *ngIf=\"gameInProgress\">Players:</span>\n    </h2>\n\n    <p *ngFor=\"let player of players\"\n      class=\"player-list\"\n      [class.player-name]=\"player.isMyTurn && gameInProgress\"\n      [class.master]=\"thisRoom ? thisRoom.masterId === player.id : false\"\n      [class.is-human]=\"!player.isBot\"\n      [class.is-bot]=\"player.isBot\">\n      {{player.name}}\n      <span *ngIf=\"!gameInProgress\">\n        : {{player.score}}\n      </span>\n\n      <span *ngIf=\"player.isFinished && gameInProgress && !(player.score > 21)\">\n        <img  src=\"./assets/img/stop.png\">\n      </span>\n\n      <span class=\"bust\"\n        *ngIf=\"player.score > 21\">\n        BUST!!!\n      </span>\n\n      <span class=\"winner\"\n        *ngIf=\"player.isWinner\">\n        WINNER!!!\n      </span>\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/my-first-service.service */ "./src/app/services/my-first-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_myService, router) {
        this._myService = _myService;
        this.router = router;
        this.gameStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidebarComponent.prototype.addBot = function () {
        if (this.players.length >= this.thisRoom.maxPlayers) {
            alert("Maximum allowed number of players in this room is " + this.thisRoom.maxPlayers);
            return;
        }
        else {
            this._myService.addBot();
        }
    };
    SidebarComponent.prototype.increaseRoom = function () {
        if (this.thisRoom.maxPlayers >= 6) {
            alert('Room capacity should not exced 6 players');
            return;
        }
        else {
            this.thisRoom.maxPlayers++;
            this._myService.changeMaxPlayers(this.thisRoom.maxPlayers, this.thisRoom.id);
        }
    };
    SidebarComponent.prototype.decreaseRoom = function () {
        if (this.thisRoom.maxPlayers <= this.players.length) {
            alert("You cannot decrease room when it's full");
            return;
        }
        else {
            this.thisRoom.maxPlayers--;
            this._myService.changeMaxPlayers(this.thisRoom.maxPlayers, this.thisRoom.id);
        }
    };
    SidebarComponent.prototype.deleteBot = function () {
        if (this.players[this.players.length - 1].isBot) {
            var deletedBot = this.players.pop();
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
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")],
            host: { class: 'side-bar' }
        }),
        __metadata("design:paramtypes", [_services_my_first_service_service__WEBPACK_IMPORTED_MODULE_1__["MyFirstServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
