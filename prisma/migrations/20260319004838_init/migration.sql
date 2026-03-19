-- CreateTable
CREATE TABLE `Blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `auteur` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `categorie` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Blog_titre_key`(`titre`),
    UNIQUE INDEX `Blog_auteur_key`(`auteur`),
    UNIQUE INDEX `Blog_contenu_key`(`contenu`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
