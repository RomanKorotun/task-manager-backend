-- CreateEnum
CREATE TYPE "Status" AS ENUM ('completed', 'not_completed');

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(512) NOT NULL,
    "status" "Status" NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
