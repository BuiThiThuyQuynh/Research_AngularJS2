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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var contact_service_1 = require('../services/contact.service');
var ContactDetailComponent = (function () {
    function ContactDetailComponent(contactService, route, location) {
        this.contactService = contactService;
        this.route = route;
        this.location = location;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.contactService.getContact(id)
                .then(function (contact) { return _this.contact = contact; });
        });
    };
    ContactDetailComponent.prototype.save = function () {
        var _this = this;
        this.contact.name = this.contact.name.trim();
        this.contact.phone = this.contact.phone.trim();
        if (!this.contact.name || !this.contact.phone) {
            return;
        }
        else {
            this.contactService.update(this.contact)
                .then(function () { return _this.goBack(); });
        }
    };
    ContactDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ContactDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-detail',
            templateUrl: 'contact-detail.component.html',
            styleUrls: ['contact-detail.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.ActivatedRoute, common_1.Location])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map