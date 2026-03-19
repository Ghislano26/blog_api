import { Router } from "express";
import blogControllers from "../controllers/blogController";


const router = Router();


const routes = {
   CREATE_BLOG : '/articles',
   GET_BLOG : '/articles',
   GET_BLOG_BY_ID : '/articles/:id',
   UPDATE_BLOG : '/articles/:id' ,
   DELETE_BLOG : '/articles/:id',
   SEARCH_BLOG : '/article/search'
}

/**
 * @swagger
 * /api/articles:
 *  post:
 *    summary: Créer un article
 *    tags: [Articles]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: objet
 *            properties:
 *              titre: 
 *                type: string
 *              contenu:
 *                type: string
 *              auteur:
 *                type: string
 *              categorie: 
 *                type: string
 *              date:
 *                type: string
 *                format: date-time
 *                example: "2026-03-19"
 *    response:
 *      201:
 *        description: Article crée avec succès
 *      400:
 *        description: Donnees invalides
 * 
 */
router.post(routes.CREATE_BLOG, blogControllers.createBlog)


/**
 * @swagger
 * /api/articles:
 *  get:
 *    summary: Récupérer tous les articles
 *    tags: [Articles]
 *    parameters:
 *      - in: query
 *        name: categorie
 *        schema:
 *          type: string
 *      - in: query
 *        name: auteur
 *        schema:
 *          type: string             
 *    response:
 *      200:
 *        description: Liste des articles
 * 
 */
router.get(routes.GET_BLOG, blogControllers.getBlog)


/**
 * @swagger
 * /api/articles/{id}:
 *  get:
 *    summary: Récupérer un artcile specifiques en fonction de son id
 *    tags: [Articles]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string              
 *    response:
 *      200:
 *        description: Article trouvé
 *      404:
 *        description: Article introuvable
 * 
 */
router.get(routes.GET_BLOG_BY_ID, blogControllers.getBlogId)



/**
 * @swagger
 * /api/articles/search:
 *  get:
 *    summary: Rechercher des artcles par un texte qui correspond au contenu ou au titre
 *    tags: [Articles]
 *    parameters:
 *      - in: query
 *        name: query
 *        required: true
 *        description: Texte à rechercher dans le titre ou le contenu
 *        schema:
 *         type: string             
 *    response:
 *      200:
 *        description: Liste de artcicles correspondant a votre recherche
 *      404:
 *        description: Un parametre de recherche manquant
 * 
 */
router.get(routes.SEARCH_BLOG, blogControllers.searchBlog)


/**
 * @swagger
 * /api/articles/{id}:
 *  put:
 *    summary: Modifier un article specifique
 *    tags: [Articles]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id de l'article a modifier
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: objet
 *            properties:
 *              titre: 
 *                type: string
 *              contenu:
 *                type: string
 *              categorie: 
 *                type: string
 *              date:
 *                type: string
 *                format: date-time
 *                example: "2026-03-19"  
 *    response:
 *      200:
 *        description: Article modifié avec succès
 *      404:
 *        description: Article introuvable
 *      400:
 *        description: Donnees invalides
 * 
 */
router.put(routes.UPDATE_BLOG, blogControllers.updateBlog)


/**
 * @swagger
 * /api/articles/{id}:
 *  delete:
 *    summary: Supprimer un artcles
 *    tags: [Articles]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id de l'article à supprimer
 *        schema:
 *         type: string             
 *    response:
 *      200:
 *        description: Artcicles supprimé avec succeès
 *      404:
 *        description: Article non trouvé
 * 
 */
router.delete(routes.DELETE_BLOG, blogControllers.deleteBlog)



export default router