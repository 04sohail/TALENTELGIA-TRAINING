class UserApiService {
    API_URL: string = "http://localhost:3000";
    API_URL_USERS: string = "http://localhost:3000/users"
    API_URL_FAVOURITE: string = "http://localhost:3000/favourites"
    WEATHER_API_KEY: string = "492893deed7dcba52a4ea95768802f3a";
    // GET SINGLE USER
    async GetSingleUser(endPoint: string): Promise<Object[] | undefined> {
        try {
            const API_response = await fetch(`${this.API_URL_USERS}?${endPoint}`);
            if (API_response.ok) {
            }
            const user: Object[] = await API_response.json();
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };
    // GET SINGLE USER
    async GetSingleUserFavourite(endPoint: string): Promise<SingleFav[] | undefined> {
        try {
            const API_response = await fetch(`${this.API_URL_FAVOURITE}?${endPoint}`);
            const user: SingleFav[] = await API_response.json();
            if (API_response.ok) {
            }
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };
    // GET COORDS FROM CITY
    async getCoords(city: string): Promise<City[]> {
        const API_RESPONSE = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=492893deed7dcba52a4ea95768802f3a`)
        return API_RESPONSE.json()
    }
    // POSTING USER TO API 
    async PostUser(user: any, endPoint: string | null): Promise<void> {
        try {
            const API_RESPONSE: Response = await fetch(`${this.API_URL}/${endPoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (API_RESPONSE.ok) {
            }
        } catch (error) {
            console.error(error);
        }
    };
    // POSTING FAV TO API 
    async PostFavourite(favouriteList: any): Promise<void> {
        try {
            const API_RESPONSE: Response = await fetch(`${this.API_URL_FAVOURITE}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    favouriteList
                ),
            });
            if (API_RESPONSE.ok) {
            }
        } catch (error) {
            console.error(error);
        }
    };
    // DELETING USER
    async DeleteUser(id: number): Promise<void> {
        try {
            const API_RESPONSE: Response = await fetch(`${this.API_URL_USERS}/${id}`, {
                method: "delete"
            })
            if (API_RESPONSE.ok) {
                window.FlashMessage.success('User Account Deleted Successfully', { type: 'success', timeout: 2000 });
            }
        } catch {
            console.error("User Id Not Found")
        }
    }
    // PATCHING USER TO API //
    async PatchUser(user: PatchUser, endPoint: string) {
        try {
            const API_RESPONSE = await fetch(`${this.API_URL_USERS}/${endPoint}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "first_name": user.first_name,
                    "last_name": user.last_name
                }),
            });
            if (API_RESPONSE.ok) {
            }
        } catch (error) {
            console.error(error);
        }
    };
    // PATCHING FAVOURITE TO API //
    async PatchFavourite(favourites: { city: string | undefined; coordinates: number[] }, endPoint: string) {
        try {
            const user: SingleFav[] | undefined = await this.GetSingleUserFavourite(`id=${endPoint}`)
            if (user) {
                const updatedFavourites = user[0].favourites
                updatedFavourites.push(favourites)
                // Send PATCH request
                const patchResponse = await fetch(`${this.API_URL_FAVOURITE}/${endPoint}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ favourites: updatedFavourites }),
                });
            }
        } catch (error) {
            console.error("Error adding to favouriteList:", error);
        }
    }
    // REMOVING FAVOURITE TO API //
    async RemovingFavourite(updatedFavourites: SingleFav[] | [], endPoint: string) {
        try {
            const patchResponse = await fetch(`${this.API_URL_FAVOURITE}/${endPoint}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ favourites: updatedFavourites }),
            });
            if (patchResponse.ok) {
            }
        } catch (error) {
            console.error("Error adding to favouriteList:", error);
        }
    }
}

// GETTING USER LOCATION //
class UserLocation extends UserApiService {
    // GETTING CURRENT COORDINATES //
    public async getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
        if (!navigator.geolocation) {
            throw new Error("Geolocation is not supported by your browser.");
        }
        try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, (error) => {
                    reject(new Error(`Failed to retrieve location: ${error.message}`));
                });
            });
            const { latitude, longitude } = position.coords;
            return { latitude, longitude };
        } catch (error) {
            throw error;
        } finally {
        }
    }

    // GETTING CITY FROM COORDINATES //
    async getCityFromCoords(lat: number, lon: number): Promise<string | undefined> {
        const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${this.WEATHER_API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.length > 0) {
                const city = data[0].name;
                return city;
            } else {
                throw new Error("City not found");
            }
        } catch (error) {
            console.error("Error fetching city:", error);
            // return "Error fetching city";
        }
    };
}

class Weather extends UserApiService {

    // CURRENT WEATHER //
    async GetWeather(lat: number, lon: number,): Promise<JSON | undefined> {
        try {
            const API_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.WEATHER_API_KEY}`);
            if (API_response.ok) {
            }
            const weather: JSON = await API_response.json();
            return weather;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    // GET 5 DAYS FORECAST 
    async GetFiveDayForecast(lat: number, lon: number): Promise<WeatherForecast | undefined> {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.WEATHER_API_KEY}`
        try {
            const API_response = await fetch(url);
            if (API_response.ok) {
            }
            const weather: WeatherForecast = await API_response.json();
            return weather;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };
}


// FETCH LATITUDE AND LONGITUDE FROM LOCATION NAME
class getLatAndLon extends UserApiService {
    // FUNCTION TO FETCH LATITUDE AND LONGITUDE FROM LOCATION NAME
    async getLatLonFromLocation(locationName: string): Promise<{ latitude: number; longitude: number } | null> {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(locationName)}&limit=1&appid=${this.WEATHER_API_KEY}`;
        try {
            const response = await fetch(url);
            const data: GeoLocation[] = await response.json();
            if (data && data.length > 0) {
                const { lat, lon } = data[0]; // EXTRACT LATITUDE AND LONGITUDE
                return { latitude: lat, longitude: lon };
            } else {
                throw new Error("Location not found!");
            }
        } catch (error) {
            console.error("Error fetching geocoding data:", (error as Error).message);
            return null;
        }
    }
}

class GetTime extends UserApiService {
    TIME_API_URL = `https://api.api-ninjas.com/v1/worldtime`
    X_API_KEY = "nC9N3oXZhbpKFkOV2bP3Wg==9a2a0FjFY6Bwuvp8"
    GetTime = async (lat: number, lon: number) => {
        const RESPONSE = await fetch(`${this.TIME_API_URL}/?lat=${lat}&lon=${lon}`, {
            headers: { 'X-Api-Key': 'nC9N3oXZhbpKFkOV2bP3Wg==9a2a0FjFY6Bwuvp8' }
        })
        if (RESPONSE) {
            const time = await RESPONSE.json()
            return time
        }
        else {
            console.log("Error while fetching");
        }
    }
}