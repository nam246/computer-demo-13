/*
  Warnings:

  - The primary key for the `ProductsCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assignedAt` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `ProductsCategories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductsCategories" DROP CONSTRAINT "ProductsCategories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsCategories" DROP CONSTRAINT "ProductsCategories_productId_fkey";

-- AlterTable
ALTER TABLE "ProductsCategories" DROP CONSTRAINT "ProductsCategories_pkey",
DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy",
DROP COLUMN "categoryId",
DROP COLUMN "productId",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT,
ADD CONSTRAINT "ProductsCategories_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "_ProductToProductsCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductsCategories_AB_unique" ON "_ProductToProductsCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductsCategories_B_index" ON "_ProductToProductsCategories"("B");

-- AddForeignKey
ALTER TABLE "_ProductToProductsCategories" ADD CONSTRAINT "_ProductToProductsCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductsCategories" ADD CONSTRAINT "_ProductToProductsCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductsCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
