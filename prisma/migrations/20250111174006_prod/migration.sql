-- AlterTable
ALTER TABLE "_OptionsGroupOptions" ADD CONSTRAINT "_OptionsGroupOptions_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_OptionsGroupOptions_AB_unique";

-- AlterTable
ALTER TABLE "_ProductOptionsGroups" ADD CONSTRAINT "_ProductOptionsGroups_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProductOptionsGroups_AB_unique";
