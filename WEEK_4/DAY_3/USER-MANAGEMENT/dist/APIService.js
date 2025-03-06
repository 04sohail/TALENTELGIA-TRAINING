"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class APIService {
    constructor() {
        this.API_URL = "http://localhost:3000";
        this.API_URL_USERS = "http://localhost:3000/users";
        this.LOADING_SCREEN = document.querySelector(".fullScreen");
    }
    // GETTING USERS FROM API //
    GetUser(endPoint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.LOADING_SCREEN.style.display = "block";
                const API_response = yield fetch(`${this.API_URL}/${endPoint}`);
                if (API_response.ok) {
                    this.LOADING_SCREEN.style.display = "none";
                }
                const users = yield API_response.json();
                return users;
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
    ;
    // POSTING USER TO API 
    PostUser(endPoint, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("INSIDE POST USER");
                this.LOADING_SCREEN.style.display = "block";
                const API_RESPONSE = yield fetch(`${this.API_URL_USERS}/${endPoint}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });
                if (API_RESPONSE.ok) {
                    this.LOADING_SCREEN.style.display = "none";
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    ;
    // // PATCHING USER TO API //
    // async PatchUser(user: User) {
    //     try {
    //         this.LOADING_SCREEN.style.display = "block";
    //         const API_RESPONSE = await fetch(`${this.API_URL}/${this.ENDPOINT}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(user),
    //         });
    //         if (API_RESPONSE.ok) {
    //             this.LOADING_SCREEN.style.display = "none";
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // DELETING USER FROM API //
    DeleteUser(endPoint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.LOADING_SCREEN.style.display = "block";
                const API_RESPONSE = yield fetch(`${this.API_URL}/${endPoint}`, {
                    method: "DELETE",
                });
                if (API_RESPONSE.ok) {
                    this.LOADING_SCREEN.style.display = "none";
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    ;
}
