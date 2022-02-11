import { Router } from "express";

import { createTagController } from "../lists/usecases/createTag";
import { listTagsController } from "../lists/usecases/listTags";
import { deleteTagController } from "../lists/usecases/deleteTag";
import { updateTagController } from "../lists/usecases/updateTag";

const tagsRoutes = Router();

tagsRoutes.post("/", (request, response) =>{
    return createTagController.hendle(request, response)
});

tagsRoutes.get("/", (request, response) => {
    return listTagsController.handle(request, response)
});

tagsRoutes.put("/:id", (request, response) => {
    return updateTagController.handle(request, response)
});

tagsRoutes.delete("/:id", (request, response) => {
    return deleteTagController.handle(request, response)
});

export { tagsRoutes };
