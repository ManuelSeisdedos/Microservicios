import getPlanets from "./getPlanets.js";
import createPlanets from "./createPlanets.js";
import catchAsync from "../utils/catchAsync.js";

export default  {
    getPlanets: catchAsync(getPlanets),
    createPlanets: catchAsync(createPlanets)
}