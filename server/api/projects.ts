import { projectsData } from "../data/projectsData";

export default defineEventHandler(async (event) => {
  return Response.json(projectsData);
})
