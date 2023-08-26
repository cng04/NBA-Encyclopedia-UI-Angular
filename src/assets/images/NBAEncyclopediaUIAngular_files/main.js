"use strict";
(self["webpackChunkNBA_Encyclopedia_UI_Angular"] = self["webpackChunkNBA_Encyclopedia_UI_Angular"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _view_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/home-page/home-page.component */ 8059);
/* harmony import */ var _view_teams_teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/teams/teams-list/teams-list.component */ 2227);
/* harmony import */ var _view_teams_teams_map_teams_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/teams/teams-map/teams-map.component */ 9553);
/* harmony import */ var _view_players_players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/players/players.component */ 2628);
/* harmony import */ var _view_awards_awards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/awards/awards.component */ 6313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








const routes = [{
  path: "teams-list",
  component: _view_teams_teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_1__.TeamsListComponent
}, {
  path: "teams-map",
  component: _view_teams_teams_map_teams_map_component__WEBPACK_IMPORTED_MODULE_2__.TeamsMapComponent
}, {
  path: "home-page",
  component: _view_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}, {
  path: "players",
  component: _view_players_players_component__WEBPACK_IMPORTED_MODULE_3__.PlayersComponent
}, {
  path: "awards",
  component: _view_awards_awards_component__WEBPACK_IMPORTED_MODULE_4__.AwardsComponent
}, {
  path: '',
  redirectTo: "home-page",
  pathMatch: "full"
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _view_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/navigation/navigation.component */ 4119);
var _class;



class AppComponent {
  constructor() {
    this.title = 'NBA-Encyclopedia-UI-Angular';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 18,
  vars: 0,
  consts: [["title", "NBA Encyclopedia"], ["id", "footer"], ["id", "footer-view"], ["href", "https://www.sportingnews.com/ca/nba?gr=www"], ["href", "https://gleague.nba.com/"], ["href", "https://www.nhl.com/"], ["href", "https://www.mlb.com/"], ["href", "https://www.mlssoccer.com/"], ["href", "https://www.basketball-reference.com/"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation", 0)(1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NBA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "NBA G-League");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "NFL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "NHL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MLB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "MLS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Basketball Reference");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _view_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent],
  styles: ["#footer[_ngcontent-%COMP%] {\n  background-color: black;\n  height: 150px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n}\n\n#footer-view[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  column-gap: 100px;\n}\n\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Sans Serif\";\n  color: white;\n  text-decoration: underline;\n  transition: 0.1s ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  font-size: 17px;\n}\n\na[_ngcontent-%COMP%]:active {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vcGFkZGluZzogMjVweCAyNXZ3IDI1cHggMjV2dzsgLy8gdG9wIHJpZ2h0IGJvdHRvbSBsZWZ0IHBhZGRpbmdcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jZm9vdGVyLXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbHVtbi1nYXA6IDEwMHB4OyAvLyBzZXRzIHRoZSBnYXAgYmV0d2VlbiBjb2x1bW5zIGluIGEgbXVsdGktY29sdW1uIGxheW91dCAoZS5nLiBncmlkLCBmbGV4Ym94KVxuICAgIC8vcGFkZGluZzogMjVweCAzMDBweCAyNXB4IDMwMHB4O1xufVxuXG4jZm9vdGVyIGEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNhbnMgU2VyaWZcIjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8vIHVuZGVybGluZXMgdGhlIHRleHRcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7IC8vIHRyYW5zaXRpb24gdGltZSBpbnRvIGhvdmVyIENTUyBwcm9wZXJ0aWVzXG59XG5cbmE6aG92ZXIgeyAvLyB0YXJnZXQgdGhlIGVsZW1lbnQgd2hlbiBtb3VzZSBpcyBob3ZlcmluZyBvdmVyIGl0XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5hOmFjdGl2ZSB7IC8vIHRhcmdldCB0aGUgZWxlbWVudCB3aGVuIGN1cnNvciBjbGlja3Mgb24gaXRcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _view_teams_teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/teams/teams-list/teams-list.component */ 2227);
/* harmony import */ var _view_teams_teams_map_teams_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/teams/teams-map/teams-map.component */ 9553);
/* harmony import */ var _custom_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-material.module */ 1942);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _view_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/navigation/navigation.component */ 4119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;









class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _custom_material_module__WEBPACK_IMPORTED_MODULE_4__.CustomMaterialModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _view_teams_teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_2__.TeamsListComponent, _view_teams_teams_map_teams_map_component__WEBPACK_IMPORTED_MODULE_3__.TeamsMapComponent, _view_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__.NavigationComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _custom_material_module__WEBPACK_IMPORTED_MODULE_4__.CustomMaterialModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 1942:
/*!*******************************************!*\
  !*** ./src/app/custom-material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomMaterialModule: () => (/* binding */ CustomMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;










// Importing allows the components of these modules to be used by the custom-material module
class CustomMaterialModule {}
_class = CustomMaterialModule;
_class.ɵfac = function CustomMaterialModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomMaterialModule, {
    imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule],
    exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule]
  });
})();

/***/ }),

/***/ 6313:
/*!*************************************************!*\
  !*** ./src/app/view/awards/awards.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AwardsComponent: () => (/* binding */ AwardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class AwardsComponent {}
_class = AwardsComponent;
_class.ɵfac = function AwardsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-awards"]],
  decls: 2,
  vars: 0,
  template: function AwardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "awards works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8059:
/*!*******************************************************!*\
  !*** ./src/app/view/home-page/home-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class HomePageComponent {}
_class = HomePageComponent;
_class.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home-page"]],
  decls: 22,
  vars: 0,
  consts: [["id", "image-view"], ["id", "raptors-champ"], ["id", "curry-mvp"], ["id", "page-title"], ["id", "page-intro"], ["id", "trophy-div"], ["id", "trophy", "src", "../assets/images/finals-trophy.png"], ["id", "page-desc"], ["id", "desc-title"], ["id", "desc-body"], ["id", "desc-teams"], ["id", "desc-players"], ["id", "desc-awards"], ["id", "second-image-div"], ["id", "nba-teams", "src", "../assets/images/nba-teams.jpeg"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NBA Encyclopedia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Welcome to the NBA Encyclopedia!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul")(12, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "On this page, you can learn all about your favourite NBA teams and players!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Under Teams, you can find all 30 NBA Teams in the NBA Teams Dropdown. There's also an interactive map showing the location of all 30 NBA Teams. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Under Players, you can build your very own starting lineup.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Under Awards, you can view past award winners for all the NBA awards including MVP, DPOY, ROTY, COTY among many others! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["#image-view[_ngcontent-%COMP%] {\n  width: 100vw;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#raptors-champ[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 575px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('raptors-NBA-Champs.jpeg');\n}\n\n#curry-mvp[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 575px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url('curry-mvp.jpeg');\n}\n\n#page-title[_ngcontent-%COMP%] {\n  position: absolute;\n  \n\n\n\n\n\n  flex-basis: 50%;\n  border: 4px solid white;\n  font-size: 70px;\n  color: white;\n  font-family: \"Monaco\";\n  background-color: black;\n  padding: 40px;\n}\n\n#page-intro[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  height: 50vh;\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  column-gap: 30px;\n}\n\n#trophy-div[_ngcontent-%COMP%] {\n  flex-basis: 30%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#trophy[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n#page-desc[_ngcontent-%COMP%] {\n  position: relative;\n  flex-basis: 40%;\n  \n\n\n\n\n\n  padding: 30px 30px 30px 30px;\n  border: 2px solid black;\n  width: 40%;\n}\n\n#desc-title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 40px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n\n#second-image-div[_ngcontent-%COMP%] {\n  flex-basis: 30%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media only screen and (max-width: 1440px) {\n  #page-intro[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    height: 70vh;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    column-gap: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdEQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQTs7OztHQUFBO0VBS0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQURKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBOzs7O0dBQUE7RUFLQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUxKOztBQVFBO0VBQ0csbUJBQUE7RUFDQSxlQUFBO0FBTEg7O0FBUUE7RUFDSSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFBO0VBRUk7SUFDSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQU5OO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2UtdmlldyB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy8gcG9zaXRpb24gYW4gZWxlbWVudCBiYXNlZCBvbiBjdXJyZW50IHBvc2l0aW9uIHdpdGhvdXQgY2hhbmdpbmcgbGF5b3V0XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcmFwdG9ycy1jaGFtcCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDU3NXB4O1xuICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JhcHRvcnMtTkJBLUNoYW1wcy5qcGVnXCIpOyAvLyBzZXRzIGJhY2tncm91bmQgaW1hZ2Ugb2YgZGl2XG59IFxuXG4jY3VycnktbXZwIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTc1cHg7XG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3VycnktbXZwLmpwZWdcIik7XG59XG5cbiNwYWdlLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8vIHBvc2l0aW9uZWQgZWxlbWVudCBiYXNlZCBvbiBjbG9zZXN0IHBvc2l0aW9uZWQgYW5jZXN0b3IgKGhvbWUtdmlldylcbiAgICAvKlxuICAgIHRvcDogNTAlOyBcbiAgICBsZWZ0OiA1MCU7IC8vIHRvcDogNTAlIGFuZCBsZWZ0IDUwJSBtb3ZlcyB0aGUgY2hpbGQgZWxlbWVudCB0byB0aGUgY2VudGVyIG9mIGl0cyBwYXJlbnQgKGhvbWUtdmlldylcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLy8gY2VudGVycyB0aGUgY2VudGVyIG9mIGNoaWxkIGF0IHRoZSBjZW50ZXIgb2YgdGhlIHBhcmVudCBjb21wb25lbnRcbiAgICAqL1xuICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTsgLy8gc2V0cyBib3JkZXIgd2lkdGggYW5kIGNvbG9yIG9mIGRpdlxuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9uYWNvXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNDBweDsgLy8gY3JlYXRlcyBzcGFjZSBhcm91bmQgYW4gZWxlbWVudCdzIGNvbnRleHQgaW5zaWRlIG9mIHRoZSBkZWZpbmllZCBib3JkZXJzIFxuICAgIC8vIHBhZGRpbmctbGVmdCwgcGFkZGluZy1yaWdodCwgcGFkZGluZy1ib3R0b20gYW5kIHBhZGRpbmctbGVmdCBhcmUgcGFkZGluZ3MgZm9yIGVhY2ggc2lkZSBvZiBhbiBlbGVtZW50XG59XG5cblxuI3BhZ2UtaW50cm8ge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGhlaWdodDogNTB2aDsgLy8gb24gc21hbGxlciBzY3JlZW4gc2V0IGhlaWdodCB0byA3MHZoXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xufVxuXG4jdHJvcGh5LWRpdiB7XG4gICAgLy8gbmVlZCB0byByZXNpemUgYmFja2dyb3VuZC1pbWFnZVxuICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maW5hbHMtdHJvcGh5LXNtYWxsLnBuZ1wiKTtcbn1cblxuI3Ryb3BoeSB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbiNwYWdlLWRlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWJhc2lzOiA0MCU7XG4gICAgLypcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgKi9cbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbiNkZXNjLXRpdGxlIHtcbiAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjsgXG4gICBmb250LXNpemU6IDQwcHg7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuI3NlY29uZC1pbWFnZS1kaXYge1xuICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgXG4gICAgI3BhZ2UtaW50cm8ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgIGhlaWdodDogNzB2aDsgLy8gb24gc21hbGxlciBzY3JlZW4gc2V0IGhlaWdodCB0byA3MHZoXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbHVtbi1nYXA6IDMwcHg7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4119:
/*!*********************************************************!*\
  !*** ./src/app/view/navigation/navigation.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 8128);
var _class;




class NavigationComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  // goTo() will take the location and use the Router class navigateByUrl() function to load the URL with the location
  // location will match the path of the Routes defined in app-routing.module.ts
  goTo(location) {
    console.log(location);
    this.router.navigateByUrl(location);
  }
}
_class = NavigationComponent;
_class.ɵfac = function NavigationComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-navigation"]],
  inputs: {
    title: "title"
  },
  decls: 29,
  vars: 3,
  consts: [["id", "header"], ["id", "header-left"], ["id", "title"], ["id", "NBA-Logo", "src", "../assets/images/nba-logo_2x.png", "width", "80px", "onclick", "window.location ='https://www.sportingnews.com/ca/nba?gr=www'"], ["id", "sub-pages"], ["mat-button", "", "id", "sub-page", 3, "click"], ["mat-button", "", "id", "sub-page", 3, "matMenuTriggerFor"], ["teamsmenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["playersmenu", "matMenu"], ["awardsmenu", "matMenu"], ["id", "header-right"]],
  template: function NavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NBA Encyclopedia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_6_listener() {
        return ctx.goTo("home-page");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Teams");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_12_listener() {
        return ctx.goTo("teams-list");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "NBA Teams");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_14_listener() {
        return ctx.goTo("teams-map");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Map of NBA Teams");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Players");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-menu", null, 9)(20, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_20_listener() {
        return ctx.goTo("players");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Build Your Own Roster");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Awards");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", null, 10)(26, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_26_listener() {
        return ctx.goTo("awards");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View NBA Awards");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger],
  styles: ["#header[_ngcontent-%COMP%] {\n  height: 50px;\n  background: black;\n  display: flex;\n  padding: 30px 300px 30px 50px;\n}\n\n#header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n#title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n  font-family: \"Courier New\";\n}\n\n#NBA-Logo[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n  transition: transform 0.3s ease-in-out;\n}\n\n#NBA-Logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n\n#sub-pages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n#sub-page[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 60px;\n  font-size: 20px;\n  font-family: \"Inter\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBRUkscUJBQUE7RUFDQSxzQ0FBQTtBQUZKOztBQUtBO0VBQ0kscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwMHB4IDMwcHggNTBweDtcbn1cblxuI2hlYWRlci1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIHRoaXMgd2lsbCBjZW50ZXIgdGhlIGNoaWxkIGVsZW1lbnRzIGhvcml6b250YWxseVxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8vIHRoaXMgd2lsbCBjZW50ZXIgdGhlIGNoaWxkIGVsZW1lbnRzIHZlcnRpY2FsbHlcbn1cblxuI3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiXG59XG5cbiNOQkEtTG9nbyB7XG4gICAgLy9tYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI05CQS1Mb2dvOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbiNzdWItcGFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3N1Yi1wYWdlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 2628:
/*!***************************************************!*\
  !*** ./src/app/view/players/players.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayersComponent: () => (/* binding */ PlayersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class PlayersComponent {}
_class = PlayersComponent;
_class.ɵfac = function PlayersComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-players"]],
  decls: 2,
  vars: 0,
  template: function PlayersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "players works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2227:
/*!***************************************************************!*\
  !*** ./src/app/view/teams/teams-list/teams-list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamsListComponent: () => (/* binding */ TeamsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TeamsListComponent {}
_class = TeamsListComponent;
_class.ɵfac = function TeamsListComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-teams-list"]],
  decls: 48,
  vars: 0,
  consts: [["id", "NBA-teams"], ["id", "teams-table"], ["id", "eastern-conference-title"], ["id", "conference-title-container"], ["id", "conference-image-container"], ["id", "conference-image", "src", "../../../assets/images/eastern-conference.jpg"], ["id", "conference-title"], ["id", "conference-teams"], ["id", "division-container"], ["id", "division-title-container"], ["id", "division"], ["id", "division-teams-container"], ["id", "division-team-info"], ["id", "team-logo", "src", "../../../assets/images/boston-celtics.png"], ["id", "team-name", "href", "https://www.nba.com/celtics"], ["id", "team-location"], ["id", "team-name", "href", "https://www.nba.com/nets"], ["id", "western-conference-title"], ["id", "conference-image", "src", "../../../assets/images/western-conference.webp"]],
  template: function TeamsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eastern Conference");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Atlantic Division");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Boston Celtics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Boston, MA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Brooklyn Nets");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Brooklyn, NY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12)(27, "div", 12)(28, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8)(30, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Central Division");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8)(33, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Southeast Division");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17)(36, "div", 3)(37, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Western Conference");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7)(42, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Northwest Division");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pacific Division");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Southwest Division");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["#NBA-teams[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 120vh;\n}\n\n#teams-table[_ngcontent-%COMP%] {\n  display: flex;\n  width: 60%;\n  height: 90%;\n  border: 2px solid black;\n}\n\n#eastern-conference-title[_ngcontent-%COMP%], #western-conference-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  height: 100%;\n}\n\n#eastern-conference-title[_ngcontent-%COMP%] {\n  border-right: 2px dashed black;\n}\n\n#conference-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid black;\n  position: relative;\n}\n\n#conference-title[_ngcontent-%COMP%] {\n  padding-top: 5%;\n  padding-bottom: 5%;\n  font-size: 20px;\n  font-family: \"Franklin Gothic Medium\", Arial, sans-serif;\n}\n\n#conference-image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15%;\n}\n\n#conference-teams[_ngcontent-%COMP%] {\n  padding-top: 5%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#division-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35%;\n}\n\n#division-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#division[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n#division-teams-container[_ngcontent-%COMP%] {\n  padding: 2% 0;\n  display: flex;\n  flex-direction: column;\n}\n\n#division-team-info[_ngcontent-%COMP%] {\n  display: flex;\n  column-gap: 10%;\n  justify-content: center;\n  align-items: center;\n}\n\n#team-logo[_ngcontent-%COMP%] {\n  max-width: 50px;\n  height: auto;\n}\n\n#team-name[_ngcontent-%COMP%], #team-location[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlldy90ZWFtcy90ZWFtcy1saXN0L3RlYW1zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3REFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIjTkJBLXRlYW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTIwdmg7XG59XG5cbiN0ZWFtcy10YWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jZWFzdGVybi1jb25mZXJlbmNlLXRpdGxlLCAjd2VzdGVybi1jb25mZXJlbmNlLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNlYXN0ZXJuLWNvbmZlcmVuY2UtdGl0bGUge1xuICAgIGJvcmRlci1yaWdodDogMnB4IGRhc2hlZCBibGFjaztcbn1cblxuI2NvbmZlcmVuY2UtdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbmZlcmVuY2UtdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbiNjb25mZXJlbmNlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE1JTtcbn1cblxuI2NvbmZlcmVuY2UtdGVhbXMge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZGl2aXNpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMzUlO1xufVxuXG4jZGl2aXNpb24tdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNkaXZpc2lvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jZGl2aXNpb24tdGVhbXMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyJSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2RpdmlzaW9uLXRlYW0taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3RlYW0tbG9nbyB7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuI3RlYW0tbmFtZSwgI3RlYW0tbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 9553:
/*!*************************************************************!*\
  !*** ./src/app/view/teams/teams-map/teams-map.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamsMapComponent: () => (/* binding */ TeamsMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TeamsMapComponent {}
_class = TeamsMapComponent;
_class.ɵfac = function TeamsMapComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-teams-map"]],
  decls: 2,
  vars: 0,
  template: function TeamsMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "teams-map works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6576), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map