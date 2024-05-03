import { testAnimeTileDetails } from "../data/animeData"

export default defineEventHandler(async (event) => {
  return Response.json(testAnimeTileDetails);
})
