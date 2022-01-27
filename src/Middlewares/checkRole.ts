import { User } from "../Models/User";

export const checkAdmin = async (req, res, next) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'admin') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
        next()
    }
};

export const checkCustomer = async (req, res, next) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'terminal') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
        next()
    }
};
export const checkKitchen = async (req, res, next) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role != 'kitchen') {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
    else {
        next()
    }
};

export const checkAdminKitchen = async (req, res, next) => {
    let user = await User.findOne({where: { 
        // @ts-ignore
        id: req.user.id 
    }})
    if (user.role == 'kitchen' || user.role == 'admin') {
        next()
        
    }
    else {
        res.json({status : 403, data: "Vous n'avez pas l'autorisation"})
    }
};