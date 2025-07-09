-- CreateEnum
CREATE TYPE "miniAppCategory" AS ENUM ('FINANCE', 'EDUCATION', 'LASER', 'COMIDA', 'OUTROS');

-- CreateEnum
CREATE TYPE "miniAppPermission" AS ENUM ('NOTIFICATION', 'CAMERA', 'LOCATION', 'PAYMENTS', 'FILES');

-- CreateTable
CREATE TABLE "creator" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "cnpj" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "creator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miniApps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "entrypointUrl" TEXT NOT NULL,
    "iconUrl" TEXT NOT NULL,
    "repositoryUrl" TEXT NOT NULL,
    "category" "miniAppCategory"[],
    "permissions" "miniAppPermission"[],
    "creatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "miniApps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "creator_email_key" ON "creator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "miniApps_name_key" ON "miniApps"("name");

-- AddForeignKey
ALTER TABLE "miniApps" ADD CONSTRAINT "miniApps_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
