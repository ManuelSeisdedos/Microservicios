import getPlanets from "./getPlanets.js";
import createPlanets from "./createPlanets.js";
import catchAsync from "../utils/catchAsync.js";
import getOnePlanet from "./getOnePlanet.js";

export default  {
    getOnePlanet: catchAsync(getOnePlanet),
    getPlanets: catchAsync(getPlanets),
    createPlanets: catchAsync(createPlanets)
}