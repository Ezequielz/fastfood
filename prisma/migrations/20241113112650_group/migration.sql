/*
  Warnings:

  - You are about to drop the column `image_url` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `options_group_id` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `options_groups` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `options` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `options_groups` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageUrl` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_options_group_id_fkey";

-- DropForeignKey
ALTER TABLE "options_groups" DROP CONSTRAINT "options_groups_product_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "image_url",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "options" DROP COLUMN "image_url",
DROP COLUMN "options_group_id",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "options_groups" DROP COLUMN "product_id",
ADD COLUMN     "parentId" TEXT;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category_id",
DROP COLUMN "image_url",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_ProductOptionsGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OptionsGroupOptions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductOptionsGroups_AB_unique" ON "_ProductOptionsGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductOptionsGroups_B_index" ON "_ProductOptionsGroups"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OptionsGroupOptions_AB_unique" ON "_OptionsGroupOptions"("A", "B");

-- CreateIndex
CREATE INDEX "_OptionsGroupOptions_B_index" ON "_OptionsGroupOptions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "options_name_key" ON "options"("name");

-- CreateIndex
CREATE UNIQUE INDEX "options_groups_name_key" ON "options_groups"("name");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options_groups" ADD CONSTRAINT "options_groups_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "options_groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductOptionsGroups" ADD CONSTRAINT "_ProductOptionsGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "options_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductOptionsGroups" ADD CONSTRAINT "_ProductOptionsGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionsGroupOptions" ADD CONSTRAINT "_OptionsGroupOptions_A_fkey" FOREIGN KEY ("A") REFERENCES "options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionsGroupOptions" ADD CONSTRAINT "_OptionsGroupOptions_B_fkey" FOREIGN KEY ("B") REFERENCES "options_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
