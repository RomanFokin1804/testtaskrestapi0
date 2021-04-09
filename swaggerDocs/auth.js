/**
   * @swagger
   * /api/auth/signup:
   *  post:
   *    tags: ['Auth']
   *    summary: "Registration in the system"
   *    description: Use to registration in the system.
   *    requestBody:
   *       description: email or phone and password.
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *                 description: Email or phone.
   *               password:
   *                 type: string
   *                 description: Password.
   *             required:
   *               - id
   *               - password
   *    parameters:
   *    - name: id
   *      description: Email or phone.
   *      in: formData
   *      required: true
   *      type: string
   *    - name: password
   *      description: Password.
   *      in: formData
   *      required: true
   *      type: string
   *    responses:
   *      '200':
   *        description: A successful response, user logged in. Returns access and refresh tokens.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                id:
   *                  type: string
   *                  description: Email or phone.
   *                accessToken:
   *                  type: string
   *                  description: Access token.
   *                refreshToken:
   *                  type: string
   *                  description: Refresh token.
   *      '400':
   *        description: Registration failed.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Description of error.
   */

/**
   * @swagger
   * /api/auth/signin:
   *  post:
   *    tags: ['Auth']
   *    summary: "Login to the system"
   *    description: Use to login to the system.
   *    requestBody:
   *       description: email or phone and password.
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *                 description: Email or phone.
   *               password:
   *                 type: string
   *                 description: Password.
   *             required:
   *               - id
   *               - password
   *    parameters:
   *    - name: id
   *      description: Email or phone.
   *      in: formData
   *      required: true
   *      type: string
   *    - name: password
   *      description: Password.
   *      in: formData
   *      required: true
   *      type: string
   *    responses:
   *      '200':
   *        description: A successful response, user logged in. Returns access and refresh tokens.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                accessToken:
   *                  type: string
   *                  description: Access token.
   *                refreshToken:
   *                  type: string
   *                  description: Refresh token.
   *      '400':
   *        description: Authorization failed.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Description of error.
   */

/**
   * @swagger
   * /api/auth/signin/new_token:
   *  post:
   *    tags: ['Auth']
   *    summary: "Replace user access token and refresh token."
   *    description: Use to replace user access token and refresh token.
   *    requestBody:
   *       description: User refresh token.
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               refreshToken:
   *                 type: string
   *                 description: Refresh token.
   *             required:
   *               - refreshToken
   *    parameters:
   *    - name: refreshToken
   *      description: Refresh token.
   *      in: formData
   *      required: true
   *      type: string
   *    responses:
   *      '200':
   *        description: A successful response, tokens replaced.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                accessToken:
   *                  type: string
   *                  description: Access token.
   *                refreshToken:
   *                  type: string
   *                  description: Refresh token.
   *      '400':
   *        description: Incorrect parameters in the request.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Description of error.
   */

/**
   * @swagger
   * /api/auth/logout:
   *  get:
   *    security:
   *      - bearerAuth: []
   *    tags: ['Auth']
   *    summary: "Logout from the system."
   *    description: Use to logout from the system.
   *    responses:
   *      '200':
   *        description: A successful response, user logout from the system.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Status of operations.
   *      '400':
   *        description: Incorrect parameters in the request.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                status:
   *                  type: boolean
   *                  description: Status of operations.
   *                message:
   *                  type: string
   *                  description: Description of error.
   */
