/*
  Warnings:

  - Added the required column `authorId` to the `Saying` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Saying" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author.name_unique" ON "Author"("name");

-- AddForeignKey
ALTER TABLE "Saying" ADD FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;
