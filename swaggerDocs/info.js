/**
   * @swagger
   * /api/info:
   *  get:
   *    security:
   *      - bearerAuth: []
   *    tags: ['Info']
   *    summary: "Verify user existence."
   *    description: Use to verify user existence.
   *    responses:
   *      '200':
   *        description: A successful response, user existence.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                id:
   *                  type: string
   *                  description: User email or phone.
   *      '400':
   *        description: User not existence.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                message:
   *                  type: string
   *                  description: Description of the error.
   */
