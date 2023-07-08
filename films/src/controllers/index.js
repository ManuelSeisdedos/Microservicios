import getFilms from "./getFilms.js";
import getOneFilm from "./getOneFilm.js";
import createFilms from "./createFilms.js";
import catchAsync from "../utils/catchAsync.js"

export default  {
    getOneFilm: catchAsync(getOneFilm),
    getFilms: catchAsync(getFilms),
    createFilms: catchAsync(createFilms)
}