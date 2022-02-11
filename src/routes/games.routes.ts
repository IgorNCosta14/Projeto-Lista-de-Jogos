import { Router } from "express";

import { createGameController } from "../lists/usecases/createGame";
import { deleteGameController } from "../lists/usecases/deleteGame";
import { listGamesController } from "../lists/usecases/listGame";
import { updateGameController } from "../lists/usecases/updateGame";

const gamesRoutes = Router();

gamesRoutes.post("/", (request, response) =>{
    return createGameController.handle(request, response);
});

gamesRoutes.get("/", (request, response) =>{
    return listGamesController.handle(request, response);
});

gamesRoutes.put("/:id", (request, response) =>{
    return updateGameController.handle(request, response);
});

gamesRoutes.delete("/:id", (request, response) =>{
    return deleteGameController.handle(request, response);
});

export { gamesRoutes };