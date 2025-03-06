class DOM {
    HEADERS: string[] = ["ID", "NAME", "EMAIL", "PHONE", "ADDRESS", "COMPANY-NAME", "ROLE", "COMPANY-WEBSITE", "ACTION"]
    TABLE_HEAD = document.getElementById("tableHead") as HTMLTableSectionElement
    TABLE_BODY = document.getElementById("tableBody") as HTMLTableElement
    TABLE = document.querySelector(".no-user") as HTMLTableElement;
    SAVING_ID: null | string = null
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
                        const userRow = `<tr>
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
                        editBtn.addEventListener("click", () => this.editUser(user.id))
                        dltBtn.addEventListener("click", () => this.deleteID(user.id))
                    }
                });
                slno = 1
            }
        } else {
            this.TABLE_BODY.innerHTML = "";
            users.forEach((user) => {
                if (user.company.role !== hide) {
                    const userRow = `<tr>
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
                editBtn.addEventListener("click", () => this.editUser(user.id))
                dltBtn.addEventListener("click", () => this.deleteID(user.id))
            });
            slno = 1
        }
    }
    editUser(id: string) {
        this.SAVING_ID = id
        console.log(this.SAVING_ID);
        
    }
    deleteID(id: string) {
        this.SAVING_ID = id
    }
}
