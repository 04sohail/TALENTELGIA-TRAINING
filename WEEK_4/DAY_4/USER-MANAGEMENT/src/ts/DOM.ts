class DOM {
    HEADERS: string[] = ["ID", "NAME", "EMAIL", "PHONE", "ADDRESS", "COMPANY-NAME", "ROLE", "COMPANY-WEBSITE", "ACTION"]
    TABLE_HEAD = document.getElementById("tableHead") as HTMLTableSectionElement
    TABLE_BODY = document.getElementById("tableBody") as HTMLTableElement
    TABLE = document.querySelector(".no-user") as HTMLTableElement;
    SAVING_ID: null | string | undefined = null
    EDIT_USER: HTMLInputElement[] = Array.from(document.getElementsByClassName("editUser")) as HTMLInputElement[]
    constructor() {
        this.SAVING_ID = null
    }

    RenderHeader(): void {
        const headerRow = document.createElement('tr')
        this.HEADERS.forEach(h => {
            const header = this.CreateHeader(h)
            headerRow.innerHTML += header
        })
        this.TABLE_HEAD.appendChild(headerRow)
    }
    CreateHeader(header: string): string {
        return `<th>${header}</th>`
    }

    async RenderData(API_RESPONSE: Object | null, hide?: string): Promise<void> {
        const users = await API_RESPONSE as User[]
        let slno = 1

        if (hide) {
            if (!API_RESPONSE) {
                this.TABLE.innerHTML =
                    "<div><div>--------------------------------------------------------------</div><h3>Sorry There Are No Users</h3><div>--------------------------------------------------------------</div><div>";
            } else {
                this.TABLE_BODY.innerHTML = "";
                users.forEach((user) => {
                    if (user.company.role !== hide) {
                        const userRow = `<tr id="row-${user.id}">
                                      <td>${slno}</td>
                                      <td>${user.first_name + " " + user.last_name}</td>
                                      <td>${user.email}</td>
                                      <td>+91-${user.phone}</td>
                                      <td>${user.address.hnumber +
                            "," +
                            user.address.street +
                            "," +
                            user.address.city +
                            "," +
                            user.address.pincode
                            }</td>
                                      <td>${user.company.companyname}</td>
                                      <td>${user.company.role}</td>
                                      <td><a href="${user.company.companywebsite
                            }" target="_blank">${user.company.companywebsite
                            }</a></td>
                                      <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" id="edit-${user.id
                            }">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete deleteUserEvent" data-toggle="modal"><i class="material-icons" id="delete-${user.id
                            }" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                      </td>     
                                </tr>`;
                        this.TABLE_BODY.innerHTML += userRow;
                    }
                    slno += 1
                });

                users.forEach((user) => {
                    if (user.company.role !== hide) {
                        const editBtn = document.getElementById(`edit-${user.id}`) as HTMLAnchorElement;
                        const dltBtn = document.getElementById(`delete-${user.id}`) as HTMLAnchorElement;
                        editBtn.addEventListener("click", () => this.EditUser(user.id))
                        dltBtn.addEventListener("click", () => this.DeleteUser(user.id))
                    }
                });
                slno = 1
            }
        } else {
            this.TABLE_BODY.innerHTML = "";
            users.forEach((user) => {
                if (user.company.role !== hide) {
                    const userRow = `<tr id="row-${user.id}">
                                  <td>${slno}</td>
                                  <td>${user.first_name + " " + user.last_name}</td>
                                  <td>${user.email}</td>
                                  <td>+91-${user.phone}</td>
                                  <td>${user.address.hnumber +
                        "," +
                        user.address.street +
                        "," +
                        user.address.city +
                        "," +
                        user.address.pincode
                        }</td>
                                  <td>${user.company.companyname}</td>
                                  <td>${user.company.role}</td>
                                  <td><a href="${user.company.companywebsite
                        }" target="_blank">${user.company.companywebsite
                        }</a></td>
                                  <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" id="edit-${user.id
                        }">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" class="delete deleteUserEvent" data-toggle="modal"><i class="material-icons" id="delete-${user.id
                        }" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                  </td>     
                            </tr>`;
                    this.TABLE_BODY.innerHTML += userRow;
                }
                slno += 1
            });
            users.forEach((user) => {
                const editBtn = document.getElementById(`edit-${user.id}`) as HTMLAnchorElement;
                const dltBtn = document.getElementById(`delete-${user.id}`) as HTMLAnchorElement;
                editBtn.addEventListener("click", () => this.EditUser(user.id))
                dltBtn.addEventListener("click", () => this.DeleteUser(user.id))
            });
            slno = 1
        }
    }
    async EditUser(id: string | null | undefined): Promise<void> {
        this.SAVING_ID = id
        const user: User = await APIInstance.GetUser(`users/${id}`) as User
        this.EDIT_USER[0].value = user.first_name;
        this.EDIT_USER[1].value = user.last_name;
        this.EDIT_USER[2].value = user.email;
        this.EDIT_USER[3].value = user.phone;
        this.EDIT_USER[4].value = user.address.hnumber;
        this.EDIT_USER[5].value = user.address.street;
        this.EDIT_USER[6].value = user.address.city;
        this.EDIT_USER[7].value = user.address.pincode;
        this.EDIT_USER[8].value = user.company.companyname;
        this.EDIT_USER[9].value = user.company.companywebsite;
        this.EDIT_USER[10].value = user.company.role
    }
    async UpdateUser(event: Event): Promise<void> {
        event.preventDefault();
        console.log("INSIDE UPDATE USER");
        console.log(editFields);
        const user: User = {
            first_name: editFields[0].value,
            last_name: editFields[1].value,
            email: editFields[2].value,
            phone: editFields[3].value,
            address: {
                hnumber: editFields[4].value,
                street: editFields[5].value,
                city: editFields[6].value,
                pincode: editFields[7].value,
            },
            company: {
                companyname: editFields[8].value,
                companywebsite: editFields[9].value,
                role: editFields[10].value,
            },
        };
        console.log(user);

        if (ValidateUpdateEmptyField() && ValidateUpdateRegex()) {
            console.log("INSIDE VALIDATION UPDATE");
            APIInstance.PatchUser(user, `${this.SAVING_ID}`);
            DOMInstance.RenderData(API_response);
        } else {
            console.log("VALIDATION FAILED");
        }
    }
    DeleteUser(id: string | null | undefined): void {
        this.SAVING_ID = id;
    }
    async HandleDelete(event: Event): Promise<void> {
        event.preventDefault()
        console.log("INSIDE HANDLE DLT");
        console.log(this.SAVING_ID);
        event.preventDefault()
        console.log(event);
        if (this.SAVING_ID) {
            console.log("INSIDE IF");
            APIInstance.DeleteUser(this.SAVING_ID);
        } else {
            console.error("SAVING_ID is null");
        }
    }
    async HandlePostUser(event: Event): Promise<void> {
        event.preventDefault();
        const user: User = {
            id: Date.now().toString(),
            first_name: addFields[0].value,
            last_name: addFields[1].value,
            email: addFields[2].value,
            phone: addFields[3].value,
            address: {
                hnumber: addFields[4].value,
                street: addFields[5].value,
                city: addFields[6].value,
                pincode: addFields[7].value,
            },
            company: {
                companyname: addFields[8].value,
                companywebsite: addFields[9].value,
                role: addFields[12].value,
            },
            password: addFields[10].value
        };
        if (ValidateAddEmptyField() && ValidateRegex() && await ValidateExists(user.email, user.phone)) {
            APIInstance.PostUser("users", user);
            DOMInstance.RenderData(API_response);
        } else {
            console.log("VALIDATION FAILED");
        }
    };
}
