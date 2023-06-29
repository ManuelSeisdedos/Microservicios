import getFilms from "./getFilms.js";
import createFilms from "./createFilms.js";
import catchAsync from "../utils/catchAsync.js"
export default  {
    getFilms: catchAsync(getFilms),
    createFilms: catchAsync(createFilms)
}