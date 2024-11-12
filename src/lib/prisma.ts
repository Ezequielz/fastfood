import { PrismaClient } from "@prisma/client"



const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare global {
    // eslint-disable-next-line no-var
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma


// Este código implementa un patrón para evitar múltiples instancias de PrismaClient en un entorno de desarrollo, reduciendo conexiones innecesarias a la base de datos. La instancia de PrismaClient se guarda en una variable global y se reutiliza durante todo el ciclo de vida de la aplicación.