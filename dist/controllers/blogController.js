"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
const constant_1 = require("../core/constant");
const uuid_1 = require("uuid");
const blogControllers = {
    // Creation du blog par la methode POST
    createBlog: async (req, res) => {
        try {
            const { date, ...rest } = req.body;
            const formateDate = new Date(date);
            const { titre, auteur, contenu, categorie } = req.body;
            // on verifie ici si un champs obligatoire est manquant lors de la creation du blog
            if (!titre || !auteur || !contenu) {
                return res.status(constant_1.HttpCode.BAD_REQUEST).json({ message: 'Champs obliagtoires non renseigné' });
            }
            const PostBlog = await prisma_1.prisma.blog.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    titre,
                    auteur,
                    contenu,
                    categorie,
                    ...rest,
                    date: formateDate
                }
            });
            if (!PostBlog) {
                return res.status(constant_1.HttpCode.NO_CONTENT).json({ message: 'imapossible de creer le blog' });
            }
            else {
                return res.status(constant_1.HttpCode.CREATED).json({ message: 'Ajout reussi', PostBlog });
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    // Recuperation des blog dans la base via GET
    getBlog: async (req, res) => {
        try {
            const blogList = await prisma_1.prisma.blog.findMany();
            if (!blogList) {
                return res.status(constant_1.HttpCode.NO_CONTENT).json({ message: 'impossible de charger les articles' });
            }
            return res.status(constant_1.HttpCode.CREATED).json(blogList);
        }
        catch (error) {
            console.log(error);
        }
    },
    // Recuperation d'un article specifique en fonction de son id
    getBlogId: async (req, res) => {
        const { id } = req.params;
        try {
            const blogById = await prisma_1.prisma.blog.findUnique({
                where: {
                    id
                }
            });
            if (!blogById) {
                return res.status(constant_1.HttpCode.NOT_FOUND).json({ message: 'impossible trouver un article avec cette id' });
            }
            return res.status(constant_1.HttpCode.CREATED).json(blogById);
        }
        catch (error) {
            console.log(error);
            res.status(constant_1.HttpCode.INTERNAL_SERVER_ERROR).json({ message: 'erreur serveur' });
        }
    },
    // Mise a jour d'un article via la methode PUT
    updateBlog: async (req, res) => {
        const { id } = req.params;
        const { titre, auteur, contenu, categorie } = req.body;
        try {
            const updateblog = await prisma_1.prisma.blog.update({
                where: {
                    id
                },
                data: {
                    titre, auteur, contenu, categorie
                }
            });
            return res.status(constant_1.HttpCode.OK).json({ message: 'Modifications effectue avec success', updateblog });
        }
        catch (error) {
            console.log(error);
            res.status(constant_1.HttpCode.INTERNAL_SERVER_ERROR).json({ message: 'erreur serveur' });
        }
    },
    // Suppression d'un article via la methode DELETE
    deleteBlog: async (req, res) => {
        const { id } = req.params;
        try {
            const deleteblog = await prisma_1.prisma.blog.delete({
                where: { id }
            });
            return res.status(constant_1.HttpCode.OK).json({ message: 'Suppression effectue avec success' });
        }
        catch (error) {
            console.log(error);
            res.status(constant_1.HttpCode.INTERNAL_SERVER_ERROR).json({ message: 'erreur serveur' });
        }
    },
    // Recherche d'un blog en fonction d'un texte donne
    searchBlog: async (req, res) => {
        const { q } = req.query;
        try {
            const searchblog = await prisma_1.prisma.blog.findMany({
                where: {
                    OR: [
                        { titre: { contains: q } },
                        { contenu: { contains: q } }
                    ]
                }
            });
            return res.status(constant_1.HttpCode.OK).json(searchblog);
        }
        catch (error) {
            console.log(error);
            res.status(constant_1.HttpCode.INTERNAL_SERVER_ERROR).json({ message: 'erreur serveur' });
        }
    }
};
exports.default = blogControllers;
//# sourceMappingURL=blogController.js.map