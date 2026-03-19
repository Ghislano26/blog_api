import {prisma} from '../lib/prisma'
import { HttpCode } from '../core/constant'
import { v4 as uuidv4 } from 'uuid'



const blogControllers = {
    // Creation du blog par la methode POST

    createBlog: async(req:any, res:any)=>{
       try {
            const {date, ...rest} = req.body;
            const formateDate = new Date(date);

            const {titre, auteur, contenu, categorie} = req.body
        // on verifie ici si un champs obligatoire est manquant lors de la creation du blog

            if (!titre || !auteur || !contenu){
                return res.status(HttpCode.BAD_REQUEST).json({message:'Champs obliagtoires non renseigné'})
            }

            const PostBlog = await prisma.blog.create({
                data: {
                    id: uuidv4(),
                    titre,
                    auteur,
                    contenu,
                    categorie,
                    ...rest,
                    date: formateDate
                }
            })

            if(!PostBlog){
                return res.status(HttpCode.NO_CONTENT).json({message: 'imapossible de creer le blog'})
            }else{
                return res.status(HttpCode.CREATED).json({message:'Ajout reussi', PostBlog})
            }
        
       } catch (error) {
            console.log(error)
       }
    },

    // Recuperation des blog dans la base via GET

    getBlog : async(req:any, res:any)=>{
        try {
            const blogList = await prisma.blog.findMany()

            if(!blogList){
                return res.status(HttpCode.NO_CONTENT).json({message: 'impossible de charger les articles'})
            }
            return res.status(HttpCode.CREATED).json(blogList)
        } catch (error) {
            console.log(error)
        }
    },

    // Recuperation d'un article specifique en fonction de son id

    getBlogId : async (req:any, res:any)=>{
        const { id } = req.params

        try {
            const blogById = await prisma.blog.findUnique({
                where:{
                    id
                }
            })
            if(!blogById){
                return res.status(HttpCode.NOT_FOUND).json({message: 'impossible trouver un article avec cette id'})
            }
            return res.status(HttpCode.CREATED).json(blogById)

        } catch (error) {
            console.log(error);
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: 'erreur serveur'})
        }
    },

    // Mise a jour d'un article via la methode PUT

    updateBlog : async (req:any, res:any)=>{
        const {id} = req.params
        const {titre, auteur, contenu, categorie} = req.body

        try {
            const updateblog = await prisma.blog.update({
                where:{
                    id
                },
                data:{
                    titre, auteur, contenu,categorie
                }
            })
            return res.status(HttpCode.OK).json({message: 'Modifications effectue avec success', updateblog})

        } catch (error) {
            console.log(error);
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: 'erreur serveur'})     
        }
    },

    // Suppression d'un article via la methode DELETE

    deleteBlog : async (req:any, res:any)=>{
        const {id} = req.params

        try {
            const deleteblog = await prisma.blog.delete({
                where:{id}
            })
            return res.status(HttpCode.OK).json({message: 'Suppression effectue avec success'})
        } catch (error) {
            console.log(error);
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: 'erreur serveur'})
        }
    },

    // Recherche d'un blog en fonction d'un texte donne

    searchBlog : async (req:any, res:any)=>{

        const {q} = req.query
        try {
            const searchblog = await prisma.blog.findMany({
                where:{
                    OR:[
                        {titre : {contains: q}},
                        {contenu : {contains: q}}
                    ]
                }
            })

            return res.status(HttpCode.OK).json(searchblog)

        } catch (error) {
            console.log(error);
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: 'erreur serveur'})
        }
    }

}


export default blogControllers