/*
  Warnings:

  - Added the required column `subtotal` to the `order_product_options` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_product_options" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "subtotal" DOUBLE PRECISION NOT NULL;
