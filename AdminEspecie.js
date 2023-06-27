//import { PrismaClient } from '@prisma/client'
const { PrismaClient } =require('@prisma/client');


class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }


   async crearEspecie(req, res){

    const datos=req.body;
    console.log("estos son los datos que estoy recibiendo" + datos);
    const especie= await this.prisma.especie.create(
        {
            data:datos
            
        }
    )

    }
    listarEspecie(req, res){

    }
}
module.exports=AdminEspecie;