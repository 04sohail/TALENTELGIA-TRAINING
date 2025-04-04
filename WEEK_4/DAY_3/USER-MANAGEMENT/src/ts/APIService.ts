class APIService {
    API_URL: string = "http://localhost:3000";
    API_URL_USERS : string = "http://localhost:3000/users"
    LOADING_SCREEN: HTMLElement = document.querySelector(".fullScreen") as HTMLElement;
    // GETTING USERS FROM API //
    async GetUser(endPoint: string): Promise<User[] | undefined> {
        try {
            this.LOADING_SCREEN.style.display = "block";
            const API_response = await fetch(`${this.API_URL}/${endPoint}`);
            if (API_response.ok) {
                this.LOADING_SCREEN.style.display = "none";
            }
            const users: User[] = await API_response.json();
            return users;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };
    // POSTING USER TO API 
    async PostUser(endPoint: string | null, user: User): Promise<void> {
        try {
            console.log("INSIDE POST USER");
            this.LOADING_SCREEN.style.display = "block";
            const API_RESPONSE: Response = await fetch(`${this.API_URL_USERS}/${endPoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (API_RESPONSE.ok) {
                this.LOADING_SCREEN.style.display = "none";
            }
        } catch (error) {
            console.error(error);
        }
    };
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
    async DeleteUser(endPoint: string) {
        try {
            this.LOADING_SCREEN.style.display = "block";
            const API_RESPONSE = await fetch(`${this.API_URL}/${endPoint}`, {
                method: "DELETE",
            });
            if (API_RESPONSE.ok) {
                this.LOADING_SCREEN.style.display = "none";
            }
        } catch (error) {
            console.error(error);
        }
    };
}