webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"wrapper\">\n        <div class=\"row col-md-3 sidebar\" data-color='red' data-image=\"\">\n            <app-sidebar></app-sidebar>\n            <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n        </div>\n        <div class=\"main-panel row col-md-9\">\n            <div class=\"navBar\">\n            <app-navbar></app-navbar>\n            </div>\n            <hr>\n            <div class=\"col-md-12\">\n            <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__history_history_list_component__ = __webpack_require__("./src/app/history/history-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subscription_subscription_component__ = __webpack_require__("./src/app/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__liked_liked_component__ = __webpack_require__("./src/app/liked/liked.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__watch_later_watch_later_component__ = __webpack_require__("./src/app/watch-later/watch-later.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__watch_later_youtube_service__ = __webpack_require__("./src/app/watch-later/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__trending_trending_component__ = __webpack_require__("./src/app/trending/trending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__history_history_component__ = __webpack_require__("./src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__music_music_component__ = __webpack_require__("./src/app/music/music.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__history_history_list_component__["a" /* HistoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__subscription_subscription_component__["a" /* SubscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__liked_liked_component__["a" /* LikedComponent */],
                __WEBPACK_IMPORTED_MODULE_14__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__watch_later_watch_later_component__["a" /* WatchLaterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__trending_trending_component__["a" /* TrendingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__music_music_component__["a" /* MusicComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__watch_later_youtube_service__["a" /* youTubeApiService */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trending_trending_component__ = __webpack_require__("./src/app/trending/trending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__history_history_list_component__ = __webpack_require__("./src/app/history/history-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subscription_subscription_component__ = __webpack_require__("./src/app/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__liked_liked_component__ = __webpack_require__("./src/app/liked/liked.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__watch_later_watch_later_component__ = __webpack_require__("./src/app/watch-later/watch-later.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__history_history_component__ = __webpack_require__("./src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__music_music_component__ = __webpack_require__("./src/app/music/music.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_15__history_history_component__["a" /* HistoryComponent */] },
    { path: 'best of youtube', component: __WEBPACK_IMPORTED_MODULE_16__music_music_component__["a" /* MusicComponent */] },
    //{ path: 'best of youtube',          component: MusicComponent },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_12__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'trending', component: __WEBPACK_IMPORTED_MODULE_5__trending_trending_component__["a" /* TrendingComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'history-list', component: __WEBPACK_IMPORTED_MODULE_7__history_history_list_component__["a" /* HistoryListComponent */] },
    { path: 'subscription', component: __WEBPACK_IMPORTED_MODULE_8__subscription_subscription_component__["a" /* SubscriptionComponent */] },
    { path: 'liked', component: __WEBPACK_IMPORTED_MODULE_9__liked_liked_component__["a" /* LikedComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_11__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'watchlater', component: __WEBPACK_IMPORTED_MODULE_10__watch_later_watch_later_component__["a" /* WatchLaterComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_12__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_13__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--footer>\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a>Chandrakanth Verlapally</a>, made with love for a better web\n        </p>\n    </div>\n</footer-->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "nav{\r\n    height: 100px;\r\n    width: 100%;\r\n\r\n}\r\n.navbar-nav{\r\n    float: right;\r\n    padding-right: 20px;\r\n}\r\nimg{\r\n    border-radius: 50%;\r\n    height: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n         <div class=\"collapse navbar-collapse\">\n                <div class=\"col-md-6\">\n                        <div class=\"input-group\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"search\" #search1=\"ngModel\" name=\"search1\" (change)=\"onSearchChange(search)\"/>\n                          <span class=\"input-group-btn\">\n                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"searchResults(search)\">Go!</button>\n                              </span>\n                        </div>\n                </div>\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">2</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">You have 5 new notifications</a></li>\n                        <li><a href=\"#\">You're now friend with Chandrakanth</a></li>\n                    </ul>\n                </li>\n                \n                        <li class=\"dropdown pull-left\">\n                                <a href=\"#\" class=\"dropdown-toggle pull-left\" data-toggle=\"dropdown\">\n                                        <i class=\"material-icons\">person</i>\n                                </a>\n                                <ul class=\"dropdown-menu\">\n                                    <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Login</a></li>\n                                    <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal1\">New User? Sign Up</a></li>\n                                </ul>\n                            </li>\n                            <li><img src=\"{{img}}\"></li>\n                          \n            </ul>\n        </div>\n    </div>\n</nav>\n<br><br><br><br>\n<app-dashboard [searchVideos]=\"newVideo\"></app-dashboard>\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog modal-md\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Modal Header</h4>\n            </div>\n            <div class=\"modal-body\">\n                    <form class=\"form-horizontal\" action=\"/action_page.php\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"user.email\" name=\"email\">\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\n                          <div class=\"col-sm-10\"> \n                            <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" [(ngModel)]=\"user.password\" name=\"password\">\n                          </div>\n                        </div>\n                        <div class=\"form-group\"> \n                          <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button type=\"submit\" class=\"btn btn-default\" (click)=\"validate(user)\">Submit</button>\n                            <button type=\"submit\" class=\"btn btn-danger\">Cancel</button>\n                          </div>\n                        </div>\n                      </form>\n                      \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal fade\" id=\"myModal1\" role=\"dialog\">\n        <div class=\"modal-dialog modal-md\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Sign Up</h4>\n            </div>\n            <div class=\"modal-body\">\n                    <form class=\"form-horizontal\" action=\"/action_page.php\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" [(ngModel)]=\"storeData.email\" name=\"email\">\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\n                          <div class=\"col-sm-10\"> \n                            <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" [(ngModel)]=\"storeData.password\" name=\"password\">\n                          </div>\n                        </div>\n                        <div class=\"form-group\"> \n                          <div class=\"col-sm-offset-2 col-sm-10\">\n                            <button type=\"submit\" class=\"btn btn-default\" (click)=\"saveData(storeData)\">Save Data</button>\n                            <button type=\"submit\" class=\"btn btn-danger\">Cancel</button>\n                          </div>\n                        </div>\n                      </form>\n                      \n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watch_later_youtube_service__ = __webpack_require__("./src/app/watch-later/youtube.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(compiler, element, appService, cookieService) {
        var _this = this;
        this.compiler = compiler;
        this.element = element;
        this.appService = appService;
        this.cookieService = cookieService;
        this.searchData = [];
        this.videoTitle = [];
        this.itemList = [];
        this.newVideo = [];
        this.user = [];
        this.isValid = false;
        this.userData = [];
        this.storeData = [];
        this.userInfo = [];
        this.userImg = [];
        this.searchItem = "Web Development";
        this.compiler.clearCache();
        this.appService.getLatestNews().subscribe(function (list) {
            _this.userInfo = list;
            _this.userInfo.items.map(function (el) {
                _this.img = el.snippet.thumbnails.default.url;
            });
        });
        this.appService.getSearchResults(this.searchItem).subscribe(function (data) {
            _this.searchData = data;
        });
        this.appService.getUserData().subscribe(function (userInfo) {
            _this.userData = userInfo;
        });
    }
    NavbarComponent.prototype.validate = function (user) {
        var _this = this;
        this.userData.map(function (element) {
            if (element.email == user.email && element.password == user.password) {
                _this.userName = element.name;
                _this.isValid = true;
                sessionStorage.setItem("username", element.name);
                window.location.reload();
            }
        });
        if (!this.isValid) {
            console.log("Login failed");
        }
    };
    NavbarComponent.prototype.searchResults = function (searchItem) {
        var _this = this;
        console.log(this.searchData);
        this.newVideo = [];
        this.videoTitle = [];
        var res = this.appService.getSearchResults(searchItem).subscribe(function (data) {
            _this.searchData = data;
            console.log(_this.searchData);
            _this.videoTitle = _this.searchData.items.map(function (obj) { return obj.id.videoId; });
            var url = 'https://www.youtube.com/embed/';
            for (var index = 0; index < _this.videoTitle.length; index++) {
                _this.newVideo.push(url + _this.videoTitle[index]);
            }
        });
    };
    NavbarComponent.prototype.onSearchChange = function (search) {
        this.newVideo = [];
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.getTitle = function () {
        return 'Dashboard';
    };
    NavbarComponent.prototype.saveData = function (storeData) {
        console.log(storeData);
        this.cookieService.put(storeData, "Data");
        alert(this.cookieService.get(storeData.name));
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__watch_later_youtube_service__["a" /* youTubeApiService */], __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "a{\r\n    text-decoration: none;\r\n    font-size:16px;\r\n}\r\nli{\r\n    list-style-type: none;\r\n}\r\nh5{\r\n    padding-left: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a class=\"simple-text\">\n        {{title}}\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <form class=\"navbar-form navbar-right\" role=\"search\">\n        <div class=\"form-group form-black is-empty\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <ul class=\"nav nav-mobile-menu\">\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">dashboard</i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">2</span>\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">You have 2 new notifications</a></li>\n                <li><a href=\"#\">You're now friend with Chandrakanth</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n               <i class=\"material-icons\">person</i>\n               <p class=\"hidden-lg hidden-md\">Profile</p>\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"nav-container\" *ngIf=\"!menuItems\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <span class=\"{{menuItem.icon}}\">&nbsp;{{menuItem.title}}\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let user of youTubeUser\">\n                <a  [routerLink]=\"[user.path]\">\n                    <span class=\"{{user.icon}}\">&nbsp;{{user.title}}\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <hr>\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <h5>Library</h5>\n            <li *ngFor=\"let menu of menuItems\">\n                <a  [routerLink]=\"[menu.path]\">\n                    <span class=\"{{menu.icon}}\">&nbsp;{{menu.title}}\n                    </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__watch_later_youtube_service__ = __webpack_require__("./src/app/watch-later/youtube.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(titleService) {
        var _this = this;
        this.titleService = titleService;
        this.menuItems = [
            { path: 'subscription', title: 'Subscriptions', icon: 'glyphicon glyphicon-hdd' },
            { path: 'watchlater', title: 'Watch Later', icon: 'glyphicon glyphicon-time' },
            { path: 'liked', title: 'Liked Videos', icon: 'glyphicon glyphicon-thumbs-up' },
            { path: 'favorites', title: 'Favorites', icon: 'glyphicon glyphicon-bell' }
        ];
        this.youTubeUser = [
            { path: 'home', title: 'Home', subLi: [], icon: 'glyphicon glyphicon-home' },
            { path: 'trending', title: 'Trending', subLi: [], icon: 'glyphicon glyphicon-tint' },
            { path: 'history', title: 'History', subLi: [], icon: 'glyphicon glyphicon-repeat' }
        ];
        this.newTitle = [];
        this.favData = [];
        this.titleService.getLatestNews().subscribe(function (data) {
            _this.newTitle = data;
            console.log(_this.newTitle);
            _this.newTitle.items.map(function (element) {
                _this.title = element.snippet.title;
            });
        });
        this.titleService.getFavoritesList().subscribe(function (list) {
            _this.favData = list;
        });
    }
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.title = sessionStorage.getItem("username");
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__watch_later_youtube_service__["a" /* youTubeApiService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" *ngFor=\"let data of searchVideos\">\n    <iframe [src]=\"getEmbedURL(data)\" width=\"350\" height=\"150\" frameborder=\"0\" allowfullscreen>\n        <span *ngFor=\"let title of url\">\n            {{title}}\n        </span>\n    </iframe>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.searchVideos = [];
    }
    DashboardComponent.prototype.getEmbedURL = function (data) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "searchVideos", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/history/history-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history-list.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryListComponent = /** @class */ (function () {
    function HistoryListComponent(zone) {
        this.zone = zone;
    }
    HistoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history-list',
            template: __webpack_require__("./src/app/history/history-list.component.html"),
            styles: [__webpack_require__("./src/app/history/history-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], HistoryListComponent);
    return HistoryListComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  history works!\n</p>\n"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history',
            template: __webpack_require__("./src/app/history/history.component.html"),
            styles: [__webpack_require__("./src/app/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb col-md-12\">\n    <li class=\"breadcrumb-item active\">Music</li>\n  </ol>\n<div class=\"col-md-12\">\n  <div class=\"col-md-3\" *ngFor=\"let item of getLatestMusicData | paginate: { itemsPerPage: 4, currentPage: p}\">\n      <iframe [src]=\"getEmbedURL(item)\" width=\"210\" height=\"120\" frameborder=\"0\" allowfullscreen>\n        </iframe>\n  </div>\n  <div class=\"col-md-2\"></div>\n</div>\n<pagination-controls (pageChange)=\"p=$event\"></pagination-controls>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "ol {\n  background-color: #f44336;\n  margin-top: -25px; }\n\nli {\n  color: #fff; }\n\n.col-md-3 {\n  width: 22%; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__watch_later_youtube_service__ = __webpack_require__("./src/app/watch-later/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(latestDataApi, newsApi, sanitizer) {
        var _this = this;
        this.latestDataApi = latestDataApi;
        this.newsApi = newsApi;
        this.sanitizer = sanitizer;
        this.getData = [];
        this.getVideoId = [];
        this.getLatestMusicData = [];
        this.subscribeList = [];
        this.subscribeChannelData = [];
        this.channelId = [];
        this.channelPlayList = [];
        this.channelList = [];
        this.newsData = [];
        this.latestDataApi.getDefaultData().subscribe(function (data) {
            _this.getData = data;
            _this.getData.items.map(function (element) {
                var url = 'https://www.youtube.com/embed/';
                _this.getVideoId.push(element.contentDetails.bulletin.resourceId.videoId);
                _this.getLatestMusicData.push(url + element.contentDetails.bulletin.resourceId.videoId);
            });
        });
        /*  this.latestDataApi.getName().subscribe(data=>{
            this.title =data;
            console.log("title" +data);
        });*/
        this.newsApi.getSubscriptionList().subscribe(function (info) {
            _this.subscribeList = info;
            console.log(_this.subscribeList);
            _this.subscribeList.items.map(function (e) {
                _this.subscribeChannelData.push(e.snippet);
                _this.subscribeChannelData.map(function (i) {
                    _this.channelId.push(i.resourceId.channelId);
                    _this.channelId.map(function (a) {
                        _this.newsApi.getChannelData(a).subscribe(function (q) {
                            _this.channelPlayList = q;
                        });
                    });
                });
            });
        });
        /*      this.latestDataApi.getChannelData().subscribe(channels =>{
                this.channelList = channels;
                console.log(this.channelList);
              })*/
    }
    HomeComponent.prototype.getEmbedURL = function (item) {
        this.curUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item);
        return this.curUrl;
    };
    HomeComponent.prototype.getiFrameURL = function (data) {
        this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data);
        return this.currentUrl;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__watch_later_youtube_service__["a" /* youTubeApiService */], __WEBPACK_IMPORTED_MODULE_1__watch_later_youtube_service__["a" /* youTubeApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/liked/liked.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/liked/liked.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div class=\"main-content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card card-plain\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Liked Videos</h4>\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"iframe-container hidden-sm hidden-xs\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div-->\n"

/***/ }),

/***/ "./src/app/liked/liked.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikedComponent = /** @class */ (function () {
    function LikedComponent() {
    }
    LikedComponent.prototype.ngOnInit = function () {
    };
    LikedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-liked',
            template: __webpack_require__("./src/app/liked/liked.component.html"),
            styles: [__webpack_require__("./src/app/liked/liked.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LikedComponent);
    return LikedComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  music works!\n</p>\n"

/***/ }),

/***/ "./src/app/music/music.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-music',
            template: __webpack_require__("./src/app/music/music.component.html"),
            styles: [__webpack_require__("./src/app/music/music.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/subscription/subscription.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subscription/subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" *ngFor=\"let title of subscribeChannelTitles\">\r\n     <h5>{{title}}</h5>\r\n</div>\r\n<!--div class=\"col-md-12\" *ngFor=\"let logo of subscribechannelLogo\">\r\n    <img src=\"{{logo}}\" width=\"300px\">\r\n</div-->\r\n<div class=\"col-md-12\">\r\n    <div class=\"col-md-3\" *ngFor=\"let item of getVideos | paginate: { itemsPerPage: 8, currentPage: p}\">\r\n        <iframe [src]=\"getEmbedURL(item)\" width=\"210\" height=\"120\" frameborder=\"0\" allowfullscreen>\r\n          </iframe>\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n  <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>"

/***/ }),

/***/ "./src/app/subscription/subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watch_later_youtube_service__ = __webpack_require__("./src/app/watch-later/youtube.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(subscriptionService, sanitizer) {
        var _this = this;
        this.subscriptionService = subscriptionService;
        this.sanitizer = sanitizer;
        this.subscribeList = [];
        this.subscribeChannels = [];
        this.subscribeChannelTitles = [];
        this.subscribechannelLogo = [];
        this.subscribeChannelId = [];
        this.playListItems = [];
        this.playListId = [];
        this.getVideoId = [];
        this.getVideos = [];
        this.subscriptionService.getSubscriptionList().subscribe(function (info) {
            _this.subscribeList = info;
            console.log(typeof (info));
            _this.subscribeList.items.map(function (ele) {
                _this.subscribeChannels.push(ele.snippet.resourceId.channelId);
                _this.subscribeChannelTitles.push(ele.snippet.title);
                _this.subscribeChannelId.push(ele.snippet.resourceId.channelId);
                _this.subscriptionService.getPlayList(ele.snippet.resourceId.channelId).subscribe(function (data) {
                    _this.playListItems = data;
                    _this.playListItems.items.map(function (item) {
                        _this.playListId.push(item.id);
                        _this.subscriptionService.getSubscriptionVideoList(item.id).subscribe(function (list) {
                            _this.getVideoList = list;
                            _this.getVideoList.items.map(function (q) {
                                var url = 'https://www.youtube.com/embed/';
                                _this.getVideos.push(url + q.snippet.resourceId.videoId);
                            });
                        });
                    });
                });
            });
            /*      this.subscribechannelLogo =ele.snippet.thumbnails;*/
        });
    }
    SubscriptionComponent.prototype.getEmbedURL = function (item) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(item);
    };
    SubscriptionComponent.prototype.getiFrameURL = function (data) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(data);
    };
    SubscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__("./src/app/subscription/subscription.component.html"),
            styles: [__webpack_require__("./src/app/subscription/subscription.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__watch_later_youtube_service__["a" /* youTubeApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/trending/trending.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-3\" *ngFor=\"let data of getLatestTrendingData | paginate: { itemsPerPage: 4, currentPage: p}\">\n  <iframe [src]=\"getEmbedURL(data)\" width=\"200\" height=\"110\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n  <div class=\"row col-md-8\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-8\">{{title}}</div>\n  </div>\n  <!--<ngb-pagination [collectionSize]=\"30\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n  -->\n</div>\n<pagination-controls (pageChange)=\"p=$event\"></pagination-controls>"

/***/ }),

/***/ "./src/app/trending/trending.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #f44336; }\n\na {\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/trending/trending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watch_later_youtube_service__ = __webpack_require__("./src/app/watch-later/youtube.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrendingComponent = /** @class */ (function () {
    function TrendingComponent(trendingAppService, sanitizer) {
        var _this = this;
        this.trendingAppService = trendingAppService;
        this.sanitizer = sanitizer;
        this.trendingNowData = [];
        this.getLatestTrendingData = [];
        this.getVideoTitle = [];
        this.newData = [];
        this.trendingVideoContentData = [];
        this.getVideoId = [];
        this.trendingAppService.getTrendingVideos().subscribe(function (items) {
            _this.trendingNowData = items;
            _this.trendingNowData.items.map(function (element) {
                var url = 'https://www.youtube.com/embed/';
                _this.getVideoId.push(element.id);
                _this.trendingAppService.getTrendingVideosContent(element.id).subscribe(function (lists) {
                    _this.trendingVideoContentData = lists;
                    _this.trendingVideoContentData.items.map(function (e) {
                        _this.getVideoTitle.push(e.snippet.title);
                        console.log("Description" + e.snippet.description);
                    });
                });
                console.log(_this.getVideoId);
                _this.getLatestTrendingData.push(url + element.id);
            });
        });
    }
    TrendingComponent.prototype.ngOnInit = function () {
    };
    TrendingComponent.prototype.getEmbedURL = function (data) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(data);
    };
    TrendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trending',
            template: __webpack_require__("./src/app/trending/trending.component.html"),
            styles: [__webpack_require__("./src/app/trending/trending.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__watch_later_youtube_service__["a" /* youTubeApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], TrendingComponent);
    return TrendingComponent;
}());



/***/ }),

/***/ "./src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">MUSIC PRO</h4>\n                        <p class=\"category\">Are you looking for more music? Please check our Premium Version of Music Pro.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <!--tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Music, Ve, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $49</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody-->\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"margin-top: 0px; padding: 0px, 10px;\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Edit Profile</h4>\n                    <p class=\"category\">Complete your profile</p>\n                </div>\n                <div class=\"card-content\">\n                    <form>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Company (disabled)</label>\n                                    <input type=\"text\" class=\"form-control\" disabled>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Username</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Email address</label>\n                                    <input type=\"email\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Fist Name</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Last Name</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Adress</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">City</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Country</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Postal Code</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label>About Me</label>\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\"></label>\n                                        <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                    <a href=\"#pablo\">\n                        <img class=\"img\" src=\"../assets/img/faces/Chandu.jpg\" />\n                    </a>\n                </div>\n\n                <div class=\"content\">\n                    <h4 class=\"card-title\">Chandrakanth Verlapally</h4>\n                   \n                    <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/watch-later/watch-later.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    </div>\n\n"

/***/ }),

/***/ "./src/app/watch-later/watch-later.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/watch-later/watch-later.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchLaterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { DomSanitizer, MediaStorageService } from '@angular/platform-browser';
var WatchLaterComponent = /** @class */ (function () {
    function WatchLaterComponent() {
    }
    WatchLaterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-watch-later',
            template: __webpack_require__("./src/app/watch-later/watch-later.component.html"),
            styles: [__webpack_require__("./src/app/watch-later/watch-later.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WatchLaterComponent);
    return WatchLaterComponent;
}());



/***/ }),

/***/ "./src/app/watch-later/youtube.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return youTubeApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var youTubeApiService = /** @class */ (function () {
    function youTubeApiService(http) {
        this.http = http;
        this.maxResults = '10';
        this.contentDetails = 'part=snippet';
        this.playList = 'UUX_uPA_dGf7wXjuMEaSKLJA';
        this.part = 'snippet';
        this.q = "Web Design";
        this.query = "music";
        this.type = "video";
        this.regionCode = 'US';
        this.totalResults = '25';
        this.totalChannelResults = '50';
        this.subscribe = 'UCbn1OgGei-DV7aSRo_HaAiw';
        this.key = 'AIzaSyBnT5pK9Qh9Vem16D7IQ9VoKE4z-6aihgk';
        this.trendingApiKey = 'AIzaSyBLGqg5XhluNwF7umrLjkLsYU0kLpHReQk';
        this.getData = [];
        this.favList = "FLtdTBFhHOlA94eir1d_zWvQ";
    }
    youTubeApiService.prototype.getVideo = function () {
        return this.http.get("https://www.googleapis.com/youtube/v3/search " + this.part + "/" + this.q + "/" + this.key);
    };
    youTubeApiService.prototype.getSearchResults = function (searchResults) {
        this.q = searchResults;
        return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchResults + "&type=" + this.type + "&maxResults=" + this.maxResults + "&key=" + this.key);
    };
    youTubeApiService.prototype.getSearchSuggestion = function (searchResults) {
        this.q = searchResults;
        return this.http.get("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + this.q);
    };
    youTubeApiService.prototype.getTrendingVideos = function () {
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=" + this.regionCode + "&maxResults=" + this.maxResults + "&key=" + this.trendingApiKey);
    };
    youTubeApiService.prototype.getTrendingVideosContent = function (videoId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=" + this.part + "%2CcontentDetails%2Cstatistics&id=" + videoId + "&key=" + this.trendingApiKey);
    };
    youTubeApiService.prototype.getUserData = function () {
        return this.http.get("../../assets/api/users.json");
    };
    youTubeApiService.prototype.getLatestNews = function () {
        return this.http.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCtdTBFhHOlA94eir1d_zWvQ&key=" + this.key);
    };
    youTubeApiService.prototype.getDefaultData = function () {
        return this.http.get("https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC-9-kyTW8ZkZNDHQJ6FgpwQ&maxResults=" + this.totalResults + "&key=" + this.key);
    };
    youTubeApiService.prototype.getSubscriptionList = function () {
        return this.http.get("https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCtdTBFhHOlA94eir1d_zWvQ&key=" + this.key);
    };
    youTubeApiService.prototype.getChannelData = function (a) {
        return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=" + a + "&maxResults=" + this.totalChannelResults + "&key=" + this.key);
    };
    youTubeApiService.prototype.getFavoritesList = function () {
        return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=" + this.part + "%2CcontentDetails&maxResults=25&playlistId=" + this.favList + "&key=" + this.key);
    };
    youTubeApiService.prototype.getPlayList = function (channelId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=" + this.part + "%2CcontentDetails&channelId=" + channelId + "&maxResults=50&key=" + this.key);
    };
    youTubeApiService.prototype.getSubscriptionVideoList = function (playListId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=" + this.part + "%2CcontentDetails&maxResults=5&playlistId=" + playListId + "&key=" + this.key);
    };
    youTubeApiService.prototype.getSubscribeVideos = function (videoId) {
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=" + this.part + "%2CcontentDetails%2Cstatistics&id=" + videoId + "&key=" + this.key);
    };
    youTubeApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], youTubeApiService);
    return youTubeApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map