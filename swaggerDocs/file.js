/**
   * @swagger
   * /api/file/:id:
   *  get:
   *    security:
   *      - bearerAuth: []
   *    tags: ['File']
   *    summary: "Information about the selected file."
   *    description: Used to getting information about the selected file.
   *    parameters:
   *    - in: query
   *      name: id
   *      required: true
   *      schema:
   *        type: string
   *      description: User email or phone.
   *    responses:
   *      '200':
   *        description: A successful response.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                uId:
   *                  type: string
   *                  description: Id of user, who made the change.
   *                name:
   *                  type: string
   *                  description: Name of file.
   *                extenstion:
   *                  type: string
   *                  description: File extension.
   *                mimeType:
   *                  type: string
   *                  description: File MIME type.
   *                size:
   *                  type: string
   *                  description: File size.
   *                dateUpload:
   *                  type: string
   *                  description: Date of file upload.
   *                path:
   *                  type: string
   *                  description: File path.
   *      '400':
   *        description: Incorrect parameters in the request.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Result of operation.
   *                message:
   *                  type: string
   *                  description: Description of the error.
   *      '401':
   *        description: Access token is missing or invalid.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Unauthorized.
   */

/**
   * @swagger
   * /api/file/list:
   *  get:
   *    security:
   *      - bearerAuth: []
   *    tags: ['File']
   *    summary: "Show all uploaded files."
   *    description: Used for show all uploaded files with pagination.
   *    parameters:
   *    - in: query
   *      name: page
   *      required: true
   *      schema:
   *        type: string
   *      description: Number of page.
   *    - in: query
   *      name: list_size
   *      required: true
   *      schema:
   *        type: string
   *      description: Size of list.
   *    responses:
   *      '200':
   *        description: A successful response.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                count:
   *                  type: integer
   *                  description: Count of all uploads item.
   *                next:
   *                  type: string
   *                  description: Link on next page. If it last page, return null.
   *                previous:
   *                  type: string
   *                  description: Link on previous page. If it first page, return null.
   *                rows:
   *                  type: array
   *                  items:
   *                    type: object
   *                    properties:
   *                      uId:
   *                        type: string
   *                        description: Id of user, who made the change.
   *                      name:
   *                        type: string
   *                        description: Name of file.
   *                      extenstion:
   *                        type: string
   *                        description: File extension.
   *                      mimeType:
   *                        type: string
   *                        description: File MIME type.
   *                      size:
   *                        type: string
   *                        description: File size.
   *                      dateUpload:
   *                        type: string
   *                        description: Date of file upload.
   *                      path:
   *                        type: string
   *                        description: File path.
   *                  description: List item
   *      '401':
   *        description: Access token is missing or invalid.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Unauthorized.
   */

/**
   * @swagger
   * /api/file/download/:id:
   *  get:
   *    security:
   *      - bearerAuth: []
   *    tags: ['File']
   *    summary: "Download file by its id in the database."
   *    description: Used to download file by its id in the database.
   *    parameters:
   *    - in: query
   *      name: id
   *      required: true
   *      schema:
   *        type: string
   *      description: User email or phone.
   *    responses:
   *      '200':
   *        description: A successful response.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                file:
   *                  type: string
   *                  format: binary
   *                  description: File.
   *      '400':
   *        description: Incorrect parameters in the request.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Result of operation.
   *                message:
   *                  type: string
   *                  description: Description of the error.
   *      '401':
   *        description: Access token is missing or invalid.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Unauthorized.
   */

/**
   * @swagger
   * /api/file/upload:
   *  post:
   *    security:
   *      - bearerAuth: []
   *    tags: ['File']
   *    summary: "Upload new file to database"
   *    description: Use to upload new file.
   *    requestBody:
   *       description: File.
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               file:
   *                 type: string
   *                 format: binary
   *                 description: File.
   *             required:
   *               - file
   *    parameters:
   *    - name: file
   *      description: New file.
   *      in: formData
   *      required: true
   *      type: string
   *    responses:
   *      '200':
   *        description: A successful response, file added to database.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Data is successfully added to the database.
   *      '400':
   *        description: Incorrect parameters in the request.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: An error occurred when adding data to the database
   *                message:
   *                  type: string
   *                  description: Description of error.
   *      '401':
   *        description: Access token is missing or invalid.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Unauthorized.
   */

/**
   * @swagger
   * /api/file/updated/:id:
   *  put:
   *    security:
   *      - bearerAuth: []
   *    tags: ['File']
   *    summary: "Updated file in database"
   *    description: Use to updated file.
   *    requestBody:
   *       description: File.
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               file:
   *                 type: string
   *                 format: binary
   *                 description: File.
   *             required:
   *               - file
   *    parameters:
   *    - name: file
   *      description: File.
   *      in: formData
   *      required: true
   *      type: string
   *    responses:
   *      '200':
   *        description: A successful response, file updated in database.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Data is successfully updated in the database.
   *      '400':
   *        description: Incorrect parameters in the request.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: An error occurred when adding data to the database
   *                message:
   *                  type: string
   *                  description: Description of error.
   *      '401':
   *        description: Access token is missing or invalid.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Unauthorized.
   */

/**
   * @swagger
   * /api/file/delete/:id:
   *  delete:
   *    security:
   *      - bearerAuth: []
   *    tags: ['File']
   *    summary: "Delete file from database"
   *    description: Use to delete file from database.
   *    parameters:
   *    - in: query
   *      name: id
   *      required: true
   *      schema:
   *        type: string
   *      description: File id.
   *    responses:
   *      '200':
   *        description: A successful response.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Operation success, file removed.
   *      '400':
   *        description: Incorrect parameters in the request.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Operations status.
   *                message:
   *                  type: string
   *                  description: Description of the error.
   *      '401':
   *        description: Access token is missing or invalid.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Unauthorized.
   */
