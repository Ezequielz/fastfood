/*
  Warnings:

  - You are about to drop the column `optionsGroupId` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `options_groups` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `options_groups` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.
  - Added the required column `options_group_id` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_optionsGroupId_fkey";

-- DropForeignKey
ALTER TABLE "options_groups" DROP CONSTRAINT "options_groups_parentId_fkey";

-- DropForeignKey
ALTER TABLE "options_groups" DROP CONSTRAINT "options_groups_productId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- AlterTable
ALTER TABLE "options" DROP COLUMN "optionsGroupId",
ADD COLUMN     "options_group_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "options_groups" DROP COLUMN "parentId",
DROP COLUMN "productId",
ADD COLUMN     "product_id" TEXT;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categoryId",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options_groups" ADD CONSTRAINT "options_groups_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_options_group_id_fkey" FOREIGN KEY ("options_group_id") REFERENCES "options_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
