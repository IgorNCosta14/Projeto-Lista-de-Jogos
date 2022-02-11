import { Router } from "express"

import { createAuthorController } from "../lists/usecases/createAuthor";
import { deleteAuthorUseController } from "../lists/usecases/deleteAuthor";
import { listAuthorsController } from "../lists/usecases/listAuthors";
import { updateAuthorController } from "../lists/usecases/updateAuthor";

const authorsRoutes = Router();

authorsRoutes.post ("/", (request, response) => {
    return createAuthorController.handle(request, response);
})

authorsRoutes.put ("/:id", (request, response) => {
    return updateAuthorController.handle(request, response);
})

authorsRoutes.get ("/", (request, response) => {
    return listAuthorsController.handle(request, response);
})

authorsRoutes.delete ("/:id", (request, response) => {
    return deleteAuthorUseController.handle(request, response)
})

export { authorsRoutes };

