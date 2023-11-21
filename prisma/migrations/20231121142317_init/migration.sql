-- CreateTable
CREATE TABLE "player_scores" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "player_id" INT8 NOT NULL,
    "score" INT8 NOT NULL,

    CONSTRAINT "player_scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "player_scores_score" ON "player_scores"("score");

-- CreateIndex
CREATE INDEX "player_scores_player_id" ON "player_scores"("player_id");

-- AddForeignKey
ALTER TABLE "player_scores" ADD CONSTRAINT "fk_player" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
