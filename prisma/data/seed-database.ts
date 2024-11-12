// https://api-mcd-ecommerce-ar.appmcdonalds.com/catalog/menu/lite

interface SeedCategory {
    name: string;
    slug: string;
    imageUrl: string;
    active: boolean;
}

interface SeedProduct {
    category: string;
    name: string;
    identifier: string;
    imageUrl: string;
    description: string;
    price: number

}
interface SeedData {
    categories: SeedCategory[],
    products: SeedProduct[]
}

export const initialData: SeedData = {
    categories :[
        {
          name: "Promociones",
          slug: "promociones",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_promociones_v3.png",
          active: true
        },
        {
          name: "McCombos",
          slug: "mccombos",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Mccombos_v3.png",
          active: true
        },
        {
          name: "Cajita Feliz",
          slug: "cajita feliz",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Cajitafeliz_v1.png",
          active: true
        },
        {
          name: "Hamburguesas",
          slug: "hamburguesas",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Hamburguesas_v3.png",
          active: true
        },
        {
          name: "McNuggets",
          slug: "mcnuggets",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Mcnuggets_v1.png",
          active: true
        },
        {
          name: "Ensaladas",
          slug: "ensaladas",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Ensaladas_v1.png",
          active: true
        },
        {
          name: "Exclusivo AutoMac",
          slug: "exclusivo automac",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Exclusivoautomac_v1.png",
          active: true
        },
        {
          name: "Para acompañar",
          slug: "para acompañar",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Paraacompa%C3%B1ar_v1.png",
          active: true
        },
        {
          name: "Postres",
          slug: "postres",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Postres_v3.png",
          active: true
        },
        {
          name: "Bebidas",
          slug: "bebidas",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_bebidas_v3.png",
          active: true
        },
        {
          name: "Productos Sin TACC",
          slug: "productos sin tacc",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_Sintacc_v1.png",
          active: true
        },
        {
          name: "Menúes McCafé",
          slug: "menúes mccafé",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_McCafecombos_v1.png",
          active: true
        },
        {
          name: "Bebidas McCafé",
          slug: "bebidas mccafé",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_BebidasMcCafeFull_v1.png",
          active: true
        },
        {
          name: "Comida McCafé",
          slug: "comida mccafé",
          imageUrl: "https://cache-mcd-ecommerce.appmcdonalds.com/images/AR/category/DLV_McCafecomida_v1.png",
          active: true
        }
      ],
    products: [
        {
          category: "promociones",
          name: "20OFF Menú F1 Doble Cuarto de libra Mediano",
          identifier: "2718",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2718_12nov24.png",
          description: "Hamburguesa doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1045000
        },
        {
          category: "promociones",
          name: "25 OFF Menú F1 CM Cuarto y Menú F1 CM Doble Cuart",
          identifier: "2724",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2724_12nov24.png",
          description: "Hamburguesa doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1830000
        },
        {
          category: "promociones",
          name: "20 OFF McCombo Mediano Grand Tasty Doble",
          identifier: "48512",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48512_04nov24.png",
          description: "20 OFF McCombo Mediano Grand Tasty Doble",
          price: 1100000
        },
        {
          category: "promociones",
          name: "20 OFF CM Bacon Cheddar McMelt",
          identifier: "48235",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48235_v6.png",
          description: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con abundante queso cheddar, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sésamo! Acompañamiento y bebida mediana a elección",
          price: 960000
        },
        {
          category: "promociones",
          name: "20 OFF Cuarto de Libra + Bebida Mediana",
          identifier: "2602",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2602_22oct24.png",
          description: "Hamburguesa con queso cheddar, cebolla, ketchup y mostaza. Acompañado con gaseosa mediana a eleccion",
          price: 830000
        },
        {
          category: "promociones",
          name: "20 OFF 2 Cajitas Felices",
          identifier: "49086",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49086_v2.png",
          description: "20 OFF 2 Cajitas Felices",
          price: 1300000
        },
        {
          category: "promociones",
          name: "20OFF 2 McCombos Med Cuarto de Libra",
          identifier: "49072",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48245_v3.png",
          description: "2 Hamburguesas de carne 100% vacuna, dos fetas de queso cheddar, ketchup mostaza y cebolla. Acompañamiento y bebida medianas a elección",
          price: 1740000
        },
        {
          category: "promociones",
          name: "3 Big Mac o 3 Cuarto de libra o 3 McPollo + 3 Papas Grandes",
          identifier: "49017",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49017_05nov24.png",
          description: "3 Hamburguesas classics (podes elegir 3 hamburguesas McPollo, Cuarto de Libra ó BigMac) +3 papas grandes",
          price: 2450000
        },
        {
          category: "promociones",
          name: "McCombo Pequeño Doble Carne Doble Queso + Cajita Feliz",
          identifier: "2675",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2675_22OCT24.png",
          description: "McCombo Pequeño Doble Carne Doble Queso + Cajita Feliz",
          price: 1169900
        },
        {
          category: "promociones",
          name: "20 OFF Cajita Feliz + CM Cuarto de Libra",
          identifier: "49087",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49087_v2.png",
          description: "McCombo Mediano Cuarto de Libra mas Cajita Feliz",
          price: 1520000
        },
        {
          category: "promociones",
          name: "Cajita Feliz + Cono",
          identifier: "48196",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48196_v22.png",
          description: "Con la compra de una cajita feliz, llévate un cono gratis a elección",
          price: 810000
        },
        {
          category: "promociones",
          name: "Doble carne Doble queso McCombo Pequeño",
          identifier: "48202",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48202_v7.png",
          description: "Hamburguesa doble carne junior, doble queso cheddar, ketchup, mostaza y cebolla. Acompañamiento y bebida chica a elección",
          price: 590000
        },
        {
          category: "promociones",
          name: "Doble carne Doble queso McCombo Mediano",
          identifier: "48203",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48203_v7.png",
          description: "Hamburguesa doble carne junior, doble queso cheddar, ketchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
          price: 740000
        },
        {
          category: "promociones",
          name: "20 OFF en 2 Conos",
          identifier: "48475",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48475_v14.png",
          description: "20 OFF en 2 Conos a elección",
          price: 199900
        },
        {
          category: "promociones",
          name: "2 McFlurry Oreo",
          identifier: "48596",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48596_06nov24.png",
          description: "2 McFlurry Oreo, elegí tu helado y salsa",
          price: 729900
        },
        {
          category: "promociones",
          name: "2 Sundae a elección",
          identifier: "48757",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48757_21OCT24.png",
          description: "Podes elegir 2 sundae de Chocolate, Frutilla o Dulce de leche",
          price: 439900
        },
        {
          category: "promociones",
          name: "McCombo Pixel",
          identifier: "48040",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48040_21OCT24.png",
          description: "Hamburguesa doble medallón de carne y doble queso condimentado con ketchup, mostaza y cebolla. Acompañamiento chico y bebida sin azúcar a elección. Postre Sundae, sabor a elección",
          price: 819900
        },
        {
          category: "promociones",
          name: "15 OFF McCombo Mediano BT21",
          identifier: "4702",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_4702_v1.png",
          description: "15 OFF McCombo Mediano BT21",
          price: 1299900
        },
        {
          category: "promociones",
          name: "McCombo Mediano Doble Cuarto de libra + Pileta de Cheddar",
          identifier: "48007",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48007_29OCT24.png",
          description: "Acompaña tu McCombo Favorito , con una explosión de cheddar",
          price: 1199900
        },
        {
          category: "promociones",
          name: "30 OFF Papas Medianas + Pileta de Cheddar",
          identifier: "907",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_907_v2.png",
          description: "30 OFF Papas Medianas + Pileta de Cheddar",
          price: 380000
        },
        {
          category: "promociones",
          name: "30 OFF McNuggets x10 + Pileta de Cheddar",
          identifier: "903",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_903_v1.png",
          description: "30 OFF McNuggets x10 + Pileta de Cheddar",
          price: 600000
        },
        {
          category: "promociones",
          name: "McCombo Mediano BigMac + Pileta de Cheddar",
          identifier: "48005",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48005_29OCT24.png",
          description: "Acompaña tu McCombo Favorito , con una explosión de cheddar",
          price: 1069900
        },
        {
          category: "promociones",
          name: "Menú Ensalada Caesar",
          identifier: "48263",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48263_29OCT24.png",
          description: "Ensalada de mix de hojas verdes, queso parmesano en hebras, bacon picado, croutons y una proteína a elección. Con un exquisito aderezo caesar. Acompañada de una bebida a elección",
          price: 979900
        },
        {
          category: "promociones",
          name: "Menú Ensalada Deli Guacamole",
          identifier: "48933",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48933_29OCT24.png",
          description: "La más deliciosa combinación de mix de verdes, tomate, cebolla grillada, guacamole, un huevo y una proteína a elección (pollo crispy, pollo grille o carne). Una exquisita mezcla de los vegetales y el French Dressing! Acompañada con bebida a elección",
          price: 979900
        },
        {
          category: "promociones",
          name: "Café con 2 facturas",
          identifier: "48029",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48029_21OCT24.png",
          description: "Café con dos facturas a elección",
          price: 189900
        },
        {
          category: "promociones",
          name: "Café con Grand Tostado",
          identifier: "2591",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2591_21OCT24.png",
          description: "Café + Grand Tostado",
          price: 419900
        },
        {
          category: "promociones",
          name: "Café con 3 criollos",
          identifier: "2415",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2415_21OCT24.png",
          description: "Café con 3 criollos",
          price: 189900
        },
        {
          category: "promociones",
          name: "Café Espresso + Grand Tostado",
          identifier: "2592",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2592_v1.png",
          description: "Café Espresso + Grand Tostado",
          price: 479900
        },
        {
          category: "mccombos",
          name: "Menú F1 Cuarto de libra Mediano",
          identifier: "2716",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2716_12nov24.png",
          description: "Hamburguesa doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1150000
        },
        {
          category: "mccombos",
          name: "Menú F1 Cuarto de libra Grande",
          identifier: "2717",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2717_12nov24.png",
          description: "Hamburguesa con doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla . Acompañamiento y bebida grande a elección",
          price: 1300000
        },
        {
          category: "mccombos",
          name: "Menú F1 Doble Cuarto de libra Mediano",
          identifier: "2714",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2714_12nov24.png",
          description: "Hamburguesa doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1300000
        },
        {
          category: "mccombos",
          name: "Menú F1 Doble Cuarto de libra Grande",
          identifier: "2715",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2715_12nov24.png",
          description: "Hamburguesa con doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla . Acompañamiento y bebida grande a elección",
          price: 1450000
        },
        {
          category: "mccombos",
          name: "McCombo BT21",
          identifier: "4701",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_4701_16SEP24.png",
          description: "Un Menú ideal para vos, llevate unas Chicken McNuggetsX10, acompañamiento y bebida mediana a elección, esta propuesta única viene acompañada por un Juguete exclusivo de BT21 !",
          price: 1500000
        },
        {
          category: "mccombos",
          name: "McCombo Pixel",
          identifier: "48040",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48040_21OCT24.png",
          description: "Hamburguesa doble medallón de carne y doble queso condimentado con ketchup, mostaza y cebolla. Acompañamiento chico y bebida sin azúcar a elección. Postre Sundae, sabor a elección",
          price: 819900
        },
        {
          category: "mccombos",
          name: "Bacon Cheddar McMelt Mediano",
          identifier: "48231",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/48231_AR19JUL24.png",
          description: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con abundante queso cheddar, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sésamo! Acompañamiento y bebida mediana a elección",
          price: 1240000
        },
        {
          category: "mccombos",
          name: "Bacon Cheddar McMelt Grande",
          identifier: "48232",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/48232_AR19JUL24.png",
          description: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con abundante queso cheddar, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sésamo! Acompañamiento y bebida grande a elección",
          price: 1390000
        },
        {
          category: "mccombos",
          name: "Doble Bacon Cheddar McMelt Mediano",
          identifier: "26971",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26971_AR19JUL24.png",
          description: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con dos medallones 100% de carne vacuna, abundante queso cheddar, dos tiras de bacon enteras y cebolla grillada en nuestro inigualable pan con semillas de sésamo. Acompañamiento de bebida y papas medianas",
          price: 1320000
        },
        {
          category: "mccombos",
          name: "Doble Bacon Cheddar McMelt Grande",
          identifier: "26972",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26972_AR19JUL24.png",
          description: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con dos medallones 100% de carne vacuna, abundante queso cheddar, dos tiras de bacon enteras y cebolla grillada en nuestro inigualable pan con semillas de sésamo. Acompañamiento de bebida y papas grandes",
          price: 1470000
        },
        {
          category: "mccombos",
          name: "Big Mac Mediano",
          identifier: "26000",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26000PRUEBA3.png",
          description: "Hamburguesa con doble carne 100% vacuna, salsa Big Mac, queso derretido, cebolla, lechuga y pepino. Acompañamiento y bebida mediana a elección",
          price: 1070000
        },
        {
          category: "mccombos",
          name: "Big Mac Grande",
          identifier: "26050",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26050_AR19JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, salsa Big Mac, queso cheddar, cebolla, lechuga y pepino. Acompañamiento y bebida grande a elección",
          price: 1220000
        },
        {
          category: "mccombos",
          name: "Cuarto de Libra Mediano",
          identifier: "26003",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26003_AR19JUL24.png",
          description: "Hamburguesa de carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1090000
        },
        {
          category: "mccombos",
          name: "Cuarto de Libra Grande",
          identifier: "26053",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26053_AR19JUL24.png",
          description: "Hamburguesa de carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza,y cebolla. Acompañamiento y bebida grande a elección",
          price: 1240000
        },
        {
          category: "mccombos",
          name: "Doble Cuarto de Libra Mediano",
          identifier: "26004",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26004_AR19JUL24.png",
          description: "Hamburguesa doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1260000
        },
        {
          category: "mccombos",
          name: "Doble Cuarto de Libra Grande",
          identifier: "26054",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26054_AR19JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla . Acompañamiento y bebida grande a elección",
          price: 1410000
        },
        {
          category: "mccombos",
          name: "McNífica Mediano",
          identifier: "26002",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26002_AR19JUL24.png",
          description: "Hamburguesa de carne 100% vacuna, queso cheddar, lechuga, tomate, kétchup, mostaza, mayonesa y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1170000
        },
        {
          category: "mccombos",
          name: "McNífica Grande",
          identifier: "26052",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26052_AR19JUL24.png",
          description: "Hamburguesa de carne 100% vacuna, queso cheddar, lechuga, tomate, kétchup, mostaza, mayonesa y cebolla. Acompañamiento y bebida grande a elección",
          price: 1320000
        },
        {
          category: "mccombos",
          name: "Triple Hamburguesa con Queso Mediano",
          identifier: "26200",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26200_AR19JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, queso cheddar, kétchup y cebolla. Acompañamiento y bebida mediana a elección",
          price: 1090000
        },
        {
          category: "mccombos",
          name: "Triple Hamburguesa con Queso Grande",
          identifier: "26202",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26202_AR19JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, queso cheddar, kétchup y cebolla. Acompañamiento y bebida grande a elección",
          price: 1240000
        },
        {
          category: "mccombos",
          name: "Grand Doble Tasty Mediano",
          identifier: "26933",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26933_AR19JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, salsa tasty, 3 fetas de queso cheddar, lechuga, tomate, cebolla en un pan mas grande. Acompañamiento y bebida mediana a elección",
          price: 1380000
        },
        {
          category: "mccombos",
          name: "Grand Doble Tasty Grande",
          identifier: "26937",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26937_AR19JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, salsa tasty, 3 fetas de queso cheddar, lechuga, tomate, cebolla en un pan mas grande. Acompañamiento y bebida grande a elección",
          price: 1530000
        },
        {
          category: "mccombos",
          name: "Grand Triple Tasty Mediano",
          identifier: "26934",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26934_AR19JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, bacon en tiras y triturado, salsa tasty, 4 fetas de cheddar, lechuga, tomate, cebolla en un pan mas grande. Acompañamiento y bebida mediana a elección",
          price: 1520000
        },
        {
          category: "mccombos",
          name: "Grand Triple Tasty Grande",
          identifier: "26938",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26938_27AGO24.png",
          description: "Hamburguesa con triple carne 100% vacuna, salsa tasty, 3 fetas de queso cheddar, lechuga, tomate, cebolla en un pan mas grande. Acompañamiento y bebida grande a elección",
          price: 1670000
        },
        {
          category: "mccombos",
          name: "Grand Doble McBacon Mediano",
          identifier: "26892",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26892_AR19JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, bacon, queso cheddar, cebolla, kétchup y mostaza en un pan más grande. Acompañamiento y bebida mediana a elección",
          price: 1380000
        },
        {
          category: "mccombos",
          name: "Grand Doble McBacon Grande",
          identifier: "26898",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26898_AR19JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, bacon, cheddar, cebolla, kétchup y mostaza en un pan más grande. Acompañamiento y bebida grande a elección",
          price: 1530000
        },
        {
          category: "mccombos",
          name: "Grand Triple McBacon Mediano",
          identifier: "26893",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26893_AR19JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, bacon, cheddar, cebolla, kétchup y mostaza en un pan más grande. Acompañamiento y bebida mediana a elección",
          price: 1520000
        },
        {
          category: "mccombos",
          name: "Grand Triple McBacon Grande",
          identifier: "26899",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26899_AR19JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, bacon, 3 fetas de cheddar, ketchup y mostaza en un pan mas grande. Acompañamiento y bebida grande a elección",
          price: 1670000
        },
        {
          category: "mccombos",
          name: "Grand Doble Tasty Turbo Bacon Mediano",
          identifier: "26956",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26956_AR19JUL24.png",
          description: "Hamburguesa con doble carne, bacon en tiras y triturado, salsa Tasty, queso cheddar, lechuga, tomate y cebolla en un pan más grande. Acompañamiento y bebida mediana a elección",
          price: 1460000
        },
        {
          category: "mccombos",
          name: "Grand Doble Tasty Turbo Bacon Grande",
          identifier: "26958",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26958_AR19JUL24.png",
          description: "Hamburguesa con doble carne, bacon en tiras y triturado, salsa Tasty, queso cheddar, lechuga, tomate y cebolla en un pan más grande . Acompañamiento y bebida grande a elección",
          price: 1610000
        },
        {
          category: "mccombos",
          name: "Grand Triple Tasty Turbo Bacon Mediano",
          identifier: "26957",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26957_AR19JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, salsa tasty, 4 fetas de cheddar, lechuga, tomate, cebolla en un pan mas grande. Acompañamiento y bebida mediana a elección",
          price: 1590000
        },
        {
          category: "mccombos",
          name: "Grand Triple Tasty Turbo Bacon Grande",
          identifier: "26959",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26959_AR19JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, bacon en tiras y triturado, salsa tasty, 4 fetas de queso cheddar, lechuga, tomate y cebolla en un pan mas grande. Acompañamiento y bebida grande a elección",
          price: 1740000
        },
        {
          category: "mccombos",
          name: "McCrispy Chicken Cheddar y Bacon Mediano",
          identifier: "48094",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/48094_AR19JUL24.png",
          description: "Medallón de pollo crispy, cheddar, bacon, lechuga, tomate y mayonesa. Acompañamiento y bebida mediana a elección",
          price: 1060000
        },
        {
          category: "mccombos",
          name: "McCrispy Chicken Cheddar y Bacon Grande",
          identifier: "48102",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/48102_AR19JUL24.png",
          description: "Medallón de pollo Crispy, cheddar, bacon, lechuga, tomate y mayonesa. Acompañamiento y bebida grande a elección",
          price: 1210000
        },
        {
          category: "mccombos",
          name: "McCrispy Chicken Deluxe Mediano",
          identifier: "48980",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/48980_AR19JUL24.png",
          description: "Medallón de pollo crispy, lechuga, tomate y mayonesa. Acompañamiento y bebida mediana a elección",
          price: 950000
        },
        {
          category: "mccombos",
          name: "McCrispy Chicken Deluxe Grande",
          identifier: "48981",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/48981_AR19JUL24.png",
          description: "Medallón de pollo crispy, lechuga, tomate y mayonesa. Acompañamiento y bebida grande a elección",
          price: 1100000
        },
        {
          category: "mccombos",
          name: "McCrispy Chicken Classic Mediano",
          identifier: "26970",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26970_AR19JUL24.png",
          description: "Medallón de pollo crispy, mayonesa y pepinos. Acompañamiento y bebida mediana a elección",
          price: 850000
        },
        {
          category: "mccombos",
          name: "McCrispy Chicken Classic Grande",
          identifier: "26969",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26969_AR19JUL24.png",
          description: "Medallón de pollo crispy, mayonesa y pepinos. Acompañamiento y bebida grande a elección",
          price: 1000000
        },
        {
          category: "mccombos",
          name: "McPollo Mediano",
          identifier: "26352",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26352_AR19JUL24.png",
          description: "Medallón de pollo frito, mayonesa y lechuga. Acompañamiento y bebida mediana a elección",
          price: 820000
        },
        {
          category: "mccombos",
          name: "McPollo Grande",
          identifier: "26350",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26350_AR19JUL24.png",
          description: "Medallón de pollo frito, mayonesa y lechuga. Acompañamiento y bebida grande a elección",
          price: 970000
        },
        {
          category: "mccombos",
          name: "McNuggets X10 Mediano",
          identifier: "26005",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26005_AR19JUL24.png",
          description: "10 McNuggets de pollo.Acompañamiento y bebida mediana a elección",
          price: 1090000
        },
        {
          category: "mccombos",
          name: "McNuggets X10 Grande",
          identifier: "26055",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26055_AR19JUL24.png",
          description: "10 McNuggets de pollo. Acompañamiento y bebida grande a elección",
          price: 1240000
        },
        {
          category: "mccombos",
          name: "McNuggets X20 Mediano",
          identifier: "26354",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26354_AR19JUL24.png",
          description: "20 McNuggets de pollo. Acompañamiento y bebida mediano a elección",
          price: 1290000
        },
        {
          category: "mccombos",
          name: "McNuggets X20 Grande",
          identifier: "26356",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/26356_AR19JUL24.png",
          description: "20 McNuggets de pollo. Acompañamiento y bebida grande a elección",
          price: 1440000
        },
        {
          category: "cajita feliz",
          name: "Cajita Feliz-Otras opciones de Menú",
          identifier: "26015",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26015_12SEP24.png",
          description: "Nuestra sabrosa hamburguesa con queso, acompañada de papas Fritas pequeñas, bebida y puré de fruta ¡Elegí entre Libro o Juguete!",
          price: 810000
        },
        {
          category: "cajita feliz",
          name: "Cajita Feliz - Otras opciones con Pollo",
          identifier: "26016",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26016_12SEP24.png",
          description: "Todo el sabor de nuestras McNuggets x4 unidades acompañadas de papas Fritas pequeñas, bebida y puré de fruta ¡Elegí entre Libro o Juguete!",
          price: 810000
        },
        {
          category: "cajita feliz",
          name: "Cajita Feliz Con Hamburguesa",
          identifier: "26014",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26014_12SEP24.png",
          description: "Una deliciosa hamburguesa con papas fritas pequeñas, bebida y puré de fruta ¡Elegí entre Libro o Juguete!",
          price: 810000
        },
        {
          category: "cajita feliz",
          name: "Cajita Feliz Mcfiesta Jr",
          identifier: "26749",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26749_12SEP24.png",
          description: "La frescura de la hamburguesa McFiesta Jr (con lechuga y tomate), papas Fritas pequeñas, bebida y puré de fruta. ¡Elegí entre Libro o Juguete!",
          price: 810000
        },
        {
          category: "hamburguesas",
          name: "Cuarto de Libra F1",
          identifier: "2713",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2713_12nov24.png",
          description: "Hamburguesa de carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con o sin Pepinillos",
          price: 810000
        },
        {
          category: "hamburguesas",
          name: "Doble Cuarto de Libra F1",
          identifier: "2712",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2712_12nov24.png",
          description: "Hamburguesa con doble carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con o sin Pepinillos",
          price: 950000
        },
        {
          category: "hamburguesas",
          name: "Doble Bacon Cheddar Mcmelt",
          identifier: "1006",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1006_23JUL24.png",
          description: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con dos medallones 100% de carne vacuna, abundante queso cheddar, dos tiras de bacon enteras y cebolla grillada en nuestro inigualable pan con semillas de sésamo",
          price: 950000
        },
        {
          category: "hamburguesas",
          name: "Bacon Cheddar McMelt",
          identifier: "48230",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48230_23JUL24.png",
          description: "Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con abundante queso cheddar, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sésamo!",
          price: 880000
        },
        {
          category: "hamburguesas",
          name: "Hamburguesa Con Queso",
          identifier: "160",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_160_23JUL24.png",
          description: "Hamburguesa de carne 100% vacuna con queso Cheddar, cebolla, mostaza y ketchup",
          price: 400000
        },
        {
          category: "hamburguesas",
          name: "Big Mac",
          identifier: "220",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_220_23JUL24.png",
          description: "Hamburguesa 100% carne con salsa especial Bigmac, cebolla, lechuga pepinillo y queso",
          price: 750000
        },
        {
          category: "hamburguesas",
          name: "Cuarto De Libra Con Queso",
          identifier: "240",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_240_23JUL24.png",
          description: "Hamburguesa de carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con o sin Pepinillos",
          price: 760000
        },
        {
          category: "hamburguesas",
          name: "Doble Cuarto De Libra Con Queso",
          identifier: "7163",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7163_23JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con o sin Pepinillos",
          price: 900000
        },
        {
          category: "hamburguesas",
          name: "Mcnífica",
          identifier: "2040",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2040_23JUL24.png",
          description: "Hamburguesa de carne 100% vacuna, queso Cheddar, lechuga, tomatem, kétchup, mostaza y cebolla fresca",
          price: 800000
        },
        {
          category: "hamburguesas",
          name: "Triple Hamburguesa Con Queso",
          identifier: "1526",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1526_23JUL24.png",
          description: "Tres medallones de carne 100% vacuna, el queso cheddar mas rico, cebolla triturada, mostaza y ketchup",
          price: 790000
        },
        {
          category: "hamburguesas",
          name: "Grand Tasty Doble",
          identifier: "2422",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2422_23JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, salsa Tasty, queso cheddar,lechuga, tomate, cebolla en un pan más grande con semillas",
          price: 970000
        },
        {
          category: "hamburguesas",
          name: "Grand Tasty Triple",
          identifier: "2423",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2423_23JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, salsa Tasty, queso cheddar,lechuga, tomate, cebolla en un pan más grande con semillas",
          price: 1070000
        },
        {
          category: "hamburguesas",
          name: "Grand Doble Mcbacon",
          identifier: "1703",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1703_23JUL24.png",
          description: "Hamburguesa con doble carne 100% vacuna, bacon premium, queso cheddar, cebolla, kétchup y mostaza en un pan más grande con semillas",
          price: 970000
        },
        {
          category: "hamburguesas",
          name: "Grand Triple Mcbacon",
          identifier: "1704",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1704_23JUL24.png",
          description: "Hamburguesa con triple carne 100% vacuna, bacon premium, queso cheddar, cebolla, kétchup y mostaza en un pan más grande con semillas",
          price: 1070000
        },
        {
          category: "hamburguesas",
          name: "Grand Tasty Turbo Bacon Doble",
          identifier: "121",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_121_23JUL24.png",
          description: "Hamburguesa en un pan mas grande,con doble carne 100% vacuna, bacon en tiras y triturado, salsa Tasty, cheddar,lechuga, tomate y cebolla",
          price: 1010000
        },
        {
          category: "hamburguesas",
          name: "Grand Tasty Turbo Bacon Triple",
          identifier: "135",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_135_23JUL24.png",
          description: "Hamburguesa con pan mas grande, con triple carne 100% vacuna, bacon en tiras y triturado, salsa tasty, 4 fetas de cheddar, lechuga, tomate y cebolla",
          price: 1130000
        },
        {
          category: "hamburguesas",
          name: "McCrispy Chicken Cheddar y Bacon",
          identifier: "48091",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48091_23JUL24.png",
          description: "Hamburguesa con medallón de pollo, cheddar, bacon, lechuga, tomate y mayonesa",
          price: 740000
        },
        {
          category: "hamburguesas",
          name: "McCrispy Chicken Deluxe",
          identifier: "48979",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48979_23JUL24.png",
          description: "Hamburguesa con medallón de pollo, lechuga, tomate y mayonesa",
          price: 670000
        },
        {
          category: "hamburguesas",
          name: "McCrispy Chicken Classic",
          identifier: "1707",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1707_23JUL24.png",
          description: "Medallón de pollo crispy, mayonesa y pepinos",
          price: 590000
        },
        {
          category: "hamburguesas",
          name: "Mcpollo",
          identifier: "290",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_290_23JUL24.png",
          description: "La textura del pollo hace un gran equipo con la suavidad de la mayonesa y un colchón de lechuga",
          price: 590000
        },
        {
          category: "mcnuggets",
          name: "McNuggets x4",
          identifier: "6294",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_6294_12SEP24.png",
          description: "4 McNuggets de pechuga de pollo",
          price: 460000
        },
        {
          category: "mcnuggets",
          name: "Mc Nuggets x 6",
          identifier: "300",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_300_12SEP24.png",
          description: "6 McNuggets de pechuga de pollo",
          price: 560000
        },
        {
          category: "mcnuggets",
          name: "McNuggets x10",
          identifier: "4725",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_4725_23JUL24.png",
          description: "10 McNuggets de pechuga de pollo con 2 salsas a elección",
          price: 630000
        },
        {
          category: "mcnuggets",
          name: "McNuggets x20",
          identifier: "320",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_320_23JUL24.png",
          description: "20 McNuggets de pechuga de pollo con 4 salsas a elección",
          price: 900000
        },
        {
          category: "ensaladas",
          name: "Ensalada Deli Guacamole Veggie",
          identifier: "201",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_201_26JUL24.png",
          description: "La más deliciosa combinación de mix de verdes, tomate, cebolla grillada, guacamole y dos huevos. Una exquisita mezcla de los vegetales y el French Dressing!",
          price: 760000
        },
        {
          category: "ensaladas",
          name: "Ensalada Deli Guacamole",
          identifier: "215",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_204_26JUL24.png",
          description: "La más deliciosa combinación de mix de verdes, tomate, cebolla grillada, guacamole, un huevo y una proteína a elección (pollo crispy, pollo grille o carne). Una exquisita mezcla de los vegetales y el French Dressing!",
          price: 910000
        },
        {
          category: "ensaladas",
          name: "Ensalada Caesar",
          identifier: "48261",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48262_26JUL24.png",
          description: "Ensalada de mix de hojas verdes, queso parmesano en hebras, bacon picado, croutons y una proteina a elección. Con un exquisito adherezo caesar",
          price: 910000
        },
        {
          category: "ensaladas",
          name: "Menú Ensalada Deli Guacamole Veggie",
          identifier: "26967",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26967_26JUL24.png",
          description: "La más deliciosa combinación de mix de verdes, tomate, cebolla grillada, guacamole y dos huevos. Una exquisita mezcla de los vegetales y el French Dressing! Acompañana con bebida a elección",
          price: 1000000
        },
        {
          category: "ensaladas",
          name: "Menú Ensalada Deli Guacamole",
          identifier: "26968",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26968_26JUL24.png",
          description: "La más deliciosa combinación de mix de verdes, tomate, cebolla grillada, guacamole, un huevo y una proteína a elección (pollo crispy, pollo grille o carne). Una exquisita mezcla de los vegetales y el French Dressing! Acompañada con bebida a elección",
          price: 1140000
        },
        {
          category: "ensaladas",
          name: "Menú Ensalada Caesar",
          identifier: "48264",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48264_26JUL24.png",
          description: "Ensalada de mix de hojas verdes, queso parmesano en hebras, bacon picado, croutons y una proteina a elección. Con un exquisito adherezo caesar. Acompañada de una bebida a elección",
          price: 1140000
        },
        {
          category: "exclusivo automac",
          name: "3 Big Mac o 3 Cuarto de libra o 3 McPollo + 3 Papas Grandes",
          identifier: "49017",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49017_05nov24.png",
          description: "3 Hamburguesas classics (podes elegir 3 hamburguesas McPollo, Cuarto de Libra ó BigMac) +3 papas grandes",
          price: 2450000
        },
        {
          category: "exclusivo automac",
          name: "Cajita Feliz + Big Mac o Cuarto de Libra o McPollo + Papas Medianas",
          identifier: "49014",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49014_v3.png",
          description: "1 Hamburguesa Classics (podes elegir entre Mc Pollo, Cuarto de Libra o BigMac ) + 1 Papas Medianas y una Cajita Feliz",
          price: 1499900
        },
        {
          category: "para acompañar",
          name: "Pileta de Cheddar",
          identifier: "48233",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48004_v1.png",
          description: "Una Pelopincho de nuestro inigualable queso cheddar derretido ideal para acompañar tu hamburguesa, McNuggets, tus papas o lo quieras",
          price: 250000
        },
        {
          category: "para acompañar",
          name: "Papas Fritas Pequeñas",
          identifier: "360",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_360_26JUL24.png",
          description: "Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
          price: 300000
        },
        {
          category: "para acompañar",
          name: "Papas Fritas Medianas",
          identifier: "370",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_370_26JUL24.png",
          description: "Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
          price: 320000
        },
        {
          category: "para acompañar",
          name: "Papas Fritas Grandes",
          identifier: "380",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_380_26JUL24.png",
          description: "Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
          price: 340000
        },
        {
          category: "para acompañar",
          name: "Papa Cheddar",
          identifier: "5762",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/McCheddarBaconCajita.png?1657630425094",
          description: "Papas fritas queso cheddaar fundido. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
          price: 400000
        },
        {
          category: "para acompañar",
          name: "Papas Con Cheddar y Bacon",
          identifier: "5761",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_5761_26JUL24.png",
          description: "Papas fritas queso cheddaar fundido y bacon. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
          price: 470000
        },
        {
          category: "para acompañar",
          name: "Papas Tasty",
          identifier: "2404",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/NGK-Papas%20Tasty%20Bacon.png?1657630413519",
          description: "Papas con salsa Tasty",
          price: 400000
        },
        {
          category: "para acompañar",
          name: "Papas Tasty y Bacon",
          identifier: "2405",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2405_27AGO24.png",
          description: "Papas con salsa Tasty y Bacon",
          price: 470000
        },
        {
          category: "postres",
          name: "Cono de Vainilla",
          identifier: "820",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_820_v2.png",
          description:'',
          price: 150000
        },
        {
          category: "postres",
          name: "Cono Combinado",
          identifier: "2111",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2111_v2.png",
          description:'',
          price: 150000
        },
        {
          category: "postres",
          name: "Cono de Dulce de Leche",
          identifier: "2110",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2110_v2.png",
          description:'',
          price: 150000
        },
        {
          category: "postres",
          name: "Cono KitKat",
          identifier: "7288",
          description:'',
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7288_v2.png",
          price: 220000
        },
        {
          category: "postres",
          name: "Cono Relleno",
          identifier: "7494",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7494_v2.png",
          description: "Cono relleno",
          price: 190000
        },
        {
          category: "postres",
          name: "Super Cono",
          identifier: "53",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_53_v2.png",
          description:'',
          price: 170000
        },
        {
          category: "postres",
          name: "Sundae Dulce de Leche",
          identifier: "800",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_800_v2.png",
          description: "El helado mas rico con una salsa tibia de dulce de leche",
          price: 310000
        },
        {
          category: "postres",
          name: "Sundae de Chocolate",
          identifier: "780",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_780_v2.png",
          description: "El helado mas rico con una salsa tibia de chocolate",
          price: 310000
        },
        {
          category: "postres",
          name: "Sundae de Frutilla",
          identifier: "790",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_790_v2.png",
          description: "El helado mas rico con una salsa tibia de frutilla",
          price: 310000
        },
        {
          category: "postres",
          name: "McFlurry Oreo",
          identifier: "2060",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2060_26JUL24.png",
          description: "Helado de vainilla, dulce de leche o mixto, galletitas oreo en trozos con salsa a elección",
          price: 420000
        },
        {
          category: "postres",
          name: "McFlurry Kit Kat",
          identifier: "1647",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1647_26JUL24.png",
          description: "Helado de vainilla, dulce de leche o mixto, trocitos de KitKat con salsa a elección",
          price: 420000
        },
        {
          category: "bebidas",
          name: "Coca Cola chica",
          identifier: "430",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_430_v3.png",
          description:'',
          price: 250000
        },
        {
          category: "bebidas",
          name: "Coca-Cola Mediana",
          identifier: "500",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_500_26JUL24.png",
          description: "Refrescante gaseosa Coca Cola en tamaño mediano",
          price: 280000
        },
        {
          category: "bebidas",
          name: "Coca-Cola Grande",
          identifier: "570",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_570_27AGO24.png",
          description: "Refrescante gaseosa Coca Cola en tamaño grande",
          price: 310000
        },
        {
          category: "bebidas",
          name: "Coca Cola Zero chica",
          identifier: "887",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_887_v2.png",
          description:'',
          price: 250000
        },
        {
          category: "bebidas",
          name: "Coca-Cola Zero Mediana",
          identifier: "893",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_893_12SEP24.png",
          description: "Refrescante gaseosa Coca Cola sin azúcar en tamaño mediano",
          price: 280000
        },
        {
          category: "bebidas",
          name: "Coca-Coca Zero Grande",
          identifier: "897",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_897_27AGO24.png",
          description: "Refrescante gaseosa Coca Cola sin azúcar en tamaño grande",
          price: 310000
        },
        {
          category: "bebidas",
          name: "Sprite Zero chica",
          identifier: "7085",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7085_v2.png",
          description: "Sprite Zero chica",
          price: 250000
        },
        {
          category: "bebidas",
          name: "Sprite Zero Mediana",
          identifier: "7086",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7086_12SEP24.png",
          description: "Refrescante gaseosa Sprite Zero en tamaño mediano",
          price: 280000
        },
        {
          category: "bebidas",
          name: "Sprite Zero Grande",
          identifier: "7087",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7087_26JUL24.png",
          description: "Refrescante gaseosa Sprite Zero en tamaño grande",
          price: 310000
        },
        {
          category: "bebidas",
          name: "Fanta Zero chica",
          identifier: "460",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_460_v2.png",
          description: "Fanta Zero chica",
          price: 250000
        },
        {
          category: "bebidas",
          name: "Fanta Zero Mediana",
          identifier: "530",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_530_12SEP24.png",
          description: "Refrescante gaseosa Fanta Zero en tamaño mediano",
          price: 280000
        },
        {
          category: "bebidas",
          name: "Fanta Zero Grande",
          identifier: "600",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_600_12SEP24.png",
          description: "Refrescante gaseosa Fanta Zero en tamaño grande",
          price: 310000
        },
        {
          category: "bebidas",
          name: "Agua",
          identifier: "900",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_900_26AGO24.png",
          description: "Botella de 500ml de agua mineral",
          price: 300000
        },
        {
          category: "bebidas",
          name: "Café Americano",
          identifier: "768",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_768_16oct24.png",
          description: "Café americano en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas",
          name: "Latte Americano",
          identifier: "783",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_783_16oct24.png",
          description: "Bebida caliente con 40% Café americano y 60% de leche en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas",
          name: "Lágrima Americano",
          identifier: "1133",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1133_16oct24.png",
          description: "Bebida caliente con 90% leche y 10% Café americano en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas",
          name: "Té",
          identifier: "650",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_650_26JUL24.png",
          description: "Té negro en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas",
          name: "Cappuccino Americano",
          identifier: "782",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_782_16oct24.png",
          description: "Bebida caliente 70% Café americano, 30% leche, terminado con espuma de leche y cacao en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas",
          name: "Jugo De Manzana",
          identifier: "13406",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_13406_26AGO24.png",
          description: "Jugo 100% manzana",
          price: 200000
        },
        {
          category: "bebidas",
          name: "Jugo de Naranja",
          identifier: "470",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/Jugo%20de%20naranja1.png?1639424816389",
          description: "Jugo de Naranja",
          price: 180000
        },
        {
          category: "productos sin tacc",
          name: "McCombo Cuarto de Libra Sin Tacc Mediano",
          identifier: "49005",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49005_27AGO24.png",
          description: "Medallón de carne, cebolla, queso cheddar y acompañados con papas medianas y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1090000
        },
        {
          category: "productos sin tacc",
          name: "McCombo Cuarto de Libra Sin Tacc Grande",
          identifier: "49008",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49008_27AGO24.png",
          description: "Medallón de carne, cebolla, queso cheddar y acompañados con papas grandes y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1240000
        },
        {
          category: "productos sin tacc",
          name: "McCombo Doble Cuarto de Libra Sin Tacc Mediano",
          identifier: "49083",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49083_27AGO24.png",
          description: "2 Medallónes de carne, cebolla, 2 fetas de queso cheddar y acompañados con papas medianas y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1260000
        },
        {
          category: "productos sin tacc",
          name: "McCombo Doble Cuarto de Libra Sin Tacc Grande",
          identifier: "49082",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49082_27AGO24.png",
          description: "2 Medallónes de carne, cebolla, 2 fetas de queso cheddar y acompañados con papas grandes y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1410000
        },
        {
          category: "productos sin tacc",
          name: "McCombo Big Mac Sin Tacc Mediano",
          identifier: "49004",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49004_27AGO24.png",
          description: "Dos medallones de carne ,lechuga,1 feta de queso cheddar. Papas medianas y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1070000
        },
        {
          category: "productos sin tacc",
          name: "McCombo Big Mac Sin Tacc Grande",
          identifier: "49007",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49007_27AGO24.png",
          description: "Dos medallones de carne ,lechuga,1 feta de queso cheddar. Papas grandes y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1220000
        },
        {
          category: "productos sin tacc",
          name: "McCombo McNífica Sin Tacc Mediano",
          identifier: "49003",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49003_27AGO24.png",
          description: "Medallón de carne, cebolla, lechuga , tomate ,una feta de queso cheddar y acompañados con papas medianas y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1170000
        },
        {
          category: "productos sin tacc",
          name: "McCombo McNífica Sin Tacc Grande",
          identifier: "49006",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49006_27AGO24.png",
          description: "Medallón de carne, cebolla, lechuga , tomate ,una feta de queso cheddar y acompañados con papas grandes y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 1320000
        },
        {
          category: "productos sin tacc",
          name: "Cajita Feliz Mcfiesta Jr Sin Tacc",
          identifier: "49010",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_49010_27AGO24.png",
          description: "Medallón de carne con lechuga y tomate. Acompañado con papas Kids, YogurKid y agua mineral 500 ml. lo llevas con un pan sin tacc",
          price: 810000
        },
        {
          category: "productos sin tacc",
          name: "Sundae con ingredientes sin TACC",
          identifier: "49009",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/Sin%20TACC_500x500.png?1603308457470",
          description: "Helado de Vainilla, Dulce de leche o combinado con Salsa de Dulce de Leche o Chocolate",
          price: 310000
        },
        {
          category: "menúes mccafé",
          name: "Frappé con Grand Tostado",
          identifier: "2688",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2688_29OCT24.png",
          description: "Frappé a elección con un Grand Tostado",
          price: 649900
        },
        {
          category: "menúes mccafé",
          name: "Frappé con Poundcake",
          identifier: "2692",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/DLV_2692_29OCT24.png",
          description: "Frappé a elección con un Poundcake a elección",
          price: 549900
        },
        {
          category: "menúes mccafé",
          name: "15 OFF en Milkshake con Grand Tostado",
          identifier: "2680",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/DLV_2680_29OCT24.png",
          description: "Milkshake a elección con un Grand Tostado",
          price: 580000
        },
        {
          category: "menúes mccafé",
          name: "Milkshake con Poundcake",
          identifier: "2681",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2681_29OCT24.png",
          description: "Milkshake a elección con un Poundcake a elección",
          price: 549900
        },
        {
          category: "menúes mccafé",
          name: "Iced Latte con Grand Tostado",
          identifier: "2696",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2696_29OCT24.png",
          description: "Iced Latte a elección con un Gran Tostado",
          price: 549900
        },
        {
          category: "menúes mccafé",
          name: "15 OFF en Iced Latte con Poundcake",
          identifier: "2695",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/DLV_2695_29OCT24.png",
          description: "Iced Latte a elección con un Poundcake a elección",
          price: 450000
        },
        {
          category: "menúes mccafé",
          name: "Café con 2 facturas",
          identifier: "48029",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48029_21OCT24.png",
          description: "Café con dos facturas a elección",
          price: 189900
        },
        {
          category: "menúes mccafé",
          name: "Café con Grand Tostado",
          identifier: "2591",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2591_21OCT24.png",
          description: "Café + Grand Tostado",
          price: 419900
        },
        {
          category: "menúes mccafé",
          name: "Café con 3 facturas",
          identifier: "26041",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26041_26JUL24.png",
          description: "Café en vaso de 300 Ml con tres facturas a elección",
          price: 280000
        },
        {
          category: "menúes mccafé",
          name: "Café Americano Con Donut",
          identifier: "26522",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26522_26AGO24.png",
          description: "Café en vaso de 300 Ml a elección con una Donut glaseada o de chocolate",
          price: 260000
        },
        {
          category: "menúes mccafé",
          name: "Café con McQueso",
          identifier: "26980",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26980_12SEP24.png",
          description: "Café en vaso de 300 Ml a elección con tostado de queso Cheddar y un toque de mostaza",
          price: 430000
        },
        {
          category: "menúes mccafé",
          name: "Café con Poundcake",
          identifier: "26981",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26981_12SEP24.png",
          description: "Café en vaso de 300 Ml a elección con una porción de poundcake",
          price: 430000
        },
        {
          category: "menúes mccafé",
          name: "Café Con Alfajor De Maicena",
          identifier: "26983",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26983_26JUL24.png",
          description: "Café en vaso de 300 Ml a elección con un alfajor de maicena",
          price: 340000
        },
        {
          category: "menúes mccafé",
          name: "Café espresso Especial con Croissant de Chocolate",
          identifier: "26793",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26793_v3.png",
          description: "Café espresso especial en vaso de 300 Ml con un Croissant de Chocolate",
          price: 360000
        },
        {
          category: "menúes mccafé",
          name: "Café espresso con Pan de Queso",
          identifier: "26939",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26939_16oct24.png",
          description: "Café espresso en vaso de 300 Ml con un pan de queso",
          price: 360000
        },
        {
          category: "menúes mccafé",
          name: "Café espresso con Torta Argentina",
          identifier: "26771",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_26771_16oct24.png",
          description: "Café espresso en vaso de 300 Ml con una porción de Torta Argentina",
          price: 510000
        },
        {
          category: "menúes mccafé",
          name: "Menú Power Day y Napolitano Lomo",
          identifier: "48084",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48084_v1.png",
          description: "Menú Power Day y Napolitano Lomo",
          price: 690000
        },
        {
          category: "menúes mccafé",
          name: "Menú Chill Day y Napolitano Pollo",
          identifier: "48085",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48085_v1.png",
          description: "Menú Chill Day y Napolitano Pollo",
          price: 700000
        },
        {
          category: "bebidas mccafé",
          name: "Espresso simple",
          identifier: "8798",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_8798_16oct24.png",
          description: "Café espresso molido en el momento en vaso de 100 Ml",
          price: 150000
        },
        {
          category: "bebidas mccafé",
          name: "Espresso cortado",
          identifier: "777",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_777_16oct24.png",
          description: "Café espresso molido en el momento, cortado con leche en vaso de 100 Ml",
          price: 150000
        },
        {
          category: "bebidas mccafé",
          name: "Macchiatto espresso",
          identifier: "8796",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_8796_v2.png",
          description: "Café espresso molido en el momento con espuma de leche, en vaso de 100 Ml",
          price: 150000
        },
        {
          category: "bebidas mccafé",
          name: "Ristretto espresso",
          identifier: "3631",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_3631_v2.png",
          description: "Espresso corto y concentrado, recién molido. En vaso de 100 Ml",
          price: 150000
        },
        {
          category: "bebidas mccafé",
          name: "Café Americano",
          identifier: "768",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_768_16oct24.png",
          description: "Café americano en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas mccafé",
          name: "Latte Americano",
          identifier: "783",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_783_16oct24.png",
          description: "Bebida caliente con 40% Café americano y 60% de leche en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas mccafé",
          name: "Lágrima Americano",
          identifier: "1133",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1133_16oct24.png",
          description: "Bebida caliente con 90% leche y 10% Café americano en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Americano",
          identifier: "782",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_782_16oct24.png",
          description: "Bebida caliente 70% Café americano, 30% leche, terminado con espuma de leche y cacao en vaso de 300 ml",
          price: 180000
        },
        {
          category: "bebidas mccafé",
          name: "Jugo de Naranja",
          identifier: "470",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/Jugo%20de%20naranja1.png?1639424816389",
          description: "Jugo de Naranja",
          price: 180000
        },
        {
          category: "bebidas mccafé",
          name: "Espresso Doble",
          identifier: "8795",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_8795_16oct24.png",
          description: "Café espresso molido en el momento en vaso de 200 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Lágrima espresso chica",
          identifier: "2836",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2836_16oct24.png",
          description: "Bebida caliente con 90% de leche y un 10% de café espresso, molido en el momento, en vaso de 200 Ml",
          price: 230000
        },
        {
          category: "bebidas mccafé",
          name: "Lágrima espresso grande",
          identifier: "2870",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2870_16oct24.png",
          description: "Bebida caliente con 90% de leche y un 10% de café espresso, molido en el momento, en vaso de 300 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Latte espresso chico",
          identifier: "2837",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2837_16oct24.png",
          description: "Bebida caliente con 60% de leche y un 40% de café espresso, molido en el momento, en vaso de 200 Ml",
          price: 230000
        },
        {
          category: "bebidas mccafé",
          name: "Latte espresso grande",
          identifier: "2871",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2871_16oct24.png",
          description: "Bebida caliente con 60% de leche y un 40% de café espresso, molido en el momento, en vaso de 300 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino espresso chico",
          identifier: "2838",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2838_16oct24.png",
          description: "Café espresso, molido en el momento con leche. Finalizado con espuma de leche y cacao en polvo, en vaso de 200 Ml",
          price: 230000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino espresso grande",
          identifier: "2872",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2872_16oct24.png",
          description: "Café espresso, molido en el momento con leche. Finalizado con espuma de leche y cacao en polvo, en vaso de 300 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Té Twinings chico",
          identifier: "7193",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7193_v1.png",
          description: "Té Twinings a elección, en vaso de 200 Ml",
          price: 230000
        },
        {
          category: "bebidas mccafé",
          name: "Té Twinings grande",
          identifier: "7194",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7194_12SEP24.png",
          description: "Té Twinings a elección, en vaso de 300 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Indian Chai Latte",
          identifier: "48504",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_48504_12SEP24.png",
          description: "Té Twinings negro con un suave sabor a jengibre, canela y vainilla con leche espumada, en vaso de 300 Ml",
          price: 340000
        },
        {
          category: "bebidas mccafé",
          name: "Submarino chico",
          identifier: "2868",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2868_16oct24.png",
          description: "Leche caliente, cubierta por suave espuma de leche, con una barra del mejor chocolate, en vaso de 200 Ml",
          price: 230000
        },
        {
          category: "bebidas mccafé",
          name: "Submarino grande",
          identifier: "2878",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2878_16oct24.png",
          description: "Leche caliente con una barra de chocolate para taza, en vaso de 300 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Vainilla Latte espresso chico",
          identifier: "2869",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2869_16oct24.png",
          description: "Latte con café espresso, recien molido y una base de vainilla. En vaso de 200 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Vainilla Latte espresso grande",
          identifier: "2879",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2879_16oct24.png",
          description: "Latte con café espresso, recien molido y una base de vainilla. En vaso de 300 Ml",
          price: 290000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Mocca espresso chico",
          identifier: "2840",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2840_16oct24.png",
          description: "Café espresso, molido en el momento con leche y salsa tibia de chocolate. Finalizado con espuma de leche y cacao en polvo. En vaso de 200 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Mocca grande",
          identifier: "2874",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2874_16oct24.png",
          description: "Café espresso, molido en el momento con leche y salsa tibia de chocolate. Finalizado con espuma de leche y cacao en polvo. En vaso de 300 Ml",
          price: 290000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Tentación chico",
          identifier: "2841",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2841_16oct24.png",
          description: "capuchinno tentacion",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Tentación grande",
          identifier: "2875",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2875_16oct24.png",
          description: "Espresso Doble con leche, salsas de chocolate y dulce de leche con crema batida, en vaso de 300 ml",
          price: 290000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Bombón chico",
          identifier: "2867",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2867_16oct24.png",
          description: "Base de café espresso y leche, leche condensada, finalizado con crema batida y cacao, en vaso de 200 ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Bombón grande",
          identifier: "2877",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2877_16oct24.png",
          description: "Base de café espresso y leche, leche condensada, finalizado con crema batida y cacao, en vaso de 300 ml",
          price: 290000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Viena espresso chico",
          identifier: "2839",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2839_16oct24.png",
          description: "Café espresso, molido en el momento con leche. Finalizado con crema de leche y chocolate rallado, en vaso de 200 Ml",
          price: 240000
        },
        {
          category: "bebidas mccafé",
          name: "Cappuccino Viena espresso grande",
          identifier: "2873",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2873_16oct24.png",
          description: "Café espresso, molido en el momento con leche. Finalizado con crema de leche y chocolate rallado, en vaso de 300 Ml",
          price: 290000
        },
        {
          category: "bebidas mccafé",
          name: "Iced Latte",
          identifier: "2843",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2843_16oct24.png",
          description: "Bebida a base de leche con un 40% del Café Espresso mas rico en versión fría, en vaso de 300 ml",
          price: 250000
        },
        {
          category: "bebidas mccafé",
          name: "Iced Vainilla Latte",
          identifier: "2844",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2844_16oct24.png",
          description: "Bebida a base de leche con un 40% del Café Espresso mas rico en versión fría con salsa de vainilla, en vaso de 300 ml",
          price: 250000
        },
        {
          category: "bebidas mccafé",
          name: "Iced Coffee",
          identifier: "2845",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2845_16oct24.png",
          description: "Café Espresso mas rico en versión fría, en vaso de 300 ml",
          price: 250000
        },
        {
          category: "bebidas mccafé",
          name: "Iced Machiatto",
          identifier: "2846",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2846_16oct24.png",
          description: "El Café Espresso mas rico con un toque de espuma de leche en versión fría, en vaso de 300 ml",
          price: 250000
        },
        {
          category: "bebidas mccafé",
          name: "Milkshake Frutilla",
          identifier: "1806",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1806_16oct24.png",
          description: "Bebida frozen con una base de vainilla y refrescantes frutillas, finalizado con deliciosa crema de leche",
          price: 330000
        },
        {
          category: "bebidas mccafé",
          name: "Milkshake Vainilla",
          identifier: "1807",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1807_16oct24.png",
          description: "Bebida frozen con una base de vainilla y finalizado con deliciosa crema de leche",
          price: 330000
        },
        {
          category: "bebidas mccafé",
          name: "Milkshake Dulce de Leche",
          identifier: "1808",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1808_v1.png",
          description: "Bebida frozen con una base de vainilla con salsa de dulce de leche y finalizado con deliciosa crema de leche",
          price: 330000
        },
        {
          category: "bebidas mccafé",
          name: "Milkshake Chocolate",
          identifier: "2940",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2940_v1.png",
          description: "Bebida frozen con una base de vainilla con salsa de chocolate y finalizado con deliciosa crema de leche",
          price: 330000
        },
        {
          category: "bebidas mccafé",
          name: "Milkshake Oreo",
          identifier: "8318",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_8318_v2.png",
          description: "Bebida frozen con una base de vainilla y galletitas Oreo con salsa de dulce de leche, chocolate o frutilla y finalizado con deliciosa crema de leche",
          price: 350000
        },
        {
          category: "bebidas mccafé",
          name: "Frappé Frutilla y Banana",
          identifier: "1034",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1034_16oct24.png",
          description: "Bebida frozen con base de agua, frutillas congeladas y pulpa de banana",
          price: 330000
        },
        {
          category: "bebidas mccafé",
          name: "Frappé Frutos Rojos",
          identifier: "629",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_629_16oct24.png",
          description: "Bebida frozen con base de agua y frutos rojos congelados",
          price: 330000
        },
        {
          category: "bebidas mccafé",
          name: "Frappé Dulce de Leche",
          identifier: "1088",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1088_16oct24.png",
          description: "Bebida frozen a base de café espresso con vainilla, una suave salsa de dulce de leche y finalizado con crema de leche",
          price: 350000
        },
        {
          category: "bebidas mccafé",
          name: "Frappé Oreo",
          identifier: "1106",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1106_16oct24.png",
          description: "Bebida frozen a base de café espresso con vainilla, una suave salsa de chocolate con trozos de oreo y finalizado con crema de leche",
          price: 350000
        },
        {
          category: "bebidas mccafé",
          name: "Frappé Mocca",
          identifier: "7125",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_7125_16oct24.png",
          description: "Bebida frozen a base de café espresso con vainilla, una suave salsa de chocolate y finalizado con crema de leche y chocolate rallado",
          price: 350000
        },
        {
          category: "comida mccafé",
          name: "Factura",
          identifier: "660",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_660_26JUL24.png",
          description: "Elegí entre medialuna de manteca, criollito de grasa ó factura de membrillo",
          price: 90000
        },
        {
          category: "comida mccafé",
          name: "Medialuna de Grasa",
          identifier: "6964",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_6964_12SEP24.png",
          description: "Medialuna de grasa",
          price: 90000
        },
        {
          category: "comida mccafé",
          name: "Donut",
          identifier: "5527",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_5527_26JUL24.png",
          description: "Donut glaseada o cubierta con chocolate",
          price: 160000
        },
        {
          category: "comida mccafé",
          name: "Barrita de cereal Chocolate y Arándanos",
          identifier: "808",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_808_v2.png",
          description: "Barrita de cereal de chocolate semiamargo, maní y arándanos",
          price: 160000
        },
        {
          category: "comida mccafé",
          name: "Poundcake Naranja",
          identifier: "1969",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1969_16SEP24.png",
          description: "Masa tierna, esponjosa, aireada, húmeda con sabor a naranja",
          price: 280000
        },
        {
          category: "comida mccafé",
          name: "Poundcake Devil´s Cake",
          identifier: "13506",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_13506_12SEP24.png",
          description: "Tradicional receta americana, con una húmeda masa esponjosa y bañado en chocolate",
          price: 280000
        },
        {
          category: "comida mccafé",
          name: "Poundcake Banana y nuez",
          identifier: "8419",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_8419_12SEP24.png",
          description: "Masa tierna, esponjosa, aireada, húmeda con sabor a banana con trozos de nuez",
          price: 280000
        },
        {
          category: "comida mccafé",
          name: "Alfajor de Maicena",
          identifier: "6955",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_6955_12SEP24.png",
          description: "Masa de maicena rellena de dulce de leche y decorado con coco",
          price: 180000
        },
        {
          category: "comida mccafé",
          name: "Grand Tostado",
          identifier: "2587",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2587_26AGO24.png",
          description: "Sándwich tostado de jamón y queso blanco",
          price: 360000
        },
        {
          category: "comida mccafé",
          name: "Tostado Lomo Y Queso",
          identifier: "13315",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_13315_16oct24.png",
          description: "Tostado con lomo y queso en pan kaiser",
          price: 320000
        },
        {
          category: "comida mccafé",
          name: "McQueso",
          identifier: "190",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_190_16oct24.png",
          description: "Tostado de queso cheddar y mostaza",
          price: 300000
        },
        {
          category: "comida mccafé",
          name: "Sándwich Lomo Napolitano",
          identifier: "209",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_209_24ENE24.png",
          description: "Sándwich en pan kaiser, lomo, queso cheddar y tomate",
          price: 470000
        },
        {
          category: "comida mccafé",
          name: "Sándwich Pollo Napolitano",
          identifier: "211",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_211_24ENE24.png",
          description: "Sándwich tibio en pan kaiser con pollo grillado, tomate fresco y queso cheddar",
          price: 490000
        },
        {
          category: "comida mccafé",
          name: "Pan de Queso",
          identifier: "2812",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2812_24ENE24.png",
          description: "Bocado Redondo y tierno sabor a Queso",
          price: 150000
        },
        {
          category: "comida mccafé",
          name: "Croissant de Chocolate",
          identifier: "4799",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_4799_26JUL24.png",
          description: "Masa artesanal de hojaldre relleno de un delicioso chocolate caliente",
          price: 150000
        },
        {
          category: "comida mccafé",
          name: "Medialuna lomito y Queso",
          identifier: "2819",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_2819_24ENE24.png",
          description: "Medialuna de manteca con Lomito y Queso Cheddar",
          price: 200000
        },
        {
          category: "comida mccafé",
          name: "Chocotorta",
          identifier: "1057",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_1057_26JUL24.png",
          description: "La típica torta argentina, hecha con galletitas de chocolate Chocolinas y un relleno de dulce de leche y queso blanco",
          price: 280000
        },
        {
          category: "comida mccafé",
          name: "Crumble de Manzana",
          identifier: "6954",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_6954_26JUL24.png",
          description: "Exquisita porción humeda con trocitos de manzana recubierta con una corteza crocante",
          price: 280000
        },
        {
          category: "comida mccafé",
          name: "Torta Argentina",
          identifier: "7195",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/7195.png",
          description: "Porción de capas de una tierna y fina masa, rellena con dulce de leche y recubierta con merengue",
          price: 390000
        },
        {
          category: "comida mccafé",
          name: "Cheesecake",
          identifier: "6950",
          imageUrl: "https://d2umxhib5z7frz.cloudfront.net/Argentina/DLV_6950_26JUL24.png",
          description: "Torta rellena de queso blanco tipo philadelphia con deliciosa salsa de frutos rojos, chocolate o dulce de leche",
          price: 390000
        }
      ]
}

